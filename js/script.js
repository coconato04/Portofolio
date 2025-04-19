function loadPage(page) {
    fetch(page)
        .then(r => r.text())
        .then(html => {
            document.getElementById("content").innerHTML = html;
            // 1) Remove any previously injected CSS
            document.querySelectorAll("link[data-dynamic]").forEach(link => link.remove());

            // 2) Tentukan file CSS mana yang dibutuhkan
            let cssFile = "";
            if (page.includes("dashboard")) cssFile = "/style/dashboard.css";
            else if (page.includes("profile")) cssFile = "/style/profile.css";
            else if (page.includes("Work_Experience")) cssFile = "/style/work.css";
            else if (page.includes("Project_Experience")) cssFile = "/style/project.css";
            else if (page.includes("certificates")) cssFile = "/style/certificates.css";

            // 3) Append baru jika ada
            if (cssFile) {
                const link = document.createElement("link");
                link.rel = "stylesheet";
                link.href = cssFile;
                link.setAttribute("data-dynamic", ""); // <-- tandai
                document.head.appendChild(link);
            }
        })
        .catch(err => console.error(err));
}