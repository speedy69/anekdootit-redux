
const notificationReduser = (state = null, action) => {

    switch(action.type){
        case 'MESSAGE':
            return action.message
        default:
            return state
    }
}

export const setMessage = (msg, timer) => {
    return dispatch => {
        dispatch({ type: 'MESSAGE', message: msg })
        setTimeout(() => {
            dispatch({ type: 'MESSAGE', message: null })
        }, timer * 1000);
    }
     
}

export default notificationReduser