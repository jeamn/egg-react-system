import * as types from '../action-types'

let initialState = {
    list: []
}
export default function (state = initialState, action) {
    switch (action.type) {
        case types.GET_LEMO_SHOPS:
            return { ...state, lemoShops: action.payload }
        default:
            return state;
    }
}