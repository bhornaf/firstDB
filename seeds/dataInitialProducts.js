/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
    // Deletes ALL existing entries
    await knex("products").del();
    await knex("products").insert([
        {
            id: 1,
            title: "Escuadra",
            price: 123.45,
            thumbnail:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/130.png",
        },
        {
            id: 2,
            title: "Calculadora",
            price: 234.56,
            thumbnail:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/131.png",
        },
        {
            id: 3,
            title: "Globo Terraqueo",
            price: 345.67,
            thumbnail:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png",
        },
    ]);
};
