/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
    // Deletes ALL existing entries
    await knex("chat").del();
    await knex("chat").insert([
        {
            id: 1,
            email: "bhornaf@upao.edu.pe",
            message: "Hola",
            likes: 2,
            date: "7/9/2022 22:16:24",
            socket_id: "9PR3-rA5_vnL3X_7AAAB",
        },
        {
            id: 2,
            email: "bhornaf@upao.edu.pe",
            message: "Como estas?",
            likes: 1,
            date: "7/9/2022 22:16:43",
            socket_id: "9ZkfbsWHHf-wZBi1AAAB",
        },
    ]);
};
