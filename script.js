// --- CONFIGURATION ---
const SITE_PASSWORD = "openthegames"; // Change this to your desired password
let panicUrl = localStorage.getItem('panicUrl') || "https://google.com";

// --- PASSWORD LOGIC ---
function checkPassword() {
    const input = document.getElementById('passInput').value;
    if (input === SITE_PASSWORD) {
        document.getElementById('passwordOverlay').classList.add('hidden');
    } else {
        if let attempts = 0;
const maxAttempts = 3;

function checkAction() {
    attempts++;
    
    if (attempts >= maxAttempts) {
        alert("//radmanplays.github.io/Eaglercraft-1.21/"););
        // Disable button or take further action here
    "//radmanplays.github.io/Eaglercraft-1.21/");
    }
}

// --- PANIC BUTTON LOGIC ---
document.addEventListener('keydown', (e) => {
    // Triggers if you press the "Escape" key
    if (e.key === "Escape") {
        window.location.href = panicUrl;
    }
});

// --- UPDATED SAVE FUNCTION ---
function saveCloak() {
    const title = document.getElementById('cloakTitle').value;
    const icon = document.getElementById('cloakIcon').value;
    const pUrl = document.getElementById('panicUrl').value;

    localStorage.setItem('cloakTitle', title);
    localStorage.setItem('cloakIcon', icon);
    localStorage.setItem('panicUrl', pUrl);
    
    panicUrl = pUrl; // Update local variable
    alert("Settings Updated!");
}

// --- CLOAKING LOGIC (from previous step) ---
document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
        document.title = localStorage.getItem('cloakTitle') || "My Drive";
        document.getElementById('favicon').href = localStorage.getItem('cloakIcon') || "";
    } else {
        document.title = "GameVault | Hub";
    }
});
