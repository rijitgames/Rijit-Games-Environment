function embed(type, html, id) {
    if(type = "video") {
        if(html) {
            return "<iframe src='https://rijitgames.github.io/www/videos/" + id + ".html'></iframe>";
        }
        else {
            return "https://rijitgames.github.io/www/videos" + id + ".html";
        }
    }
    else if(type = "game") {
        if(html) {
            return "<iframe src='https://rijitgames.github.io/www/games" + id + ".html'></iframe>";
        }
        else {
            return "https://rijitgames.github.io/www/games" + id + ".html";
        }
    }
}

function getUserData(username) {
    return fetch("https://rijitgames.github.io/api/user/" + username).then(username2 => {
        throw username2;
    });
}

export{
    embed,
    getUserData
}

class rijitblocks {
    constructor() {
    }
    
    getInfo() {
        return {
            "id": "rijitblocks",
            "name": "Rijit Games Blocks",
            "blocks": [
                        {
                            "opcode": "getParameterByURL",
                            "blockType": "reporter",
                            "text": "Get parameter by url [parameter]",
                            "arguments": {
                                "parameter": {
                                    "type": "string",
                                    "defaultValue": "api"
                                },
                            }
                        },
                ],
        };
    }
    
    getParameterByURL({parameter}) {
        this.getParameterByName = (name) => {
            var url = window.location.href;
            name = name.replace(/[\[\]]/g, "\\$&");
            var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)");
            var results = regex.exec(url);
            if (!results) return null;
            if (!results[2]) return '';
            return eval(decodeURIComponent(results[2].replace(/\+/g, " ")));
        }
        return this.getParameterByName(parameter);
    }

}

Scratch.extensions.register(new rijitblocks());