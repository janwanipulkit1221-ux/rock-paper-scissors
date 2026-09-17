let rock= document.querySelector("#rock"); 
let paper= document.querySelector("#paper"); 
let scissor= document.querySelector("#scissor"); 
const boxes=document.querySelectorAll(".box button"); 
const userConut=document.querySelector("#user-score"); 
const msg=document.querySelector("#msg"); 
const computerCount=document.querySelector("#computer-score"); 
let userScore = 0; 
let computerScore = 0; 
let newGame=document.querySelector("#newGame"); 
 
//random method in math generates a random number between 0 and 1 
 
 
newGame.addEventListener("click", () => { 
    userConut.innerText=0; 
    computerCount.innerText=0; 
    computerScore = 0; 
    userScore = 0; 
} 
); 

const genCompChoice = () =>{ 
 
    const options =["rock", "paper","scissor"]; 
    const randomIdx = Math.floor(Math.random()*3); 
    return options[randomIdx]; 
}

const playGame = (userChoice) => { 
    console.log("user choice = ", userChoice); 

    const CompChoice=genCompChoice();

    console.log("computer choice = ", CompChoice); 

    // Send user's choice to GTM
    dataLayer.push({
        event: "choice_made",
        choice: userChoice
    });

    // now checking the results of functions 
    if(userChoice===CompChoice){ 
        drawGame(); 
    }
    else{ 
        let userWin = true; 

        if(userChoice==="rock"){ 
            userWin = CompChoice==="paper"?false:true; 
        }
        else if(userChoice==="paper"){ 
            userWin = CompChoice==="scissor"?false:true; 
        }
        else{ 
            userWin = CompChoice==="rock"?false:true; 
        }

        showWinner(userWin); 
    } 
}

boxes.forEach( (box) => { 
    console.log(box); 

    box.addEventListener("click", () =>{ 
        const userChoice= box.getAttribute("id"); 

        console.log("choice was clicked", userChoice);

        playGame(userChoice);
    }); 
}); 
 
const drawGame=() =>{ 
    console.log("its a draw"); 
    msg.innerText="IT'S a DRAW"; 
    msg.style.backgroundColor="grey"; 
} 
 
const showWinner = (userWin) => { 

    if(userWin===true){ 
        console.log("YOU WIN"); 
        msg.innerText="YOU WIN !"; 
        msg.style.backgroundColor="green"; 
        userScore++; 
        userConut.innerText=userScore; 
    }
    else{ 
        console.log("you Lose"); 
        msg.innerText="YOU LOSE !"; 
        msg.style.backgroundColor="red"; 
        computerScore++; 
        computerCount.innerText=computerScore; 
    } 
}