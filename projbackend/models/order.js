const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema;

const ProductCartSchema = new mongoose.Schema({
    products: {
        type: ObjectId,
        ref: "Product"
    },
    name: String,
    count: Number,
    price: Number
})

const ProductCart = mongoose.model("PRoductCart", ProductCartSchema);


var orderSchema = new mongoose.Schema({
    products: [ProductCartSchema],
    transaction_id : {},
    amount: {
        type: Number
    },
    updated: Date,
    address: String, 
    user: {
        type: ObjectId,
        ref: "User"
    }
}, { timestamps: true })

const Order = mongoose.model("Order", orderSchema);

modules.exports = {Order, ProductCart};