/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import NavigationUtill from '../navigator/NavigationUtill'

type Props = {};
export default class WelcomePage extends Component<Props> {
    componentDidMount() {
        this.timer = setTimeout(() => {
            NavigationUtill.resetToHomePage({
                navigation: this.props.navigation
            })
        }, 1000)
    }

    componentWillMount() {
        this.timer && clearTimeout(this.timer)
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>Welcome to Page!</Text>
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
