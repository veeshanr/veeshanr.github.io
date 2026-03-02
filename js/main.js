function setTheme(theme) {
    const icon = document.querySelector("button#toggle-theme i");
    if (theme == "dark") {
        if (icon) icon.innerHTML = "brightness_2";
        document.body.classList.add("dark-theme");
        localStorage.setItem("theme", "dark");
    } else if (theme == "light") {
        if (icon) icon.innerHTML = "brightness_low";
        document.body.classList.remove("dark-theme");
        localStorage.setItem("theme", "light");
    } else {
        const hours = (new Date()).getHours();
        if (hours > 7 && hours < 19) {
            setTheme("light");
        } else {
            setTheme("dark");
        }
        if (icon) icon.innerHTML = "brightness_auto";
        localStorage.setItem("theme", "auto");
    }
}

window.addEventListener("DOMContentLoaded", () => {
    setTimeout(() => {
        document.body.classList.add("animate");
    }, 400);

    // Restore saved theme preference
    const stored = localStorage.getItem("theme");
    if (stored) {
        setTheme(stored);
    } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        setTheme('dark');
    }

    // Hamburger menu — toggles sidebar open/closed on mobile
    const menuBtn = document.querySelector("#toggle-menu");
    const sidebar = document.querySelector("#sidebar");
    if (menuBtn && sidebar) {
        menuBtn.addEventListener("click", () => {
            sidebar.classList.toggle("shown");
            menuBtn.setAttribute("aria-expanded", sidebar.classList.contains("shown"));
        });

        // Close sidebar when a nav link is tapped on mobile
        sidebar.querySelectorAll("a").forEach(link => {
            link.addEventListener("click", () => {
                sidebar.classList.remove("shown");
                menuBtn.setAttribute("aria-expanded", "false");
            });
        });
    }

    // Theme toggle — cycles light → dark → auto
    const themeBtn = document.querySelector("#toggle-theme");
    if (themeBtn) {
        themeBtn.addEventListener("click", () => {
            const icon = themeBtn.querySelector("i");
            const current = icon ? icon.innerHTML : "";
            if (current === "brightness_low") {
                setTheme("dark");
            } else if (current === "brightness_auto") {
                setTheme("light");
            } else {
                setTheme("auto");
            }
        });
    }
});
