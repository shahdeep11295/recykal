import { PRODUCT_DATA, UPDATE_DATA } from "../utils/constant"
//replace(/<(.|\n)*?>/g, '')
export default function (state = { productdata: [] }, action) {
    switch (action.type) {

        case PRODUCT_DATA:
            let data = action.payload.productList
            let finaldata = []
            for (let i in data) {
                const object = {};
                object = data[i];
                object['quantity'] = 0;
                finaldata.push(object)
            }
            return {
                ...state,
                productdata: finaldata
            }

        case UPDATE_DATA:
            console.log("action.payload", action.payload);
            const update = state.productdata.map((item)=>{
                if(item.id === action.payload.id){
                    return {...item,...action.payload}
                }else{
                    return item
                }
            })
            return {
                ...state,
                productdata: update
            }
        default:
            return state
    }
}