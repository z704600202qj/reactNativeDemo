/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';


type Props = {};
export default class TrendingPage extends Component<Props> {
    render() {
        const {navigation} = this.props
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>TrendingPage!</Text>
                <Button title='修改颜色' onPress={() =>
                    navigation.setParams({
                        theme: {
                            tintColor: 'red',
                            updateTime: new Date().getTime()
                        }
                    })
                }></Button>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});
