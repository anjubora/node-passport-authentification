const express=require('express');
const app =express();
const PORT =process.env.port || 5000;
const expressLayouts=require('express-ejs-layouts')
var index=require('./routes/index');
var user=require('./routes/user')
//EJS
app.use(expressLayouts);
app.set('view engine','ejs')
//routes
app.use('/',index);
app.use('/users',user);


app.listen(PORT,() =>{
    console.log(`server is running on port ${PORT}`)
}) 