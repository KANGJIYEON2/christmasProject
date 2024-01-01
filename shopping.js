const searchBtn = document.getElementById("search-btn");
const shopList = document.getElementById("shop");
const shopDetailsContent = document.querySelector(".shop-details-content");
const shopCloseBtn = document.getElementById("shop-close-btn");

searchBtn.addEventListener("click", getShopList);
function getShopList() {
  let searchInputTxt = document.getElementById("search-input").value.trim();
  fetch(`http://127.0.0.1:3000/search/shop?query=${searchInputTxt}`)
    .then((response) => response.json())
    .then((data) => {
      let html = "";
      if (data.items) {
        data.items.forEach((item) => {
          html += `
            <div class="shop-item">
              <div class="shop-img">
                <img src="${item.image}" alt="" />
              </div>
              <div class="shop-name">
                <h3>${item.title}</h3>
                <h3> 가격 : ${item.lprice}원</h3>
                <a href="${item.link}" target="_blank" class="shop__btn">자세히보기</a>
              </div>
            </div>
          `;
        });
      }
      shopList.innerHTML = html;
    })
    .catch((error) => console.error("Error:", error));
}
