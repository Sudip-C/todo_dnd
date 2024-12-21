import { GET_ALL_DATA, GET_ALL_DATA_FAIL, POST_DATA_FAIL, UPDATE_STATUS_SUCCESS } from "./actionType"


const initialState={
    data:[],
    error:'',
    update:''

}
export const reducer=(state=initialState,{type,payload})=>{
switch(type){
    case GET_ALL_DATA:
        return{
            ...state,
            data:payload,
            
        }
    case GET_ALL_DATA_FAIL:
        return{
            ...state,
            error:payload
        }
    case UPDATE_STATUS_SUCCESS:
        return{
            ...state,
            update:'Data Updated Successfully.'
        }
    case POST_DATA_FAIL:
        return{
            ...state,
            error:payload
        }
        default:
        return state
}
}