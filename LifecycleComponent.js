import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View
} from 'react-native';
export default class LifecycleComponent extends Component{
    constructor(props) {
        super(props);
        console.log('---constructor-----');
        this.state = {
            count: 0
        }
    };
    componentWillMount() {
        console.log('---componentWillMount-----');
    };
    componentDidMount() {
        console.log('---componentDidMount-----');
    };
    componentWillReceiveProps(nextProps) {
        console.log('---componentWillReceiveProps-----');
    };
    shouldComponentUpdate(nextProps, nextState) {
        console.log('---shouldComponentUpdate-----');
        return true;
    };
    componentWillUpdate(nextProps, nextState) {
        console.log('---componentWillUpdate-----');
    };
    componentDidUpdate(prevProps, prevState) {
        console.log('---componentDidUpdate-----');
    };
    componentWillUnmount() {
        console.log('---componentWillUnmount-----');
    };
    render() {
        console.log('---render-----');
        return(
        <View>
            <Text onPress={() => {this.setState({count: this.state.count + 1})}}>生命周期测试</Text>
            <Text>单击了{this.state.count}</Text>
        </View>)
    }
}