function renderTopBar() {
    document.querySelectorAll(".topbar").forEach(topbar => {
        const title = topbar.dataset.title || "Page";
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

        topbar.innerHTML = `
            ${backButton}

            <h1>${title}</h1>

            ${settingsButton}
        `;
    });
};
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

    renderTopBar();
});
});

// renderTopBar();