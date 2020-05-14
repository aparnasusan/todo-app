var express=require('express');
var todoController=require('./controllers/todoController')
var app=express();

//set up template engine
app.set('view engine','ejs');
app.engine('ejs', require('ejs').__express);
//static files
app.use('/public/assets', express.static('public/assets'));
todoController(app);

app.listen(4000);
console.log('listening to port');