import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {
    View,
    Text
} from 'react-native'

export default class PropComponent extends Component {
    static defaultProps = {
        name: 'aaaaa'
    };
    static propTypes = {
        name: PropTypes.string
    };

    render() {
        return (
            <View>
                <Text>名字: {this.props.name}</Text>
                <Text>性别: {this.props.sex}</Text>
            </View>
        )
    }
}