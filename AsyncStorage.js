import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    AsyncStorage
} from 'react-native';
import NavigatorBar from "./NavigatorBar";
import Toast, {DURATION} from 'react-native-easy-toast';

const KEY = 'KEY';
export default class AsyncStorageTest extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: '',
        }
    }

    onSave() {
        AsyncStorage.setItem(KEY, this.text, (err) => {
            if (!err) {
                this.toast.show('保存成功', DURATION.LENGTH_SHORT)
            } else {
                this.toast.show('保存失败', DURATION.LENGTH_SHORT)
            }
        })
    };

    onRemove() {

    };

    onFetch() {
        AsyncStorage.getItem(KEY, (err, res) => {
            if (!err) {
                if (res !== '') {
                    this.toast.show('取出的内容为:' + res, DURATION.LENGTH_SHORT)

                } else {
                    this.toast.show('KEY不存在', DURATION.LENGTH_SHORT)
                }
            } else {
                this.toast.show('取出失败', DURATION.LENGTH_SHORT)
            }
        })

    }

    render() {
        return (
            <View style={styles.container}>
                <NavigatorBar
                    title={'asyncStorage'}
                    style={{
                        backgroundColor: '#ee6363'
                    }}
                    statusBar={{
                        backgroundColor: '#ee6363'
                    }}
                />
                <TextInput
                    style={{borderWidth: 1, height: 40, margin: 6}}
                    onChangeText={text => this.text = text}/>
                <View style={{flexDirection: 'row'}}>
                    <Text
                        style={styles.tips}
                        onPress={() => this.onSave()}
                    >保存</Text>
                    <Text
                        style={styles.tips}
                        onPress={() => this.onRemove()}
                    >移除</Text>
                    <Text
                        style={styles.tips}
                        onPress={() => this.onFetch()}
                    >获取</Text>
                </View>
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
    tips: {
        fontSize: 20,
        margin: 5
    }
})