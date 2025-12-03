function initThemeToggle() {
    const toggleBtn = document.getElementById("theme-toggle");
    const sunIcon = document.getElementById("icon-sun");
    const moonIcon = document.getElementById("icon-moon");

    function updateIcons() {
        if (!sunIcon || !moonIcon) return;
        if (document.documentElement.classList.contains("dark")) {
            sunIcon.classList.add("hidden");
            moonIcon.classList.remove("hidden");
        } else {
            sunIcon.classList.remove("hidden");
            moonIcon.classList.add("hidden");
        }
    }

    // Load saved theme on page load
    if (localStorage.getItem("theme") === "dark") {
        document.documentElement.classList.add("dark");
    }
    updateIcons();

    // Only attach event if button exists
    if (toggleBtn) {
        toggleBtn.addEventListener("click", () => {
            document.documentElement.classList.toggle("dark");

            if (document.documentElement.classList.contains("dark")) {
                localStorage.setItem("theme", "dark");
            } else {
                localStorage.setItem("theme", "light");
            }

            updateIcons();
        });
    }
}
