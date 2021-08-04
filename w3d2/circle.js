$(()=>{

    
    $("#startBtn").click(() => {

        const backgroundColors = ["Orchid ","SteelBlue","purple","YellowGreen","MediumSlateBlue","pink","green","yeLightGreen"];
        
        const width = $("input[name='width']").val();
        const growthAmount = $("input[name='growthAmount']").val();
        const speed = $("input[name='timeInterval']").val();
        const numberOfCircles = parseInt($("input[name='numberCircles']").val());       
        
        
       for(let i=1; i<=numberOfCircles+1; i++){
            let color_index = Math.floor(Math.random() * backgroundColors.length-1);
            let bg_color =  backgroundColors[color_index];  
           
            let circle = $("<div>", {
                            "css":{
                                "width": parseInt(width)+"px",
                                "height": "50px",
                                "margin":"auto",
                                "border-radius": "50%",    
                                "background-color": bg_color,
                                "position":"absolute"                                
                            },
                            "click":function(){
                                clearInterval(timer);
                                circle.hide();
                            },
                            "mouseover":function(){                                
                                $(this).fadeTo(0, 0.5).fadeTo(800, 1);
                            },
                            "mouseleave":function(){
                                $(this).fade.stop().fadeTo('slow',1);
                            } 
                        });

            if(i%2 == 0){
                circle.css("left",(i*100)+"px",)
            }else{
                circle.css("right",(i*100)+"px",)
            }
            
            $("#container").prepend(circle);           

            timer = setInterval(() => {           
                circle
                .css("width", (index,previousWidth) =>{
                return parseInt(previousWidth) + parseInt(growthAmount) + "px";
                }).css("height", (index,previousHeight) =>{
                    return parseInt(previousHeight) + parseInt(growthAmount) + "px";
                });        
            },speed);
           // backgroundColors.push(bg_color);
       }
    });

});