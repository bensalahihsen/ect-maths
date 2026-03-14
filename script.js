const filesData = {

    "Bloc1": [
        {
            name: "Cours2.pdf",
            id: "1YfZDWMMZy5a4JeUUVRj5r91XroEmwkpG"
        }
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

    if (files.length === 0) {

        grid.innerHTML = "<p>Aucun fichier dans ce bloc.</p>";

    } else {

        files.forEach(file => {

            const card = document.createElement("div");
            card.className = "card file-card";
            card.innerText = file.name;

            card.onclick = () => {
                showFile(file.id);
            };

            grid.appendChild(card);

        });

    }

    const backButton = document.createElement("div");
    backButton.className = "card";
    backButton.innerText = "⬅ Retour";
    backButton.onclick = () => location.reload();

    grid.appendChild(backButton);

}


function showFile(fileId) {

    const grid = document.querySelector(".grid");

    grid.innerHTML = `

        <iframe 
        src="https://drive.google.com/file/d/${fileId}/preview"
        width="100%" 
        height="600px"
        style="border:none;">
        </iframe>

        <div class="card" onclick="location.reload()">
        ⬅ Retour
        </div>

    `;
}