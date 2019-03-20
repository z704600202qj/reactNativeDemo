/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {
    createMaterialTopTabNavigator,
    createAppContainer,
} from 'react-navigation'
import {Platform, StyleSheet, Text, View} from 'react-native';
import NavigationUtill from '../navigator/NavigationUtill'

type Props = {};
export default class PopularPage extends Component<Props> {
    constructor(props) {
        super(props);
        this.tabNames = ['Java', 'Android', 'IOS', 'React', 'React Native', 'PHP']
    }

    _getTab() {
        const tabs = {}
        this.tabNames.forEach((item, index) => {
            tabs[`tab${index}`] = {
                screen: props=><PopularTab {...props} tabLabel={item}/>,
                navigationOptions: {
                    title: item
                }
            }
        })
        return tabs
    }

    render() {
        const TabNav = createAppContainer(
            createMaterialTopTabNavigator(this._getTab(),{
                tabBarOptions:{
                    tabStyle:styles.tabStyle,
                    upperCaseLabel:false,  //标签是否大写
                    scrollEnabled:true,  //是否支持滚动，选项卡滚动，默认false
                    style:{
                        backgroundColor:'#678'
                    },
                    indicatorStyle:styles.indicatorStyle,
                    labelStyle:styles.labelStyle,
                }
            })
        )
        return <View style={{flex: 1}}>
            <TabNav/>
        </View>
    }
}

class PopularTab extends Component<Props> {
    render() {
        const {tabLabel} = this.props
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>{tabLabel}</Text>
                <Text onPress={() => {
                    NavigationUtill.goPage({
                        navigation: this.props.navigation
                    }, 'DetailPage')
                }}>详情
                </Text>
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
    tabStyle:{
        minWidth:50,
    },
    indicatorStyle:{
        height:2,
        backgroundColor:'#fff'
    },
    labelStyle:{
        fontSize:13,
        marginTop:5,
        marginBottom:5
    }
});
