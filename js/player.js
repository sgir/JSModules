//private members here.
var playerName = '';

function logPlayer() {
    console.log('The current player is ' + playerName + '.');
}

function setName(newName) {
    playerName = newName;
}

function getName() {
    return playerName;
}

//expose through exports object
module.exports = {
    logPlayer: logPlayer,
    setName: setName,
    getName: getName
};


