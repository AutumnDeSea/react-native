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
                    renderTabBar={() =><ScrollableTabBar/>}
                >
                    <PopularTab tabLabel="Java">java</PopularTab>
                    <PopularTab tabLabel="Ios">ios</PopularTab>
                    <PopularTab tabLabel="Android">android</PopularTab>
                    <PopularTab tabLabel="JavaScript">js</PopularTab>
                </ScrollableTabView>
            </View>)
    }
}
// import RepositoryCell from '../common/RepositoryCell'
class PopularTab extends Component{
    constructor(props) {
        super(props)
        this.state= {
            res: '',
            dataSource: ''
        }
        this.dataRepository = new DataRepository();
    }
    genFetchUrl(key) {
        return URL + key + QUERY_STR;
    }
    onLoad() {
        let url = this.genFetchUrl(this.props.tabLabel);
        this.dataRepository.fetchNetRepository(url)
            .then(res => {
               alert('aaaaaa')
                this.setState({
                    dataSource: JSON.stringify(res)
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
        return (
           <Text>aaaaa</Text>
        )
    };
    refreshing() {

    };
    _load() {

    };
    render() {
        return(
            <View>
                <FlatList
                    data={this.state.dataSource.items}
                    renderItem={({data}) => this.renderItem(data)}
                    // onRefresh={() => {this.refreshing()}}
                    // refreshing={false}
                    // onEndReachedThreshold={0.1}
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