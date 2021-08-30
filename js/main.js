
function clicou (){
    document.getElementById("agradecimento").innerHTML = "<b>Obrigado por clicar</b>";
    
    //console.log(document.getElementById("agradecimento"))
    //alert ("Obrigado por clicar.")
}

function redirecionar(){
    window.open("https://globallabs.academy/");
    //window.location.href = "https://globallabs.academy/";
}

function trocar (elemento){
    //document.getElementById("mousemove").innerHTML = "Obrigado por passar o mouse";
    //alert ("trocar texto");
    elemento.innerHTML = "Obrigado por passar o mouse";

}


function voltar(elemento){
    //document.getElementById("mousemove").innerHTML ="Passar o mouse aqui";
    elemento.innerHTML = "Passe o mouse aqui";
}

function load(){
    alert ("Página carregada!");
}

function funcaoChange(elemento){
    console.log(elemento.value);
}

/*
function soma(n1, n2) {
    return n1 + n2;
}



var validar;

function validaidade(idade){
    if (idade >= 18){
        validar = true

    } else {
        validar = false
    }
    return validar;
}

var idade = prompt ("Qual a sua idade?");
validaidade(idade)
console.log (validar);
*/ 
//alert(soma(5,10));


/*
var d = new Date();
console.log (d.getMonth)
alert (d.getMonth()+1);
alert (d.getDay());
alert (d.getHours());
alert (d.getMinutes());
alert (d.getSeconds());
alert (d.getUTCMilliseconds());*/ 




/*
var count;
for (count = 0; count <=5; count++){
    alert(count);
}
*/

/*
var count = 0; 
while (count <=  5){ 
    console.log(count);
    alert (count);
    count ++;
}
*/

/* 
var idade = prompt("Qual a sua idade?");
//var idade = 18;
if (idade >= 18){
    alert("maior de idade");
}else {
    alert("menor de idade");
};
*/ 
 

/*
var frutas = [{nome:"maçã", cor:"vermelha"},{nome:"uva",cor:"roxa"}];
console.log (frutas);
alert(frutas[1].nome);
*/
/*
var fruta = {nome:"maçã", cor:"vermelha"};
console.log (fruta.nome);
alert(fruta.cor);
*/


//var lista = ["maça", "pera", "laranja"];
//lista.push ("uva");
//lista.pop ();

//console.log(lista);
//console.log(lista.toString());
//console.log(lista.join(" - "));


/*
var nome = "Gabriel Borba";
var idade = 25;
var idade2 =10; 
var frase = "Japão é o melhor time do mundo"
alert (nome + " tem " + idade + " anos");
alert (idade+idade2);
console.log (nome);
console.log (idade + idade2);
console.log (frase.toUpperCase());
alert(frase.replace("Japão","Brasil"));
 */