import { API_URL, API_KEY } from './config.js';

chrome.runtime.onInstalled.addListener(() => {
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
            chrome.tabs.create({ url: url });
        } else {
            console.error('No URL found in the response data.');
        }
    })
    .catch(error => console.error('Error:', error));
});
