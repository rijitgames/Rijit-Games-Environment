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
                            "opcode": "get_username",
                            "blockType": "reporter",
                            "text": "Get Username",
                            "arguments": {}
                        },
                        {
                            "opcode": "get_user_data",
                            "blockType": "reporter",
                            "text": "Get user data [username]",
                            "arguments": {
                                "type": "String",
                                "defultValue": "mrRijit"
                            }
                        },
                ],
        };
    }
    
    getUsername() {

    }

    getUserData({username}) {
        return fetch("https://rijitgames.github.io/api/user" + username).then(username2 => {
            throw username2;
        });
    }

}

Scratch.extensions.register(new rijitblocks());