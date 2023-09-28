var arr=[];
var ste=-1;
var clr=["green","red","yellow","blue"];
var l=0,r,i=0,s=0;

$(document).on("keypress",function(){
  if(ste==-1){
    
    arr=[];
   ste=0;i=0;
   l=0;
    handleColor();
  }

}
)
$(".btn").click(function(e){

    if(ste==1){
        var t=""+e.target.classList;
        
        //console.log("Match->",e.target,t);
        
    if(t.includes(arr[i])){i++;
        e.target.classList.add("pressed_c");
        setTimeout(function() {
            e.target.classList.remove("pressed_c");
         
          },50);
     if(i==arr.length){handleColor();}
    }
    else{
       
        e.target.classList.add("pressed_w");
        setTimeout(function() {
            e.target.classList.remove("pressed_w");
         
          },50);
        var audio = new Audio('./sounds/wrong.mp3');
        audio.play();

       ste=-1;
       starter();
    }
    }}
    );




function starter(){
    $("#level-title").text("Press A Key to Start");

}

 

 function handleColor(){
    
    l++;
    $("#level-title").text("Level "+l);
   
    r=Math.floor(Math.random()*4);
    var audio = new Audio("./sounds/"+clr[r]+".mp3");
    audio.play();
    arr.push(clr[r]);
    $("#"+clr[r]).addClass("pressed");
    
    //console.log(arr);
    setTimeout(function() {
        $("#"+clr[r]).removeClass("pressed");
       // console.log("yep");
        ste=1;
        i=0;
       // colorMatch();
      },100);
      

}