/**
 * Revealing module pattern - singleton
 */
var player = function () {

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

    return {
        logPlayer: logPlayer,
        setName: setName,
        getName: getName
    }
}(); // function executes immediately and returns access to private members
