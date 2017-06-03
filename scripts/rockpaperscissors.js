function runGame(){
    init();
    let max_round = 20;
    let play_rock = document.getElementById("play-rock");
    let play_paper = document.getElementById("play-paper");
    let play_scissors = document.getElementById("play-scissors");
    
    let game_button = document.getElementsByClassName("game-action");

    let player_option = document.getElementById("player-option");
    let computer_option = document.getElementById("computer-option");

    let player_score_container = document.getElementById("player-score");
    let computer_score_container = document.getElementById("computer-score");

    let start_game = document.getElementById("start-game");
    let cover_menu = document.getElementById("cover-menu");
    let winner_container = document.getElementById("winner");
    let score_container = document.getElementById("score");
    
    let possible_moves = ["rock", "paper", "scissors"];
    let rock_points = [0, 0, 1];
    let paper_points = [1, 0, 0];
    let scissors_points = [0, 1, 0];
    let points = [rock_points, paper_points, scissors_points];
    
    let player_score = 0;
    let computer_score = 0;
    let round = 0;
    let computer_moves = [];
    
    getComputerMoves(computer_moves,max_round);

    for (let i = 0; i < game_button.length; i++) {
        game_button[i].onclick = function () {
            
            let move = this.id;

            player_option.innerHTML = move;
            computer_option.innerHTML = possible_moves[computer_moves[round]];
            
            switch (move) {
                case possible_moves[0]:
                    player_score += points[0][computer_moves[round]];
                    computer_score += points[computer_moves[round]][0];
                    //console.log("computer move = " + computer_moves[i] + "; points (0,1,2): (" + points[0][0] +","+ points[0][1] +","+ points[0][2] +"); player score = " + player_score);
                    break;
                case possible_moves[1]:
                    player_score += points[1][computer_moves[round]];
                    computer_score += points[computer_moves[round]][1];
                    //console.log("computer move = " + computer_moves[i] + " points (0,1,2): (" + points[1][0] +","+ points[1][1] +","+ points[1][2] +"); player score = " + player_score);
                    break;
                case possible_moves[2]:
                    player_score += points[2][computer_moves[round]];
                    computer_score += points[computer_moves[round]][2];
                    break;
            }

            player_score_container.innerHTML = player_score;
            computer_score_container.innerHTML = computer_score;

            round++;
            if(round === max_round){
                getComputerMoves(computer_moves,max_round);
                round=0;
                if (player_score > computer_score){
                    winner_container.innerHTML = "Congratulations You Won!!!";
                }else if(player_score < computer_score){
                    winner_container.innerHTML = "Sorry You Lost";
                }else{
                    winner_container.innerHTML = "Its A Draw";
                }
                score_container.innerHTML = "Your Score: "+player_score+ " Computer Score: "+computer_score;
                player_score = 0; 
                computer_score = 0;
                player_score_container.innerHTML = player_score;
                computer_score_container.innerHTML = computer_score;
                cover_menu.style.display = "block";
                
            }
            setTimeout(function(){player_option.innerHTML="";computer_option.innerHTML="";},2000);
        }
    }

    start_game.onclick = function(){
        console.log(this);
        cover_menu.style.display = "none";
    }

}

function getComputerMoves(computer_moves, max_round){
    for (let i = 0; i < max_round; i++) {
        computer_moves[i] = Math.floor((Math.random() * 3));
    }
}

function init(){
    let game_area = document.getElementById("game-area");
    game_area.innerHTML = '<div class="cover-menu start-game" id="cover-menu"><div class="cover-menu-content"><p class="winner" id="winner">Start New Game</p><p class="winner" id="score"></p><button type="button" class="btn" id="start-game">Start</button></div></div>'
        + '<table class="table table-striped"><thead><tr><th> Player </th><th> Computer </th></tr></thead><tbody><tr><td id="player-score" > 0 </td><td id="computer-score"> 0 </td></tr></tbody></table>'
        + '<div class="game-divider col-xs-12"></div><div class="col-xs-12 game-users-container"><div class="game-player-container col-xs-6"><h3 id="player-option"></h3></div><div class="game-computer-container col-xs-6"><h3 id="computer-option"></h3></div></div><div class="game-actions-container">'
        + '<div class="col-xs-4 game-action" id="rock"><img src="icon/blank.png" id="rock-icon" class="game-btn-icon"></div><div class="col-xs-4 game-action" id="paper"><img src="icon/blank.png" id="paper-icon" class="game-btn-icon"></div><div class="col-xs-4 game-action" id="scissors" ><img src="icon/blank.png" id="scissors-icon" class="game-btn-icon"></div></div>';
}