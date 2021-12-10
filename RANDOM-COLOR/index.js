 


// function decToHex(number) {
    //     return number.toString(16).padStart(2, "0")
    // }
    
    
    // function getRandomNumber(min, max) {
        //     min = Math.ceil(min);
        //     max = Math.floor(max);
        //     return Math.floor(Math.random() * (max - min + 1)) + min;
        // }
        
        
        // function generateRandomColor() {
            //     let hexCode = '#';

            //     for (let i = 0; i < 3; i++) {
                //         hexCode += decToHex(getRandomNumber(0, 255));
                //     }
                
                //     return hexCode;
                // }
                
const colorList = document.getElementById("colors");
const colorForm = document.getElementById("color-form");

function generateRandomColor(){
    return '#' + Math.floor(Math.random()*16777215).toString(16).padStart(6, '0');
}

function addColorItem(color) {
    const newItem = document.createElement("li");
    newItem.classList.add("color");
    newItem.style.backgroundColor = color;

    newItem.innerHTML = `
    ${color}
    <button  class="btn btn-danger btn-delete">x</button>
  `;

    colorList.appendChild(newItem);
}

function removeItemHandler(e) {
  const me=e.target.closest(".btn-delete")
  me.parentElement.remove()
    //  const item = e.target;
    //     colorList.removeChild(item);
    // const isDeleteButton = e.target.closest(".btn-delete");

    // if (isDeleteButton) {
    //     const item = e.target.closest("li");
    //     colorList.removeChild(item);
    // }
}
colorList.addEventListener("click", removeItemHandler);


function addColorFormHandler(e) {
    e.preventDefault();

    const amountOfColors =document.getElementById("color-amount").value;

    for (let i = 0; i < amountOfColors; i++) {
        addColorItem(
            generateRandomColor()
        );
    }
}

colorForm.addEventListener("submit", addColorFormHandler);

//?????????????????????????????????????????
// function init() {
//     document.getElementById("loading").style.display = "none";

//     for (let i = 0; i < 3; i++) {
//         addColorItem(generateRandomColor());
//     }
// }

// init();