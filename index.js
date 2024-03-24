const express = require('express')
require('dotenv').config()
const app = express()

app.use(express.json())

const connectDB = require('./connectMongo')

connectDB()

const ProductModel = require('./models/product.model')

app.get('/api/v1/products', async (req, res) => {
    try {
        const data = await ProductModel.find()
        return res.status(200).json({
            msg: 'Ok',
            data
        })
    }
    catch (error) {
        return res.status(500).json({
            msg: error.message
        })
    }
})

app.get('/api/v1/products/:id', async (req, res) => {
    try {
        const data = await ProductModel.findById(req.params.id)

        if (data) {
            return res.status(200).json({
                msg: 'Ok',
                data
            })
        }

        return res.status(404).json({
            msg: 'Not Found',
        })
    }
    catch (error) {
        return res.status(500).json({
            msg: error.message
        })
    }
})

app.post('/api/v1/products', async (req, res) => {
    try {
        const { id, name, category, image, description, size,  price, color } = req.body
        const product = new ProductModel({
            id, name, category, image, description, size,  price, color
        })
        const data = await product.save()
        return res.status(200).json({
            msg: 'Ok',
            data
        })
    }
    catch (error) {
        return res.status(500).json({
            msg: error.message
        })
    }
})

// app.put('/api/v1/products/:id', async (req, res) => {
//     try {
//         const { id, name, category, image, description, size,  price, color } = req.body
//         const { id } = req.params

//         const data = await ProductModel.findByIdAndUpdate(id, {
//             id, name, category, image, description, size,  price, color
//         }, { new: true })
//         return res.status(200).json({
//             msg: 'Ok',
//             data
//         })
//     }
//     catch (error) {
//         return res.status(500).json({
//             msg: error.message
//         })
//     }
// })

app.delete('/api/v1/products/:id', async (req, res) => {
    try {
        await ProductModel.findByIdAndDelete(req.params.id)
        return res.status(200).json({
            msg: 'Ok',
            data
        })
    }
    catch (error) {
        return res.status(500).json({
            msg: error.message
        })
    }
})

const PORT = process.env.PORT

app.listen(PORT, () => {
    console.log("Server is running on port" + PORT)
})