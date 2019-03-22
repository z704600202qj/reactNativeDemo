/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {BackHandler} from 'react-native'
import {connect} from "react-redux";
import {NavigationActions} from 'react-navigation'
import DynamicTabNavigator from '../navigator/DynamicTabNavigator'
import NavigationUtill from '../navigator/NavigationUtill'

type Props = {};

 class HomePage extends Component<Props> {
    componentDidMount() {
        BackHandler.addEventListener('hardwareBackPress', this.onBackPress)
    }

    componentWillUnmount() {
        BackHandler.removeEventListener('hardwareBackPress', this.onBackPress);
    }

    onBackPress = () => {
        const {dispatch, nav} = this.props;
        console.log(this.props);
        if (nav.routes[1].index === 0) {
            return false
        }
        dispatch(NavigationActions.back())
        return true
    }

    render() {
        NavigationUtill.navigation = this.props.navigation
        return <DynamicTabNavigator/>
    }
}

const mapStateToProps = state => ({
    nav: state.nav,
});

export default connect(mapStateToProps)(HomePage);
