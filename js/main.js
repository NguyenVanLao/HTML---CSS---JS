"use strict";

const form1 = document.getElementById("form1");
const form2 = document.getElementById("form2");
const form3 = document.getElementById("form3");
const form4 = document.getElementById("form4");
const form5 = document.getElementById("form5");
const form6 = document.getElementById("form6");
const form7 = document.getElementById("form7");

const progressEL = document.getElementById('progress');
const circles = document.querySelectorAll('.circle');

let currectActive = 1;
// Next form 
function nextOne(){
    form1.style.left = '-700px';
    form2.style.left = '220px';
   
    // Next page
    incrementNumber();   
    // Update progress bar
    update();
}
function nextTwo(){
    form2.style.left = '-700px';
    form3.style.left = '220px';

    // Next page
    incrementNumber()
    // Update progress bar
    update();
}
function nextThree(){
    form3.style.left = '-700px';
    form4.style.left = '220px';

    // Next page
    incrementNumber()
    // Update progress bar
    update();
}
function nextFour(){
    form4.style.left = '-700px';
    form5.style.left = '220px';

    // Next page
    incrementNumber()
    // Update progress bar
    update();
}
function nextFive(){
    form5.style.left = '-700px';
    form6.style.left = '220px';

    // Next page
    incrementNumber()
    // Update progress bar
    update();
}
function nextSix(){
    form6.style.left = '-700px';
    form7.style.left = '220px';

    // Next page
    incrementNumber()
    // Update progress bar
    update();
}
// Back one
function backOne(){
    form1.style.left = '220px';
    form2.style.left = '850px';

        // Back page
        decrementNumber()
        // Update progress bar
        update();
}
// Back Two
function backTwo(){
    form2.style.left = '220px';
    form3.style.left = '700px';

        // Back page
        decrementNumber()
        // Update progress bar
        update();
}
function backThree(){
    form3.style.left = '220px';
    form4.style.left = '700px';

        // Back page
        decrementNumber()
        // Update progress bar
        update();
}
function backFour(){
    form4.style.left = '220px';
    form5.style.left = '700px';

        // Back page
        decrementNumber()
        // Update progress bar
        update();
}
function backFive(){
    form5.style.left = '220px';
    form6.style.left = '700px';

        // Back page
        decrementNumber()
        // Update progress bar
        update();
}
function backSix(){
    form6.style.left = '220px';
    form7.style.left = '700px';

        // Back page
        decrementNumber()
        // Update progress bar
        update();
}


// Increment number
function incrementNumber(){
     // Next progress number
     currectActive++;
     if (currectActive > circles.length){
         currectActive = circles.length;
     }
}

// Decrement number
function decrementNumber(){
     // Back progress number
     currectActive--;
     if (currectActive < 1) {
         currectActive = 1;
     }
}

// Progress update
function update(){
    circles.forEach((circle,indx) => {
        if(indx < currectActive){
            circle.classList.add('active');
        }else{
            circle.classList.remove('active');
        }

    // Get all of active classes
    const actives = document.querySelectorAll(".active");
    
    progressEL.style.width = ((actives.length - 1)/(circles.length-1))*100 + "%";

    });
}


// btn Events
const btnEvents = () => {
    const next1 = document.getElementById('next1');
    const next2 = document.getElementById('next2');
    const next3 = document.getElementById('next3');
    const next4 = document.getElementById('next4');
    const next5 = document.getElementById('next5');
    const next6 = document.getElementById('next6');

    const back1 = document.getElementById('back1');
    const back2 = document.getElementById('back2');
    const back3 = document.getElementById('back3');
    const back4 = document.getElementById('back4');
    const back5 = document.getElementById('back5');
    const back6 = document.getElementById('back6');

        
    /* next1 */
    next1.addEventListener("click", nextOne);
    /* next2 */
    next2.addEventListener("click", nextTwo);
    /* next3 */
    next3.addEventListener("click", nextThree);
    /* next4 */
    next4.addEventListener("click", nextFour);
    /* next5 */
    next5.addEventListener("click", nextFive);
    /* next6 */
    next6.addEventListener("click", nextSix);


    // back 1
    back1.addEventListener("click", backOne);
    // back 2
    back2.addEventListener("click", backTwo);
    // back 3
    back3.addEventListener("click", backThree);
    // back 4
    back4.addEventListener("click", backFour);
    // back 5
    back5.addEventListener("click", backFive);
    // back 6
    back6.addEventListener("click", backSix);
};
document.addEventListener("DOMContentLoaded", btnEvents);
// Process when to click buttons to calculate total price
class QuantityControl {
    constructor(element) {
        this.element = element;
        this.input = this.element.querySelector('.count');
        this.plusButton = this.element.querySelector('.plus');
        this.minusButton = this.element.querySelector('.minus');
  
  
        this.plusButton.addEventListener('click', this.increment.bind(this));
        this.minusButton.addEventListener('click', this.decrement.bind(this));
    }
  
    increment() {
        let value = parseInt(this.input.value);
        this.input.value = isNaN(value) ? 1 : value + 1;
        this.calculateTotal();
    } 
    decrement() {
        let value = parseInt(this.input.value);
        this.input.value = isNaN(value) ? 1 : Math.max(value - 1, 1);
        this.calculateTotal();
    }
// Calculate total price
    calculateTotal() {
      const pricePerItem1 = 1100; // Giá tiền cho sản phẩm 1
      const pricePerItem2 = 1100; // Giá tiền cho sản phẩm 2
      const pricePerItem3 = 1100; // Giá tiền cho sản phẩm 3
  
      const quantity1 = parseInt(document.querySelector('.qty1').value);
      const quantity2 = parseInt(document.querySelector('.qty2').value);
      const quantity3 = parseInt(document.querySelector('.qty3').value);
  
      const total1 = pricePerItem1 * quantity1;
      const total2 = pricePerItem2 * quantity2;
      const total3 = pricePerItem3 * quantity3;
  
      const total = total1 + total2 + total3;
  
      totalAmount.textContent = `${total}円`;
    }
  }
//  Function calculate each of qty
  document.querySelectorAll('.qty').forEach(element => new QuantityControl(element));
  
  
// Process payment when press payment button
  const paymentBtn = document.querySelector('.payment-btn');
  
  paymentBtn.addEventListener('click', function() {
      event.preventDefault(); 
      const totalPrice = totalAmount.textContent;
      alert(`支払いが完了しました: ${totalPrice}`);
  });