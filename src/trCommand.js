export function getTranslationUrl(string){
    var sp = string.trim().split(/\s+/);
    var lang = sp[0];
    var text = sp.slice(1).join(' ');

    var tr = `?sl=auto&tl=${lang}&text=${encodeURIComponent(text)}`;
    return tr
}