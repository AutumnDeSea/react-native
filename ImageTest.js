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
export default class ImageTest extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <View>
                {/*本地图片*/}
                <Image
                    style={{width: 100, height:200,borderWidth:1}}
                    source={require('./static/img/paopao.jpg')}
                    resizeMode={'center'}
                />
                {/*网络图片,必须设置宽高*/}
                <Image
                    style={{width: 500, height: 200}}
                    source={{uri:'https://img.zcool.cn/community/0174295541fe180000019ae91f2478.jpg@1280w_1l_2o_100sh.webp'}}
                />
                {/*原生图片, 手动指定宽高*/}
            </View>)
    }
}