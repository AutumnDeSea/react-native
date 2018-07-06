import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    ScrollView,
    Image
} from 'react-native';
import NavigationBar from '../../common/NavigatorBar';
import ViewUtils from '../../util/ViewUtils';
import ArrayUtils from '../../util/ArrayUtils'
import LanguageDao, {FLAG_LANGUAGE} from '../../expand/dao/LanguageDao'
import CheckBox from 'react-native-check-box'

export default class CustomKeyPage extends Component {
    constructor(props) {
        super(props);
        this.languageDao = new LanguageDao(FLAG_LANGUAGE.flag_key);
        this.changeValues=[];
        this.state = {
            dataArr: []

        }
    }
    componentDidMount() {
        this.loadData();
    }

    onSave() {
        if(this.changeValues.length == 0) {
            this.props.navigator.pop();
            return;
        }
        this.languageDao.save(this.state.dataArr);
        this.props.navigator.pop();
    }


    loadData() {
        this.languageDao.fetch()
            .then((res) => {
                this.setState({
                    dataArr: res
                })
            })
            .catch((err) => {
                console.log(err)
            })
    }

    renderView() {
        if (!this.state.dataArr || this.state.dataArr.length == 0)
            return;
        let len = this.state.dataArr.length;
        let views = [];
        for (let i = 0, l = len - 2; i < l; i += 2) {
            views.push(
                <View key={i}>
                    <View style={styles.item}>
                        {this.renderCheckBox((this.state.dataArr[i]))}
                        {this.renderCheckBox((this.state.dataArr[i+1]))}
                    </View>
                    <View style={styles.line}></View>
                </View>
            )
        }
        views.push(
            <View key={len-1}>
                <View style={styles.item}>
                    {len%2 ==0 ?this.renderCheckBox(this.state.dataArr[len-2]): null}
                    {this.renderCheckBox((this.state.dataArr[len-1]))}
                </View>
                <View style={styles.line}></View>
            </View>
        )
        return views;
    }
    onClick(data) {
        data.checked = !data.checked;
        ArrayUtils.updateArray(this.changeValues, data);
    }
    renderCheckBox(data) {
        let leftText = data.name;
        return(
            <CheckBox
                style={{flex:1,padding:10}}
                onClick={()=> this.onClick(data)}
                leftText={leftText}
                isChecked={data.checked}
                checkedImage={<Image
                    style={{tintColor:'#6495ed'}}
                    source={require('./img/ic_check_box.png')}/>}
                unCheckedImage={<Image
                    style={{tintColor:'#6495ed'}}
                    source={require('./img/ic_check_box_outline_blank.png')}/>}
            />
        )
    }

    render() {
        let rightButton = <TouchableOpacity
            onPress={() => this.onSave()}>
            <View style={{margin: 10}}>
                <Text style={styles.title}>保存</Text>
            </View>
        </TouchableOpacity>
        return (
            <View style={styles.container}>
                <NavigationBar
                    title={'自定义标签'}
                    statusBar={{backgroundColor: "#2196F3"}}
                    leftButton={ViewUtils.getLeftButton(() => this.onSave())}
                    rightButton={rightButton}
                />
                <ScrollView>
                    {this.renderView()}
                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    tips: {
        fontSize: 29
    },
    title: {
        fontSize: 16,
        color: '#ffffff'
    },
    line: {
        height: 1,
        backgroundColor: '#000000'
    },
    item: {
        flexDirection:'row',
        alignItems: 'center'
    }
})
