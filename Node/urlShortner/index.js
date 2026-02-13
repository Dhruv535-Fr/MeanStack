const express = require('express');
const {ConnectDB} = require('./ConnectDb');
const cookieParser = require('cookie-parser');

const urlRouter = require('./routes/url');
const staticRoute = require('./routes/staticRouter');
const userRouter = require('./routes/user');

const path = require('path');

const { ristrictToLoggedinUserOnly, checkAuth } = require('./middleware/auth')

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());


app.set('view engine', 'ejs');
app.set('views', path.resolve('./views'));

ConnectDB("mongodb://127.0.0.1:27017/url-shortener");

app.use('/',checkAuth,staticRoute);
app.use('/url',ristrictToLoggedinUserOnly,urlRouter);
app.use('/user', userRouter);

app.listen(8000,()=>{
    console.log("Server Running");
});
