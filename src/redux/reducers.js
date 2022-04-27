import * as actionTypes from "./action-types"

const initialState = {
    count: 0,
    count1: 0
}
export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.INCREMENT:
            return {
                ...state,
                count: state.count + 1
            }
        case actionTypes.DECREMENT:
            return {
                ...state,
                count: state.count - 1
            }
            case actionTypes.ADD: {
              return{
                  ...state,
                  count1: state.count1 + action.val
              }
              }
              case actionTypes.SUB: {
                return{
                    ...state,
                    count1: state.count1 - action.val
                }
            }
            case actionTypes.MULTIPLY: {
                return{
                    ...state,
                    count1: state.count1 * action.val
                }
            }
            case actionTypes.DIVIDE: {
                return{
                    ...state,
                    count1: state.count1 / action.val
                }
            }
        default:
            return state
    }
}