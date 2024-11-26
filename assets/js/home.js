const miningButton = document.querySelector("#miningButton");
const allEnergyBox = document.querySelector("#allEnergyBox");
const allCoins = document.querySelector("#allCoins");
var home1 =document.getElementById("home1");
var frend=document.getElementById("frend1");
var miss=document.getElementById("miss1");
var boos=document.getElementById("boos1");
const chargeUiShow = document.querySelectorAll(".chargeUiShow");
const rechargeActive = document.querySelector("#rechargeActive");
let user_data = Boolean(localStorage.getItem("airdrop"))
  ? JSON.parse(localStorage.getItem("airdrop"))
  : {
      coinLimited: 1,
      chargLimited: 500,
      addCharge: 1,
      userAllCoins: 0,
      userAllCharge: 500,
      turbo: { status: false, limit: 3, plusCoin: 10, use: 0, endTime: null },
      recharge: { limit: 3, use: 0 },
      multiTab: { price: 1000, level: 1, plusCoin: 2 },
      energyCap: { price: 1000, level: 1, plusEnergy: 2, plusLimitEnergy: 500 },
      activeBot: { price: 1000, level: 1 },
      energyTime: 1,
    };

let isTouch = false;

localStorage.setItem("airdrop", JSON.stringify(user_data));
// set values
function setValues() {
  chargeUiShow[0].textContent = user_data.userAllCharge;
  chargeUiShow[1].textContent = user_data.chargLimited;

  allCoins.textContent = user_data.userAllCoins.toLocaleString();
  allEnergyBox.style.width =
    (user_data.userAllCharge / user_data.chargLimited) * 100 + "%";
  user_data.userAllCharge = user_data.userAllCharge;
}
setValues();

function addChargeHand() {
  setInterval(() => {
    if (user_data.userAllCharge >= user_data.chargLimited) return;
    user_data.userAllCharge += user_data.addCharge;
    localStorage.setItem("airdrop", JSON.stringify(user_data));
    setValues();
  }, user_data.energyTime * 1000);
}
addChargeHand();

function touchCoin(x, y) {
  let plusCoin = user_data.coinLimited;
  if (user_data.turbo.status) {
    if (user_data.turbo.endTime > Date.now())
      plusCoin = user_data.coinLimited + user_data.turbo.plusCoin;
    else {
      user_data.turbo.endTime = null;
      user_data.turbo.status = false;
      localStorage.setItem("airdrop", JSON.stringify(user_data));
    }
  }
  if (user_data.userAllCharge - plusCoin < 0) return;
  if (user_data.userAllCharge <= 0) {
    addChargeHand();
  }
  let coin = document.createElement(`div`);

  coin.classList.add("coinPlus");
  coin.textContent = plusCoin;
  let style = `left:${x - coin.scrollWidth}px;top:${y - coin.scrollHeight}px;`;
  coin.style = style;
  document.body.appendChild(coin);
  user_data.userAllCoins += plusCoin;
  user_data.userAllCharge = user_data.userAllCharge - plusCoin;
  setValues();
  localStorage.setItem("airdrop", JSON.stringify(user_data));

  setTimeout(() => {
    coin.remove();
  }, 800);
}

if (matchMedia("(pointer:fine)").matches) {
  miningButton.addEventListener("click", function (e) {
    touchCoin(e.clientX, e.clientY);
  });
} else {
  miningButton.addEventListener("touchstart", function (e) {
    e.preventDefault();
    Array.from(e.touches).forEach((touch) => {
      touchCoin(touch.clientX, touch.clientY);
    });
  });
}
rechargeActive.addEventListener("click", () => {
  if (
    user_data.recharge.use >= user_data.recharge.limit ||
    user_data.userAllCharge >= user_data.chargLimited
  )
    return;
  user_data.recharge.use++;
  user_data.userAllCharge = user_data.chargLimited;
  setValues();
});
home1.addEventListener("click",function(){
  home1.href ="index.html";

})
frend.addEventListener("click",function(){
  frend.href = "invite.html";
})
miss.onclick=function(){
  miss.href="mission.html";
}
boos.onclick=function(){
  boos.href ="booster.html";
}
