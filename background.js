chrome.webNavigation.onHistoryStateUpdated.addListener(function(details) {
    chrome.tabs.executeScript(null,{file:"blocker.js"});
}, {url: [{urlEquals: 'https://www.facebook.com/'}]});

chrome.webRequest.onCompleted.addListener(function(details) {
    chrome.tabs.executeScript(null,{file:"blocker.js"});
},{urls: [
    '*://*.facebook.com/ajax/pagelet/generic.php/LitestandMoreStoriesPagelet*',
    '*://*.facebook.com/?dpr=1*'
]});
