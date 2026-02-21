// proteção login
if(localStorage.getItem("logado")!="sim" && !location.pathname.includes("index")){
location="index.html";
}

// login
function login(){
if(user.value=="admin" && pass.value=="1234"){
localStorage.setItem("logado","sim");
location="painel.html";
}else{
msg.innerText="Login inválido";
}
}

// sair
function logout(){
localStorage.removeItem("logado");
location="index.html";
}

// navegar
function ir(p){
location=p;
}

// TREINOS
const treinos={
seg:[
["Supino reto","4x10","🏋️"],
["Supino inclinado","3x12","🏋️"],
["Crucifixo","3x12","💪"],
["Tríceps corda","3x12","🦾"]
],
ter:[
["Puxada alta","4x10","🏋️"],
["Remada curvada","3x10","💪"],
["Rosca direta","3x12","🦾"]
],
qua:[
["Agachamento","4x10","🦵"],
["Leg press","3x12","🦿"],
["Extensora","3x12","🦵"],
["Panturrilha","4x15","🦶"]
],
qui:[
["Desenvolvimento","4x10","🏋️"],
["Elevação lateral","3x12","💪"],
["Elevação frontal","3x12","🦾"]
],
sex:[
["Burpee","3x15","🔥"],
["Flexão","3x12","💪"],
["Abdominal","3x20","🧱"]
],
bonus:[
["Caminhada","40min","🚶"],
["Bike","30min","🚴"],
["Alongamento","15min","🧘"]
]
};

// mostrar treino
function mostrarDia(dia){

let peso=localStorage.getItem("peso")||80;
let cardio=peso>85?"Cardio: 30min corrida":"Cardio: 15min leve";

let html="";

treinos[dia].forEach(ex=>{
html+=`
<div style="margin:15px 0;padding:10px;background:#0f172a;border-radius:10px">
<h3>${ex[2]} ${ex[0]}</h3>
Séries: ${ex[1]}
</div>
`;
});

html+=`<hr><b>${cardio}</b>`;

document.getElementById("treino").innerHTML=html;
}

// dieta
function calcular(){
let peso=document.getElementById("peso").value;
let altura=document.getElementById("altura").value;

if(!peso||!altura)return;

localStorage.setItem("peso",peso);

let imc=peso/(altura*altura);

let txt=imc>25?
"Déficit calórico + cardio obrigatório":
"Manutenção + foco hipertrofia";

plano.innerHTML=`IMC: ${imc.toFixed(1)}<br>${txt}`;

let hist=JSON.parse(localStorage.getItem("hist")||"[]");
hist.push({peso:peso,data:new Date().toLocaleDateString()});
localStorage.setItem("hist",JSON.stringify(hist));
}

// histórico
if(document.getElementById("historico")){
let hist=JSON.parse(localStorage.getItem("hist")||"[]");
let t="";
hist.forEach(h=> t+=`${h.data} — ${h.peso}kg<br>`);
historico.innerHTML=t||"Sem registros";
}
function gerarDieta(){

let peso=parseFloat(document.getElementById("peso").value);
let altura=parseFloat(document.getElementById("altura").value);

if(!peso||!altura)return;

localStorage.setItem("peso",peso);

let imc=peso/(altura*altura);

let objetivo;
if(imc>25) objetivo="emagrecer";
else if(imc<18.5) objetivo="ganhar";
else objetivo="manter";

// alimentos baratos base
const base={
proteina:["Ovo","Frango","Sardinha","Atum","Carne moída"],
carbo:["Arroz","Macarrão","Batata","Aveia","Pão"],
legumes:["Cenoura","Abobrinha","Tomate","Alface","Repolho"]
};

// sorteador
function rand(arr){
return arr[Math.floor(Math.random()*arr.length)];
}

// gerar semana
let dias=["Seg","Ter","Qua","Qui","Sex","Sab","Dom"];
let html=`<h2>IMC: ${imc.toFixed(1)}</h2>
<b>Objetivo:</b> ${objetivo}<hr>`;

dias.forEach(d=>{

let p=rand(base.proteina);
let c=rand(base.carbo);
let l=rand(base.legumes);

html+=`
<div style="margin:15px 0;padding:15px;background:#0f172a;border-radius:12px">
<h3>${d}</h3>
🍳 Café — ${c} + ovo<br>
🍛 Almoço — ${p} + ${c} + ${l}<br>
🥪 Jantar — ${p} + salada<br>
</div>
`;
});

html+=`
<hr>
💡 Dica IA: ${
objetivo=="emagrecer"
?"Reduza açúcar e faça cardio diário"
:objetivo=="ganhar"
?"Aumente porções e proteína"
:"Mantenha rotina equilibrada"
}
`;

document.getElementById("resultado").innerHTML=html;


// salvar histórico peso
let hist=JSON.parse(localStorage.getItem("hist")||"[]");
hist.push({peso:peso,data:new Date().toLocaleDateString()});
localStorage.setItem("hist",JSON.stringify(hist));
}
