// 음식 데이터를 넣을 곳
let foodList = document.getElementById("foods");
let foodinfo = document.getElementById("food-info");

/** 주문 할 음식의 번호를 받아서 페이지 이동 */
function orderFood(number) {
  window.location.href = "order.html?number=" + number.toString();
}

let foodData = [
  {
    number: 1,
    foodName: "마라탕",
    foodImage: "./imgs/마라탕.jpg",
    price: 8000,
    foodOption: [
      {
        optionName: "맵기 단계",
        options: [
          { optionNames: "spicy", name: "1단계" },
          { optionNames: "spicy", name: "2단계" },
          { optionNames: "spicy", name: "3단계" },
        ],
      },
    ],
  },
  {
    number: 2,
    foodName: "빅맥 세트",
    foodImage: "./imgs/빅맥.jpg",
    price: 5500,
    foodOption: [],
  },
];

foodData.forEach((food) => {
  foodList.innerHTML += `
  <div id="food-info">
    <img src="${food.foodImage}" id="food-img" alt="${
    food.foodName
  } 사진" width="250">
    <h1 id="food-name">${food.foodName}</h1>
    <p>${food.price.toLocaleString()} &#8361;</p>
    <button id="order-this" class="btn btn-primary" onclick="orderFood(${
      food.number
    })">주문하기</button>
  </div>
  `;
});

function foodFind() {
  var urlParams = location.search
    .split(/[?&]/)
    .slice(1)
    .map(function (paramPair) {
      return paramPair.split(/=(.+)?/).slice(0, 2);
    })
    .reduce(function (obj, pairArray) {
      obj[pairArray[0]] = pairArray[1];

      return obj;
    }, {});

  let searchNumber = urlParams.number - 1;
  let json = foodData[searchNumber];

  foodinfo.innerHTML += `<img src="${json.foodImage}" width=250>`;
  foodinfo.innerHTML += `<br><br>`;
  foodinfo.innerHTML += `<h1>${json.foodName}</h1>`;
  foodinfo.innerHTML += `${json.price.toLocaleString()} &#8361;<br>`;
  foodinfo.innerHTML += `<br>`;
  json.foodOption.forEach((option) => {
    console.log(option);
    foodinfo.innerHTML += `<h3>${option.optionName}</h3>`;
    option.options.forEach((op) => {
      foodinfo.innerHTML += `<input type="radio" name="${op.optionNames}" value="${op.name}">${op.name}<br><br>`;
    });
  });

  foodinfo.innerHTML += `<h3>추가 요청 사항</h3>`;
  foodinfo.innerHTML += `<h3><textarea row="50" class="form-control"></textarea></h3>`;
  foodinfo.innerHTML += `<button class="btn btn-primary">주문하기</button>`;
}
