window.onload = function() {oppstart()};
            
    function oppstart(){
        document.getElementById("btnTop").style.display = "none";
    }
    
window.onscroll = function() {topButton()};

    function topButton(){
        if(document.body.scrollTop > 30 || document.documentElement.scrollTop > 30){
            document.getElementById("btnTop").style.display = "block"; 
        }else{
            document.getElementById("btnTop").style.display = "none";
        }
    }