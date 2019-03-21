/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {createBottomTabNavigator, createAppContainer} from 'react-navigation'
import {BottomTabBar} from 'react-navigation-tabs'
import {Platform, StyleSheet, Text, View} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Entypo from 'react-native-vector-icons/Entypo'
import {connect} from 'react-redux'
import NavigationUtill from '../navigator/NavigationUtill'

type Props = {};
import PopularPage from '../page/PopularPage'
import TrendingPage from '../page/TrendingPage'
import FavoritePage from '../page/FavoritePage'
import MyPage from '../page/MyPage'

const TABS = {
    PopularPage: {
        screen: PopularPage,
        navigationOptions: {
            tabBarLabel: '最热',
            tabBarIcon: (({tintColor, focused}) => <MaterialIcons
                    name={'whatshot'}
                    size={26}
                    style={{color: tintColor}}/>
            )
        }
    },
    TrendingPage: {
        screen: TrendingPage,
        navigationOptions: {
            tabBarLabel: '趋势',
            tabBarIcon: (({tintColor, focused}) => <MaterialIcons
                    name={'trending-up'}
                    size={26}
                    style={{color: tintColor}}/>
            )
        }
    },
    FavoritePage: {
        screen: FavoritePage,
        navigationOptions: {
            tabBarLabel: '收藏',
            tabBarIcon: (({tintColor, focused}) => <MaterialIcons
                    name={'favorite'}
                    size={26}
                    style={{color: tintColor}}/>
            )
        }
    },
    MyPage: {
        screen: MyPage,
        navigationOptions: {
            tabBarLabel: '我的',
            tabBarIcon: (({tintColor, focused}) => {
                    return <Entypo
                        name={'user'}
                        size={26}
                        style={{color: tintColor}}/>
                }
            )
        }
    }
}

class DynamicTabNavigator extends Component<Props> {
    constructor(props) {
        super(props)
        console.disableYellowBox = true
    }

    _tabNavigation() {
        if (this.Tabs) {
            return this.Tabs
        }
        console.log(23);
        const {PopularPage, FavoritePage, MyPage, TrendingPage} = TABS
        const tabs = {  //根据需要动态改变tab
            PopularPage, TrendingPage, FavoritePage, MyPage
        }
        return this.Tabs = createBottomTabNavigator(tabs, {
            tabBarComponent: props => {
                return <TabBarComponent theme={this.props.theme} {...props}/>
            }

        })
    }

    render() {
        NavigationUtill.navigation = this.props.navigation
        const Tab = createAppContainer(this._tabNavigation())
        return <Tab/>
    }
}

class TabBarComponent extends Component {
    constructor(props) {
        super(props)
        // this.theme = {
        //     tintColor: props.activeTintColor,
        //     updateTime: new Date().getTime()
        // }
    }

    render() {
        const {routes, index} = this.props.navigation.state
        // if (routes[index].params) {
        //     const {theme} = routes[index].params
        //     // 以最新的更新时间为主，防止其他tab之前修改的覆盖
        //     if (theme && theme.updateTime > this.theme.updateTime) {
        //         this.theme = theme
        //     }
        // }
        return <BottomTabBar
            {...this.props}
            activeTintColor={this.props.theme}
        />
    }

}

const mapStateToProps = state => ({
    theme: state.theme.theme,
});

export default connect(mapStateToProps)(DynamicTabNavigator);
