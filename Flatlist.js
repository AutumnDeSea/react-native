import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
    FlatList
} from 'react-native';
import NavigatorBar from "./NavigatorBar";
import Toast, {DURATION} from 'react-native-easy-toast';

var data = {
    "result": [
        {
            "email": "f.lee@taylor.edu",
            "fullName": "张三张三张三fffffffffffff张三"
        },
        {
            "email": "g.jackson@hall.net",
            "fullName": "张三张三张三张三张三"
        },
        {
            "email": "l.hall@rodriguez.com",
            "fullName": "张三张三张三张三"
        },
        {
            "email": "q.lopez@davis.io",
            "fullName": "张三张三张三张三"
        },
        {
            "email": "c.gonzalez@perez.net",
            "fullName": "张三张三张三"
        },
        {
            "email": "a.johnson@williams.net",
            "fullName": "张三张三"
        },
        {
            "email": "i.anderson@lopez.edu",
            "fullName": "张三张三"
        },
        {
            "email": "r.lee@davis.org",
            "fullName": "张三张三"
        },
        {
            "email": "o.young@lee.edu",
            "fullName": "张三张三张三张三张三"
        },
        {
            "email": "j.wilson@williams.org",
            "fullName": "张三张三张三张三张三"
        },
        {
            "email": "z.walker@jackson.io",
            "fullName": "张三张三"
        },
        {
            "email": "j.martinez@brown.gov",
            "fullName": "张三张三张三张三"
        },
        {
            "email": "y.martin@lewis.io",
            "fullName": "张三张三张三张三"
        },
        {
            "email": "w.taylor@gonzalez.org",
            "fullName": "张三张三"
        },
        {
            "email": "j.thomas@garcia.org",
            "fullName": "张三张三张三张三"
        }
    ],
    "statusCode": 0
};
export default class Flatlists extends Component {
    constructor(props) {
        super(props);
        this.state = {
            word: '',
            data: data.result
        }
    }

    renderItem(rowData) {
        return (
            <View>
                <TouchableOpacity
                    onPress={() => {
                        this.toast.show('你单击了,' + rowData.fullName);
                    }}>
                    <View>
                        <Text style={styles.item}>
                            {rowData.fullName}
                        </Text>
                        <Text style={styles.item}>
                            {rowData.email}
                        </Text>
                    </View>
                </TouchableOpacity>
            </View>
        )
    };

    _footer() {
        return <Text style={[styles.txt, {backgroundColor: 'black'}]}>这是尾部</Text>;
    };

    _header() {
        return <Text style={[styles.txt, {backgroundColor: 'black'}]}>这是头部</Text>;
    };

    _separator() {
        return <View style={{height: 2, backgroundColor: 'yellow'}}/>;
    };

    refreshing() {
        let timer = setTimeout(() => {
            clearTimeout(timer)
            alert('刷新成功')
        }, 1500)
    };
    _load() {
        alert('加载成功')

        // let timer =  setTimeout(()=>{
        //     clearTimeout(timer)
        //     alert('加载成功')
        // },1500)
    };

    render() {
        return (
            <View style={styles.container}>
                <NavigatorBar
                    title={'flatList列表'}
                    style={{
                        backgroundColor: '#ee6363'
                    }}
                    statusBar={{
                        backgroundColor: '#ee6363'
                    }}
                />
                <FlatList
                    data={this.state.data}
                    ItemSeparatorComponent={() => this._separator()}
                    ListHeaderComponent={() => this._header()}
                    ListFooterComponent={() => this._footer()}
                    renderItem={({item}) => this.renderItem(item)}
                    onRefresh={() => {this.refreshing()}}
                    refreshing={false}
                    onEndReachedThreshold={0.1}
                    onEndReached={() => {this._load()}}
                />
                <Toast ref={(toast) => {
                    this.toast = toast
                }}/>
            </View>
        )
    }
}

styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    item: {
        height: 40,
        padding: 5
    },
    txt: {
        textAlign: 'center',
        textAlignVertical: 'center',
        color: 'white',
        fontSize: 30,
    }
})