var bodyParser=require('body-parser');

var data=[{item:'1st item'},{item:'2nd item'},{item:'3rd item'}]
var urlEncodedParser=bodyParser.urlencoded({extended:false})
module.exports=function(app){

    app.get('/todo',function(req,res){
        res.render('todo',{todos:data});

    })

    app.post('/todo',urlEncodedParser,function(req,res){
        data.push(req.body);
        res.json({todos:data});
    })

    app.delete('/todo/:item',function(req,res){
        
        data=data.filter(function(todo){
        return todo.item.replace(/ /g,'-') !== req.params.body
        })
        res.json(data)
    })
}