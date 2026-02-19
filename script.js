let originalTitle = document.title;
let originalFavicon = document.getElementById('favicon').href;

// Load saved settings from local storage
let cloakTitle = localStorage.getItem('cloakTitle') || "Google Drive";
let cloakIcon = localStorage.getItem('cloakIcon') || "https://ssl.gstatic.com/images/branding/product/1x/drive_2020q4_32dp.png";

function saveCloak() {
    cloakTitle = document.getElementById('cloakTitle').value;
    cloakIcon = document.getElementById('cloakIcon').value;
    localStorage.setItem('cloakTitle', cloakTitle);
    localStorage.setItem('cloakIcon', cloakIcon);
    alert("Settings Saved!");
}

document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
        document.title = cloakTitle;
        document.getElementById('favicon').href = cloakIcon;
    } else {
        document.title = originalTitle;
        document.getElementById('favicon').href = originalFavicon;
    }
});

function openCloakSettings() { document.getElementById('cloakModal').style.display = 'block'; }
function closeCloakSettings() { document.getElementById('cloakModal').style.display = 'none'; }
