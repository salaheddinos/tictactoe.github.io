let board = document.querySelectorAll(".col-4");
let newgame = document.querySelector("#newgame");
let NewGame = document.querySelector("#NewGame");
let btnClose = document.querySelector("#btn-close");
// Hide element
document.getElementById("newgame").style.display = "none";
document.getElementById("NewGame").style.display = "none";

// Empty cases
function empty_boxes(board) {
    let emptyBoxesIndx = [];
    for (let i = 0; i < board.length; i++) {
        if (board[i].innerText === "") {
            emptyBoxesIndx.push(i)
        }
    }
    return emptyBoxesIndx
}

// Random computer play 
function random_computer_play(board) {
    // Get empty boxes 
    let emptyIdx = empty_boxes(board);
    // Pick random index
    let randomIdx = emptyIdx[Math.floor(Math.random() * emptyIdx.length)];
    console.log(randomIdx);
    // Insert O 
    if (randomIdx === 0 || randomIdx) {
        let span = document.createElement("span"); 
        span.innerText = "O";
        span.style.color = "red";
        board[randomIdx].append(span);
        // setTimeout(function(){
        //     board[randomIdx].append(span);
        // }, time)
    }
    
}

// Function that checks winner
function is_winner(board) {
    if ((board[0].innerText === "X" && board[1].innerText === "X" && board[2].innerText === "X") || 
        (board[0].innerText === "O" && board[1].innerText === "O" && board[2].innerText === "O") ) {
            console.log("1")
            return board[0].innerText
    } else if (((board[3].innerText === "X" && board[4].innerText === "X" && board[5].innerText === "X") || 
    (board[3].innerText === "O" && board[4].innerText === "O" && board[5].innerText === "O") )) {
            console.log("2")
            return board[3].innerText
    } else if (((board[6].innerText === "X" && board[7].innerText === "X" && board[8].innerText === "X") || 
    (board[6].innerText === "O" && board[7].innerText === "O" && board[8].innerText === "O")) ) {
            console.log("3")
            return board[6].innerText
    } else if (((board[0].innerText === "X" && board[3].innerText === "X" && board[6].innerText === "X") || 
    (board[0].innerText === "O" && board[3].innerText === "O" && board[6].innerText === "O")) ) {
            console.log("4")
            return board[0].innerText
    } else if (((board[1].innerText === "X" && board[4].innerText === "X" && board[7].innerText === "X") || 
    (board[1].innerText === "O" && board[4].innerText === "O" && board[7].innerText === "O")) ) {
            console.log("5")
            return board[1].innerText
    } else if (((board[2].innerText === "X" && board[5].innerText === "X" && board[8].innerText === "X") || 
    (board[2].innerText === "O" && board[5].innerText === "O" && board[8].innerText === "O")) ) {
            console.log("6")
            return board[2].innerText
    } else if (((board[0].innerText === "X" && board[4].innerText === "X" && board[8].innerText === "X") || 
    (board[0].innerText === "O" && board[4].innerText === "O" && board[8].innerText === "O")) ) {
            console.log("7")
            return board[0].innerText
    } else if (((board[2].innerText === "X" && board[4].innerText === "X" && board[6].innerText === "X") || 
    (board[2].innerText === "O" && board[4].innerText === "O" && board[6].innerText === "O")) ) {
            console.log("8")
            return board[2].innerText
    } else {
        return false
    }
}

// Make beep sound 
function beep() {
    var snd = new Audio("data:audio/wav;base64,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qJrx4KOQjahZxWbcZgztj2c49nKmkId44S71j0c8eV9yDK6uPRzx5X18eDvjvQ6yKo9ZSS6l//8elePK/Lf//IInrOF/FvDoADYAGBMGb7FtErm5MXMlmPAJQVgWta7Zx2go+8xJ0UiCb8LHHdftWyLJE0QIAIsI+UbXu67dZMjmgDGCGl1H+vpF4NSDckSIkk7Vd+sxEhBQMRU8j/12UIRhzSaUdQ+rQU5kGeFxm+hb1oh6pWWmv3uvmReDl0UnvtapVaIzo1jZbf/pD6ElLqSX+rUmOQNpJFa/r+sa4e/pBlAABoAAAAA3CUgShLdGIxsY7AUABPRrgCABdDuQ5GC7DqPQCgbbJUAoRSUj+NIEig0YfyWUho1VBBBA//uQZB4ABZx5zfMakeAAAAmwAAAAF5F3P0w9GtAAACfAAAAAwLhMDmAYWMgVEG1U0FIGCBgXBXAtfMH10000EEEEEECUBYln03TTTdNBDZopopYvrTTdNa325mImNg3TTPV9q3pmY0xoO6bv3r00y+IDGid/9aaaZTGMuj9mpu9Mpio1dXrr5HERTZSmqU36A3CumzN/9Robv/Xx4v9ijkSRSNLQhAWumap82WRSBUqXStV/YcS+XVLnSS+WLDroqArFkMEsAS+eWmrUzrO0oEmE40RlMZ5+ODIkAyKAGUwZ3mVKmcamcJnMW26MRPgUw6j+LkhyHGVGYjSUUKNpuJUQoOIAyDvEyG8S5yfK6dhZc0Tx1KI/gviKL6qvvFs1+bWtaz58uUNnryq6kt5RzOCkPWlVqVX2a/EEBUdU1KrXLf40GoiiFXK///qpoiDXrOgqDR38JB0bw7SoL+ZB9o1RCkQjQ2CBYZKd/+VJxZRRZlqSkKiws0WFxUyCwsKiMy7hUVFhIaCrNQsKkTIsLivwKKigsj8XYlwt/WKi2N4d//uQRCSAAjURNIHpMZBGYiaQPSYyAAABLAAAAAAAACWAAAAApUF/Mg+0aohSIRobBAsMlO//Kk4soosy1JSFRYWaLC4qZBYWFRGZdwqKiwkNBVmoWFSJkWFxX4FFRQWR+LsS4W/rFRb/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////VEFHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAU291bmRib3kuZGUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMjAwNGh0dHA6Ly93d3cuc291bmRib3kuZGUAAAAAAAAAACU=");  
    snd.play();
}


// Make success sound 
function success() {
    var snd = new Audio("success.wav"); // buffers automatically when created
    snd.play();
}

// Make fail sound 
function fail() {
    var snd = new Audio("game-over.wav"); // buffers automatically when created
    snd.play();
}

// Make erase sound
function erase() {
    var snd = new Audio("erase.wav"); // buffers automatically when created
    snd.play();
}

// Start game 
let myScore = 0;
let compScore = 0;
let ties = 0;
for(let box of board) {
    box.addEventListener("click", ()=>{
        if (box.innerText === "" && !is_winner(board)) {
            let span = document.createElement("span"); 
            beep();
            span.innerText = "X";
            span.style.color = "blue"
            box.append(span);
            random_computer_play(board);
            let isWin = is_winner(board)
            if (isWin !== false) {
                if (isWin === "X") {
                    success();
                    myScore += 1;
                    console.log(myScore);
                    document.getElementById("MyScore").innerText = myScore;
                    document.getElementById("outcome").innerText = "You Won !"
                    newgame.click();   
                    document.getElementById("NewGame").style.display = "block"; 
                    
                } else if (isWin === "O") {
                    fail();
                    compScore += 1;
                    document.getElementById("CompScore").innerText = compScore;
                    document.getElementById("outcome").innerText = "The Computer Won !"
                    newgame.click();   
                    document.getElementById("NewGame").style.display = "block"; 
                    
                } 
            }
            else if (empty_boxes(board).length === 0) {
                    ties += 1;
                    document.getElementById("TiesScore").innerText = ties;
                    document.getElementById("outcome").innerText = "It's a Tie !"
                    newgame.click();   
                    document.getElementById("NewGame").style.display = "block"; 
                
                } 
        }
        
    })
}

NewGame.addEventListener("click", ()=>{
    erase();
    for (let box of board) {
        if (box.innerText !== "") {
            box.innerText = "";
            document.getElementById("NewGame").style.display = "none";
        }
    }
})

