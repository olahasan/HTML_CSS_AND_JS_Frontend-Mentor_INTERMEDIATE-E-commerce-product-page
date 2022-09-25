// header
const cart = document.getElementById("cart");
const car = document.getElementById("car");
const inp = document.getElementById("inp");
const carFull = document.getElementById("carfull");
// console.log(cart);
// console.log(car);
// console.log(carFull);

cart.onclick = function(){
    if(inp.value > 0){
        car.classList.add("hidden");
        carFull.classList.toggle("hidden");
    }else{
        carFull.classList.add("hidden");
        car.classList.toggle("hidden");
    }
}
// header

// del
dele.onclick = function(){
    carFull.classList.add("hidden");
    car.classList.remove("hidden");
    beeCart.classList.add("hidden");
    inp.value = 0 ;
}
// del

const big = document.getElementById("big");
const s = document.querySelectorAll(".s");
const overlay = document.getElementById("overlay");
const neww = document.getElementById("new");
// console.log(big);
// console.log(s);
// console.log(overlay);
// console.log(neww);

s.forEach(function(e){
e.onclick = function(){
    s.forEach(function(e){
        e.style.outline = "none";
    })
    this.style.outline = "3px solid #ff7d1a";
    big.src = this.src
    // console.log(big.src);
    // console.log(this);
}
})
big.onclick = function(){
    overlay.classList.remove("hidden");
    neww.classList.remove("hidden");
}


// into-full
const hm = document.getElementById("hm");
const suum = document.getElementById("suum");
// console.log(hm);
// console.log(suum);
// into-full

// plus menius
const minus = document.getElementById("minus");
const plus = document.getElementById("plus");
// console.log(minus);
// console.log(plus);


plus.onclick = function(){
    inp.value = +(inp.value) + 1
    // to add one
    // hm.innerHTML = "x" + inp.value;
    // suum.innerHTML =  "$" + inp.value * 125 ;
    console.log(+(inp.value) + 1);
    beeCart.innerHTML = inp.value;
    if(inp.value >= 1){
        beeCart.classList.remove("hidden");
    }
}
minus.onclick = function(){
    if(inp.value <= 0){
        inp.value === 0;
        beeCart.classList.add("hidden");
    }else{
        inp.value = +(inp.value) - 1
        // to remove one
        hm.innerHTML = "x" + (inp.value );
        suum.innerHTML =  "$" + inp.value * 125 ;
        beeCart.innerHTML = inp.value;
    }
    console.log(+(inp.value));
}

const add = document.getElementById("add");
console.log(add);
add.onclick = function(){
    hm.innerHTML = "x" + inp.value;
    suum.innerHTML =  "$" + inp.value * 125 ;
    console.log("ttt");
}

const beeCart = document.getElementById("beecart");
console.log(beeCart);


inp.onchange = function(){
    beeCart.innerHTML = inp.value;
    hm.innerHTML = "x" + (inp.value );
    suum.innerHTML =  "$" + inp.value * 125 ;
    if(inp.value >= 1){
        beeCart.classList.remove("hidden");
    }else{
        beeCart.classList.add("hidden");
    }
}


const bigg = document.getElementById("bigg");
const ss = document.querySelectorAll(".ss");
console.log(big);
console.log(s);

ss.forEach(function(e){
e.onclick = function(){
    ss.forEach(function(e){
        e.style.outline = "none";
    })
    this.style.outline = "3px solid #ff7d1a";
    bigg.src = this.src
    console.log(big.src);
    console.log(this);
    prev.style.backgroundColor = "white";
    next.style.backgroundColor = "white";
    prev.style.border = " none"
    next.style.border = " none"
}
})


const close = document.getElementById("close");
console.log(close);


close.onclick = function(){
    overlay.classList.add("hidden");
    neww.classList.add("hidden");
}


// next perv
let prev = document.getElementById("prev");
let next = document.getElementById("next");

let i = 0;
let slideImage = ["images/image-product-1.jpg", "images/image-product-2.jpg", "images/image-product-3.jpg", "images/image-product-4.jpg"];

bigg.src = slideImage[0];

next.onclick = function(){
    i++;
    if(i > slideImage.length -1){
       i= slideImage.length -1;
    }
    bigg.src = slideImage[i]

    prev.style.backgroundColor = "white";
    next.style.backgroundColor = "#ff7d1a";
    prev.style.border = " none";
    next.style.border = " 1px solid white";

    ss.forEach(function(e){
        e.style.outline = "none";
    })
}

prev.onclick = function(){

    i--;

    if(i < 0){
        i= 0;
    }
    bigg.src = slideImage[i]

     next.style.backgroundColor = " white";
     prev.style.backgroundColor = "#ff7d1a";
     next.style.border = " none";
     prev.style.border = " 1px solid white";

     ss.forEach(function(e){
        e.style.outline = "none";
    })
}

// next perv
let prevv = document.getElementById("prevv");
let nextt = document.getElementById("nextt");
console.log(prevv)
console.log(nextt)

let j = 0;
let slideImagee = ["images/image-product-1.jpg", "images/image-product-2.jpg", "images/image-product-3.jpg", "images/image-product-4.jpg"];

big.src = slideImagee[0];

nextt.onclick = function(){
    j++;
    if(j > slideImagee.length -1){
       j= slideImagee.length -1;
    }
    big.src = slideImagee[j]
}

prevv.onclick = function(){

    j--;

    if(j < 0){
        j= 0;
    }
    big.src = slideImagee[j]
}




// logo
let logo = document.getElementById("logo");
let uull = document.getElementById("uull");
let xxx = document.getElementById("xxx");
console.log(logo)
console.log(uull)
console.log(xxx)

logo.onclick = function(){
    uull.style.display = "flex"
}
xxx.onclick = function(){
    uull.style.display = "none";
}

