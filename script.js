// 🔐 protection login
if(localStorage.getItem("logged") !== "true"){
    window.location.href = "login.html";
}

// 📌 historique de navigation
let navigationHistory = [];

// 📂 dossiers des unités
const blocs = {
    "S1": [
        {
            name:"Unité 1",
            n: "1Q-5SjASvIPJLNXNc1JZ3m9WqJRLvfkQs",
            n1: "1NgyC8_mYDUK3nAgKjooLHcyaY83XDp2Y",
            nplus1: "1kdWXnBgiBbVbljFvEnor5qDa-XJqovV9"
        },
        {name:"Unité 2", id:"1KjK75YiLQUeB0WAMb9Qe_EYg81SXA0_L"},
        {name:"Unité 3", id:"1r_5zAIzxCUrl_UY1yYkhNXKGtOJzqFvh"},
        {name:"Unité 4", id:"1Ug9CauFD6ez_PbXUS8rl_mi85lK6rsTg"},
        {name:"Unité 5", id:"1N5gC18WDfFVN-k2CiBOuuthAkkx0c1F_"},
        {name:"Unité 6", id:"1WrXVPb4wc5y5LiD8YaQF9mweg_qi1d5a"}
    ],
    "S2": [],
    "S3": [],
    "S4 CST": [],
    "S4 SN": [],
    "S5 CST": [],
    "S5 SN": [],
    "PreU": []
};

// 🔹 afficher les unités
function openBloc(blocName){

    navigationHistory.push({type: "bloc", bloc: blocName});

    const grid = document.querySelector(".grid");
    const units = blocs[blocName];

    grid.style.display = "flex";
    grid.style.flexDirection = "column";
    grid.style.alignItems = "center";
    grid.style.gap = "15px";

    let content = `<div class="card back-btn" onclick="goBack()">⬅ Retour</div>`;

    if(units.length === 0){
        content += `<p>Aucune unité disponible</p>`;
    }

    units.forEach((unit, index) => {
        content += `
            <div class="card" onclick="openUnit('${blocName}', ${index})">
                ${unit.name}
            </div>
        `;
    });

    grid.innerHTML = content;
}

// 🔹 afficher une unité
function openUnit(blocName, index){

    navigationHistory.push({
        type: "unit",
        bloc: blocName,
        index: index
    });

    const unit = blocs[blocName][index];
    const grid = document.querySelector(".grid");

    grid.style.display = "block";

    // 🔥 CAS SPÉCIAL : UNITE 1
    if(index === 0){
        grid.innerHTML = `
            <div class="card back-btn" onclick="goBack()">⬅ Retour</div>

            <h2 style="color:white; margin:20px 0; text-align:center;">
                ${unit.name}
            </h2>

            <div style="display:flex; gap:20px; justify-content:center; margin-top:30px;">
                <button class="big-btn" onclick="openPart('${unit.n1}')">N-1</button>
                <button class="big-btn" onclick="openPart('${unit.n}')">N</button>
                <button class="big-btn" onclick="openPart('${unit.nplus1}')">N+1</button>
            </div>
        `;
    }

    // 🔹 AUTRES UNITÉS
    else{
        grid.innerHTML = `
            <div class="card back-btn" onclick="goBack()">⬅ Retour</div>

            <h2 style="color:white; margin:20px 0; text-align:center;">
                ${unit.name}
            </h2>

            <iframe 
            src="https://drive.google.com/embeddedfolderview?id=${unit.id}#list"
            style="width:100%; height:500px; border:0;">
            </iframe>
        `;
    }
}

// 🔹 ouvrir N / N-1 / N+1
function openPart(folderId){

    navigationHistory.push({type: "part"});

    const grid = document.querySelector(".grid");

    grid.innerHTML = `
        <div class="card back-btn" onclick="goBack()">⬅ Retour</div>

        <iframe 
        src="https://drive.google.com/embeddedfolderview?id=${folderId}#list"
        style="width:100%; height:700px; border:0;">
        </iframe>
    `;
}

// 🔹 retour intelligent
function goBack(){

    navigationHistory.pop(); // page actuelle
    const previous = navigationHistory.pop(); // page précédente

    if(!previous){
        location.reload();
        return;
    }

    if(previous.type === "bloc"){
        openBloc(previous.bloc);
    }

    if(previous.type === "unit"){
        openUnit(previous.bloc, previous.index);
    }

    if(previous.type === "part"){
        location.reload();
    }
}

// 🔹 logout
function logout(){
    localStorage.removeItem("logged");
    window.location.href = "login.html";
}