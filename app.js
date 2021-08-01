var inputText = document.getElementById("txt");
var items = document.querySelectorAll("#list li");
var tab = [], index;
             
for(var i = 0; i < items.length; i++){
    tab.push(items[i].innerHTML);
}

for(var i = 0; i < items.length; i++){
    
    items[i].onclick = function(){
        index = tab.indexOf(this.innerHTML);
        inputText.value = this.innerHTML;
    };
    
}

function refreshArray()
{
    tab.length = 0;
    items = document.querySelectorAll("#list li");
    for(var i = 0; i < items.length; i++){
        tab.push(items[i].innerHTML);
    }
}
function addLI(){
    
    var listNode = document.getElementById("list"),
        textNode = document.createTextNode(inputText.value),
        liNode = document.createElement("LI");
        
    liNode.appendChild(textNode);
    listNode.appendChild(liNode);
        
    refreshArray();
    liNode.onclick = function(){
        index = tab.indexOf(liNode.innerHTML);
        inputText.value = liNode.innerHTML;
    };
        
}
             
function editLI(){
    items[index].innerHTML = inputText.value;
    refreshArray();
}

function deleteLI(){
    
        refreshArray();
        if(items.length > 0){
            items[index].parentNode.removeChild(items[index]);
            inputText.value = "";
        }
}