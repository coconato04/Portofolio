function loadPage(page) {
    fetch(page)
        .then(response => response.text())
        .then(data => {
            document.getElementById("content").innerHTML = data;

            // Hapus CSS lama
            // document.querySelectorAll("link[rel='stylesheet']").forEach(link => {
            //     if (link.href.includes("profile.css") || link.href.includes("work.css") || link.href.includes("project.css")) {
            //         link.remove();
            //     }
            // });

            // Tambah CSS yang sesuai dengan halaman yang dimuat
            let cssFile = "";

            if (page.includes("dashboard")) {
                cssFile = "css/dashboard.css";
            } else if (page.includes("profile")) {
                cssFile = "css/profile.css";
            } else if (page.includes("Work_Experience")) {
                cssFile = "css/work.css";
            } else if (page.includes("Project_Experience")) {
                cssFile = "css/project.css";
            } else if (page.includes("certificates")) {
                cssFile = "css/certificates.css";
            }

            if (cssFile) {
                let newLink = document.createElement("link");
                newLink.rel = "stylesheet";
                newLink.href = cssFile;
                document.head.appendChild(newLink);
            }
        })
        .catch(error => console.error("Error loading the page: ", error));
}