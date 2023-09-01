const inputBox = document.getElementById("input-box");
console.log(inputBox.value);
const listContainer = document.getElementById("list-container");
const formGroup = document.getElementById("form-group");
const animate = document.getElementsByClassName(".checked");
const back = document.querySelector('.btn');
// back.classList.add('animate__animated', 'animate__bounceOutLeft');

back.addEventListener('click', () => {
    back.classList.add('animate__animated', 'animate__bounceOutLeft');
    // do something
});

function addTask() {
    if (inputBox.value === '' || inputBox.value === null) {
        alert("Please enter the task");
        e.preventDefault();
    }
    else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    
    inputBox.value = "";
    saveData();
}
listContainer.addEventListener("click", function (e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        // e.target.classList.add("animate");
        saveData();
    }
    else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData();
    }
}, false);

function saveData() {
    localStorage.setItem("data", listContainer.innerHTML);
}
function showTask() {
    listContainer.innerHTML = localStorage.getItem("data");
}
showTask();

function goBackWithDelay(delayMillis) {
    setTimeout(function() {
        goBack();
    }, delayMillis);
}

function goBack() {
    window.history.back();
}

// document.querySelector("button").addEventListener("click", (e) => {
    // if (inputBox.value === '' || inputBox.value === null) {
    //     alert("Please enter the task");
    // }
    // e.preventDefault();
// });
// animate.addEventListener('click', () => {
//     animate.classList.add('animate__animated', 'animate__flipInY');
// });