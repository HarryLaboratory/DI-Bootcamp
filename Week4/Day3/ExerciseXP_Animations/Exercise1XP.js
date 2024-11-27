setTimeout(function() {
    alert("Hello World");
}, 2000); 

setTimeout(function() {
    var newParagraph = document.createElement("p");
    
    newParagraph.textContent = "Hello World";
    
    document.getElementById("container").appendChild(newParagraph);
}, 2000); 

var intervalId = setInterval(function() {
    var newParagraph = document.createElement("p");
    
    newParagraph.textContent = "Hello World";
    
    document.getElementById("container").appendChild(newParagraph);
    
    if (document.getElementById("container").getElementsByTagName("p").length >= 5) {
        clearInterval(intervalId);
    }
}, 2000); 

document.getElementById("clear").addEventListener("click", function() {
    clearInterval(intervalId);
});
