<!DOCTYPE html>
<html lang="en" dir="ltr">

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="description" content="Dashboard content app">
  <link rel="shortcut icon" href="resources/img/favicon.ico">
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-BmbxuPwQa2lc/FVzBcNJ7UAyJxM6wuqIj61tLrc4wSX0szH/Ev+nYRRuWlolflfl" crossorigin="anonymous">
  <link rel="stylesheet" href="resources/scss/theme.css">
  <title>Store online</title>
</head>

<body>

  <!-- Banner -->

  <div class="container">
    <div class="row">
      <div class="col">
        <button class="btn btn-secondary" type="button" id="switch_theme" style="top: 5px;right: 15px;position:absolute;">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
            <path fill-rule="evenodd"
              d="M16.5 6c0 5.799-4.701 10.5-10.5 10.5-.426 0-.847-.026-1.26-.075A8.5 8.5 0 1016.425 4.74c.05.413.075.833.075 1.259zm-1.732-2.04A9.08 9.08 0 0114.999 6a9 9 0 01-11.04 8.768l-.004-.002a9.367 9.367 0 01-.78-.218c-.393-.13-.8.21-.67.602a9.938 9.938 0 00.329.855l.004.01A10.002 10.002 0 0012 22a10.002 10.002 0 004.015-19.16l-.01-.005a9.745 9.745 0 00-.855-.328c-.392-.13-.732.276-.602.67a8.934 8.934 0 01.218.779l.002.005z">
            </path>
          </svg>
        </button>
        <button class="btn btn-secondary" type="button" id="user" style="top: 50px;right: 15px;position:absolute;">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
            <path fill-rule="evenodd" d="M12 2.5a5.5 5.5 0 00-3.096 10.047 9.005 9.005 0 00-5.9 8.18.75.75 0 001.5.045 7.5 7.5 0 0114.993 0 .75.75 0 101.499-.044 9.005 9.005 0 00-5.9-8.181A5.5 5.5 0 0012 2.5zM8 8a4 4 0 118 0 4 4 0 01-8 0z"></path>
          </svg>
        </button>
        <button class="btn btn-secondary" type="button" id="car_shopping" style="top: 95px;right: 15px;position:absolute;">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-shopping-cart"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg>
        </button>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <br>
        <img src="resources/img/favicon-96x96.png" alt="brand">
      </div>
      <div class="col-10">
        <br>
        <h2 class="text-muted">Online Store</h2>
        <p>#Description</p>
        <p>#News</p>
        <p>#Other Advertisements</p>
      </div>
    </div>
  </div>

  <!-- Button Action Toggle Menu Vertical -->

  <button type="button" class="btn btn-secondary rounded-pill shadow" style="position:fixed;top:50%;left:0;margin-left:-15px;transition: 0.3s;z-index:2000" onclick="toggleMenu(this)">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
      <path fill-rule="evenodd" d="M8.72 18.78a.75.75 0 001.06 0l6.25-6.25a.75.75 0 000-1.06L9.78 5.22a.75.75 0 00-1.06 1.06L14.44 12l-5.72 5.72a.75.75 0 000 1.06z"></path>
    </svg>
  </button>

  <div class="card" id="menu_vertical" style="transition: 0.3s;width: 250px;position:fixed;top:0;left:0;z-index:2001;height:100vh;margin-left:-250px;overflow:auto;">
    <div class="list-group" id="category">
      <span class="list-group-item text-muted bg-light text-dark">
        Category
      </span>
    </div>
    <br>
    <div class="list-group list-group-flush" id="brand">
      <span class="list-group-item text-muted bg-light text-dark">
        Brand
      </span>
    </div>
    <br>
    <div class="list-group list-group-flush" id="topSale">
      <span class="list-group-item text-muted bg-light text-dark">
        Top sales
      </span>
    </div>
  </div>

  <!-- Menu Navbar -->
  <nav class="navbar navbar-expand-lg navbar-light bg-light" style="position: -webkit-sticky;position: sticky;top: 0;z-index:1025;">
    <div class="container-fluid">
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="./?c=index">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Link</a>
          </li>
          <li class="nav-item">
          </li>
        </ul>
        <form action="#" class="d-flex d-sm-flex d-md-flex d-lg-none d-xl-none form-search-list-d" style="margin-top:5px;margin-bottom:5px;">
          <input id="search_product_d" list="search_list_d" class="form-control me-2 search_product" type="search" placeholder="Search" aria-label="Search">
          <datalist id="search_list_d">
          </datalist>
          <button class="btn btn-outline-dark" type="submit">Search...</button>
        </form>
      </div>
      <form action="#" class="d-lg-flex d-xl-flex d-none d-sm-none d-md-none form-search-list-d" style="margin-right:5px;">
        <input id="search_product" list="search_list_d" class="form-control me-2 search_product" type="search" placeholder="Search" aria-label="Search">
        <button class="btn btn-outline-dark" type="submit">Search...</button>
      </form>
    </div>
  </nav>

  <!-- Content -->
  <br>
  <div class="container">
    <div class="row">
      <div class="col">
        <div class="col bg-light text-dark" id="LIST_PRODUCT">

        </div>
      </div>
    </div>
  </div>

  <!-- Footer -->
  <div class="container-fluid" style="height:64px;">
    <br>
    <div class="row">
      <div class="col text-center">
        <a href="#">
          <img src="resources/img/facebook.png" class="rounded">
        </a>
      </div>
      <div class="col text-center">
        <a href="#">
          <img src="resources/img/instagram.png" class="rounded">
        </a>
      </div>
      <div class="col text-center">
        <a href="#">
          <img src="resources/img/twitter.png" class="rounded">
        </a>
      </div>
      <div class="col text-center">
        <a href="#">
          <img src="resources/img/gmail.png" class="rounded">
        </a>
      </div>
    </div>
    <hr>
    <br>
    <div class="row">
      <div class="col-3 text-center">
        <h3 class="text-muted">About</h3>
        <p><a href="#" class="link">FAQ</a></p>
        <p> <a href="#" class="link"> Pivacy</a> </p>
      </div>
      <div class="col-9 text-center">
        <div class="row">
          <div class="col">
            <h3 class="text-muted">Affiliates</h3>
          </div>
        </div>
        <div class="row">
          <div class="col">
            <p class="text-primary">@A firt Name</p>
            <p class="text-primary">@A second Name</p>
            <p class="text-primary">@A third Name</p>
            <p class="text-primary">@A fourth Name</p>
          </div>
          <div class="col">
            <p class="text-primary">@A fifth Name</p>
            <p class="text-primary">@A sixth Name</p>
            <p class="text-primary">@A seventh Name</p>
            <p class="text-primary">@A eighth Name</p>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <hr style="margin-bottom: 0;">
        <p class="text-muted" style="width:100%;margin:0;padding: 1rem;">
          &#169; 2021 - Online Store
        </p>
      </div>
    </div>
  </div>

  <!-- CDN's -->

  <script src="https://code.jquery.com/jquery-3.5.1.min.js" integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0=" crossorigin="anonymous"></script>
  <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.6.0/dist/umd/popper.min.js" integrity="sha384-KsvD1yqQ1/1+IA7gi3P0tyJcT3vR+NdBTt13hSJ2lnve8agRGXTTyNaBYmCR/Nwi" crossorigin="anonymous"></script>
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/js/bootstrap.min.js" integrity="sha384-nsg8ua9HAw1y0W1btsyWgBklPnCUAFLuTMS2G72MMONqmOymq585AcH49TLBQObG" crossorigin="anonymous"></script>

  <!-- Resources -->
  <script src="resources\js\actions.js" type="text/javascript"></script>
  <script src="resources/js/theme.js" type="text/javascript"></script>
  <script src="resources/js/product.js" type="text/javascript"></script>
  <script src="resources/js/filters.js" type="text/javascript"></script>
  <script type="text/javascript">
    getDataList();
    getProduct(null);
    if (localStorage.getItem('theme')) {
      theme_dark();
    }
    getTop();
    getCategory();
    getBrand();
  </script>
</body>

</html>
