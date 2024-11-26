const allCoins = document.querySelector("#allCoins");

const turboBoostFrom = document.querySelector("#turboBoostFrom");
const turboBoostAll = document.querySelector("#turboBoostAll");

const rechargeFrom = document.querySelector("#rechargeFrom");
const rechargeAll = document.querySelector("#rechargeAll");

const turboActive = document.querySelector("#turboActive");
const rechargeActive = document.querySelector("#rechargeActive");

const multiTapLevel = document.querySelector("#multiTapLevel");
const energyCapLevel = document.querySelector("#energyCapLevel");
const activeBotLevel = document.querySelector("#activeBotLevel");

const multiTapPrice = document.querySelector("#multiTapPrice");
const energyCapPrice = document.querySelector("#energyCapPrice");
const activeBotPrice = document.querySelector("#activeBotPrice");

const upgradeMultiTap = document.querySelector("#upgradeMultiTap");
const upgradeEnergyCap = document.querySelector("#upgradeEnergyCap");
const upgradeActiveBot = document.querySelector("#upgradeActiveBot");

let user_data = JSON.parse(localStorage.getItem("airdrop"));

// set values
function setValues() {
  allCoins.textContent = user_data.userAllCoins.toLocaleString();
  turboBoostFrom.textContent = user_data.turbo.limit - user_data.turbo.use;
  turboBoostAll.textContent = user_data.turbo.limit;
  rechargeFrom.textContent = user_data.recharge.limit - user_data.recharge.use;
  rechargeAll.textContent = user_data.recharge.limit;
  multiTapLevel.textContent = user_data.multiTab.level;
  energyCapLevel.textContent = user_data.energyCap.level;
  activeBotLevel.textContent = user_data.activeBot.level;
  multiTapPrice.textContent = Number(user_data.multiTab.price).toLocaleString();
  energyCapPrice.textContent = Number(
    user_data.energyCap.price
  ).toLocaleString();
  activeBotPrice.textContent = Number(
    user_data.activeBot.price
  ).toLocaleString();
  localStorage.setItem("airdrop", JSON.stringify(user_data));
}
setValues();

function upgradeSkil(skil) {
  let x = user_data[skil].price > 10 ** 6 ? 1.1 : 1.5;
  user_data.userAllCoins = user_data.userAllCoins - user_data[skil].price;
  user_data[skil].level++;
  user_data[skil].price = Math.round(user_data[skil].price * x);
}

turboActive.addEventListener("click", () => {
  if (user_data.turbo.status || user_data.turbo.use >= user_data.turbo.limit)
    return;

  user_data.turbo.status = true;
  user_data.turbo.use++;
  user_data.turbo.status = true;
  user_data.turbo.endTime = Date.now() + 1000 * 10;
  setValues();
});
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

upgradeMultiTap.addEventListener("click", () => {
  if (user_data.userAllCoins - user_data["multiTab"].price < 0) return;
  upgradeSkil("multiTab");
  user_data.coinLimited += user_data.multiTab.plusCoin;
  setValues();
});
upgradeEnergyCap.addEventListener("click", () => {
  if (user_data.userAllCoins - user_data["energyCap"].price < 0) return;
  upgradeSkil("energyCap");
  user_data.addCharge += user_data.energyCap.plusEnergy;
  user_data.chargLimited += user_data.energyCap.plusLimitEnergy;
  setValues();
});
upgradeActiveBot.addEventListener("click", () => {
  if (user_data.userAllCoins - user_data["activeBot"].price < 0) return;
  upgradeSkil("activeBot");
  setValues();
});
