// Fungsi untuk Memuat Halaman ke dalam #content
function loadPage(page) {
    fetch(page)
        .then(response => response.text())
        .then(data => {
            document.getElementById("content").innerHTML = data;
        })
        .catch(error => console.error("Error loading the page: ", error));
}

// Pastikan konten awal langsung dimuat saat halaman dibuka
document.addEventListener("DOMContentLoaded", function() {
    loadPage("profile.html"); // Default memuat halaman Profile
});