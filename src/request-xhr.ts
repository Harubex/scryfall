const endpoint = "https://api.scryfall.com";

function request(uri: string, cb: (resp: object) => void) {
    const xhr = new XMLHttpRequest();
    xhr.addEventListener("error", (err) => {
        throw err;
    });
    xhr.addEventListener("readystatechange", () => {
        if (xhr.readyState == XMLHttpRequest.DONE) {
            if (xhr.status != 200) {
                throw new Error(xhr.statusText);
            }
            cb(JSON.parse(xhr.response));
        }
    });
    xhr.open("GET", endpoint + uri);
    //xhr.setRequestHeader("Authorization", "");
    xhr.send();
}