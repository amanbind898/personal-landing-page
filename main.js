

// Add event listeners to dot menus to open the modal
document.querySelectorAll('.dot-menu').forEach(function(dotMenu) {
    dotMenu.addEventListener('click', openModal);
});
// main.js

function openModal() {
    document.getElementById('modalOverlay').style.display = 'block';
    document.getElementById('shareModal').style.display = 'block';
}

function closeModal() {
    document.getElementById('modalOverlay').style.display = 'none';
    document.getElementById('shareModal').style.display = 'none';
}

function shareOnPlatform(platform) {
    alert('Sharing on ' + platform);
    closeModal();
}

function shareViaWhatsApp() {
    // Implement logic to share via WhatsApp
    alert('Sharing via WhatsApp');
    closeModal();
}

function shareViaMessenger() {
    // Implement logic to share via Messenger
    alert('Sharing via Messenger');
    closeModal();
}

function shareViaEmail() {
    // Implement logic to share via Email
    alert('Sharing via Email');
    closeModal();
}


function copyLink() {
    var linkText = document.getElementById('linkText');
    var range = document.createRange();
    range.selectNode(linkText);
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(range);
    document.execCommand('copy');
    window.getSelection().removeAllRanges();
    alert('Link copied to clipboard');
}
