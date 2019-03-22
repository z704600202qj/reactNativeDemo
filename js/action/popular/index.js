import Types from '../types'
import DataStore from '../../expand/dao/DateStore'


/**
 * 获取异步数据
 * @param storeName
 * @returns {{type: string, theme: *}}
 */
export function onLoadPopularData(storeName,url) {
    return dispatch => {
        dispatch({type: Types.POPULAR_REFRESH, storeName: storeName})
        let dataStore = new DataStore()
        console.log(url);
        dataStore.fetchData(url)
            .then(data => {
                handleData(dispatch, storeName, data)
            })
            .catch(error => {
                console.log(error)
                dispatch({
                    type: Types.POPULAR_REFRESH_FAIL,
                    storeName,
                    error
                })
            })
    }
}

function handleData(dispatch, storeName, data) {
    dispatch({
        type: Types.LOAD_POPULAR_SUCCESS,
        data: data && data.data&& data.data.items,
        storeName,

    })
}
