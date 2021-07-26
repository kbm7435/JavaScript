const getUserChoice = function(userInput){
    userInput = userInput.toLowerCase(); 
      if (userInput ==='rock' ||
          userInput === 'paper' ||
          userInput === 'scissor'
      
      
      ){
        return userInput;
      }else{
        console.log('Error');
      }
      
    }
    
    function getComputerChoice(){
      let rando = Math.floor(Math.random()*(3-0)+0);
      switch (rando){
        case 0:
        return 'rock';
        console.log('rock')
        case 1:
        return 'paper';
        console.log('paper')
        case 2:
        return 'scissor';
        console.log('scissor')
      }
      
    }
    
    function determineWinner(userChoice,computerChoice){
      if (userChoice === computerChoice){
        return console.log("Game is a Tie");
      }else if(userChoice === 'rock'){
        if(computerChoice === 'paper'){
          return console.log('Computer Won');
    
        }else{
          return console.log('User Won')
        }
    
      }
    else if(userChoice === 'paper'){
      if(computerChoice === 'scissors' ){
        return console.log('Computer Won');
      }else{
        return console.log('User Won');
      }
    
      }
    else if(userChoice === 'scissors'){
      if(computerChoice === 'rock'){
        return console.log('Computer Won');
      }else{
        return console.log('User Won');
      }
    
    }
    
    }
    
    function playGame(userChoice,computerChoice){
      
    
    
    
    
    }
    
    determineWinner('scissors','scissors');
    getComputerChoice();