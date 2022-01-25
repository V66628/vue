//当前这个模块：api进行统一管理
import requests from "./request";
import mockRequest from './mockRequest'
//三级联动接口：/api/product/getBaseCategoryList  get 无参数
export const reqCategoryList=()=> requests({url:'/product/getBaseCategoryList',method:'get'})
export const getBanner=()=>mockRequest({url:'/banner',method:'get'})
export const getFloor=()=>mockRequest({url:'/floor',method:'get'})
//search组件搜索商品
export const getSearchInfo=(params)=>requests({url:'/list',method:'post',data:params})
//detail组件
export const getDetailInfo=(params)=>requests({url:`/item/${params}`,method:'get'})
//添加到购物车
export const reqAddShopCar=(skuId,skuNum)=>requests({url:`/cart/addToCart/${skuId}/${skuNum}`,method:'post'})
//获取购物车列表
export const shopCar=()=>requests({url:'/cart/cartList',method:'get'})
//删除商品
export const deleteGoods=(skuId)=>requests({url:`/cart/deleteCart/${skuId}`,method:'delete'})
//切换购物车商品选中状态
export const checkedGoods=(skuId,isChecked)=>requests({url:'/cart/checkCart/${skuID}/${isChecked}',method:'get'})