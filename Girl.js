import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity
} from 'react-native';
import NavigatorBar from "./NavigatorBar";

export default class Girl extends Component {
    constructor(props) {
        super(props);
        this.state = {
            word: ''
        }

    }

    renderButton(img) {
        return (
            <TouchableOpacity
                onPress={() => {
                    this.props.navigator.pop();
                }}
            >
                <Image
                    style={styles.icon}
                    source={img}
                />
            </TouchableOpacity>
        )
    }

    render() {
        return (
            <View style={styles.container}>
                <NavigatorBar
                    title={'girl'}
                    style={{
                        backgroundColor: '#ee6363'
                    }}
                    statusBar={{
                        backgroundColor: '#ee6363'
                    }}
                    leftButton={
                        this.renderButton(require('./static/img/ic_arrow_back_white_36pt.png'))
                    }
                    rightButton={
                        this.renderButton(require('./static/img/ic_star.png'))
                    }
                />
                <Text style={styles.text}>I am girl</Text>
                <Text style={styles.text}
                      onPress={() => {
                          this.props.onCallBack('一个巧克力');
                          this.props.navigator.pop();
                      }}
                >我收到男孩送的{this.props.word}</Text>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    text: {
        fontSize: 20
    },
    icon: {
        width: 22,
        height: 22,
        margin: 5
    }
})