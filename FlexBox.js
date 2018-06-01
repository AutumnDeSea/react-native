import React, {Component} from 'react';
import {
    View,
    Text,
    TextInput,
    Image,
    ScrollView,
    StyleSheet,
    FlatList
} from 'react-native';
export default  class FlexBox extends Component {
    state = {
        text: '',
    }
    render() {
        return(
            <View style={styles.container}>
                <FlatList
                    data={[
                        {key: 'Devin'},
                        {key: 'Jackson'},
                        {key: 'James'},
                        {key: 'Joel'},
                        {key: 'John'},
                        {key: 'Jillian'},
                        {key: 'Jimmy'},
                        {key: 'Julie'},
                    ]}
                    renderItem={({item}) => <Text style={styles.item}>1111</Text>}
                />
            </View>
        )

    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 22
    },
    item: {
        padding: 10,
        fontSize: 18,
        height: 44,
    },
})