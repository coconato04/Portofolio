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