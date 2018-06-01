import React, {Component} from 'react';
import {
    View,
    Text,
    TextInput,
    Image,
    ScrollView,
    Alert,
    StyleSheet,
    TouchableWithoutFeedback
} from 'react-native';
export default class TouchableTest extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        }
    }
    render() {
        return(
            <View>
                <TouchableWithoutFeedback
                    onPress={() => {
                        this.setState({count: this.state.count+1})
                    }}
                    onLongPress={() => {
                        Alert.alert('提示', '确认删除么?',[
                            {text: '取消',onPress:() => {}, styles:'cancel'},
                            {text: '确定',onPress:() => {}, styles:'sure'}
                            ])
                    }}
                >
                    <View style={styles.button}>
                        <Text style={styles.buttonText}>
                            我是touchablewithoutfeedback,单击我
                        </Text>
                    </View>
                </TouchableWithoutFeedback>
                <Text style={styles.text}>您单击了{this.state.count}</Text>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    button: {
        borderWidth:1
    },
    buttonText:{
        fontSize:20,
    },
    text: {
        fontSize:20
    }
})