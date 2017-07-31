window.onload = function(){

  document.getElementById("Add").onclick = function() {
    var text = document.getElementById('input').value;

    text = document.createTextNode(text);
    var li = document.createElement("LI");

    li.innerHTML = text;
    li.onclick = function(){this.parentNode}.removeChild(this);}
    document.getElementById("list").apendChild(li);

    li.appendChild(text);
    console.log(li);
    document.getElementById("list").appendChild(li);
    document.getElementById("input").appendChild(li);

  }
};
