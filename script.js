
var friends = ["Charlie", "Liz", "David", "Mattias"];
var selected = [];
var stuff = ["Ramazan", "Murat", "Abd", "Uveys"];
function RandomName(){
    var l = document.getElementById("selected-name");
    if(selected.length === stuff.length)
    {
        l.innerHTML = "Bitti!";
    }
    else{
        var r = -1;
        while(r === -1){
          r = CheckRandomNumber();
          l.innerHTML = stuff[r];
        }
    }
}
function CheckRandomNumber(){
    var r = Math.floor(Math.random()*stuff.length);
        if(selected.indexOf(r) === -1){
            selected.push(r);
            return r;
        } 
        else return -1;  
}
function addName(){
    var name = document.getElementById('inputName').value;
    this.stuff.push(name);

    var node = document.createTextNode((stuff.indexOf(name)+1)+'-'+ name);
    var p = document.createElement("p");
    p.appendChild(node);

    var element = document.getElementById("names");
    element.appendChild(p);
    Clear();
}

function Clear(){
    var el = document.getElementById('inputName');
    el.value  ="";
}

function showPanel(id,id2){
    var x = document.getElementById(id);
    x.style.display = "block";
    hidePanel(id2)
}
function hidePanel(id){
    var x = document.getElementById(id);
    x.style.display = "none"
}
