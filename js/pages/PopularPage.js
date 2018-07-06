import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    TextInput,
    FlatList
} from 'react-native';
import DataRepository from '../expand/dao/DataRepository';
import NavigationBar from '../common/NavigatorBar'
import RepositoryCell from '../common/RepositoryCell'

import ScrollableTabView, {ScrollableTabBar} from 'react-native-scrollable-tab-view'

const URL = 'https://api.github.com/search/repositories?q=';
const QUERY_STR = '&sort=stars';
export default class PopularPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            res: '',
            text: '',
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <NavigationBar
                    title={'最热'}
                    statusBar={{backgroundColor: "#2196F3"}}
                />
                <ScrollableTabView
                    tabBarBackgroundColor="#2196F3"
                    tabBarActiveTextColor="#ffffff"
                    tabBarInactiveTextColor="mintcream"
                    tabBarUnderlineStyle={{backgroundColor: '#e7e7e7', height: 2}}
                    renderTabBar={() => <ScrollableTabBar/>}
                >
                    <PopularTab tabLabel="Java">java</PopularTab>
                    <PopularTab tabLabel="Ios">ios</PopularTab>
                    <PopularTab tabLabel="Android">android</PopularTab>
                    <PopularTab tabLabel="JavaScript">js</PopularTab>
                </ScrollableTabView>
            </View>)
    }
}

class PopularTab extends Component {
    constructor(props) {
        super(props)
        this.state = {
            res: '',
            dataSource: [],
            loading: false,
        }
        this.dataRepository = new DataRepository();
    }

    genFetchUrl(key) {
        return URL + key + QUERY_STR;
    }

    onLoad() {
        this.setState({
            loading: true
        })
        let url = this.genFetchUrl(this.props.tabLabel);
        this.dataRepository.fetchNetRepository(url)
            .then(res => {
                this.setState({
                    dataSource: res.items,
                    loading: false
                })
            })
            .catch(err => {
                this.setState({
                    res: JSON.stringify(err)
                })
            })
    };

    componentDidMount() {
        this.onLoad()
    };

    renderItem(data) {
        return <RepositoryCell
            id={data.id}
            data={data}
        />
    };

    refreshing() {

    };
    _keyExtractor = (item, index) => String(item.id);
    render() {
        return (
            <View style={{flex: 1}}>
                <FlatList
                    data={this.state.dataSource}
                    renderItem={({item}) => this.renderItem(item)}
                    onRefresh={() => {
                        this.onLoad()
                    }}
                    refreshing={this.state.loading}
                    onEndReachedThreshold={0.1}
                    keyExtractor={this._keyExtractor}
                    // onEndReached={() => {this._load()}}
                />
                <Text>{this.state.res}</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    getBtn: {
        fontSize: 20
    },
})