/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var scores, roundScore, activePlayer, gamePlaying;
gamePlaying = true;
function endTurn(){
  document.querySelector('#current-' + activePlayer).textContent = 0;
  activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
  roundScore = 0;
  document.querySelector('.player-0-panel').classList.toggle('active');
  document.querySelector('.player-1-panel').classList.toggle('active');
  document.querySelector('.dice').style.display = 'none';
}

//console.log(dice);
//document.querySelector('#current-' + activePlayer).textContent = dice;
//document.querySelector('#current-' + activePlayer).innerHTML = '<em>' + dice + '</em>';

//var x = document.querySelector('#score-0').textContent;
//console.log(x);
function resetGame(){
  document.querySelector('.dice').style.display = 'none';
  document.getElementById('score-0').textContent = '0';
  document.getElementById('score-1').textContent = '0';
  document.getElementById('current-0').textContent = '0';
  document.getElementById('current-1').textContent = '0';
  document.getElementById('name-0').textContent = 'Player 1';
  document.getElementById('name-1').textContent = 'Player 2';
  gamePlaying = true;
  scores = [0,0];
  roundScore = 0;
  activePlayer = 0;
  document.querySelector('.player-0-panel').classList.remove('active');
  document.querySelector('.player-0-panel').classList.add('active');
  document.querySelector('.player-1-panel').classList.remove('active');
  document.querySelector('.player-0-panel').classList.remove('winner');
  document.querySelector('.player-1-panel').classList.remove('winner');
}

resetGame();



// roll the dice
document.querySelector('.btn-roll').addEventListener('click', function(){
  if(gamePlaying){
  // 1. Generate random number
  var dice = Math.floor(Math.random() * 6) + 1;
  console.log(activePlayer);
  // 2. Display result (Dice png)
  console.log(dice);
  var diceDom = document.querySelector('.dice');
  diceDom.style.display = 'block';
  diceDom.src = 'dice-' + dice +'.png';
  // 3. Update the round score if dice !=1
  if (dice !== 1){
    roundScore += dice;
    document.querySelector('#current-' + activePlayer).textContent = roundScore;

  } // end of if statement
  else{
//    alert('Sorry, you rolled a 1.  Your turn is over');

    endTurn();
//    document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
//    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
//    roundScore = 0;
//      document.querySelector('.player-0-panel').classList.toggle('active');
//      document.querySelector('.player-1-panel').classList.toggle('active');
//      document.querySelector('.dice').style.display = 'none';
//    document.querySelector('.player-' + activePlayer + '-panel').classList.add('active');
//    document.querySelector('.player-0-panel').classlist.remove('active');
//    document.querySelector('.player-1-panel').classlist.add('active');
    /*  if (activePlayer == 0){
      activePlayer = 1;
      console.log('Set activePlayer to 1');
    }
    else {
      activePlayer = 0;
      console.log('Set activePlayer to 0');
    } */
  } //end of else statement
}
});

  document.querySelector('.btn-hold').addEventListener('click', function(){
    if(gamePlaying){
    scores[activePlayer] += roundScore;
//    var updatedscore = scores[activePlayer];
    document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
    if (scores[activePlayer] >= 100){
      //alert('The Game is Over - You Win');
      document.querySelector('#name-' + activePlayer).textContent = 'Winner !';
      document.querySelector('.dice').style.display = 'none';
      document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
      document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
      gamePlaying = false;
    }
    else{
      endTurn();
    }
//  document.querySelector('#current-' + activePlayer).textContent = 0;
//    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
//    document.querySelector('.player-0-panel').classList.toggle('active');
//    document.querySelector('.player-1-panel').classList.toggle('active');
//    roundScore = 0;
}
  });

  document.querySelector('.btn-new').addEventListener('click', function(){
    resetGame();
  });
