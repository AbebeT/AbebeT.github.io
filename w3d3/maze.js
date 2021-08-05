$(function () {   
    let lose = false;
    let wrongDirection = false;

    $("div.boundary").on("mouseover", function(){
        $("div.boundary").addClass("youlose");
        if (!lose)
            alert("Sorry, you lost:[");
        else
            alert("Click, on start to statover!")
        lose = true;

    });
    $("#start").click(function(){
        $("div.boundary").removeClass("youlose");
        lose = false;
        wrongDirection = false;
    });
    $("#end").click(function () {
        if (!lose & !wrongDirection)
            alert("You win:]");
        else if(wrongDirection)
            alert("you followed the wrong direction!!");        
    });

    $("#maze").on("mouseleave", function(){
        if (!lose){
            wrongDirection = true;            
        }
    });
});