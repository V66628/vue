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
//获取短信验证码
export const sendCode=(phone)=>requests({url:`/user/passport/sendCode/${phone}`,method:'get'})
//注册用户
export const register=(params)=>requests({url:'/user/passport/register',method:'post',data:params})
//登录
export const login=(params)=>requests({url:'/user/passport/login',data:params,method:'post'})
//利用token获取用户登录信息
export const userInfo=()=>requests({url:'/user/passport/auth/getUserInfo',method:'get'})
//退出登录
export const loginOut=()=>requests({url:'/user/passport/logout',method:'get'})
//获取用户地址信息
export const reqAddressInfo=()=>requests({url:'/user/userAddress/auth/findUserAddressList',method:'get'})
//获取订单交易页信息
export const reqOrderInfo=()=>requests({url:'/order/auth/trade',method:'get'})
//提交订单
export const reqSubmitOrder=(tradeNo,data)=>requests({url:`/order/auth/submitOrder?tradeNo=${tradeNo}`,method:'post',data})
//获取订单交易页信息
export const reqTradeInfo=(orderId)=>requests({url:`/payment/weixin/createNative/${orderId}`,method:'get'})
//查询订单状态
export const reqOrderStatus=(orderId)=>requests({url:`/payment/weixin/queryPayStatus/${orderId}`,method:'get'})
//获取我的订单列表
export const reqOrderList=(page,limit)=>requests({url:`/order/auth/${page}/${limit}`,method:'get'})