let secretNumber = Math.trunc(Math.random() * 20)+1;
let score = 20;
let highscore =0;

function displayMessage(message){
    document.querySelector('.message').textContent = message;
}



document.querySelector('.again').addEventListener('click', function(){
    score = 20;
    secretNumber = Math.trunc(Math.random()*20)+1;
    displayMessage('Start Guessing');
    document.querySelector('.score').textContent=score;
    document.querySelector('.number').textContent='?';
    document.querySelector('.guess').value = '';
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';



})

document.querySelector('.check').addEventListener('click',function(){
    const guess = Number(document.querySelector('.guess').value);
    if(!guess){
        displayMessage('No input is Given');
    }
    else if(guess===secretNumber){
        displayMessage('🥳🥳🥳🎆You guessed it!!');
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';
        document.querySelector('.number').textContent = secretNumber;
        if(score>highscore){
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }


    }
    else if (guess!==secretNumber){
        if(score>1){
            displayMessage(guess > secretNumber ?
            'Too High' : 'Too low');

            document.querySelector('.message').textContent = guess > secretNumber ?
            'Too High': 'Too low';
            score--;
            document.querySelector('.score').textContent = score;
        }

        else{
            displayMessage('You Lost the game X_X');
            document.querySelector('.score').textContent = 0;
        }
    }
    

});
