const Increment = document.getElementById("increment");
const Decrement = document.getElementById("decrement");
const Clear = document.getElementById("clear");

const CountBtn = document.getElementById("CountBtn");
const errorMessage = document.getElementById("errorMessage");



let count = 0;

function updatedCount() {
    CountBtn.textContent = count;

    if(count === 0) {
        CountBtn.style.display = 'none'
    } else {
        CountBtn.style.display = 'inline-block'
    }
}

Increment.addEventListener('click' , () => {
    count++
    updatedCount()

});

Decrement.addEventListener('click' , () => {
    
    if(count === 0) {
        errorMessage.textContent = 'Cannot decrement count is already 0';
        errorMessage.style.visibility = 'visible'
    } else {
        count--;
        errorMessage.style.visibility = 'hidden';
        updatedCount()
    }
})


Clear.addEventListener('click' , () => {
    count = 0
    updatedCount()
    errorMessage.style.visibility = 'hidden'
})


