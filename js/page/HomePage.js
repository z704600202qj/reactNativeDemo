/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import NavigationUtill from '../navigator/NavigationUtill'
import DynamicTabNavigator from '../navigator/DynamicTabNavigator'

type Props = {};

export default class HomePage extends Component<Props> {
    render() {
        NavigationUtill.navigation = this.props.navigation
        return <DynamicTabNavigator/>
    }
}

