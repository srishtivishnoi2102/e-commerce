const express = require("express");
const customerRoutes = require("./routes/customers");
const categoriesRoutes=require('./routes/categories')
const productsRoutes=require('./routes/products')
const {dbSync} =require('./database/mysql/sequelize')

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get('/sync',async (req,res)=>{
    await dbSync()
    res.send('DB Synced')
})

app.use("/customers", customerRoutes);
app.use('/categories',categoriesRoutes)
app.use('/products',productsRoutes)

app.listen(PORT, (req, res) => {
    console.log("Server is running on Port : ", PORT);
});
