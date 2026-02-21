function login(){
  let u=document.getElementById("user").value;
  let p=document.getElementById("pass").value;

  if(u=="admin" && p=="1234"){
    localStorage.setItem("logado","sim");
    location="painel.html";
  }else{
    msg.innerText="Login inválido";
  }
}

if(location.pathname.includes("painel") && localStorage.getItem("logado")!="sim"){
  location="index.html";
}

function logout(){
  localStorage.removeItem("logado");
  location="index.html";
}

function ir(p){
  location=p;
}

function gerarTreino(){
let peso=localStorage.getItem("peso")||80;

let cardio = peso>85 ? "30min corrida" : "10min corrida";

let treino = `
Segunda — Peito + Triceps<br>
Terça — Costas + Biceps<br>
Quarta — Pernas<br>
Quinta — Ombro<br>
Sexta — Full Body<br>
Sábado/Domingo — Bônus<br><br>

🔥 Cardio: ${cardio}
`;

document.getElementById("treino").innerHTML=treino;
}

function calcular(){
let peso=document.getElementById("peso").value;
let altura=document.getElementById("altura").value;

localStorage.setItem("peso",peso);

let imc=peso/(altura*altura);

let dieta;
if(imc>25){
dieta="Déficit calórico + cardio obrigatório";
}else{
dieta="Dieta manutenção + treino hipertrofia";
}

plano.innerHTML=`IMC: ${imc.toFixed(1)}<br>${dieta}`;

salvarHistorico(peso);
}

function salvarHistorico(p){
let hist=JSON.parse(localStorage.getItem("hist")||"[]");
hist.push({peso:p,data:new Date().toLocaleDateString()});
localStorage.setItem("hist",JSON.stringify(hist));
}

if(document.getElementById("historico")){
let hist=JSON.parse(localStorage.getItem("hist")||"[]");

let txt="";
hist.forEach(h=>{
txt+=`${h.data} — ${h.peso}kg<br>`;
});

historico.innerHTML=txt||"Sem registros";
}
