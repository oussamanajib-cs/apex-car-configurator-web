const radios = document.querySelectorAll('input[name="payment"]');

const FormCard = document.getElementById('card');
const FormPayPal = document.getElementById('paypal');
const apple = document.getElementById('applepay');

FormCard.style.display = 'none';
FormPayPal.style.display = 'none';
apple.style.display = 'none';

radios.forEach((radio) => {
  radio.addEventListener('change', function () {

    

    // show selected
    if (this.value === 'card') {
      FormCard.style.display = 'flex';
      FormPayPal.style.display = 'none';
      apple.style.display = 'none';

    } 
    else if (this.value === 'paypal') {
      FormPayPal.style.display = 'flex';
      apple.style.display = 'none';
      FormCard.style.display = 'none';

    } 
    else if (this.value === 'applepay') {
      apple.style.display = 'flex';
      FormCard.style.display = 'none';
      FormPayPal.style.display = 'none';
    }

  });
});

const productImg = document.getElementById('productImg');
const CarPrice = document.querySelector('#CarPrice');
const CustomPrice = document.querySelector('#CustomPrice');
const productname = document.querySelector('#productName');
const carName = localStorage.getItem("carName") || "Votre produit";

localStorage.getItem("carPic");
productImg.src = localStorage.getItem("carPic");
basePrice = localStorage.getItem("basePrice");
total = localStorage.getItem("Total");
const sum = document.querySelector('#sum');
let somme = Number(basePrice) + Number(total);


CarPrice.textContent = "$" + basePrice;
CustomPrice.textContent = "$" + total;
sum.textContent = "$" + somme;

productname.innerText = carName;