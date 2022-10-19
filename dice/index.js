const player0A = document.querySelector('.player_0')
const player1A = document.querySelector('.player_1')


const score0A = document.getElementById('score_0')
const score1A = document.getElementById('score_1')


const current0A = document.getElementById('current_0')
const current1A = document.getElementById('current_1')

const dice = document.querySelector('.dice')
const btn_new = document.querySelector('.btn_new')
const btn_hold = document.querySelector('.btn_hold')
const btn_roll = document.querySelector('.btn_roll')


let scores, currentScore, activePlayer, game;
// Initial state
function initial_state() {
    scores = [0,0];
    currentScore=0;
    activePlayer=0;
    game=true;


score0A.textContent = 0
score1A.textContent = 0
current0A.textContent = 0
current1A.textContent = 0

dice.classList.add('hidden');
player0A.classList.remove('player_winner')
player1A.classList.remove('player_winner')
player0A.classList.add('player_active')
player1A.classList.remove('player_active')
}
initial_state();

btn_roll.addEventListener('click', function () {
    if(game) {
        const random_dice = Math.floor(Math.random() * 6) + 1;

        dice.classList.remove('hidden');
        dice.src = `dice-${random_dice}.png`;


        if (random_dice !== 1) {
            currentScore += random_dice;
            document.getElementById(`current_${activePlayer}`).textContent = currentScore;
        }
        else {

            switchPlayers();

        }
    }
})
// HOLD
btn_hold.addEventListener('click', function() {
    if(game) {
        scores[activePlayer] += currentScore;


        document.getElementById(`score_${activePlayer}`).textContent = scores[activePlayer];
        if(scores[activePlayer] >= 50) {
            game = false;
            dice.classList.add('hidden');


            document.querySelector(`.player_${activePlayer}`).classList.add('player_winner');
            document.querySelector(`.player_${activePlayer}`).classList.remove('player_active');

        } else {
            switchPlayers();
        }
    }
});
function switchPlayers() {
    document.getElementById(`current_${activePlayer}`).textContent = 0;
    currentScore = 0
    if (activePlayer == 1) {
        activePlayer = 0
    } else {
activePlayer = 1
    }
    player0A.classList.toggle('player_active')
    player1A.classList.toggle('player_active')
}
btn_new.addEventListener('click', initial_state)

