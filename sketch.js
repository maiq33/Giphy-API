let api = "https://api.giphy.com/v1/gifs/search?"
let apiKey = "api_key=qJy3unluYamCJQct7uphzWiZUSbvV4uN"
let query = "&q=cosmic+cats"
let limit = "&limit=25"

function setup(){
    noCanvas();
    let url = api+apiKey+query+limit;
    loadJSON(url, gotData);
}

function gotData(giphy){
    for (let i = 0; i < giphy.data.length; i++) {
        createImg(giphy.data[i].images.original.url);
                
    }
    
}

