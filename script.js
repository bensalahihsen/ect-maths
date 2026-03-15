if (!localStorage.getItem("logged")) {
    window.location.href = "login.html";
}

const folders = {

    "Bloc1": "1nDQl93pMmLKA16KB-MjQmX-H1YWiJ9O0",
    "Bloc2": "17yIfxM6NqiamyWm0uuBPugWaV0wfAQi5",
    "Bloc3": "12r09E6w5LcKN9Q21gdr7XRfF7BfX5YFi",
    "Bloc4": "17UwhQeTMhAo3449k6C4zskLMkaqogUfY",
    "Bloc5": "17_aGxwB98JOB4jWBdxOAVL3FUZiSJkrA"

};

function openBloc(blocName){

    const folderId = folders[blocName];

    const grid = document.querySelector(".grid");

    grid.innerHTML = `

    <div class="card" onclick="location.reload()">
    ⬅ Retour
    </div>

    <iframe 
    src="https://drive.google.com/embeddedfolderview?id=${folderId}#list"
    style="width:100%; height:600px; border:0;">
    </iframe>

    `;

}

function logout() {
    // Supprime la session utilisateur
    localStorage.removeItem("logged");

    // Redirige vers la page de connexion
    window.location.href = "login.html";
}