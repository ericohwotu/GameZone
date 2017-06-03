window.onload = function () {
    let play_rock_paper_scissors = document.getElementById("RPS");
    let play_pong = document.getElementById("PONG");
    let game_layout = document.getElementById("current-game-layout");
    let game_code = document.getElementById("current-game-script");
    let head = document.getElementsByTagName("head")[0];

    
    play_rock_paper_scissors.onclick = function(){ 
        play_rock_paper_scissors.classList.add("active-game");
        play_pong.classList.remove("active-game");
        loadData("css/rockpaperscissors.css","scripts/rockpaperscissors.js");
        game_code.onload = function(){
            console.log("entered");
            runGame();
        }
        head.appendChild(game_code);
    };
    play_pong.onclick = function(){ 
        play_pong.classList.add("active-game");
        play_rock_paper_scissors.classList.remove("active-game");
        loadData("css/pong.css","scripts/pong.js");
        game_code.onload = function(){
            console.log("entered");
            runGame();
        }
        head.appendChild(game_code);
    };

    function loadData(css_file, script_file){
        game_layout.setAttribute("href",css_file);
        game_code.remove();
        game_code = document.createElement("script");
        game_code.setAttribute("src",script_file);
        game_code.setAttribute("type","text/javascript");
        game_code.setAttribute("id","current-game-script");
    };
};