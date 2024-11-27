function myMove() {
    var elem = document.getElementById("animate"); 
    var container = document.getElementById("container"); 
    var position = 0; 
    var intervalId = setInterval(function() {
        position += 1;
        
        elem.style.left = position + "px";
        
        if (position >= container.offsetWidth - elem.offsetWidth) {
            clearInterval(intervalId);
        }
    }, 1); 
}
