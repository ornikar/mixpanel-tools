
// Create a tab in the devtools area
chrome.devtools.panels.create("Ornikar Mixpanel Tools", "logo.png", "panel.html", function (panel) { 
    console.log(panel);
});
