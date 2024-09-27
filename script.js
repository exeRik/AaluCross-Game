document.addEventListener('DOMContentLoaded', () => {
    const space = document.querySelectorAll('.space');
    const player1 = document.querySelector('.player1');
    const player2 = document.querySelector('.player2');
    const result= document.querySelector('.result');
    const btn = document.querySelector('.btn');
    const main = document.querySelector('.main');

   const space0= document.getElementById('space0');
   const space1= document.getElementById('space1');
   const space2= document.getElementById('space2');
   const space3= document.getElementById('space3');
   const space4= document.getElementById('space4');
   const space5= document.getElementById('space5');
   const space6= document.getElementById('space6');
   const space7= document.getElementById('space7');
   const space8= document.getElementById('space8');


    let mark = "X";
    let count = 9;
    

    space.forEach(space => {
        space.addEventListener('click', () => {
            // space.textContent= "X";
            if (space.textContent === "" && count > 0) {  // Ensure space is empty and game is not over
                if (player1.classList.contains('player--active')) {
                    space.innerHTML = "<h1 style='background-color: rgb(179, 184, 184); font-size:60px; color: rgb(117, 0, 33)'>X</h1>";
                    // document.body.innerHTML = "<div style= 'background-color:rgb(179, 184, 184)></div>"
                    player1.classList.remove('player--active');
                    player2.classList.add('player--active');
                    mark = "0";  // Switch mark for the next click
                    
                } else if (player2.classList.contains('player--active')) {
                    space.innerHTML = "<h1 style='background-color: rgb(179, 184, 184); font-size:60px; color: rgb(11, 14, 61)'>0</h1>";
                    player2.classList.remove('player--active');
                    player1.classList.add('player--active');
                    mark = "X";  // Switch mark for the next click
             
                }
                //to check if win or lose
                checkwinner();
                count --;
            } 
            if(space.textContent != "" && count <= 0){
                document.body.style.backgroundColor="rgb(56, 121, 54)";
                player2.classList.remove('player--active');
                result.innerHTML = "<h1 style='background-color: rgb(56, 121, 54); font-size: 40px; color: rgb(117, 0, 33) paddingLeft: 70px'>DRAW!!</h1>";
                main.style.opacity="0.4"
                btn.classList.remove('hidden');
            }
        });
    });
    // RESET BUTTON
    
    btn.addEventListener('click',function(){
        // let mark = "X";
        // let count = 9;
        // player1.classList.add('player--active');
        space.forEach(space => {
            space.innerHTML = "";  // Remove the "X" and "O" marks
        });
        player1.classList.add('player--active');
        player2.classList.remove('player--active');
        result.innerHTML = "";
        document.body.style.backgroundColor = "";
        main.style.opacity = "1";
        count = 9;

    })

    function checkwinner(){
        if(space0.textContent!=""  && space0.textContent=== space1.textContent && space1.textContent === space2.textContent){
            // console.log("you Win!!")
            checkplayer();
            
        }
        else if(space0.textContent!=""  && space0.textContent=== space3.textContent && space3.textContent === space6.textContent){
            checkplayer();
        }
        else if(space0.textContent!=""  && space0.textContent=== space4.textContent && space4.textContent === space8.textContent){
            checkplayer();
        }
        else if(space1.textContent!=""  && space1.textContent=== space4.textContent && space4.textContent === space7.textContent){
            checkplayer();
        }
        else if(space3.textContent!=""  && space3.textContent=== space4.textContent && space4.textContent === space5.textContent){
            checkplayer();
        }
        else if(space2.textContent!=""  && space2.textContent=== space5.textContent && space5.textContent === space8.textContent){
            checkplayer();
        }
        else if(space6.textContent!=""  && space6.textContent=== space7.textContent && space7.textContent === space8.textContent){
            checkplayer();
        }
        else if(space2.textContent!=""  && space2.textContent=== space4.textContent && space4.textContent === space6.textContent){
            checkplayer();
        }
    }

    function checkplayer(){
        if (player1.classList.contains('player--active')){
            console.log("Player2 win!")
            player1.classList.remove('player--active');
            result.innerHTML = "<h1 style='background-color: rgb(179, 184, 184); font-size: 40px; color: rgb(11, 14, 61);'>PLAYER 2 WON!!🥳</h1>";
            main.style.opacity="0.4"
            main.style.opacity="0.4"
            btn.classList.remove('hidden');

            
        }
        else{
            console.log("Player1 win!")
            player2.classList.remove('player--active');
            result.innerHTML = "<h1 style='background-color: rgb(179, 184, 184); font-size: 40px; color: rgb(117, 0, 33)'>PLAYER 1 WON!!🥳</h1>";
            main.style.opacity="0.4"
            main.style.opacity="0.4"
            btn.classList.remove('hidden');
        }
        
    }
    
});