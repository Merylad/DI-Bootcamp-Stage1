
function playTheGame() {
    const userAnswer = confirm('Would you like to play the game ?');
    if (userAnswer === false) {
      alert('No problem, Goodbye!');
    } else {
      let counter = 0;
      let winner = false;
      while (counter<3){
      const userNumber = parseInt(prompt('Enter a number between 0 and 10'));
  
      if (!isNaN(userNumber)) {
        if (userNumber < 0 || userNumber > 10) {
          alert("This is not a valid number.");
        } else {
          const computerNumber = Math.floor(Math.random() * 11) ;
          console.log (computerNumber);
          counter ++;
          winner = compareNumbers(userNumber,computerNumber, counter);
          if (winner === true){
            break;
          }      

          if (counter ===3){
            alert ('Out of chance!')
          }
          
          
        }
      } else {
        alert("This is not a number.");
      }
      }
    }
    
  }

  function compareNumbers(userNumber,computerNumber, counter){
    
        if (userNumber === computerNumber){
            alert ('WINNER');
            return true;
            
        } else if (userNumber <computerNumber){
            alert ("Your number is smaller then the computer's, guess again");
            counter ++;
        } else {
            alert ("Your number is bigger then the computer's, guess again");
            counter ++;
        }
    }
  