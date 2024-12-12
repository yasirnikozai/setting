const theme_toggle = document.getElementById('theme-toggle');
theme_toggle.addEventListener('click',
    () => {
        document.body.classList.toggle('dark-mode');
        if (document.body.classList.contains('dark-mode')) {
            document.body.style.backgroundColor = '#333'
            document.body.style.color = "#fff"
            theme_toggle.textContent = "Light Mode"
        } else {
            document.body.style.backgroundColor = "#f5f5f5"
            document.body.style.color = "#333"
            theme_toggle.textContent = "Dark Mode"
        }
    }
)