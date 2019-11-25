console.log('hallo');
var activePlayer=0;
var roundScore=0;
var score=[0,0];
initialize();
var state=false;
document.querySelector('.newgame').addEventListener('click',function(){
    state=true;
    
    initialize();
    //document.querySelector('.myButton').textContent='reload';
    document.querySelector('.myButton').style.cursor='pointer';
    document.querySelector('.myButton').style.opacity= 1;
    //document.querySelector('.myButton').textContent='reload';
    document.querySelector('.hold').style.cursor='pointer';
    document.querySelector('.hold').style.opacity= 1;
    document.querySelector('.player-0-area').classList.remove('aactive');
    document.querySelector('.player-1-area').classList.remove('aactive');
    document.querySelector('.player-0-area').classList.add('aactive');
    state=true;

});
    document.querySelector('.myButton').addEventListener('click', function(){
        
        if(state){
        var dice = Math.floor(Math.random() * 6) + 1;
                //2. Display the result
                var diceDOM = document.querySelector('.diceImg');
                diceDOM.style.visibility = 'visible';
                diceDOM.src = 'dice-' + dice + '.png';
                
                if(dice!=1){
                    roundScore+=dice;
                    //score[activePlayer]+=roundScore;
                    document.querySelector('.player-'+activePlayer+'-roundScore').textContent=roundScore;
                    
                    //roundscore=0;
                }else {
                    roundScore=0;
                    
                    document.querySelector('.player-'+activePlayer+'-roundScore').textContent=roundScore;
                    document.querySelector('.player-'+activePlayer+'-area').classList.toggle('aactive');
                    
                    nextPlayer();
                    
                document.querySelector('.player-'+activePlayer+'-area').classList.toggle('aactive');
                    
                }
        
                
        //score[activePlayer]+=dice;
        //whith hold
       // document.querySelector('.player-'+activePlayer+'-score').textContent=score[activePlayer];
        
        //whith hold
        
/*         if(score[activePlayer]>=20){
            document.querySelector('.player-'+activePlayer+'-plateForm').textContent ='Winner';
            document.querySelector('.player-'+activePlayer+'-plateForm').classList.toggle('winner');
            document.querySelector('.myButton').style.cursor='not-allowed';
            document.querySelector('.myButton').style.opacity= 0.6;
            document.querySelector('.myButton').textContent='click new game';
            state=false
            
        }
        else{
        document.querySelector('.player-'+activePlayer+'-area').classList.toggle('aactive');
        //
        nextPlayer();
    document.querySelector('.player-'+activePlayer+'-area').classList.toggle('aactive');}
    
    } */
}});

document.querySelector('.hold').addEventListener('click',function(){
    if(state){  
          score[activePlayer]+=roundScore;
            document.querySelector('.player-'+activePlayer+'-score').textContent=score[activePlayer];
            if(score[activePlayer]>=20){
        document.querySelector('.player-'+activePlayer+'-plateForm').textContent ='Winner';
        document.querySelector('.player-'+activePlayer+'-plateForm').classList.toggle('winner');
        document.querySelector('.myButton').style.cursor='not-allowed';
        document.querySelector('.myButton').style.opacity= 0.6;
        document.querySelector('.myButton').textContent='reload';
        document.querySelector('.hold').style.cursor='not-allowed';
        document.querySelector('.hold').style.opacity= 0.6;
        //document.querySelector('.hold').textContent='reload';
        roundScore=0;
        document.querySelector('.player-'+activePlayer+'-roundScore').textContent=roundScore;
        
        state=false;
        
            }
            else{
                roundScore=0;
                document.querySelector('.player-'+activePlayer+'-roundScore').textContent=roundScore;
                document.querySelector('.player-'+activePlayer+'-area').classList.toggle('aactive');
                
                nextPlayer();
                document.querySelector('.player-'+activePlayer+'-area').classList.toggle('aactive');}
}
document.querySelector('.diceImg').style.visibility='hidden';
});





function initialize(){
    score=[0,0];
    //document.querySelector('.player-'+activePlayer+'-plateForm').classList.toggle('winner');
    document.querySelector('.player-'+activePlayer+'-roundScore').textContent=0;
    document.querySelector('.player-'+activePlayer+'-score').textContent=0;
    document.querySelector('.player-'+activePlayer+'-plateForm').classList.remove('winner');
    
    document.querySelector('.player-'+activePlayer+'-plateForm').textContent ='player'+activePlayer;
    nextPlayer();
    document.querySelector('.player-'+activePlayer+'-roundScore').textContent=0;
    document.querySelector('.player-'+activePlayer+'-score').textContent=0;
    roundScore=0;
    activePlayer=0;
    document.querySelector('.diceImg').style.visibility='hidden';
    state=false;
    

}

function nextPlayer(){
    //document.querySelector('.diceImg').style.visibility='hidden';
    //document.querySelector('.diceImg').style.visibility='hidden';
    activePlayer===0?activePlayer=1:activePlayer=0;
    //document.querySelector('.diceImg').style.visibility='hidden';
}





 var hotel=[['E','O','E','E'],['O','O','O','O']];
 var resault1=hotel[1].every(myfun);
 var resault0=hotel[0].every(myfun);  
 var resault=[];
 function myfun(value){
     return value=='O';
 }
 //console.log(resault);
 if(resault1){
     document.querySelector('.second_floor').classList.add('O');
 }
 else{
    document.querySelector('.second_floor').classList.add('E');
 }
 if(resault0){
    document.querySelector('.first_floor').classList.add('O');
}
else{
   document.querySelector('.first_floor').classList.add('E');
}
