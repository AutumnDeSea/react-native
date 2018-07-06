/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import PopularPage from './PopularPage'
import AsyncStorage from '../../AsyncStorage'
import MyPage from './my/myPage';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Image
} from 'react-native';
import TabNavigator from 'react-native-tab-navigator'

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedTab: 'tb_popular'
        }
    };

    render() {
        return (
            <View style={styles.container}>
                <TabNavigator>
                    <TabNavigator.Item
                        selected={this.state.selectedTab === 'tb_popular'}
                        title="最热"
                        selectedTitleStyle={{color: '#2196F3'}}
                        renderIcon={() => <Image style={styles.icon} source={require("./../../static/img/ic_polular.png")}/>}
                        renderSelectedIcon={() => <Image style={[styles.icon, {tintColor: '#2196F3'}]}
                                                         source={require("./../../static/img/ic_polular.png")}/>}
                        onPress={() => this.setState({selectedTab: 'tb_popular'})}>
                       <PopularPage></PopularPage>
                    </TabNavigator.Item>
                    <TabNavigator.Item
                        selected={this.state.selectedTab === 'tb_trending'}
                        title="趋势"
                        renderIcon={() => <Image style={styles.icon} source={require("./../../static/img/ic_trending.png")}/>}
                        renderSelectedIcon={() => <Image style={[styles.icon, {tintColor: '#2196F3'}]}
                                                         source={require("./../../static/img/ic_trending.png")}/>}
                        onPress={() => this.setState({selectedTab: 'tb_trending'})}>
                        <AsyncStorage></AsyncStorage>
                    </TabNavigator.Item>
                    <TabNavigator.Item
                        selected={this.state.selectedTab === 'tb_favorite'}
                        title="收藏"
                        renderIcon={() => <Image style={styles.icon} source={require("./../../static/img/ic_favorite.png")}/>}
                        renderSelectedIcon={() => <Image style={[styles.icon, {tintColor: '#2196F3'}]}
                                                         source={require("../../static/img/ic_favorite.png")}/>}
                        onPress={() => this.setState({selectedTab: 'tb_favorite'})}>
                        <View style={styles.page3}></View>
                    </TabNavigator.Item>
                    <TabNavigator.Item
                        selected={this.state.selectedTab === 'tb_my'}
                        title="我的"
                        renderIcon={() => <Image style={styles.icon} source={require("../../static/img/ic_my.png")}/>}
                        renderSelectedIcon={() => <Image style={[styles.icon, {tintColor: '#2196F3'}]}
                                                         source={require("../../static/img/ic_my.png")}/>}
                        onPress={() => this.setState({selectedTab: 'tb_my'})}>
                        <MyPage{...this.props}></MyPage>
                    </TabNavigator.Item>

                </TabNavigator>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    page1: {
        flex: 1,
        backgroundColor: 'red',
    },
    page2: {
        flex: 1,
        backgroundColor: 'yellow'
    },
    page3: {
        flex: 1,
        backgroundColor: 'blue'
    },
    page4: {
        flex: 1,
        backgroundColor: 'green'
    },
    icon: {
        width: 20,
        height: 20,
    }
});
