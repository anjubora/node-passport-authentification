const express=require('express');
const app =express();
const PORT =process.env.port || 5000;
const expressLayouts=require('express-ejs-layouts')
var index=require('./routes/index');
var user=require('./routes/user')
const mongoose=require('mongoose')
const session=require('express-session')
const flash=require('connect-flash')
const passport=require('passport')
//passport config
require('./config/passport')(passport);

//EJS
app.use(expressLayouts);
app.set('view engine','ejs')
//bodyparser
app.use(express.urlencoded({extended:true}))

//express-session

app.use(session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true,

  }))

  //passport middleware
  app.use(passport.initialize());
app.use(passport.session());
 //connect flash
  app.use(flash())

  //global variable
  app.use((req,res,next)=>{
      res.locals.success_msg=req.flash('success_msg')
      res.locals.error_msg=req.flash('error_msg')
      res.locals.error=req.flash('error')
      next();
  })


//db config
const db =require('./config/keys').MongoURI;
//connect to mongo
mongoose.connect('mongodb://localhost:27017/register',{useNewUrlParser:true}).then(()=>{
 console.log('mongodb connected');   
}).catch( (error)=>{
console.log(error)
})
//routes
app.use('/',index);
app.use('/users',user);


app.listen(PORT,() =>{
    console.log(`server is running on port ${PORT}`)
}) 