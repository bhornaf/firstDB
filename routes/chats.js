const knex = require("knex");
const knexConfig = require("../knexfile");
const database = knex(knexConfig);
const tableName = "chat";

const _SendMessages = async (msg) => {
    try {
        const _result = await database(tableName).insert(msg);
        return _result;
    } catch (error) {
        console.log(error);
        return null;
    }
};

const _GetMessages = async () => {
    try {
        const _result = await database(tableName).select();
        return _result;
    } catch (error) {
        console.log(error);
        return null;
    }
};

module.exports = {
    _SendMessages,
    _GetMessages,
};
