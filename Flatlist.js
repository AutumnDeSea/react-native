import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
    FlatList
} from 'react-native';
import NavigatorBar from "./NavigatorBar";

var data = {
    "result": [
        {
            "email": "f.lee@taylor.edu",
            "fullName": "张三张三张三张三"
        },
        {
            "email": "g.jackson@hall.net",
            "fullName": "张三张三张三张三张三"
        },
        {
            "email": "l.hall@rodriguez.com",
            "fullName": "张三张三张三张三"
        },
        {
            "email": "q.lopez@davis.io",
            "fullName": "张三张三张三张三"
        },
        {
            "email": "c.gonzalez@perez.net",
            "fullName": "张三张三张三"
        },
        {
            "email": "a.johnson@williams.net",
            "fullName": "张三张三"
        },
        {
            "email": "i.anderson@lopez.edu",
            "fullName": "张三张三"
        },
        {
            "email": "r.lee@davis.org",
            "fullName": "张三张三"
        },
        {
            "email": "o.young@lee.edu",
            "fullName": "张三张三张三张三张三"
        },
        {
            "email": "j.wilson@williams.org",
            "fullName": "张三张三张三张三张三"
        },
        {
            "email": "z.walker@jackson.io",
            "fullName": "张三张三"
        },
        {
            "email": "j.martinez@brown.gov",
            "fullName": "张三张三张三张三"
        },
        {
            "email": "y.martin@lewis.io",
            "fullName": "张三张三张三张三"
        },
        {
            "email": "w.taylor@gonzalez.org",
            "fullName": "张三张三"
        },
        {
            "email": "j.thomas@garcia.org",
            "fullName": "张三张三张三张三"
        }
    ],
    "statusCode": 0
};
export default class Flatlists extends Component  {
    constructor(props) {
        super(props);
        this.state = {
            word: '',
            data: data.result
        }

        // renderButton(img) {
        //     return (
        //         <TouchableOpacity
        //             onPress={() => {
        //                 this.props.navigator.pop();
        //             }}
        //         >
        //             <Image
        //                 style={styles.icon}
        //                 source={img}
        //             />
        //         </TouchableOpacity>
        //     )
        // }
        renderItem(rowData) {
            return (
                <View>
                    <TouchableOpacity
                        onPress={() => {
                            this.toast.show('你单击了,' + rowData.fullName, DURATION.LENGTH_LONG);
                        }}>
                        <Text style={styles.item}>
                            {rowData.fullName}
                        </Text>
                        <Text style={styles.item}>
                            {rowData.email}
                        </Text>
                    </TouchableOpacity>
                </View>
            )
        };
        render()
        {
            return (
                <View style={styles.container}>
                    <NavigatorBar
                        title={'flatList列表'}
                        style={{
                            backgroundColor: '#ee6363'
                        }}
                        statusBar={{
                            backgroundColor: '#ee6363'
                        }}
                    />
                    <FlatList
                        data={this.data.result}
                        renderItem={({rowData}) => this.renderItem(rowData)}
                    />
                </View>
            )
        }
    }

    styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: 'white',
        },
        item: {
            height: 40,
            padding: 5
        }
    })