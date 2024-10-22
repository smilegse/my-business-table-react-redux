import axios from "axios";
import {ErrorToast} from "../components/business-table/ErrorToast";
import {HideLoader, ShowLoader} from "../redux/state/product/settings-slice";
import {SetAllProduct, SetLimit, SetSkip, SetTotal} from "../redux/state/product/product-slice";
import store from "../redux/store/store";
const BaseURL = "https://dummyjson.com"
// const BaseURL = "https://dummyjson.com/products?limit=10&skip=10"

export async function GetProductList(perPage,pageNo){
    store.dispatch(ShowLoader())
    const URL = BaseURL + "/products" + "?limit=" + perPage + "&skip=" +pageNo

    try{
        const res = await axios.get(URL)
        store.dispatch(HideLoader())
        //if(res.status === 200 && res.data === "success"){
        if(res.status === 200){
            if(res['data']['products'].length>0){
                store.dispatch(SetAllProduct(res.data['products']))
                store.dispatch(SetTotal(res.data['total']))
                store.dispatch(SetLimit(res.data['limit']))
                store.dispatch(SetSkip(res.data['skip']))
            } else {
                store.dispatch(SetAllProduct([]))
                store.dispatch(SetTotal(0))
                store.dispatch(SetLimit(0))
                store.dispatch(SetSkip(0))
                ErrorToast("No Data Found")
            }
        }else{
            ErrorToast("Something went wrong!")
        }
    }
    catch (e) {
        ErrorToast("Something went wrong!")
        store.dispatch(HideLoader())
    }

    /*
    * call axios without async method
    */
    // axios.get(URL).then((res)=>{
    //     store.dispatch(HideLoader())
    //     if(res.status === 200){
    //         if(res['data']['products'].length>0){
    //             store.dispatch(SetAllProduct(res.data['products']))
    //             store.dispatch(SetTotal(res.data['total']))
    //             store.dispatch(SetLimit(res.data['limit']))
    //             store.dispatch(SetSkip(res.data['skip']))
    //         } else {
    //             store.dispatch(SetAllProduct([]))
    //             store.dispatch(SetTotal(0))
    //             store.dispatch(SetLimit(0))
    //             store.dispatch(SetSkip(0))
    //             ErrorToast("No Data Found")
    //         }
    //     } else {
    //         ErrorToast("Something went wrong!")
    //     }
    // }).catch(err=>{
    //     ErrorToast("Something went wrong!")
    //     store.dispatch(HideLoader())
    // })


}