import { API_URL, API_KEY } from './config.js';

document.addEventListener("DOMContentLoaded", function() {
    const iframe = document.getElementById("siteFrame");
    const loaderOverlay = document.getElementById("loader-overlay");
    loaderOverlay.style.display = 'flex';

    setTimeout(() => {
        fetch(API_URL, {
            headers: {
                'apikey': API_KEY,
                'Authorization': `Bearer ${API_KEY}`
            }
        })
        .then(response => response.json())
        .then(data => {
            if (data.length > 0) {
                const url = data[0].url;
                iframe.src = url;
                iframe.style.display = 'block';
            } else {
                console.error("No URL found in the response.");
                loaderOverlay.innerHTML = "<p>Failed to load content.</p>";
            }
            loaderOverlay.style.display = 'none';
        })
        .catch(error => {
            console.error("Error fetching URL:", error);
            loaderOverlay.innerHTML = "<p>Failed to load content.</p>";
            loaderOverlay.style.display = 'none';
        });
    }, 4000); 
});
