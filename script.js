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

    // Crée un lien pour **ouvrir le fichier**
    const openLink = document.createElement("a");
    openLink.href = `${blocName}/${file}`;
    openLink.target = "_blank"; // ouvre dans une nouvelle page
    openLink.innerText = `${icon} ${file}`;
    openLink.className = "file-name";

    // Crée un lien pour **télécharger le fichier**
    const downloadLink = document.createElement("a");
    downloadLink.href = `${blocName}/${file}`;
    downloadLink.download = file; // force le téléchargement
    downloadLink.innerText = " ⬇️";
    downloadLink.className = "download-icon";

    // Ajoute les deux liens dans le div
    div.appendChild(openLink);
    div.appendChild(downloadLink);

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

function openBloc(folderId){

document.getElementById("driveFiles").innerHTML = `
<iframe 
src="https://drive.google.com/embeddedfolderview?id=${folderId}#list"
style="width:100%; height:600px; border:0;">
</iframe>
`;

}
