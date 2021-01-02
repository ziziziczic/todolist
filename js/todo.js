const UNCHECK = "fa-circle";
const CHECK = "fa-check-circle";
const LINETHROUGH = "lineThrough"

const list = document.getElementById("list");
const plus = document.getElementById("fa-plus");
const input = document.getElementById("input");

const toDoList = [];

function saveFunc(){
    if (typeof(Storage) !== "undefined") {

    } else {
        localStorage.setItem("toDoList", "");
    }
}

function checkFunc(e){
    e.target.classList.toggle(UNCHECK);
    e.target.classList.toggle(CHECK);
    e.target.nextSibling.classList.toggle(LINETHROUGH);
    // console.log(e);
}

function remove(e){
    this.parentNode.parentNode.removeChild(this.parentNode);
}

function add(){

    if(input.value){
        const li = document.createElement("li");
        li.class="item";
        li.innerHTML = `<i class="far fa-circle"></i><p class="text">${input.value}</p><i class="fas fa-trash-alt delete"></i>`;
        list.appendChild(li);
        
        document.querySelector(".delete").addEventListener("click",remove);
        document.querySelector(".fa-circle").addEventListener("click",checkFunc);
    }
    input.value = "";
}

function init(){
    // load를 통해서 list를 업로드 시켜줍니다.
    plus.addEventListener("click", add);
}

init();