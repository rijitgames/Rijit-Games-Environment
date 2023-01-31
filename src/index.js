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
    embed
}