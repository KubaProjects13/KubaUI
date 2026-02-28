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

    const bar = document.querySelector(".bottombar");
    if (bar) {
        // Pokud má stránka data-bars="none", schováme bar, jinak ho ukážeme
        if (el.dataset.bottombar === "none") {
            bar.style.display = "none";
        } else {
            bar.style.display = "flex";
        }
    }

    renderTopBar();
}

// default page
document.addEventListener('DOMContentLoaded', () => {
    showPage("page2");
});

// debug currentPage
window.addEventListener("keydown", (event) => {
    if (event.key.toLowerCase() === "y" && event.ctrlKey) {
        
        console.log(currentPage + " currentPage");
        console.log(previousPage + " previousPage");
    }
});