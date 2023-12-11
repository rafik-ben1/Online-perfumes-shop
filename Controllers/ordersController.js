import Order from "../Models/Order.js"
import CustomError from "../utils/CustomError.js";
import asyncWrapper from "../utils/asyncWrapper.js"

export const createOrder = asyncWrapper(async function(req,res){
    req.body.orderedBy = req.user.id;
    const order = await Order.create(req.body)
    return res.status(201).json({status:"success",order})
})

export const getOrders = asyncWrapper(async function(req,res){
    const orders = await Order.find()
    return res.status(200).json({status:"success", orders})
})

export const getMyOrders = asyncWrapper(async function(req,res){
    const orders = await Order.find({user:req.user.id})
    if(orders.length === 0){
        return res.status(404).json({status:"fail",message:"you are yet to order anything greedy ass fucker :)"})
    }
    return res.status(200).json({status:"success", orders})
})
export const updateOrderStatus = asyncWrapper(async function(req,res){
    const {orderId} = req.params
    const order = await Order.findOne({_id:orderId})
    if(!order){
        throw new CustomError("no order found",404)
    }
    if(order.status === "canceled"){
        throw new CustomError("you cannot uncancel an order",403)
    }
    order.$set(req.body)
    await order.save()
return res.status(200).json({status:"success",order})
})