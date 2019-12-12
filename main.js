/*
 * ✅ Use the Coinlore API (Coins)
 *    https://www.coinlore.com/cryptocurrency-data-api
 *
 *    Get 10 coins per "page"
 */
//

page = 1;
//Sets Page
function fetchdata(type) {
  if (type == "next") {
    page++;
  } else if (type == "back") {
    page--;
  } else {
    //do nothing
  }
  if (page == 1) {
    document.getElementById("previous").style.display = "none";
  } else {
    document.getElementById("previous").style.display = "inline-block";
  }
  let rows = "";
  fetch(`https://api.coinlore.com/api/tickers/?start=${page}&limit=10`)
    .then(response => {
      return response.json();
    })
    .then(data => {
      data.data.forEach(coin => {
        rows += `
    <tr>
        <td>${coin.name}</td>
        <td>${coin.symbol}</td>
        <td>${coin.price_usd}</td>
        <td>${coin.msupply}</td>
    </tr>
    `;
      });
      document.querySelector("#tableBody").innerHTML = rows;
    })
    .catch(err => {
      // Do something for an error here
    });
}
$(document).ready(function() {
  fetchdata("start");
});
