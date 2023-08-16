/*
   JavaScript Email Validation
   https://www.w3schools.blog/email-validation-javascript-js
*/
export function validEmail(str) {
    const mailformat = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    
    return str.match(mailformat)
}

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

   original image url from github:
    /Albert0i/next-methinks/raw/main/img/building.JPG

   rebased image url: 
    https://raw.githubusercontent.com/Albert0i/next-methinks/main/img/building.JPG
    

*/
export function reBaseImageUrl(content, gitUsername) {
    //const gitUsername = 'Albert0i'

    return content
        .replaceAll(`\/${gitUsername}`, `https:\/\/raw.githubusercontent.com\/${gitUsername}`)
        .replaceAll('\/raw\/', '\/')
        .replaceAll('class', 'className')   // this will eliminate any warning message. 
        .replaceAll('itemprop', 'itemProp')
        /*
            Warning: Invalid DOM property `class`. Did you mean `className`?
            Warning: Invalid DOM property `itemprop`. Did you mean `itemProp`?
        */
}
