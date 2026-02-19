// --- CONFIGURATION ---
const SITE_PASSWORD = "openthegames"; // Change this to your desired password
let panicUrl = localStorage.getItem('panicUrl') || "https://www.ixl.com/dashboard";

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
    }
}

// --- PANIC BUTTON LOGIC ---
document.addEventListener('keydown', (e) => {
    // Triggers if you press the "Escape" key
    if (e.key === "Escape") {
        window.location."https://myapps.classlink.com/home" = panicUrl;
    }
});

// --- UPDATED SAVE FUNCTION ---
function saveCloak() {
    const title = document.getElementById('cloakTitle').value;
    const icon = document.getElementById('cloakIcon').value;
    const pUrl = document.getElementById('panicUrl').value;

    localStorage.setItem('home-mydrive', title);
    localStorage.setItem("https://www.vecteezy.com/png/17395378-google-drive-icons"', icon);
    localStorage.setItem('https://myapps.classlink.com/home', pUrl);
    
    panicUrl = pUrl; // Update local variable
    alert("set changes");
}

// --- CLOAKING LOGIC (from previous step) ---
document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
        document.title = localStorage.getItem('cloakTitle') || "My Drive";
        document.getElementById('favicon').href = localStorage.getItem('https://www.vecteezy.com/png/17395378-google-drive-icons') || icon;
    } else {
        document.title = "my-drive | home";
    }
});
