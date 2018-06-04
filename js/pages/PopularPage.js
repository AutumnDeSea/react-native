import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    TextInput
} from 'react-native';

export default class PopularPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            res: '',
        }

    }
    onLoad(url) {

    };
    render() {
        return (
            <View>
                <Text
                    style={styles.getBtn}
                    onPress={() => {
                        this.onLoad(url);
                    }}

                >获取数据</Text>
                <TextInput style={styles.textInput}/>
                <Text>{this.state.res}</Text>
            </View>)
    }
}
const  styles = StyleSheet.create({
    getBtn: {
        fontSize: 20
    },
    textInput: {
        flex:1,
        height: 40,
        borderWidth:1,
        borderColor: '#000',
        borderStyle: 'solid'

    }
})