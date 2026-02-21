const treinos = {

seg:[
["Supino reto","4x10","🏋️"],
["Supino inclinado","3x12","🏋️"],
["Crucifixo","3x12","🦾"],
["Tríceps corda","3x12","💪"]
],

ter:[
["Puxada alta","4x10","🏋️"],
["Remada curvada","3x10","🦾"],
["Rosca direta","3x12","💪"]
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

function mostrarDia(dia){

let peso = localStorage.getItem("peso") || 80;
let cardio = peso>85 ? "Cardio: 30min corrida" : "Cardio: 15min leve";

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
