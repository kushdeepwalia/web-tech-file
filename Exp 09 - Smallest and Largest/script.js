var submit = document.getElementById("submit");
var largest = document.getElementById("largest");
var smallest = document.getElementById("smallest");

submit.addEventListener("click", () => {
    var array = document.querySelectorAll(".num");
    let large = parseInt(array[0].value);
    let small = parseInt(array[0].value);
    for(let i = 1; i < 10; i++){
        if(parseInt(array[i].value) > large){
            large = parseInt(array[i].value);
        }
        if(parseInt(array[i].value) < small){
            small = parseInt(array[i].value);
        }
    }
    largest.innerHTML = large;
    smallest.innerHTML = small;
})