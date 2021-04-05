const products = {
  "product": [{
      "id": "1",
      "tittle": "Google Glass Enterprise",
      "description": "AGCO manufactures complex agricultural machines with the goal of helping make today's farms more productive and more profitable. ",
      "date": "1/04/2021",
      "resource": "resources/img/box-item.png",
      "price": "999"
    },
    {
      "id": "2",
      "tittle": "Google Pixel 5",
      "description": "Adaptive Battery learns your favorite apps and reduces power to the ones you rarely use, so your phone keeps its charge all day, extreme Battery Saver helps take your all-day battery up to 48 hours on a single charge when you really need it, Return to tasks more quickly with a fast-charging battery. Plus, use Battery Share to wirelessly charge your Pixel Buds.",
      "date": "15/10/2020",
      "resource": "resources/img/box-item.png",
      "price": "699"
    },
    {
      "id": "3",
      "tittle": "Fitbit Versa 3",
      "description": "the motivational smartwatch with built-in GPS, Active Zone Minutes, music experiences to keep you moving, and a free Fitbit PremiumTM trial for new Premium users.",
      "date": "01/08/2020",
      "resource": "resources/img/box-item.png",
      "price": "229.95"
    },
    {
      "id": "4",
      "tittle": "Google Pixel Buds",
      "description": "With custom-designed 12 mm dynamic speaker drivers, Google Pixel Buds deliver high-quality audio",
      "date": "01/11/2017",
      "resource": "resources/img/box-item.png",
      "price": "179"
    },
    {
      "id": "5",
      "tittle": "Nest Thermostat",
      "description": "It can turn down when you leave so you save energy, change the temp wherever you are with the Google Home app, installation usually takes 30 minutes or less, get alerts and reminders about your heating and cooling system.",
      "date": "10/2020",
      "resource": "resources/img/box-item.png",
      "price": "129.99"
    }
  ]
};

function getDataList(){
  var arr = products.product;
  arr.map(function(val){
    var OPTION = document.createElement("option");
    OPTION.setAttribute("value", val.tittle);
    document.getElementById("search_list_d").appendChild(OPTION);
  });
}


function getProduct(filter) {
  var arr = products.product;
  var contain = arr;
  if (filter !== null) {
    document.getElementById("LIST_PRODUCT").innerHTML = "";
    contain = [];
    for (let r of arr) {
      if (filter.includes(r.id)) {
        contain.push(r);
      }
    }

  }
  contain.map(function(val) {
    var CARD = document.createElement("div");
    CARD.className = "card mb-3";
    CARD.setAttribute("id", "att_"+val.tittle);
    var ROW = document.createElement("div");
    ROW.className = "row g-0";
    var COL4 = document.createElement("div");
    COL4.className = "col-md-4";
    var IMG = document.createElement("img");
    IMG.setAttribute("src", val.resource);
    IMG.setAttribute("height", "144");
    IMG.setAttribute("width", "144");
    var COL8 = document.createElement("div");
    COL8.className = "col-md-8";
    var CARDBODY = document.createElement("div");
    CARDBODY.className = "card-body";
    var TITLE = document.createElement("h5");
    TITLE.className = "card-title";
    TITLE.innerHTML = val.tittle;
    var DESCRIPTION = document.createElement("p");
    DESCRIPTION.className = "card-text";
    DESCRIPTION.innerHTML = val.description;
    var FOOT = document.createElement("p");
    FOOT.className = "card-text";
    var SMALL_VALUE_TIME = document.createElement("small");
    SMALL_VALUE_TIME.className = "text-muted";
    SMALL_VALUE_TIME.innerHTML = "$" + val.price + " Last Update " + val.date;

    COL4.appendChild(IMG);
    FOOT.appendChild(SMALL_VALUE_TIME);
    CARDBODY.appendChild(TITLE);
    CARDBODY.appendChild(DESCRIPTION);
    CARDBODY.appendChild(FOOT);
    COL8.appendChild(CARDBODY);
    ROW.appendChild(COL4);
    ROW.appendChild(COL8);
    CARD.appendChild(ROW);
    document.getElementById("LIST_PRODUCT").appendChild(CARD);
  });
}

$(".form-search-list-d").on("submit", function(){
  // redirect
})
