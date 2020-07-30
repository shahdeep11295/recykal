import {
    PRODUCT_DATA,
    SHOWLOADER, HIDELOADER,
    UPDATE_DATA,
} from "../utils/constant"
import axios from "axios"

export const fetch_data = () => async (dispatch, getState) => {
    loadingOn(dispatch)
    try {
        const response = await axios.get(`https://run.mocky.io/v3/db041da7-e5ff-4f00-b11f-caaef12208ec`)
        console.log("fetch_data", response);
        if(response.status === 200){
            dispatch({
                type: PRODUCT_DATA,
                payload:response.data
            })
        }
        return response;
    }
    catch (e) {
        console.log("error", e);
    }
    finally {
        loadingOff(dispatch)
    }

}

export const update_data = (data, callback=()=>{}) => async (dispatch, getState) => {
    loadingOn(dispatch)
    try {
        console.log("hello",data);
        // const response = await axios.get(`https://run.mocky.io/v3/db041da7-e5ff-4f00-b11f-caaef12208ec`)
        // console.log("fetch_data", response);
        // if(response.status === 200){
            dispatch({
                type: UPDATE_DATA,
                payload:data
            })
        // }
        // return response;
    }
    catch (e) {
        console.log("error", e);
    }
    finally {
        loadingOff(dispatch)
    }

}

export const loadingOn = (dispatch) => {
    dispatch({
        type: SHOWLOADER
    })
}

export const loadingOff = (dispatch) => {
    dispatch({
        type: HIDELOADER
    })
}