const { Router } = require("express");
const knex = require("knex");
const knexConfig = require("../knexfile");
const database = knex(knexConfig);
const tableName = "products";

const router = Router();

router.get("/", async (req, res) => {
    try {
        const products = await database(tableName).select();
        res.send(products);
    } catch (error) {
        res.status(500).json(error);
    }
});

router.get("/:id", async (req, res) => {
    try {
        const id = req.params.id;
        const product = await database(tableName).where("id", id).first();
        res.send(product);
    } catch (error) {
        res.status(500).json(error);
    }
});

router.post("/", async (req, res) => {
    try {
        const product = req.body;

        if (product.title && product.price && product.thumbnail) {
            const _product = {
                title: product.title,
                price: product.price,
                thumbnail: product.thumbnail,
            };
            const _result = await database(tableName).insert(_product);
            res.send({ ..._product, id: _result[0] });
        }
    } catch (error) {
        res.status(500).json(error);
    }
});

router.put("/:id", async (req, res) => {
    try {
        const id = req.params.id;
        const product = req.body;

        if (product.title && product.price && product.thumbnail) {
            const _product = {
                title: product.title,
                price: product.price,
                thumbnail: product.thumbnail,
            };
            const _result = await database(tableName)
                .where("id", id)
                .update(_product);
            res.send({ ..._product, id: id });
        }
    } catch (error) {
        res.status(500).json(error);
    }
});

router.delete("/:id", async (req, res) => {
    try {
        const id = req.params.id;
        const product = await database(tableName).where("id", id).del();
        res.send(product);
    } catch (error) {
        res.status(500).json(error);
    }
});

module.exports = router;
