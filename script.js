if(localStorage.getItem("logged") !== "true"){

window.location.href="login.html";

}

// Données des fichiers par bloc
const filesData = {
    "Bloc1": ["cours1.pdf"],
    "Bloc2": ["cours2.pdf"],
    "Bloc3": ["cours3.pdf"],
    "Bloc4": ["cours4.pdf"],
    "Bloc5": ["cours5.pdf"]
};

let currentBloc = null;

// Ouvre un bloc et affiche les fichiers
function openBloc(blocName) {
    currentBloc = blocName;
    showFiles(blocName, filesData[blocName]);
}

// Affiche les fichiers dans le bloc
function showFiles(blocName, files) {
    const grid = document.querySelector(".grid");
    grid.innerHTML = "";

    if (files.length === 0) {
        grid.innerHTML = "<p>Aucun fichier dans ce bloc.</p>";
    } else {
        files.forEach(file => {
            const div = document.createElement("div");
            div.className = "card file-card";

            // Choisir l’icône selon l’extension
            let ext = file.split('.').pop().toLowerCase();
            let icon = "";
            if(ext === "pdf") icon = "📄"; 
            else if(ext === "doc" || ext === "docx") icon = "📝"; 
            else icon = "📁";

            // Affichage avec bouton téléchargement
            div.innerHTML = `
                <span>${icon} ${file}</span>
                <a href="${blocName}/${file}" download class="download-icon">⬇️</a>
            `;

            grid.appendChild(div);
        });
    }

    // Ajouter bouton retour
    const backButton = document.createElement("div");
    backButton.className = "card";
    backButton.textContent = "⬅ Retour";
    backButton.onclick = goBack;
    grid.appendChild(backButton);
}

// Retour à l’écran des blocs
function goBack() {
    location.reload();
}

function logout(){

localStorage.removeItem("logged");

window.location.href="login.html";

}
