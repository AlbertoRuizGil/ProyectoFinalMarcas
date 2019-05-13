

var cuerpop=document.getElementById("cuerpo_principal");
var imagen=document.getElementById("id_imagen");

//COGE ID DE LA URL
function cogerid(){
    var url=location.href;
    var ids=url.split("?");
    var id=parseInt(ids[1]);
    return id;
}

//Index

//CARGA DE CUENTOS MÁS LEIDOS

function chargeindex(){
    var obj = JSON.parse(cuent);

    var masleidos=document.getElementById("mas_leidos");

    var lectura=[];

    var separacion;

    var cadena="";

    var salida;

    var k;

    for(i=0; i<obj.length; i++){

        lectura.push(obj[i].leido+":"+obj[i].titulo);

    }

    lectura.sort(); //ordenamos por numero de leidos


    for(j=lectura.length-1; j>(lectura.length-5); j--){

        separacion=lectura[j].split(":");

        salida=0;

        k=0;
        
        while(salida==0){

            if(obj[k].titulo==separacion[1]){
                salida=1;
            }

            k++;

        }


        cadena+="<div class='bloques'><a href='./HTML/Cuento.html?"+separacion[1]+"'><img src='"+obj[k-1].cuento+"portada.jpg'></a><p>"+separacion[1]+"</p></div>";

        
    }

    masleidos.innerHTML=cadena;


}

//Fin Index

//Colorea
function chargeimages(){

    var cadena="";

    for(let i=1; i<13 ; i++){
        cadena +="<div class='fotos'><img src='../IMAGES/Colorea/"+i+".jpg'><a href='../IMAGES/Colorea/"+i+".jpg' download>Descargar</a></div>";
    }
    cuerpop.innerHTML=cadena;
}

//Fin colorea

//Adivinanzas


//CARGA DE TODAS LAS ADIVINANZAS
function chargeadiv(){
    var obj = JSON.parse(adiv);

    var cadena="";

    for(let i=0; i<obj.length ; i++){
        cadena +="<div class='bloques'><a href='Adivinanza.html?"+obj[i].id+"'><img src='../IMAGES/Adivinanzas/interrogacion.jpg'></a><p>"+obj[i].titulo+"</p></div>";
    }

    cuerpop.innerHTML=cadena;

}

//CARGA DE UNA ADIVINANZA SOLO
function chargeadivsimp(){

    var id=cogerid();
    var adivina=document.getElementById("adivinanza");
    var solucion=document.getElementById("solucion")


    var obj = JSON.parse(adiv);
    var i=0;
    while(id!=obj[i].id){
        i++;
    }

    var cadenaversos="";
    var cadenasolucion="";

    cadenaversos="<p id='titulo'>"+obj[i].titulo+"</p>";

    for(let j=0; j<obj[i].texto.length; j++){
        cadenaversos+= "<p class='verso'>"+obj[i].texto[j]+"</p>";
    }


    cadenasolucion+="<div id='solucion'><p id='sol'>"+obj[i].solucion+"</p></div>";


    adivina.innerHTML=cadenaversos;
    solucion.innerHTML=cadenasolucion;

}

//PARTE DE CAMBIO DE IMAGEN

var cambio=0;

function vibrator(){
    if(cambio==1){
        return;
    }else{
        imagen.style.animationPlayState="running";
        window.setTimeout(function esperar(){imagen.style.animationPlayState="paused";}, 1483);
    }
}


function cambiar(){
    var solucion=document.getElementById("sol");
    //Mostrar imagen
    var id=cogerid();
    var obj = JSON.parse(adiv);
    var i=0;
    while(id!=obj[i].id){
        i++;
    }
    
    imagen.src=obj[i].imagen;

    //Mostrar solucion
    solucion.style.animation="3s mostrar";
    cambio=1;
    document.getElementById("sol").style.opacity=1;
}
//Fin adivinanzas

//Cuentos

//DIFERENCIAMOS SI ES CATEGORIAS O CUENTOS

function charge(){
    var url=location.href;
    var urlarr=url.split("?");

    if(urlarr[1]=="Inicio"){
        chargecat();
    }else{
        chargecuent(urlarr[1]);
    }
    
}


//CARGA DE CATEGORÍAS

function chargecat(){

    console.log(1);
    var obj = JSON.parse(cuent);

    var cadena="";
    var categorias=[""];
    var salida;
    var j;

    for(let i=0; i<obj.length ; i++){
        salida=0;
        j=0;
        while(j<categorias.length && salida==0){
            if(obj[i].categoria==categorias[j]){
                salida=1;
            }else if(obj[i].categoria!=categorias[j] && j==categorias.length-1){
                cadena +="<div class='bloques'><a href='Todo_cuentos.html?"+obj[i].categoria+"'><img src='."+obj[i].cuento+"portada.jpg'></a><p>"+obj[i].categoria+"</p></div>";
                categorias.push(obj[i].categoria);
            }
            j++;
        }
        
    }

    cuerpop.innerHTML=cadena;

}

//CARGA DE CUENTOS POR CATEGORIAS

function chargecuent(cat){
    var obj = JSON.parse(cuent);

    var cadena="";

    for(i=0; i<obj.length; i++){
        if(obj[i].categoria==cat){
            cadena+="<div class='bloques'><a href='Cuento.html?"+obj[i].titulo+"'><img src='."+obj[i].cuento+"/portada.jpg'></a><p>"+obj[i].titulo+"</p></div>";
        }
    }

    cuerpop.innerHTML=cadena;

}

//CARGA DE UN SOLO CUENTO

function cargarcuento(){
    var obj = JSON.parse(cuent);

    var cadena="";

    var cadena2="";

    var url=location.href;

    var urlseparada=url.split("?");

    var tituloconespacios=obtenertitulo(urlseparada[1]);

    console.log(urlseparada[1]);

    var i=0;

    console.log(obj[i].titulo);

    while(obj[i].titulo!=tituloconespacios){
        i++;
    }
    

    cadena2+="<h3>"+obj[i].titulo+"</h3>";

    document.getElementById("titulocuento").innerHTML=cadena2;

    for(j=1; j<obj[i].paginas+1; j++){

        cadena+="<img src='."+obj[i].cuento+j+".jpg'>";
    }

    document.getElementById("slide").innerHTML=cadena;

    
}


//FUNCION PARA OBTENER TÍTULO CON ESPACIO DE LA URL

function obtenertitulo(titulo){
    var conespacio="";


    var i=0;

    while(i<titulo.length){

        if(titulo.charAt(i)=="%"){
            while(titulo.charAt(i)=="0"||titulo.charAt(i)=="1"||titulo.charAt(i)=="2"||titulo.charAt(i)=="3"||titulo.charAt(i)=="4"||titulo.charAt(i)=="5"||titulo.charAt(i)=="6"||
            titulo.charAt(i)=="7"||titulo.charAt(i)=="8"||titulo.charAt(i)=="9"||titulo.charAt(i)=="%"){

                i++;
            }
            conespacio+=" ";
        }else{
            conespacio+=titulo.charAt(i);
            i++;
        }
    }


    return conespacio;

}

//Fin Cuentos


