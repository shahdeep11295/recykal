import { SHOWLOADER,HIDELOADER } from "../utils/constant"
export default function (state=false,action){
    switch(action.type){
        case SHOWLOADER:
            return true
        case HIDELOADER:
            return false
        default:
            return state
    }
}