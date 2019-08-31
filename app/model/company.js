'use strict';

module.exports = app => {
    const { STRING, INTEGER, DATE } = app.Sequelize;

    const User = app.model.define('company', {
        id: { type: INTEGER, primaryKey: true, autoIncrement: true },
        name: STRING(30),
        proId: INTEGER,
    });

    return User;
};