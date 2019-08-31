'use strict';

module.exports = app => {
    const { STRING, INTEGER, DATE } = app.Sequelize;

    const User = app.model.define('user', {
        id: { type: INTEGER, primaryKey: true, autoIncrement: true },
        name: STRING(30),
        age: INTEGER,
        // created_at: DATE,
        // updated_at: DATE,
    }, {
            // 不添加时间戳属性 (updatedAt, createdAt)
            timestamps: false,

            // 不删除数据库条目，但将新添加的属性deletedAt设置为当前日期（删除完成时）。 
            // paranoid 只有在启用时间戳时才能工作
            paranoid: true,

            // 不使用驼峰样式自动添加属性，而是下划线样式，因此updatedAt将变为updated_at
            underscored: true,

            // 禁用修改表名; 默认情况下，sequelize将自动将所有传递的模型名称（define的第一个参数）转换为复数。 如果你不想这样，请设置以下内容
            freezeTableName: true,

            // 定义表的名称
            // tableName: 'my_very_custom_table_name',

            // 启用乐观锁定。 启用时，sequelize将向模型添加版本计数属性，
            // 并在保存过时的实例时引发OptimisticLockingError错误。
            // 设置为true或具有要用于启用的属性名称的字符串。
            // version: true
        });

    return User;
};