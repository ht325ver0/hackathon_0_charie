import { getTranslationUrl } from "./trCommand.js";

let urlMap = {
    'home': 'https://www.google.com',
    'mail': 'https://mail.google.com/',
    'tr' : 'https://translate.google.co.jp/',
    'map' : 'https://maps.google.com/',
    'drive' : 'https://drive.google.com/',
    'docs' : 'https://docs.google.com/',
    'sheets' : 'https://spreadsheets.google.com/',
    'slides' : 'https://slides.google.com/',
    'cal' : 'https://calendar.google.com/',
    'yt' : 'https://www.youtube.com/',
    'gemini' : 'https://gemini.google.com/',
    'dino' : 'chrome://dino/',
};

function loadCommands() {
    chrome.storage.local.get('urlMap', (result) => {
        if (chrome.runtime.lastError) {
            console.error('Error loading commands:', chrome.runtime.lastError);
        } else if (result.urlMap) {
            urlMap = result.urlMap; // 保存されたコマンドを設定
            console.log('Loaded commands:', urlMap);
        }
    });
}


export function isValidInput(input){

    const spInput = input.trim().split(/\s+/);
    const command = spInput[0];
    const query = spInput.slice(1).join(' '); 
    const token = query.trim().split(/\s+/); 
    loadCommands();


    if (urlMap[command]) {
        let targetUrl = urlMap[command];
        if (command === 'tr' && query) {
            targetUrl += getTranslationUrl(query);
            chrome.tabs.create({ url: targetUrl });
        } else {
            chrome.tabs.create({ url: targetUrl });
        }
    }   
    else if (command === "make" && token.length === 2) {
        urlMap[token[0]] = token[1];
        console.log(`Added command: ${token[0]} with URL: ${token[1]}`);

        chrome.storage.local.set({ urlMap: urlMap }, () => {
            console.log('New command saved:', urlMap);
        });

        const div = document.createElement('div');
        div.innerHTML = `<span style="color:green"> Your command "${token[0]}" has been registered as url:"${token[1]}"</span>`;
        document.body.appendChild(div);

    } else if (command === "rm" && token.length === 1) {
        delete urlMap[token[0]];
        console.log(`Removed command: ${token[0]}`);

        const div = document.createElement('div');
        div.innerHTML = `<span style="color:green"> Command "${token[0]}" has been deleted</span>`;
        document.body.appendChild(div);

        chrome.storage.local.set({ urlMap: urlMap }, () => {
            console.log('Command removed:', urlMap);
        });

    }else if (command === "help"){
        const div = document.createElement('div');
        div.innerHTML = `<span style="color:white"> "Command": "URL"</span>`;
        document.body.appendChild(div);
        Object.entries(urlMap).forEach(([key, value]) => {
            const div = document.createElement('div');
            div.innerHTML = `<span style="color:white"> "${key}": "${value}"</span>`;
            document.body.appendChild(div);
        });
    } else {
        console.warn(`Unsupported command: ${command}`);
        const div = document.createElement('div');
        div.innerHTML = `<span style="color:red"> Error:No such Command "${command}" :Check the registered commands with the "help" command.</span>`;
        document.body.appendChild(div);
    }
}
loadCommands();