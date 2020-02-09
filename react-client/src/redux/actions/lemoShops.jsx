import * as TYPES from '../action-types'
import { getShops } from '../../api/lemoShops'

export default {
    getShops() {
        return {
            type: TYPES.GET_LEMO_SHOPS,
            payload: getShops()
        }
    }
}