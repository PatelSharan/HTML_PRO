fetch("components/header.html") // adjust path if HTML is in subfolder
    .then(res => res.text())
    .then(data => {
        document.getElementById("header").innerHTML = data;

        // 1️⃣ Initialize theme toggle
        if (typeof initThemeToggle === "function") initThemeToggle();

        // 2️⃣ Initialize Flowbite components AFTER header loads
        if (window.Flowbite && typeof Flowbite.initAll === "function") {
            Flowbite.initAll();
        } else {
            // Dynamically load Flowbite if not already loaded
            const script = document.createElement("script");
            script.src = "https://unpkg.com/flowbite@1.6.6/dist/flowbite.min.js";
            script.onload = () => {
                if (window.Flowbite && typeof Flowbite.initAll === "function") {
                    Flowbite.initAll();
                }
            };
            document.body.appendChild(script);
        }
    })
    .catch(err => console.error("Failed to load header:", err));
