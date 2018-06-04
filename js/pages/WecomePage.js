/*
* 2018/6/4
 */
import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
} from 'react-native';
import NavigatorBar from '../common/NavigatorBar';
import HomePage from './HomePage'

export default class WecomePage extends Component {
    componentDidMount() {
        this.timer = setTimeout(() => {
            this.props.navigator.resetTo({
                component: HomePage
            })
        }, 2000)
    };

    componentWillUnmount() {
        this.timer && clearTimeout(this.timer)
    };

    render() {
        return (
            <View>
                <NavigatorBar
                    title={'欢迎'}
                />
                <Text>欢迎</Text>
            </View>)

    }
}