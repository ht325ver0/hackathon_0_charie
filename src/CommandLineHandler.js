chrome.commands.onCommand.addListener((command) => {
    if (command !== "open-popup") return;
    chrome.tabs.create({ url: "https://developer.chrome.com" });
});