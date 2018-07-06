import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
} from 'react-native';
import NavigationBar from '../../common/NavigatorBar';
import customKeyPage from './customKeyPage'
export default class MyPage extends Component {
    render() {
        return (
            <View style={styles.container}>
                <NavigationBar
                    title={'我的'}
                    statusBar={{backgroundColor: "#2196F3"}}
                />
                <Text
                    style={styles.tips}
                    onPress={() => {
                        this.props.navigator.push({
                            component:customKeyPage,
                            params:{...this.props}
                        })
                    }}>自定义标签</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    tips:{
        fontSize: 29
    }
})
