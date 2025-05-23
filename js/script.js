function loadPage(page) {
    fetch(page)
        .then(r => {
            if (!r.ok) throw new Error(`Cannot load ${page}`);
            return r.text();
        })
        .then(html => {
            // 1) Buang semua <link data-dynamic>
            document.querySelectorAll("link[data-dynamic]").forEach(n => n.remove());

            // 2) Tentukan CSS apa yang akan di‐load
            let cssFile = "";
            if (page.includes("dashboard")) cssFile = "style/dashboard.css";
            else if (page.includes("profile")) cssFile = "style/profile.css";
            else if (page.includes("Work_Experience")) cssFile = "style/work.css";
            else if (page.includes("Project_Experience")) cssFile = "style/project.css";
            else if (page.includes("certificates")) cssFile = "style/certificates.css";

            // 3) Inject <link> baru ke head
            if (cssFile) {
                const link = document.createElement("link");
                link.rel = "stylesheet";
                link.href = cssFile;
                link.setAttribute("data-dynamic", "");
                document.head.appendChild(link);
            }

            // 4) Tampilkan kontennya
            document.getElementById("content").innerHTML = html;
        })
        .catch(console.error);
}

// 1. Fungsi deteksi DevTools (via perbedaan inner/outer size)
function devtoolsOpen() {
    return window.outerWidth - window.innerWidth > 160 ||
        window.outerHeight - window.innerHeight > 160;
}

// 2. Acak string panjang
function randomGibberish(length = 500) {
    return Array.from({
            length
        })
        .map(() => String.fromCharCode(33 + Math.random() * 94 | 0))
        .join('');
}

// 3. Interval pengecekan DevTools
let alerted = false;
setInterval(() => {
    if (devtoolsOpen() && !alerted) {
        alerted = true;
        // Gantikan seluruh isi halaman dengan teks acak
        document.documentElement.innerHTML =
            `<pre style="white-space: pre-wrap; color:#f00; padding:20px;">
                ${randomGibberish(2000)}
                </pre>`;
    }
}, 500);

// 4. Blok shortcut inspect & copy source
window.addEventListener('keydown', e => {
    // F12, Ctrl+Shift+I/C/J, Ctrl+U
    if (
        e.key === 'F12' ||
        (e.ctrlKey && e.shiftKey && ['I', 'C', 'J'].includes(e.key)) ||
        (e.ctrlKey && e.key === 'u')
    ) e.preventDefault();
});
window.addEventListener('contextmenu', e => e.preventDefault());