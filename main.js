function newPage() {
  window.location.assign("file:///Users/okafor3/Desktop/PUI/HW/homework_5/ItemDetails.html");
  // window.location.href='ItemDetails.html';
}

var productArr = []

class Product{
  constructor (quantity,glazing){
    this.quantity = quantity;
    this.glazing = glazing;
  }
}


function addToCart(){
  alert("Item added to cart!");
  //var price = document.getElementById("productprice").value;
  var quantity = document.getElementById("num").value;
  //alert('selected the quantity:' + quantity)
  //alert('selected the price:' + price)
  var glazing = document.getElementById("glaze").value;
  var shop = new Product(quantity, glazing);
 
  productArr.push(shop);
  updateCartNumber(productArr.length);
  //var quantCount = float(quantity)
  //console.log("Here's the productArr:")
  const queryString = window.location.search
  const urlParams = new URLSearchParams(queryString)
  let product_type = urlParams.get("product_type")
  console.log(product_type)
  
  var itemdata = JSON.parse(localStorage.getItem(product_type));
  var productname = itemdata["name"]
  if (productname in cart) {
    cart[productname] += parseInt(quantity);

  } else {
    cart[productname] = parseInt(quantity);
  }
  localStorage.setItem("cart", JSON.stringify(cart));

}

function addCurrentItem(curcakeid) {
  // var price = document.getElementById("productprice").value;
  // var quantity = document.getElementById("num").value;
  // var glazing = document.getElementById("glaze").value;
  // var shop = new Product(price, quantity, glazing);
  // productArr.push(shop);
  // updateCartNumber(productArr.length);
  var cart = JSON.parse(localStorage.getItem("cart") || "{}");
  var cakeflavor = document.getElementById("cars").value;
  console.log(cakeflavor);
  var cake = JSON.parse(localStorage.getItem(curcakeid));
  cake["flavor"] = cakeflavor;

  if (curcakeid in cart) {
    cart[curcakeid] += 1;
  } 
  else {
    cart[curcakeid] = 1;
  }
  localStorage.setItem("cart", JSON.stringify(cart));
  console.log(cart);
}


function updateCartNumber(num) {
  var cartCount = document.getElementById("cartCount")
  cartCount.innerHTML = num
}

function transferDetails() {
  const queryString = window.location.search
  const urlParams = new URLSearchParams(queryString)
  let product_type = urlParams.get("product_type")
  console.log(product_type)

  // var link = window.location.href;
  // console.log(link);
  // var linkparts = link.split("?");
  // if (linkparts.length == 2) {
  //   var info = linkparts[1];
  var more = JSON.parse(localStorage.getItem(product_type));
  //   // alert(more);
  //   console.log(more);
  //   // document.getElementById("rawjson").innerHTML =
  //   // "name: " + mmore.name + "<br/> price: " + more.price;
  
    document.getElementById("productname").innerHTML = more.name;
    document.getElementById("productprice").innerHTML =
      "<br/> Price: $" + more.price;
    document.getElementById("productdesc").innerHTML =
      "<br/>" + more.description;

  if (more.name=="Original"){
    document.body.style.backgroundImage = "url('back1.png')";
  }
  if (more.name=="Original Gluten Free"){
    document.body.style.backgroundImage = "url('back2.png')";
  }
  if (more.name=="Blackberry"){
    document.body.style.backgroundImage = "url('back3.png')";
  }
  if (more.name=="Pumpkin Spice"){
    document.body.style.backgroundImage = "url('back4.png')";
  }
  if (more.name=="Walnut"){
    document.body.style.backgroundImage = "url('back5.png')";
  }
  if (more.name=="Caramel Pecan"){
    document.body.style.backgroundImage = "url('back6.png')";
  }
}

function loadCart() { 
		
  var cart = JSON.parse(localStorage.getItem("cart") || "{}");
  var cartCount = 0;
  var cartinfo = ""; 
  var quant = "";
  var priceinput = "";
  var totalprice = 0;
  for (var productid in cart) {   
    if (cart.hasOwnProperty(productid)) {
    price = cart[productid] * 6.25;
    cartinfo += productid + " : " +cart[productid] + "<br/>";

    priceinput += "$"+ price+"<br/>";
    //cartCount += cart[productid];
    cartCount += 1;
    quant += cart[productid]+"<br/>";

    totalprice = totalprice+price;
    }
    document.getElementById("cartinfo").innerHTML = cartinfo;
    document.getElementById("quant").innerHTML = quant;
    document.getElementById("priceinput").innerHTML = priceinput;
    document.getElementById("totalprice").innerHTML = totalprice;

  }

  document.getElementById("cartCount").innerHTML = cartCount;

}

function clearCart() {
alert("Your cart has been cleared! Please refresh the page.");
cart = {};
localStorage.setItem("cart", JSON.stringify(cart));
}
