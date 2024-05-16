document.addEventListener("DOMContentLoaded", () => {
    const gallery = document.getElementById("gallery");

    fetch("https://jsonplaceholder.typicode.com/photos")
        .then(response => response.json())
        .then(photos => {
            photos.slice(0, 10).forEach(photo => {
                const img = document.createElement("img");
                img.src = photo.url; // Use 'url' for full size image
                img.alt = photo.title;
                gallery.appendChild(img);
            });
        })
        .catch(error => {
            console.error("Error al obtener las fotos:", error);
        });
});
