chrome.commands.onCommand.addListener((command) => {
  const urlMap = {
    'home': '',
    'mail': 'https://mail.google.com/',
    'tr' : 'https://translate.google.co.jp/',
    'map' : 'https://maps.google.com/',
    'drive' : 'https://drive.google.com/',
    'docs' : 'https://docs.google.com/',
    'sheets' : 'https://spreadsheets.google.com/',
    'slides' : 'https://slides.google.com/',
    'keeps' : 'https://slides.google.com/',
    'photos' : 'https://calendar.google.com/',
    'meet' : 'https://meet.google.com/',
    'yt' : 'https://www.youtube.com/',
    'gemini' : 'https://gemini.google.com/',
    'dino' : 'chrome://dino/',

  };

  if(command === "open-popup") {
    chrome.action.openPopup();
  }
  else if(isTerminalMode) {
    const targetUrl = urlMap[command];
    if(targetUrl) {
      chrome.tabs.create({ url: targetUrl });
    }
    else {
      console.warn(`Unsupported command: ${command}`);
    }
  }
});