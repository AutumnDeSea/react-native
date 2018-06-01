import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';
// es6 的方式
export default class HelloComponent extends Component {
    render() {
        return (<Text>Hello</Text>);
    }
}
// es5 新版的ract已经废除了 createClass方法,
// var HelloComponent = React.createClass({
//     render() {
//         return <Text>Hello</Text>
//     }
// });
// module.exports = HelloComponent;
