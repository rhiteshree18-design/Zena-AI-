// Open Zena AI website when button is clicked
document.addEventListener('DOMContentLoaded', function() {
    const openButton = document.getElementById('openSite');
    const status = document.getElementById('status');

    // Auto-open on popup load (optional)
    // Uncomment the line below if you want the site to open automatically
    // openZenaAI();

    // Open on button click
    openButton.addEventListener('click', function() {
        openZenaAI();
    });

    function openZenaAI() {
        // Show status message
        status.classList.add('show');

        // Open the website in a new tab
        chrome.tabs.create({
            url: 'https://zenaai.vercel.app',
            active: true
        });

        // Close popup after a short delay
        setTimeout(function() {
            window.close();
        }, 300);
    }
});