import {
    createStackNavigator,
    createBottomTabNavigator,
    createMaterialTopTabNavigator,
    createAppContainer,
    createSwitchNavigator
} from 'react-navigation'
import HomePage from '../page/HomePage'
import WelcomePage from '../page/WelcomePage'
import DetailPage from '../page/DetailPage'
const InitNavigator = createStackNavigator({
    WelcomePage: {
        screen:WelcomePage,
        navigationOptions:{
            header:null
        }
    }
})
const MainNavigator = createStackNavigator({
    WelcomePage: {
        screen:HomePage,
        navigationOptions:{
            // header:null
        }
    },
    DetailPage:{
        screen:DetailPage,
        navigationOptions:{
            header:null
        }
    }
})
const AppNavigator= createSwitchNavigator({
    Init:InitNavigator,
    Main:MainNavigator,

},{
    navigationOptions:{
        header:null
    }
})
export default createAppContainer(AppNavigator);
