function gerarTreino(){

let peso = localStorage.getItem("peso") || 80;
let cardio = peso>85 ? "30min corrida intensa" : "15min corrida leve";

const treinos = {
"Segunda — Peito + Tríceps":[
["Supino reto","4x10","https://i.imgur.com/6q5Z5wR.png"],
["Supino inclinado","3x12","https://i.imgur.com/8z7Z6kP.png"],
["Crucifixo","3x12","https://i.imgur.com/n8SN9pD.png"],
["Tríceps corda","3x12","https://i.imgur.com/0y8Ftya.png"]
],

"Terça — Costas + Bíceps":[
["Puxada alta","4x10","https://i.imgur.com/1s7XG5R.png"],
["Remada curvada","3x10","https://i.imgur.com/eJ3ZQ7p.png"],
["Rosca direta","3x12","https://i.imgur.com/Xu4c6qK.png"]
],

"Quarta — Pernas":[
["Agachamento","4x10","https://i.imgur.com/q9gVQ2C.png"],
["Leg press","3x12","https://i.imgur.com/Y5rY8cG.png"],
["Cadeira extensora","3x12","https://i.imgur.com/yN3cXkS.png"],
["Panturrilha","4x15","https://i.imgur.com/2xR9sWB.png"]
],

"Quinta — Ombro":[
["Desenvolvimento","4x10","https://i.imgur.com/cA7Qm1L.png"],
["Elevação lateral","3x12","https://i.imgur.com/9mF7rKF.png"],
["Elevação frontal","3x12","https://i.imgur.com/3xgWQ9o.png"]
],

"Sexta — Full Body":[
["Burpee","3x15","https://i.imgur.com/lqP6Z8Y.png"],
["Flexão","3x12","https://i.imgur.com/XA9pO1R.png"],
["Abdominal","3x20","https://i.imgur.com/5QZ9m2b.png"]
]
};

let html="";

for(let dia in treinos){

html+=`<h2>${dia}</h2>`;

treinos[dia].forEach(ex=>{
html+=`
<div style="margin-bottom:20px">
<b>${ex[0]}</b><br>
Séries: ${ex[1]}<br>
<img src="${ex[2]}" style="width:120px;margin-top:8px;border-radius:10px">
</div>
`;
});

}

html+=`
<hr>
<h2>🔥 Cardio obrigatório</h2>
${cardio}

<hr>
<h2>🏆 Bônus fim de semana</h2>
Atividade livre: esporte, caminhada ou bike 40min
`;

document.getElementById("treino").innerHTML=html;
}
