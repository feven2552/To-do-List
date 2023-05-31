const searchbox = document.getElementById("search-box");
const listcontainer = document.getElementById("list-container");

function AddTask(){
    if(searchbox.value === ''){
         alert("Write down something!");

    }
    else{
        let li = document.createElement("li");
        li.innerHTML = searchbox.value;
        listcontainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    searchbox.value="";
    restoreinfo()

}
listcontainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
         restoreinfo()
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
         restoreinfo()
    }

},false );

function restoreinfo(){
    localStorage.setItem("data",listcontainer.innerHTML);
}

function displaytask(){
    listcontainer.innerHTML = localStorage.getItem("data");
}
displaytask();