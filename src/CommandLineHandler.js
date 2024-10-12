import { getTranslationUrl } from "./trCommand.js";

export function isValidInput(input){
    const urlMap = {
        'home': 'https://www.google.com',
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
    const spInput = input.trim().split(/\s+/);
    const command = spInput[0];
    const query = spInput.slice(1).join(' '); 

    Object.entries(urlMap).forEach(([key, value]) => {
        
        if(command === key) {
            const targetUrl = value;
            if(command === 'key' && query){
                targetUrl += getTranslationUrl(query);
                
            }
            else if(targetUrl) {
                chrome.tabs.create({ url: targetUrl });
                alert("query");
            }
        else {
          console.warn(`Unsupported command: ${command}`);
        }
      }
    });
}