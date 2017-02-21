var express = require("express");
var router = express.Router();
var Post = require("./models/posts");
var multer = require('multer');
var post_finder_middleware = require("./middlewares/find_post");
var fs = require('fs');

router.get("/", function (req, res) {
    res.render("api_index")
});
router.get("/nuevo", function (req, res) {
    res.render("api_nuevo")
});

router.all("/post/:id*", post_finder_middleware);
router.get('/all', function (req, res) {
    Post.find(function (err, post) {
        if (err)
            res.send(err)

        res.json(post);
    }).sort({date: "desc"});
});

router.get("/inmuebles/", function (req, res) {

    res.render("api_inmuebles")

});
router.get("/post/:id/edit",function(req,res){
        Post.findById({_id: req.params.id})
            .exec(function(err,post_unique){
                if (err)
                    res.send(err)

                res.render("api_edit",{post_unique: post_unique});
            })
});


router.route("/post/:id")

    /* 
    .get(function(req,res){
        Post.findById({_id: req.params.id})
            .exec(function(err,post_unique){
                if (err)
                    res.send(err)

                res.json(post_unique);
            })
    })
    */
    
    .put(function(req,res){

    })
    .delete(function (req, res) {
        Post.remove({
            _id: req.params.id
        }, function (err, post) {
            if (err)
                res.send(err);
            Post.find(function (err, Post) {
                if (err)
                    res.send(err)
                res.json(Post);
            });
        });
    })
router.route("/post")

    .post(function (req, res) {
        function numberFormat(numero) {
            // Variable que contendra el resultado final
            var resultado = "";

            // Si el numero empieza por el valor "-" (numero negativo)
            if (numero[0] == "-") {
                // Cogemos el numero eliminando los posibles puntos que tenga, y sin
                // el signo negativo
                nuevoNumero = numero.replace(/\./g, '').substring(1);
            } else {
                // Cogemos el numero eliminando los posibles puntos que tenga
                nuevoNumero = numero.replace(/\./g, '');
            }

            // Si tiene decimales, se los quitamos al numero
            if (numero.indexOf(",") >= 0)
                nuevoNumero = nuevoNumero.substring(0, nuevoNumero.indexOf(","));

            // Ponemos un punto cada 3 caracteres
            for (var j, i = nuevoNumero.length - 1, j = 0; i >= 0; i-- , j++)
                resultado = nuevoNumero.charAt(i) + ((j > 0) && (j % 3 == 0) ? "." : "") + resultado;

            // Si tiene decimales, se lo añadimos al numero una vez forateado con 
            // los separadores de miles
            if (numero.indexOf(",") >= 0)
                resultado += numero.substring(numero.indexOf(","));

            if (numero[0] == "-") {
                // Devolvemos el valor añadiendo al inicio el signo negativo
                return "-" + resultado;
            } else {
                return resultado;
            }
        }
        var ext_1 = req.files.img1.name.split(".").pop() || 'null'
        var ext_2 = req.files.img2.name.split(".").pop() || 'null'
        var ext_3 = req.files.img3.name.split(".").pop() || 'null'
        var ext_4 = req.files.img4.name.split(".").pop() || 'null'
        var ext_5 = req.files.img5.name.split(".").pop() || 'null'
        var ext_6 = req.files.img6.name.split(".").pop() || 'null'
        var ext_7 = req.files.img7.name.split(".").pop() || 'null'
        var ext_8 = req.files.img8.name.split(".").pop() || 'null'
        var n = numberFormat(req.body.precio)
        Post.create({
            ext_1: ext_1,
            ext_2: ext_2,
            ext_3: ext_3,
            ext_4: ext_4,
            ext_5: ext_5,
            ext_6: ext_6,
            ext_7: ext_7,
            ext_8: ext_8,

            precio: n,
            estado: req.body.estado,
            ciudad: req.body.ciudad,
            municipio: req.body.municipio,
            urbanizacion: req.body.urbanizacion,
            categoria: req.body.categoria,
            tipo: req.body.tipo,
            banos: req.body.banos,
            banos_serv: req.body.banos_serv,
            habitaciones: req.body.habitaciones,
            h_serv: req.body.h_serv,
            estacionamientos: req.body.estacionamientos,
            antiguedad: req.body.antiguedad,
            m_terreno: req.body.m_terreno,
            m_construccion: req.body.m_construccion,
            ln_tlf: req.body.ln_tlf,
            pisos_cuartos: req.body.pisos_cuartos,
            pisos_sociales: req.body.pisos_sociales,
            a_a: req.body.a_a,
            cocina_emp: req.body.cocina_emp,
            estudio: req.body.estudio,
            jardines: req.body.jardines,
            Planta_eléctrica: req.body.Planta_eléctrica,
            cable: req.body.cable,
            rejas: req.body.rejas,
            vestier: req.body.vestier,
            estar: req.body.estar,
            jacuzzi: req.body.jacuzzi,
            piscina: req.body.piscina,
            sauna: req.body.sauna,
            cerrado: req.body.cerrado,
            vig_priv: req.body.vig_priv,
            distribucion: req.body.distribucion,
            desocupado: req.body.desocupado,
            ubicacion: req.body.ubicacion,
            ejec: req.body.ejec,
            remodelada: req.body.remodelada,
            tranquila: req.body.tranquila,
            montaña: req.body.montaña,
            espacioso: req.body.espacioso,
            vista: req.body.vista,
            listo: req.body.listo,
            cond_eco: req.body.cond_eco,
            facil_acceso: req.body.facil_acceso,
            bonito: req.body.bonito,
            oportunidad: req.body.oportunidad,
            abasto: req.body.abasto,
            metro: req.body.metro,
            panaderia: req.body.panaderia,
            lavanderia: req.body.lavanderia,
            c_c: req.body.c_c,
            farmacia: req.body.farmacia,
            supermercado: req.body.supermercado,
            colegio: req.body.colegio,
            universidad: req.body.universidad,
            canchas: req.body.canchas,
            comentario: req.body.comentario


        }, function (err, posts) {
            if (err)
                res.send(err);
            var path_1 = req.files.img1.path
            var path_2 = req.files.img2.path
            var path_3 = req.files.img3.path
            var path_4 = req.files.img4.path
            var path_5 = req.files.img5.path
            var path_6 = req.files.img6.path
            var path_7 = req.files.img7.path
            var path_8 = req.files.img8.path
            
            var newPath_1 = 'public/uploads/' + posts._id + '_1' + '.' + ext_1
            var newPath_2 = 'public/uploads/' + posts._id + '_2' + '.' + ext_2
            var newPath_3 = 'public/uploads/' + posts._id + '_3' + '.' + ext_3
            var newPath_4 = 'public/uploads/' + posts._id + '_4' + '.' + ext_4
            var newPath_5 = 'public/uploads/' + posts._id + '_5' + '.' + ext_5
            var newPath_6 = 'public/uploads/' + posts._id + '_6' + '.' + ext_6
            var newPath_7 = 'public/uploads/' + posts._id + '_7' + '.' + ext_7
            var newPath_8 = 'public/uploads/' + posts._id + '_8' + '.' + ext_8

            
          
            
            
            
            
            
            
            if(ext_1 != 'null'){
                var is_1 = fs.createReadStream(path_1)
                var os_1 = fs.createWriteStream(newPath_1)
                is_1.pipe(os_1)
                is_1.on('end', function () {
                    //eliminamos el archivo temporal
                    fs.unlinkSync(path_1)
                })
            }
            if(ext_2 != 'null'){
                var is_2 = fs.createReadStream(path_2)
                var os_2 = fs.createWriteStream(newPath_2)
                is_2.pipe(os_2)
                is_2.on('end', function () {
                    //eliminamos el archivo temporal
                    fs.unlinkSync(path_2)
                })
            }
            if(ext_3 != 'null'){
                var is_3 = fs.createReadStream(path_3)
                var os_3 = fs.createWriteStream(newPath_3)
                 is_3.pipe(os_3)
                is_3.on('end', function () {
                    //eliminamos el archivo temporal
                    fs.unlinkSync(path_3)
                })
            }
            if(ext_4 != 'null'){
                var is_4 = fs.createReadStream(path_4)
                var os_4 = fs.createWriteStream(newPath_4)
                is_4.pipe(os_4)
                is_4.on('end', function () {
                    //eliminamos el archivo temporal
                    fs.unlinkSync(path_4)
                })
            }
            if(ext_5 != 'null'){
                var is_5 = fs.createReadStream(path_5)
                var os_5 = fs.createWriteStream(newPath_5)
                is_5.pipe(os_5)
                is_5.on('end', function () {
                    //eliminamos el archivo temporal
                    fs.unlinkSync(path_5)
                })
            }
            if(ext_6 != 'null'){
                var is_6 = fs.createReadStream(path_6)
                var os_6 = fs.createWriteStream(newPath_6)
                is_6.pipe(os_6)
                is_6.on('end', function () {
                    //eliminamos el archivo temporal
                    fs.unlinkSync(path_6)
                })
            }
            if(ext_7 != 'null'){
                var is_7 = fs.createReadStream(path_7)
                var os_7 = fs.createWriteStream(newPath_7)
                is_7.pipe(os_7)
                is_7.on('end', function () {
                    //eliminamos el archivo temporal
                    fs.unlinkSync(path_7)
                })
            }
            if(ext_8 != 'null'){
                var is_8 = fs.createReadStream(path_8)
                var os_8 = fs.createWriteStream(newPath_8)
                is_8.pipe(os_8)
                is_8.on('end', function () {
                    //eliminamos el archivo temporal
                    fs.unlinkSync(path_8)
                })
            }

            
           
            
            
            
            
            
            
           
            /*thumb({
                source: 'public/uploads/' + posts._id + '_1' + '.' + ext_1, // could be a filename: dest/path/image.jpg 
                destination: 'public/uploads/thumbnails',
                concurrency: 4
                }, function(err) {
                console.log('All done!');
                });
                */
            res.redirect("/api/");

        })
    })







module.exports = router;