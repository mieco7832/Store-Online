const category = {
  "category": [{
    "id": "1",
    "name": "Fashion",
    "products": [3, 4]
  }, {
    "id": "2",
    "name": "Technology",
    "products": [1, 2, 3, 4, 5]
  }, {
    "id": "3",
    "name": "Sport",
    "products": [3]
  }, {
    "id": "4",
    "name": "Home",
    "products": [5]
  }, {
    "id": "5",
    "name": "Healthy",
    "products": [3]
  }, {
    "id": "6",
    "name": "Accessories",
    "products": [3, 4]
  }, {
    "id": "7",
    "name": "Trend",
    "products": [2, 3]
  }]
}
const brand = {
  "brand": [{
    "name": "Google",
    "products": [1, 2, 3, 4, 5]
  }]
}
const topSale = {
  "tops": [{
    "products": [1, 2, 3, 4, 5]
  }]
}

function getButton() {
  var CLASS = "list-group-item list-group-item-action";
  if (localStorage.getItem('theme')) {
    CLASS += " bg-dark text-light";
  } else {
    CLASS += " bg-white text-dark";
  }
  var BUTTON = document.createElement("button");
  BUTTON.className = CLASS;
  return BUTTON;
}

function getCategory() {
  var arr = category.category;
  arr.map(function(val) {
    var BUTTON = getButton();
    BUTTON.setAttribute("onclick", "getProduct('[" + val.products + "]')");
    BUTTON.innerHTML = val.name;
    document.getElementById("category").appendChild(BUTTON);
  });
}

function getBrand() {
  var arr = brand.brand;
  arr.map(function(val) {
    var BUTTON = getButton();
    BUTTON.setAttribute("onclick", "getProduct('[" + val.products + "]')");
    BUTTON.innerHTML = val.name;
    document.getElementById("brand").appendChild(BUTTON);
  });
}

function getTop(){
  var arrTops = topSale.tops;
  var arr = products.product;
  arr.map(function(val){
    for(let r of arrTops){
      if(arrTops.products === r.id){
        var BUTTON = getButton();
        // BUTTON.setAttribute("onclick", "getProduct('" + val.products + "')");
        BUTTON.innerHTML = val.tittle;
        document.getElementById("topSale").appendChild(BUTTON);
      }
    }
  })
}
