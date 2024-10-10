const sequelize = require('../config/sequelize');

const getAllProducts = async (req, res) => {

    try {
        const { QueryTypes } = require('sequelize');
        const products = await sequelize.query('SELECT * FROM `products` JOIN `product_categories` ON products.categories_id = product_categories.id', {
            type: QueryTypes.SELECT,
        });
        if (products === null) {
            res.status(404).json({
                status: "Failed",
                message: "Get products data not successfully",
                isSuccess: true,
                data: products,
            });
        }
        res.status(200).json({
            status: "success",
            message: "Success get products data",
            isSuccess: true,
            data: products,
        });
    }
    catch (error) {
        console.error(error);
        res.status(500).json({
            status: "error",
            message: "Failed to get products data",
            isSuccess: false,
            error: error.message,
        });
    }
}

module.exports = {
    getAllProducts
}