const { Sequelize } = require("sequelize")

const customerSchema={
    customer_id:{
        type:Sequelize.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    name:{
        type:Sequelize.STRING,
    },
    email:{
        type:Sequelize.STRING,
        unique:true,
        allowNull:false,
    },
    address_1:{
        type:Sequelize.STRING,
    },
    address_2:{
        type:Sequelize.STRING,
    },
    city:{
        type:Sequelize.STRING,
    },
    region:{
        type:Sequelize.STRING,
    },
    postal_code:{
        type:Sequelize.STRING,
    },
    country:{
        type:Sequelize.STRING,
    },
    shipping_region_id:{
        type:Sequelize.INTEGER,
    },
    day_phone:{
        type:Sequelize.STRING,
    },
    eve_phone:{
        type:Sequelize.STRING,
    },
    mob_phone:{
        type:Sequelize.STRING,
    },
    credit_card:{
        type:Sequelize.STRING,
    }
}

module.exports=customerSchema