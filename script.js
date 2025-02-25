document.addEventListener("DOMContentLoaded", function() {
    const audio = document.getElementById("background-music");

    document.addEventListener("keydown", function(event) {
        if (event.code === "Space") {
            audio.muted = !audio.muted;
        }
    });
});
