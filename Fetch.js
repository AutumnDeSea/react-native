import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
    FlatList,
} from 'react-native';
import NavigatorBar from "./NavigatorBar";
import HttpUtils from './HttpUtils'

export default class FetchTest extends Component {
    constructor(props) {
        super(props);
        this.state = {
            result: '',
        }
    }

    onLoad(url) {
        HttpUtils.get(url)
            .then(res => {
                this.setState({
                    result: JSON.stringify(res)
                })
            })
            .catch(err => {
                this.setState({
                    result: JSON.stringify(err)
                })
            })
    };

    onSubmit(url, data) {
        HttpUtils.post(url, data)
            .then(res => {
                this.setState({
                    result: JSON.stringify(res)
                })
            })
            .catch(err => {
                this.setState({
                    result: JSON.stringify(err)
                })
            })
    }

    render() {
        return (
            <View style={styles.container}>
                <NavigatorBar
                    title={'fetchTest'}
                    style={{
                        backgroundColor: '#ee6363'
                    }}
                    statusBar={{
                        backgroundColor: '#ee6363'
                    }}
                />
                <TouchableOpacity
                    onPress={() => {
                        this.onLoad('https://www.easy-mock.com/mock/5b1102af77e4f2300a3cd112/awesomepro/getFlatList');
                    }}>
                    <Text>get请求发送fetch</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => {
                        this.onSubmit('https://www.easy-mock.com/mock/5b1102af77e4f2300a3cd112/awesomepro/login', {
                            uName: 'aa',
                            pwd: '123456'
                        });
                    }}>
                    <Text>post请求发送fetch模拟登陆</Text>
                </TouchableOpacity>
                <Text>{this.state.result}</Text>
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