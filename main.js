// script.js
document.addEventListener("DOMContentLoaded", function () {
    const contentDiv = document.getElementById("content");

    function loadPage(pageName) {
        const xhr = new XMLHttpRequest();
        xhr.open("GET", pageName + ".html", true);
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4 && xhr.status === 200) {
                contentDiv.innerHTML = xhr.responseText;
            }
        };
        xhr.send();
    }

    // Initial page load
    loadPage("home");

    // Handle navigation clicks
    const navLinks = document.querySelectorAll("nav a");
    navLinks.forEach(function (link) {
        link.addEventListener("click", function (event) {
            event.preventDefault();
            const pageName = link.getAttribute("href").substring(1);
            loadPage(pageName);
        });
    });
});