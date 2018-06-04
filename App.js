/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import Boy from './Boy';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Image
} from 'react-native';
import {Navigator} from 'react-native-deprecated-custom-components'
import TabNavigator from 'react-native-tab-navigator'
import Flatlists from './Flatlist.js'
import FetchTest from './Fetch.js'
export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedTab: 'tb_popular'
        }
        // this.stu = new Student('小明','男',18)
        // this.stu = new ExtendClass('小明','男', '180cm')
    };
    _configureScene(route, routeStack){
        return Navigator.SceneConfigs.PushFromLeft;
    };
    _renderScene(route, navigator){
        // 把导航控制器传递给HelloView
        // ...route: 获取route中所有属性,传递给HelloView
        // ...扩展符, 作用:如果是对象,就获取对象中所有值,如果是数组,就获取数组中所有值
        // <route.component navigator={navigator} {...route}/> 类似下面写法，把route的属性取出来赋值
        // <route.component navigator={navigator} component=route.component/>
        return (<route.component navigator={navigator} {...route.params}/>)
    }
    render() {
        return (
            <View style={styles.container}>
                <Navigator
                    style={{flex:1}}
                    initialRoute={{
                        component: FetchTest
                    }}
                    configureScene={this._configureScene.bind(this)}
                    renderScene={this._renderScene.bind(this)}
                ></Navigator>
                {/*<TabNavigator>*/}
                    {/*<TabNavigator.Item*/}
                        {/*selected={this.state.selectedTab === 'tb_popular'}*/}
                        {/*title="最热"*/}
                        {/*selectedTitleStyle={{color:'red'}}*/}
                        {/*renderIcon={() => <Image style={styles.icon} source={require("./static/img/ic_polular.png")} />}*/}
                        {/*renderSelectedIcon={() => <Image style={styles.icon} source={require("./static/img/ic_polular.png")} />}*/}
                        {/*onPress={() => this.setState({ selectedTab: 'tb_popular' })}>*/}
                        {/*<View style={styles.page1}></View>*/}
                    {/*</TabNavigator.Item>*/}
                    {/*<TabNavigator.Item*/}
                        {/*selected={this.state.selectedTab === 'tb_trending'}*/}
                        {/*title="趋势"*/}
                        {/*renderIcon={() => <Image style={styles.icon} source={require("./static/img/ic_trending.png")} />}*/}
                        {/*renderSelectedIcon={() => <Image style={styles.icon} source={require("./static/img/ic_trending.png")} />}*/}
                        {/*onPress={() => this.setState({ selectedTab: 'tb_trending' })}>*/}
                        {/*<View style={styles.page2}></View>*/}
                    {/*</TabNavigator.Item>*/}
                    {/*<TabNavigator.Item*/}
                        {/*selected={this.state.selectedTab === 'tb_favorite'}*/}
                        {/*title="收藏"*/}
                        {/*renderIcon={() => <Image style={styles.icon} source={require("./static/img/ic_favorite.png")} />}*/}
                        {/*renderSelectedIcon={() => <Image style={[styles.icon,{tintColor: 'red'}]} source={require("./static/img/ic_favorite.png")} />}*/}
                        {/*onPress={() => this.setState({ selectedTab: 'tb_favorite' })}>*/}
                        {/*<View style={styles.page3}></View>*/}
                    {/*</TabNavigator.Item>*/}
                    {/*<TabNavigator.Item*/}
                        {/*selected={this.state.selectedTab === 'tb_my'}*/}
                        {/*title="我的"*/}
                        {/*renderIcon={() => <Image style={styles.icon} source={require("./static/img/ic_my.png")} />}*/}
                        {/*renderSelectedIcon={() => <Image style={styles.icon} source={require("./static/img/ic_my.png")} />}*/}
                        {/*onPress={() => this.setState({ selectedTab: 'tb_my' })}>*/}
                        {/*<View style={styles.page4}></View>*/}
                    {/*</TabNavigator.Item>*/}

                {/*</TabNavigator>*/}
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center',
        // backgroundColor: '#F5FCFF',
        // marginTop: 10,
    },
    page1: {
        flex:1,
        backgroundColor: 'red',
    },
    page2: {
        flex:1,
        backgroundColor: 'yellow'
    },
    page3: {
        flex:1,
        backgroundColor: 'blue'
    },
    page4: {
        flex:1,
        backgroundColor: 'green'
    },
    icon:{
        width: 20,
        height: 20,
    }
});
