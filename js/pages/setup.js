import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
} from 'react-native';
import WelcomePage from './WecomePage'
import {Navigator} from 'react-native-deprecated-custom-components'

function setup() {
    // 进行一些初始化配置
    class Root extends Component {
        renderScene(route, navigator) {
            let Component = route.component;
            return <Component {...route.params} navigator={navigator}/>
        }

        render() {
            return <Navigator
                initialRoute={{component: WelcomePage}}
                renderScene={(route, navigator)=>this.renderScene(route, navigator)}
            />
        }
    }
    return <Root/>
}
module.exports = setup;
