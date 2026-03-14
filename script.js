const filesData = {
    "Bloc1": [
        { name: "Cours2.pdf", url: "https://drive.google.com/drive/folders/1nDQl93pMmLKA16KB-MjQmX-H1YWiJ9O0?usp=drive_link" }
    ],
    "Bloc2": [],
    "Bloc3": [],
    "Bloc4": [],
    "Bloc5": []
};

function openBloc(blocName) {
    const grid = document.querySelector(".grid");
    grid.innerHTML = "";

    const files = filesData[blocName];

    if(files.length === 0){
        grid.innerHTML = "<p>Aucun fichier dans ce bloc.</p>";
    } else {

        files.forEach(file => {

            const div = document.createElement("div");
            div.className = "card file-card";

            const name = document.createElement("a");
            name.href = file.url;
            name.target = "_blank";
            name.textContent = file.name;

            const download = document.createElement("a");
            download.href = file.url;
            download.textContent = " ⬇️";
            download.download = "";

            div.appendChild(name);
            div.appendChild(download);

            grid.appendChild(div);
        });
    }

    const back = document.createElement("div");
    back.className = "card";
    back.textContent = "⬅ Retour";
    back.onclick = () => location.reload();

    grid.appendChild(back);
}