window.onload = function () {
    let play_rock_paper_scissors = document.getElementById("RPS");
    let game_layout = document.getElementById("current-game-layout");
    let game_code = document.getElementById("current-game-script");
    let head = document.getElementsByTagName("head")[0];

    
    play_rock_paper_scissors.onclick = function(){ 
        play_rock_paper_scissors.classList.add("active-game");
        loadData("css/rockpaperscissors.css","scripts/rockpaperscissors.js");
        game_code.onload = function(){
            console.log("entered");
            runGame();
        }
        head.appendChild(game_code);
        //runGame();
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