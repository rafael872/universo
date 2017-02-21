var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var dbPath  = "mongodb://root:root@ds117889.mlab.com:17889/inmobiliaria";
mongoose.connect(dbPath);

var post_schema = new Schema({
    ext_1:{type:String},
    ext_2:{type:String},
    ext_3:{type:String},
    ext_4:{type:String},
    ext_5:{type:String},
    ext_6:{type:String},
    ext_7:{type:String},
    ext_8:{type:String},
    date:{type:Date, default: Date.now},
    precio:{type:String,required:true,},
    estado:{type:String,required:true,},
    ciudad:{type:String,required:true,},
    municipio:{type:String,required:true,},
    urbanizacion:{type:String,required:true,},
    categoria:{type:String,required:true,},
    tipo:{type:String,required:true,},
    banos:{type:Number,required:true,},
    banos_serv:{type:Number,required:true,},
    habitaciones:{type:Number,required:true,},
    h_serv:{type:Number,required:true,},
    estacionamientos:{type:Number,required:true,},
    antiguedad:{type:Number,required:true,},
    m_terreno:{type:Number,required:true,},
    m_construccion:{type:Number,required:true,},
    ln_tlf:{type:Number,required:false,},
    pisos_cuartos:{type:String,required:false,},
    pisos_sociales:{type:String,required:false,},
    a_a:{type:Number,required:false,},
    cocina_emp:{type:Number,required:false,},
    estudio:{type:Number,required:false,},
    jardines:{type:Number,required:false,},
    planta_electrica:{type:Number,required:false,},
    cable:{type:Number,required:false,},
    rejas:{type:Number,required:false,},
    vestier:{type:Number,required:false,},
    estar:{type:Number,required:false,},
    jacuzzi:{type:Number,required:false,},
    piscina:{type:Number,required:false,},
    sauna:{type:Number,required:false,},
    cerrado:{type:Number,required:false,},
    vig_priv:{type:Number,required:false,},
    distribucion:{type:Number,required:false,},
    desocupado:{type:Number,required:false,},
    ubicacion:{type:Number,required:false,},
    ejec:{type:Number,required:false,},
    remodelada:{type:Number,required:false,},
    tranquila:{type:Number,required:false,},
    montaña:{type:Number,required:false,},
    espacioso:{type:Number,required:false,},
    vista:{type:Number,required:false,},
    listo:{type:Number,required:false,},
    cond_eco:{type:Number,required:false,},
    facil_acceso:{type:Number,required:false,},
    bonito:{type:Number,required:false,},
    oportunidad:{type:Number,required:false,},
    abasto:{type:Number,required:false,},
    metro:{type:Number,required:false,},
    panaderia:{type:Number,required:false,},
    lavanderia:{type:Number,required:false,},
    c_c:{type:Number,required:false,},
    farmacia:{type:Number,required:false,},
    supermercado:{type:Number,required:false,},
    colegio:{type:Number,required:false,},
    universidad:{type:Number,required:false,},
    canchas:{type:Number,required:false,},
    comentario:{type: String, required:false}



})

var Post=mongoose.model("Post",post_schema);

module.exports = Post;