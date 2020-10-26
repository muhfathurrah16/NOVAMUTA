// JavaScript Code Here ...

var map = [
    [0,1,1,1,0,,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
    [3,20],
    [0,1,1,0,1,1,51,1,1,1,52,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
    [2,3,2,6,6,6,3,6,6,6,3,6,6,6,3,6,6,6,3,6,6,6,3,13,3,3,3],
    [2,100,2,5,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,9,2,3,3,2],
    [2,3,36,2,10,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,9,2,41,3,2],
    [2,3,35,2,3,3,3,3,3,3,21,22,22,22,22,22,23,3,3,3,3,3,3,3,2,42,3,2],
    [2,3,34,2,8,3,3,3,3,3,24,30,30,251,30,30,26,3,3,3,3,3,3,9,2,43,3,2],
    [2,3,3,2,8,3,3,3,3,3,24,30,30,252,30,30,26,3,3,3,3,3,3,9,3,2,3,2],
    [2,3,33,2,8,3,3,3,3,3,24,30,30,253,30,30,26,3,3,3,3,3,3,9,2,44,3,2],
    [2,3,32,2,3,3,3,3,3,3,27,28,28,28,28,28,29,3,3,3,3,3,3,3,2,45,3,2],
    [2,3,31,2,8,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,13,2,46,3,2],
    [2,3,3,2,8,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,2,200,2],
    [2,3,2,3,10,7,3,7,7,7,3,7,7,7,3,7,7,7,3,7,7,7,3,7,7,7,3],
    [0,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
    [3,20],
    [0,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
];

var avatar = {
    x: 3,   //why x:6 ? because the element from first 1 to 5 is 6. count from 0-6, not 1-6 count horizontal
    y: 4   //why x:6 ? because the element from first 1 to 5 is 4. count from 0-4, not 1-4 count vertical
}

function drawWorld() {
    document.getElementById('maps').innerHTML ="";
    for(var y=0; y< map.length; y=y+1){
        //console.log(map[y]);
        for(var x=0; x<map[y].length; x=x+1){
            console.log(map[y][x]);

            if(map[y][x]==0){
                document.getElementById('maps').innerHTML+='<div class="fake-wall-mini"></div>';
            }
            else if(map[y][x]==1){
                document.getElementById('maps').innerHTML+='<div class="fake-wall-Y"></div>';
            }
            else if(map[y][x]==2){
                document.getElementById('maps').innerHTML+='<div class="fake-wall-X"></div>';
            }

            else if(map[y][x]==3){
                document.getElementById('maps').innerHTML+='<div class="plane"></div>';
            }
            else if(map[y][x]==5){
                document.getElementById('maps').innerHTML+='<div class="avatar"></div>';
            }
            

            else if(map[y][x]==6){
                document.getElementById('maps').innerHTML+='<div class="wall-top"></div>';
            }
            else if(map[y][x]==7){
                document.getElementById('maps').innerHTML+='<div class="wall-bot"></div>';
            }
            else if(map[y][x]==8){
                document.getElementById('maps').innerHTML+='<div class="wall-left"></div>';
            }
            else if(map[y][x]==9){
                document.getElementById('maps').innerHTML+='<div class="wall-right"></div>';
            }
            else if(map[y][x]==10){
                document.getElementById('maps').innerHTML+='<div class="wall-top-left"></div>';
            }
            else if(map[y][x]==11){
                document.getElementById('maps').innerHTML+='<div class="wall-bot-left"></div>';
            }
            else if(map[y][x]==12){
                document.getElementById('maps').innerHTML+='<div class="wall-top-right"></div>';
            }
            else if(map[y][x]==13){
                document.getElementById('maps').innerHTML+='<div class="wall-bot-right"></div>';
            }

            else if(map[y][x]==20){
                document.getElementById('maps').innerHTML+='<div class="booth-line"></div>';
            }

            else if(map[y][x]==21){
                document.getElementById('maps').innerHTML+='<div class="concert-top-left"></div>';
            }
            else if(map[y][x]==22){
                document.getElementById('maps').innerHTML+='<div class="concert-top-center"></div>';
            }
            else if(map[y][x]==23){
                document.getElementById('maps').innerHTML+='<div class="concert-top-right"></div>';
            }
            else if(map[y][x]==24){
                document.getElementById('maps').innerHTML+='<div class="concert-mid-left"></div>';
            }
            else if(map[y][x]==251){
                document.getElementById('maps').innerHTML+='<div class="concert-mid-center" style="font-weight: 600;">BINUS FESTIVAL</div>';
            }
            else if(map[y][x]==252){
                document.getElementById('maps').innerHTML+='<div class="concert-mid-center" style="font-size: 24pt;">LIVE CONCERT</div>';
            }
            else if(map[y][x]==253){
                document.getElementById('maps').innerHTML+='<div class="concert-mid-center" style="font-size: 18pt;">Music and Quiz</div>';
            }
            else if(map[y][x]==26){
                document.getElementById('maps').innerHTML+='<div class="concert-mid-right"></div>';
            }
            else if(map[y][x]==27){
                document.getElementById('maps').innerHTML+='<div class="concert-bot-left"></div>';
            }
            else if(map[y][x]==28){
                document.getElementById('maps').innerHTML+='<div class="concert-bot-center"></div>';
            }
            else if(map[y][x]==29){
                document.getElementById('maps').innerHTML+='<div class="concert-bot-right"></div>';
            }

            else if(map[y][x]==30){
                document.getElementById('maps').innerHTML+='<div class="concert-mid-center-fake"></div>';
            }

            else if(map[y][x]==31){
                document.getElementById('maps').innerHTML+='<div class="booth-left-1"></div>';
            }
            else if(map[y][x]==32){
                document.getElementById('maps').innerHTML+='<div class="booth-left-2"></div>';
            }
            else if(map[y][x]==33){
                document.getElementById('maps').innerHTML+='<div class="booth-left-3"></div>';
            }
            else if(map[y][x]==34){
                document.getElementById('maps').innerHTML+='<div class="booth-left-4"></div>';
            }
            else if(map[y][x]==35){
                document.getElementById('maps').innerHTML+='<div class="booth-left-5"></div>';
            }
            else if(map[y][x]==36){
                document.getElementById('maps').innerHTML+='<div class="booth-left-6"></div>';
            }
            else if(map[y][x]==41){
                document.getElementById('maps').innerHTML+='<div class="booth-right-1"></div>';
            }
            else if(map[y][x]==42){
                document.getElementById('maps').innerHTML+='<div class="booth-right-2"></div>';
            }
            else if(map[y][x]==43){
                document.getElementById('maps').innerHTML+='<div class="booth-right-3"></div>';
            }
            else if(map[y][x]==44){
                document.getElementById('maps').innerHTML+='<div class="booth-right-4"></div>';
            }
            else if(map[y][x]==45){
                document.getElementById('maps').innerHTML+='<div class="booth-right-5"></div>';
            }
            else if(map[y][x]==46){
                document.getElementById('maps').innerHTML+='<div class="booth-right-6"></div>';
            }
            else if(map[y][x]==51){
                document.getElementById('maps').innerHTML+='<div class="gateway-1"></div>';
            }
            else if(map[y][x]==52){
                document.getElementById('maps').innerHTML+='<div class="gateway-2"></div>';
            }



            else if(map[y][x]==100){
                document.getElementById('maps').innerHTML+='<div class="enter"></div>';
            }
            else if(map[y][x]==200){
                document.getElementById('maps').innerHTML+='<div class="exit"></div>';
            }
            
            
        }
        document.getElementById('maps').innerHTML+='<br>';
    }
    
    document.onkeydown = function(e) {
        if(e.keyCode === 37){
            //left
            if(map[avatar.y][avatar.x-1] !== 100 && map[avatar.y][avatar.x-1] !== 6 && map[avatar.y][avatar.x-1] !== 7 && map[avatar.y][avatar.x-1] !== 8 && map[avatar.y][avatar.x-1] !== 9 && map[avatar.y][avatar.x-1] !== 10 && map[avatar.y][avatar.x-1] !== 11 && map[avatar.y][avatar.x-1] !== 12 && map[avatar.y][avatar.x-1] !== 13 && map[avatar.y][avatar.x-1] !== 1 && map[avatar.y][avatar.x-1] !== 2 && map[avatar.y][avatar.x-1] !== 21 && map[avatar.y][avatar.x-1] !== 22 && map[avatar.y][avatar.x-1] !== 23 && map[avatar.y][avatar.x-1] !== 24 && map[avatar.y][avatar.x-1] !== 25 && map[avatar.y][avatar.x-1] !== 26 && map[avatar.y][avatar.x-1] !== 27 && map[avatar.y][avatar.x-1] !== 28 && map[avatar.y][avatar.x-1] !== 29){
                map[avatar.y][avatar.x] = 3;
                avatar.x = avatar.x - 1;
                map[avatar.y][avatar.x] = 5;
                drawWorld();
            }
        }
        else if(e.keyCode === 38){
            //up
            if(map[avatar.y-1][avatar.x] !== 6 && map[avatar.y-1][avatar.x] !== 7 && map[avatar.y-1][avatar.x] !== 8 && map[avatar.y-1][avatar.x] !== 9 && map[avatar.y-1][avatar.x] !== 10 && map[avatar.y-1][avatar.x] !== 11 && map[avatar.y-1][avatar.x] !== 12 && map[avatar.y-1][avatar.x] !== 13 && map[avatar.y-1][avatar.x] !== 1 && map[avatar.y-1][avatar.x] !== 2 && map[avatar.y-1][avatar.x] !== 21 && map[avatar.y-1][avatar.x] !== 22 && map[avatar.y-1][avatar.x] !== 23 && map[avatar.y-1][avatar.x] !== 24 && map[avatar.y-1][avatar.x] !== 25 && map[avatar.y-1][avatar.x] !== 26  && map[avatar.y-1][avatar.x] !== 27 && map[avatar.y-1][avatar.x] !== 28 && map[avatar.y-1][avatar.x] !== 29 && map[avatar.y-1][avatar.x] !== 51 && map[avatar.y-1][avatar.x] !== 52){
                map[avatar.y][avatar.x] = 3;
                avatar.y = avatar.y - 1;
                map[avatar.y][avatar.x] = 5;
                drawWorld();
            }
            if(map[avatar.y-1][avatar.x] == 51){
                // document.getElementById('score').innerHTML = '<div id="ex1" class="modal">';
                // document.getElementById('ex1').innerHTML = '<h3>BOOTH 1</h3> <div class="box"> <a class="button" name="lang" data-value="jp" onclick="changeBooth("booth_1");" href="#popup1">Let me Pop up</a> </div>';
                
                var modal = document.querySelector("#popup1");
                modal.classList.add("active");

                document.getElementById('close1').onclick = function(){
                    modal.classList.remove("active");
                };


                console.log("TOUCHED");
                drawWorld();
            }
            else if(map[avatar.y-1][avatar.x] == 52){
                // document.getElementById('score').innerHTML = '<div id="ex1" class="modal">';
                // document.getElementById('ex1').innerHTML = '<h3>BOOTH 1</h3> <div class="box"> <a class="button" href="#popup1">Let me Pop up</a> </div>';
                var modal = document.querySelector("#popup2");
                modal.classList.add("active");
                
                document.getElementById('close2').onclick = function(){
                    modal.classList.remove("active");
                };
                console.log("TOUCHED");
                drawWorld();
            }
           
        }
        else if(e.keyCode === 39){
            //right
            if(map[avatar.y][avatar.x+1] !== 200 && map[avatar.y][avatar.x+1] !== 6 && map[avatar.y][avatar.x+1] !== 7 && map[avatar.y][avatar.x+1] !== 8 && map[avatar.y][avatar.x+1] !== 9  && map[avatar.y][avatar.x+1] !== 10 && map[avatar.y][avatar.x+1] !== 11  && map[avatar.y][avatar.x+1] !== 12 && map[avatar.y][avatar.x+1] !== 13 && map[avatar.y][avatar.x+1] !== 1 && map[avatar.y][avatar.x+1] !== 2 && map[avatar.y][avatar.x+1] !== 21 && map[avatar.y][avatar.x+1] !== 22 && map[avatar.y][avatar.x+1] !== 23 && map[avatar.y][avatar.x+1] !== 24 && map[avatar.y][avatar.x+1] !== 25 && map[avatar.y][avatar.x+1] !== 26 && map[avatar.y][avatar.x+1] !== 27 && map[avatar.y][avatar.x+1] !== 28 && map[avatar.y][avatar.x+1] !== 29){
                map[avatar.y][avatar.x] = 3;
                avatar.x = avatar.x + 1;
                map[avatar.y][avatar.x] = 5;
                drawWorld();
            }
        }
        else if(e.keyCode === 40){
            //down
            if(map[avatar.y+1][avatar.x] !== 6 && map[avatar.y+1][avatar.x] !== 7 && map[avatar.y+1][avatar.x] !== 8 && map[avatar.y+1][avatar.x] !== 9 && map[avatar.y+1][avatar.x] !== 10 && map[avatar.y+1][avatar.x] !== 11 && map[avatar.y+1][avatar.x] !== 12 && map[avatar.y+1][avatar.x] !== 13 && map[avatar.y+1][avatar.x] !== 1 && map[avatar.y+1][avatar.x] !== 2 && map[avatar.y+1][avatar.x] !== 21 && map[avatar.y+1][avatar.x] !== 22 && map[avatar.y+1][avatar.x] !== 23 && map[avatar.y+1][avatar.x] !== 24 && map[avatar.y+1][avatar.x] !== 25 && map[avatar.y+1][avatar.x] !== 26 && map[avatar.y+1][avatar.x] !== 27 && map[avatar.y+1][avatar.x] !== 28 && map[avatar.y+1][avatar.x] !== 29){
                map[avatar.y][avatar.x] = 3;
                avatar.y = avatar.y + 1;
                map[avatar.y][avatar.x] = 5;
                drawWorld();
            }
            if(map[avatar.y+1][avatar.x] !== 6){
                document.getElementById('score').innerHTML = "TEST";

                console.log("TEST");
                drawWorld();
            }
        }
    }
}

drawWorld();