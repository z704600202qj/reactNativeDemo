/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import {connect} from 'react-redux'
import actions from '../action/index'

type Props = {};

class TrendingPage extends Component<Props> {
    render() {
        console.log(12,this.props);
        const {navigation} = this.props
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>TrendingPage!</Text>
                <Button title='修改颜色' onPress={() =>
                    // navigation.setParams({
                    //     theme: {
                    //         tintColor: '#a0ff12',
                    //         updateTime: new Date().getTime()
                    //     }
                    // })
                    this.props.onThemeChange('#a0ff12')
                }/>
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

const mapStateToProps = state => ({});
const mapDispatchToProps = dispatch => ({
    onThemeChange: theme => dispatch(actions.onThemeChange(theme))
})

export default connect(mapStateToProps, mapDispatchToProps)(TrendingPage)
