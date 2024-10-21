// const BaseURL = "https://dummyjson.com/products?limit=10&skip=10"
import store from "../redux/store/store";
import {HideLoader, ShowLoader} from "../redux/state/business-table/settings-slice.js";
import axios from "axios";
import Store from "../redux/store/store";

const BaseURL = "https://dummyjson.com"

export async function GetProduct(perPage,pageNo){
    const URL = BaseURL + "/products" + "?limit=" + perPage + "&skip=" +pageNo

    store.dispatch(ShowLoader())

    try{
        let result = await axios.get(URL)
        store.dispatch(HideLoader())

        if(result.status === 200){
            if(result.data['products'][0]['rows'].length>0){
                store.dispatch(SetAllProduct(result.data['products'][0]['rows']))
                store.dispatch(SetTotal(result.data['total']))
            } else {
                store.dispatch(SetAllProduct([]))
                store.dispatch(SetTotal(0))
                ErrorToast("No Data Found")
            }
        }

    }
    catch (e) {
        ErrorToast("Something went wrong")
        store.dispatch(HideLoader())
    }


}