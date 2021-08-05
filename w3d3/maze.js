$(function () {   
    let lose = false;
    let wrongDirection = false;
    let start = false;

    $("div.boundary").on("mouseover", function(){
        
        if (start){
            $("#status").html("Sorry, you lost:[");
            //alert("Sorry, you lost:[");
            $("div.boundary").addClass("youlose");
        }
        else if (!start){
            $("#status").html("Click on start the play the game!");
            // alert("Click on start the play the game!");
        }
        lose = true;

    });
    $("#start").mouseover(function(){
        $("div.boundary").removeClass("youlose");
        lose = false;
        wrongDirection = false;
        start = true;
    });
    $("#end").mouseover(function () {
        if (!lose & !wrongDirection){
            $("#status").html("You win:]");
            //alert("You win:]");
    }
        else if(wrongDirection){
            $("#status").html("you followed the wrong direction!!]");
            //alert("you followed the wrong direction!!"); 
        }
        start = false;       
    });

    $("#maze").on("mouseleave", function(){
        if (!lose){
            wrongDirection = true;            
        }
    });
});