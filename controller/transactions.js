const sequelize = require('../config/sequelize');

const getAllTransactions = async (req, res) => {

    try {
        const { QueryTypes } = require('sequelize');
        const transactions = await sequelize.query('SELECT products.name as product_name, product_categories.name as category_name, description, price, tags, address, payment, shipping_price, status, quantity, total_price, transactions.created_at, transactions.updated_at  FROM `transactions` JOIN `transaction_items` ON transactions.id = transaction_items.transactions_id JOIN `products` ON transaction_items.products_id = products.id JOIN `product_categories` ON products.categories_id = product_categories.id;', {
            type: QueryTypes.SELECT,
        });
        if (transactions === null) {
            res.status(404).json({
                status: "Failed",
                message: "Get transactions data not successfully",
                isSuccess: true,
                data: transactions,
            });
        }
        res.status(200).json({
            status: "success",
            message: "Success get transactions data",
            isSuccess: true,
            data: transactions,
        });
    }
    catch (error) {
        console.error(error);
        res.status(500).json({
            status: "error",
            message: "Failed to get transactions data",
            isSuccess: false,
            error: error.message,
        });
    }
}

module.exports = {
    getAllTransactions
}