function openFullscreen(imgElement) {
    const fullscreenDiv = document.getElementById("fullscreen-img");
    const fullscreenImg = fullscreenDiv.querySelector("img");
    fullscreenImg.src = imgElement.src;
    fullscreenDiv.style.display = "flex";
}

function closeFullscreen() {
    document.getElementById("fullscreen-img").style.display = "none";
}

document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") {
        closeFullscreen();
    }
});
