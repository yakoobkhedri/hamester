// select skin
const titlee=document.getElementById("titlee");
const kapsen=document.getElementById("kapsen");
const baby1=document.getElementById("baby1");
const astro=document.getElementById("astro");
const doce=document.getElementById("doce");
const stud=document.getElementById("stud");
const cooc=document.getElementById("cooc");
const polis=document.getElementById("polis");
let greenhover = Array.from(document.getElementsByClassName('greenhover'));
let greenhover2 = Array.from(document.getElementsByClassName('greenhover2'));
let selectedImg = document.getElementById('selectedImg');
let selectedBg = document.getElementById('selectedBg');

greenhover.forEach((item)=>{
    item.addEventListener('click', function () {
        greenhover.forEach((items)=>{items.classList.remove('active')});
        item.classList.add('active');
        itemImgSrc= item.querySelector('img').src;
        selectedImg.src = itemImgSrc;
    })
});
greenhover2.forEach((item)=>{
    item.addEventListener('click', function () {
        greenhover2.forEach((items)=>{items.classList.remove('active')});
        item.classList.add('active');
        itemBg= item.querySelector('div').style.background;
        selectedBg.style.background = itemBg;
    })
})

baby1.addEventListener('click',function(){
    titlee.innerHTML="Baby";
    kapsen.innerText="cute baby loris,this is funny";

})
astro.addEventListener('click',function(){
    titlee.innerHTML="Astronaut";
    kapsen.innerText=" loris gooing to space,this is interesting";

})
doce.addEventListener('click',function(){
    titlee.innerHTML="Doctur";
    kapsen.innerText="Dedicated to keeping all pets healthy and happy";

})
stud.addEventListener('click',function(){
    titlee.innerHTML="Student";
    kapsen.innerText="oohh clever loris,he is studing";

})
cooc.addEventListener('click',function(){
    titlee.innerHTML="Cook";
    kapsen.innerText="Chef Loris cooks good food for you";

})
polis.addEventListener('click',function(){
    titlee.innerHTML="PolisMan";
    kapsen.innerText="If something happens, let him know";

})
//Dedicated to keeping all pets healthy and happy