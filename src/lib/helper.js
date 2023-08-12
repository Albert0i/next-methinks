/*
   Check if a JavaScript string is a URL
   https://stackoverflow.com/questions/5717093/check-if-a-javascript-string-is-a-url
*/
export function validURL(str) {
    const pattern = new RegExp('^(https?:\\/\\/)?'+ // protocol
        '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ // domain name
        '((\\d{1,3}\\.){3}\\d{1,3}))'+ // OR ip (v4) address
        '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // port and path
        '(\\?[;&a-z\\d%_.~+=-]*)?'+ // query string
        '(\\#[-a-z\\d_]*)?$','i'); // fragment locator
    return !!pattern.test(str);
}

/*
   Remove line breaks from start and end of string
   https://stackoverflow.com/questions/14572413/remove-line-breaks-from-start-and-end-of-string
*/
export function removeLineBreak(str) {
    return str.replace(/^\s+|\s+$/g, '');
}

/* 
  Remove last directory in URL
  https://stackoverflow.com/questions/16750524/remove-last-directory-in-url
*/
export function removeLastDirectory(url) {
    return url.substring(0, url.lastIndexOf('/')) 
}

/* 
   Rebase image url
   WARNING: Work only for github account, by reverse engineering !!!
*/
export function reBaseImageUrl(content) {
    const gitName = 'Albert0i'

    return content
        .replaceAll(`\/${gitName}`, `https:\/\/raw.githubusercontent.com\/${gitName}`)
        .replaceAll('\/raw\/', '\/')
        .replaceAll('class', 'className')
}