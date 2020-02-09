import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import history from '../history'
import lemoShops from './lemoShops'
let reducers = {
  lemoShops,
    router: connectRouter(history)
}
let reducer = combineReducers(reducers)

export default reducer