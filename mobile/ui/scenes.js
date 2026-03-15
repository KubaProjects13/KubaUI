// KubaUI JS, ALL RIGHTS RESERVED

let currentPage = 0;
let previousPage = 0;

const buttons = document.querySelectorAll(".hrefButton");
const pages = document.querySelectorAll(".hrefPage");

// href buttons
buttons.forEach(button => {
    button.addEventListener("click", () => {
        const targetId = button.dataset.page;
        showPage(targetId);
    });
});

// like when u press a button then showpage(page3);
function showPage(targetId) {
    pages.forEach(page => page.classList.remove("active"));

    const el = document.getElementById(targetId);
    if (!el) return;

    el.classList.add("active");
    previousPage = currentPage;

    currentPage = targetId;

    // bottombar
    const bottombar = document.querySelector(".bottombar");

    if (bottombar) {
        if (el.dataset.bottombar === "none") {
            bottombar.style.display = "none";
        } else {
            bottombar.style.display = "flex";
        }
    }

    // topbar
    const topbar = document.querySelector(".topbar");
    const topbarMain = document.querySelector(".topbarMain");

    if (topbar) {
        if (el.dataset.topbar === "none") {
            topbar.style.display = "none";
        } else {
            topbar.style.display = "flex";
        }
    }

    let title = el.dataset.topbar || "Page";
    let backButton = ``;
    let settingsButton = ``;

    if (previousPage === 0) {
        backButton = `
            <div class="topbar-side">
                <button class="buttonDisabled">Back</button>
            </div>
        `;
    } else {
        backButton = `
            <div class="topbar-side">
                <button data-action="back">Back</button>
            </div>
        `
    };

    if (currentPage === "page20") {
        settingsButton = `
            <div class="topbar-side">
                <button class="buttonDisabled">Settings</button>
            </div>
        `;
    } else {
        settingsButton = `
            <div class="topbar-side">
                <button data-action="settings">Settings</button>
            </div>
        `;
    };

    topbarMain.innerHTML = `
        ${backButton}

        <h1>${title}</h1>

        ${settingsButton}
    `
}

// topbar buttons
document.addEventListener('DOMContentLoaded', () => {
    document.addEventListener("click", (e) => {
        const action = e.target.dataset.action;
        if (!action) return;

        if (action === "back") {
            showPage(previousPage);
        }

        if (action === "settings") {
            showPage("page20"); 
        }
    });
});

// default page
document.addEventListener('DOMContentLoaded', () => {
    showPage("page1");
});

// debug currentPage
window.addEventListener("keydown", (event) => {
    if (event.key.toLowerCase() === "y" && event.ctrlKey) {
        
        console.log(currentPage + " currentPage");
        console.log(previousPage + " previousPage");
    }
});