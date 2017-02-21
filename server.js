var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var multipart = require('connect-multiparty');
var routes = require("./routes");
var Post = require("./models/posts");
var port = 3000;

app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/node_modules'));
app.use(bodyParser.urlencoded({ 'extended': 'true' }));
app.use(bodyParser.json());
app.use(multipart())
//app.use(bodyParser.json({type: 'application/vnd.api+json'}));
app.use(methodOverride());
app.set("view engine", "pug");

app.get('/', function (req, res) {
    res.render('index');
});
app.get('/search_params',function(req,res){
    a = global.a || null //estado
    b = global.b || null //categoria(apartamento,casa)
    c = global.c || null // busqueda(string)
    d = global.d || null// tipo(venta, alquiler)
    /*if(a=="any" && b =="any" && c =="any"){
        Post.find({})
            .exec(function(err,post){
                if (err)
                    res.send(err)

                 res.json(post);
            })
    }else if(a=="any" && b !== "any" && c ){

    }
    if(a=="any"){
        
        
    }else{
    */
    Post.find({$and:[{'estado': {'$regex': a||'',$options:'i'}},
                    {'categoria': {'$regex': b||'',$options:'i'}},
                    {'tipo': {'$regex': d||'',$options:'i'}},
                    {$or:[
                        {'urbanizacion': {'$regex': c||'',$options:'i'}},
                        {'ciudad': {'$regex': c||'',$options:'i'}},
                        {'municipio': {'$regex': c||'',$options:'i'}}]}]})
    //Post.find({'estado': {'$regex': a,$options:'i'}})
            .exec(function(err,post){
                if (err)
                    res.send(err)

                 res.json(post);
            })
    //}
});


app.post('/search', function(req,res){
    global.a = '';
    global.b = '' ;
    global.c = '' ;
    global.d = '';

    global.a = req.body.estado ;
    global.b = req.body.categoria|| global.b ;
    global.c = req.body.search|| global.c ;
    global.d = req.body.tipo|| global.d;
    
	res.render('search',{estado:global.a, tipo:global.d, search:global.c});
    console.log(a ,b, c, d)

});



app.get('/post/:id',function(req,res){
  Post.findById({_id: req.params.id})
    .exec(function(err,post_unique){
        if (err)
            res.send(err)
        res.render('post',{post_unique: post_unique});
    })
});

/*app.get('/post/:id', function(req,res){
    res.render('post');
});*/

app.use("/api", routes);

app.listen(port);
console.log('corriendo en puerto ' + port)