/**
 * 全局导航跳转工具
 */
export default class NavigationUtill {
    static goPage(parmas, page) {
        /**
         * 页面跳转
         */
        const navigation = NavigationUtill.navigation
        if (!navigation) {
            console.error('NavigationUtil.navigation can not be null')
            return
        }
        navigation.navigate(page, {...parmas})
    }

    static goBack(navigation) {
        /**
         * 返回上一页
         */
        navigation.goBack()
    }

    /**
     * 返回首页
     * @param parmas
     */
    static resetToHomePage(parmas) {
        const {navigation} = parmas
        navigation.navigate('Main')
    }

}
