let popupcard = document.querySelector(".popupcard");
let icon = popupcard.querySelector(".icon");
let btn = document.querySelector(".btn");
let body = document.querySelector(".body");
let addToCartBtn = document.querySelectorAll(".addToCart");
console.log(body);

body.style.transition = "all .3s";

let button = document.querySelectorAll(".btn");
let btnarr = Array.from(button);

for (let i = 0; i < btnarr.length; i++) {
  btnarr[i].addEventListener("click", poppupDisplay);
}

function poppupDisplay() {
  popupcard.classList.toggle("active");
  body.classList.toggle("change");
  pauseVideo();
}

window.onclick = function (e) {
  if (e.target == body) {
    popupcard.classList.remove("active");
    body.classList.remove("change");
  }
};

//svg hover animation
// ========================

let playbtn = document.querySelector(".header-playBtn");
let playbtnPath = document.querySelector("#playbtn-triangle");

console.log(playbtnPath);

playbtn.addEventListener("mouseover", () => {
  playbtnPath.setAttribute("fill", "#1d1416");
  playbtnPath.setAttribute("stroke", "black");
});

playbtn.addEventListener("mouseout", () => {
  playbtnPath.setAttribute("fill", "#EECDA3");
  playbtnPath.setAttribute("stroke", "none");
});

//pausing video fcns
// ====================

var vid = document.querySelector("#popupcard-video");

function pauseVideo() {
  vid.pause();
}



var elem = document.querySelectorAll(".breadQuality-blob");

// console.log(elem);

var elemArr = Array.from(elem);
console.log(elemArr[0]);

// elemArr[0].style.animationPlayState = "paused"

for(var i = 0; i < elemArr.length; i++){
  elemArr[i].addEventListener("mouseover",()=>{
    console.log("mouseover");
  })

  elemArr[i].addEventListener("mouseout",()=>{
    console.log("mosueout");
  })
}




// Notie Js 


// NOTIE JS FOR THE SUCCESS WARNING**************************
notie.setOptions({
  alertTime: 2,
});

function nameerror() {
  notie.alert({
    type: 3,
    text: "Please check your name",
    time: 2,
  });
}

function addressError() {
  notie.alert({
    type: 3,
    text: "Please check your address",
    time: 2,
  });
}

function noerror() {
  notie.alert({
    type: 3,
    text: "Please check your contact number",
    time: 2,
  });
}
function quantityerror() {
  notie.alert({
    type: 3,
    text: "Please select the quantity of item",
    time: 2,
  });
}

function allerror() {
  notie.alert({
    type: 3,
    text: "Please check your details",
    time: 2,
  });
}
function itemerror() {
  notie.alert({
    type: 3,
    text: "Please select the item to order",
    time: 2,
  });
}


function force() {
  notie.force({
      type: 3,
      text: ` Your payable amount to delivery boy is = <strong><em>$50</em></strong>`,
      buttonText: 'OK',
      callback: function() {
          notie.alert({
              type: 1,
              text: 'Thanks your order is confirmed and you will recieve package in 30 mins',

          })
      }
  })
}

function success() {
  notie.alert({
    type: 1,
    text: "Thanks for ordering , You will recieve your order in 30 mins and after recieving bill and order pay the amount to the delivery boy",
    time: 4,
  });
}

// REGEX FUNCTION*********************************

function person() {
  var person = document.querySelector(".name");
  var value = person.value;
  var regex = /^[a-zA-Z\s]+$/;

  if (regex.test(value) === true) {
    person.style.borderBottom = "2px solid #58D60A";
    return true;
  } else {
    person.style.borderBottom = "2px solid red";
    nameerror();
    return false;
  }
}

function Address() {
  var ads = document.querySelector(".address");
  var value = ads.value;



  if (value!="") {
    ads.style.borderBottom = "2px solid #58D60A";
    return true;
  } else {
    ads.style.borderBottom = "2px solid red";
    addressError();
    return false;
  }
}


function number() {
  var number = document.querySelector(".number");
  var value = number.value;
  console.log(value);
  var regex = /^[1-9]\d{9}$/;

  if (regex.test(value) === true) {
    number.style.borderBottom = "2px solid #58D60A";
    return true;
  } else {
    number.style.borderBottom = "2px solid red";
    noerror();
    return false;
  }
}


function Item(){
  var itemV = document.querySelector('.nameItem');
  var empty = itemV.options[itemV.selectedIndex].value;
  console.log(empty);

  if (empty != "0") {
    itemV.style.borderBottom = "2px solid #58D60A";
    itemV.style.color = "#eecda3";
    return true;
  } else {
    itemV.style.borderBottom = "2px solid red";
    itemV.style.color = "#eecda3";
    itemerror();
    return false;
  }

}


function Quantity(){
  var qty = document.querySelector('.quantity');
  var value = qty.value;
  var regex = /[1-9]/g;

  if (regex.test(value) === true) {
    qty.style.borderBottom = "2px solid #58D60A";
    return true;
  } else {
    qty.style.borderBottom = "2px solid red";
    quantityerror();
    return false;
  }

}


function checkAll() {
  var submit = document.querySelector(".submit");
  var personCheck = person();
  var addressCheck = Address();
  var numberCheck = number();
  var itemCheck = Item();
  var quantityCheck = Quantity();
  if (personCheck == true && numberCheck == true && addressCheck == true && itemCheck==true && quantityCheck == true) {
    force();
    var Person = document.querySelector(".name");
    var address = document.querySelector(".address");
    var no = document.querySelector(".number");
    var item = document.querySelector('.nameItem');
    var quantity = document.querySelector('.quantity');
    no.value = "";
    address.value = "";
    Person.value = "";
    item.value = 0;
    quantity.value = "";

    mainpage();
    // setTimeout(() => {
    //   mainpage();
    // }, 3500);
  } 
 
  else  if (personCheck == false || numberCheck == false || addressCheck == false || quantityCheck==false || itemCheck==false) {
    
    allerror();
  }

 

  no.style.borderBottom = "1px solid #eecda3";
  address.style.borderBottom = "1px solid #eecda3";
  Person.style.borderBottom = "1px solid #eecda3";
  item.style.borderBottom = "1px solid #eecda3";
  quantity.style.borderBottom = "1px solid #eecda3";
}

function mainpage() {
  location.href = "#";
}


// the rotating blob

var  blob = document.querySelector(".header-Blob");
document.addEventListener('scroll',()=>{
  console.log(window.pageYOffset);
  if(window.pageYOffset <= 1200){
    blob.style.transform = "rotate("+ (window.pageYOffset / 10) +"deg)";
  }
})



// PRE-LOADER   OF  THE PAGE ***********************************************

setTimeout(function(){
  $('.loader_bg').fadeToggle();
},2000);


