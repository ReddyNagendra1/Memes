window.onload = function () {
    let images = [];

    fetch("images.json")
        .then(response => response.json())
        .then(data => {
            images = data;
            console.log("Images loaded:", images);
        })
        .catch(error => {
            console.error("Error fetching the JSON file:", error);
        });

    var btn = document.getElementById("randomBtn");
    var randomImg = document.getElementById("image");
    var title = document.getElementById("imgTitle");
    var description = document.getElementById("imgDesc");
    var toggleHistoryBtn = document.getElementById("toggleHistoryBtn");
    var historyContent = document.getElementById("historyContent");
    var header = document.querySelector(".header");
    var container = document.querySelector(".container");

    function handleSubmit() {
        header.style.display = "none";
        if (images.length > 0) {
            var randomIndex = Math.floor(Math.random() * images.length);
            var selectedImg = images[randomIndex];

            console.log("Selected Image:", selectedImg);

            randomImg.src = selectedImg.src;
            title.textContent = selectedImg.title;
            description.textContent = selectedImg.description;
            document.getElementById("imageContainer").style.display = "block";
        } else {
            console.error("No images loaded");
        }
    }

    if (btn) {
        btn.onclick = handleSubmit;
    } else {
        console.error("Button not found");
    }

    function toggleHistory() {
        header.style.display = "none";
        if (historyContent.style.display === "none" || historyContent.style.display === "") {
            historyContent.style.display = "block";
            toggleHistoryBtn.textContent = "▲ Hide History";
        } else {
            historyContent.style.display = "none";
            toggleHistoryBtn.textContent = "▼ Show History";
        }
    }

    if (toggleHistoryBtn) {
        toggleHistoryBtn.onclick = toggleHistory;
    } else {
        console.error("Toggle history button not found");
    }
};
