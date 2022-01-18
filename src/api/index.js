//当前这个模块：api进行统一管理
import requests from "./request";
import mockRequest from './mockRequest'
//三级联动接口：/api/product/getBaseCategoryList  get 无参数
export const reqCategoryList=()=> requests({url:'/product/getBaseCategoryList',method:'get'})
export const getBanner=()=>mockRequest({url:'/banner',method:'get'})
export const getFloor=()=>mockRequest({url:'/floor',method:'get'})
//search组件搜索商品
export const getSearchInfo=(params)=>requests({url:'/list',method:'post',data:params})