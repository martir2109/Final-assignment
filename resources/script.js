window.onload = function() {oppstart()};
            
    function oppstart(){
        document.getElementById("btnTop").style.display = "none";
    }   
    
window.onscroll = function() {topButton()};

    function topButton(){
        if(document.body.scrollTop > 100 || document.documentElement.scrollTop > 100){
            document.getElementById("btnTop").style.display = "block"; 
        }else{
            document.getElementById("btnTop").style.display = "none";
        }
    }