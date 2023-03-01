function areaPer(){
    var w = parseInt(document.getElementById("width").value);
    var h = parseInt(document.getElementById("height").value);
    
    var area = w * h;
    var perimeter = 2* (w+h);
    
    var result = "Area: " + area + " Perimeter: " + perimeter;
    
    document.getElementById("output").innerHTML = result; 
  }