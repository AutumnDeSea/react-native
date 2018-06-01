import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {
    View,
    Text,
    Image
} from 'react-native'

export default class StateComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            size: 30
        }
    }
    render() {
        return (
            <View>
                <Text onPress={ () => {
                    var size = this.refs.refTest.getSize();
                    this.setState({size: size})
                }}>通过ref获取size: {this.state.size}</Text>
                <Text onPress={() => {this.setState({size: this.state.size+10})}}>放大</Text>
                <Text onPress={() => {this.setState({size: this.state.size-10})}}>缩小</Text>
                <Image
                    ref={'refTest'}
                    style={{width:this.state.size,height: this.state.size*2}}
                    source={require('./static/img/paopao.jpg')}
                />
            </View>
        )
    }
}