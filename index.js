function shout(string) {
    return string.toUpperCase();
}

function whisper(string) {
    return string.toLowerCase();
}

function logShout(hello) {
    console.log(hello.toUpperCase());
}

function logWhisper(string) {
    console.log(string.toLowerCase());
}

function sayHiToHeadphonedRoommate(string) {
    let cantAnswer = "I can't hear you!";
    let canAnswer = "YES INDEED!";
    let loveAnswer = "I would love to!";
    if (string.toLowerCase(string) === string) {
        return cantAnswer
    }
    else if (string.toUpperCase(string) === string) {
        return canAnswer
    }
    else if ("Let's have dinner together!" === string) {
        return loveAnswer
    } 
}