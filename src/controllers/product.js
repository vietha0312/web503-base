import dotenv from 'dotenv'
import express from 'express'
import product from 'c:/users/laptop/onedrive/máy tính/demo-thi_node-master/src/models/product';
dotenv.config();
export const getAll = async (req, res) => {
    try {
        const products = await product.find();
        return res.json({
            message: " lấy sản phẩm thành công",
            products
        })
    } catch (error) {
        return res.status(400).json({
            message: error.message,
        });
    }
}

export const getOne = (req, res) => {
    try {
        const Product = product.findById(req.params.id)
        return res.json({
            message: "Lấy sản phẩm thành công"
        })
    } catch (error) {
        return res.status(400).json({
            message: error.message,
        })
    }
}

export const create = (req, res) => {
    try {

    } catch (error) {

    }
}


export const update = (req, res) => {
    try {

    } catch (error) {

    }
}

export const remove = (req, res) => {
    try {

    } catch (error) {

    }
}






