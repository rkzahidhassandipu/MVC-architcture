const express = require("express");
const usersRouter = require("./routes/users.routes");
const productRouter = require('./routes/products.route')
const app = express();
const port = 3000;

app.use(express.urlencoded({extended: false}));
app.use(usersRouter);
app.use(productRouter);


app.use((req, res, next) => {
    res.send(404).json({
        message: "resource not found",
    });

}) 

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
})