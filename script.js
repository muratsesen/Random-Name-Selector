
var friends = ["Charlie", "Liz", "David", "Mattias"];
var selected = [];
var stuff = [];
function RandomName(){
    
    if(selected.length === stuff.length)
    {
        alert("Finish");
    }
    else{
        cleareUlList('selected-names');
        var el = document.getElementById('numberOfRequestedNames').value;
        var n = parseFloat(el);
        if(n > (stuff.length - selected.length)) n= (stuff.length - selected.length);
        for(var i=0;i<n;i++)
        {
            var r = -1;
            while(r === -1)
                r = CheckRandomNumber();
             addLiToUl('selected-names',stuff[r],r);
            
        }
    }
}
function cleareUlList(id){
    var myNode = document.getElementById(id);
    while (myNode.firstChild) {
        myNode.removeChild(myNode.firstChild);
    }
}
function addLiToUl(id,name,r){
    var ul = document.getElementById(id);
    // create li
    var li = document.createElement("li");
    var nodeName = document.createTextNode(name);
    var att = document.createAttribute("class");       // Create a "class" attribute
    att.value = "list-group-item d-flex justify-content-between align-items-center";                           // Set the value of the class attribute
    li.setAttributeNode(att);  
    // create span
    var span = document.createElement("span");
    var nodeOrder = document.createTextNode(selected.length);
    var att2 = document.createAttribute("class");
    att2.value = "badge badge-primary badge-pill";
    span.setAttributeNode(att2);
    span.appendChild(nodeOrder);
    // add li
    li.appendChild(span);
    li.appendChild(nodeName);

    ul.appendChild(li);
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

    // create li
    var li = document.createElement("li");
    var nodeName = document.createTextNode(name);
    var att = document.createAttribute("class");       // Create a "class" attribute
    att.value = "list-group-item d-flex justify-content-between align-items-center";                           // Set the value of the class attribute
    li.setAttributeNode(att);  
    // create span
    var span = document.createElement("span");
    var nodeOrder = document.createTextNode((stuff.length));
    var att2 = document.createAttribute("class");
    att2.value = "badge badge-primary badge-pill";
    span.setAttributeNode(att2);
    span.appendChild(nodeOrder);
    // add li
    li.appendChild(span);
    li.appendChild(nodeName);

    var element = document.getElementById("names");
    element.appendChild(li);
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
