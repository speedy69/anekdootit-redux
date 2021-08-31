
const filterReducer = (state = '', action) => {

    switch(action.type){
        case 'FILTER':
            return action.filter
        default:
            return state
    }
}

export const filter = filterString => { return { type: 'FILTER', filter: filterString } }

export default filterReducer