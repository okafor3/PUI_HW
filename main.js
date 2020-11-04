function newPage() {
  window.location.assign("file:///Users/okafor3/Desktop/PUI/HW/homework_5/ItemDetails.html")
  // window.location.href='ItemDetails.html';
}

function myFunction() {
  document.getElementById("textchange").innerHTML= "Original"
  //document.getElementById("textchange").innerHTML= document.getElementById("demo").innerHTML;
}

var productArr = []

class Product{
  constructor (price,quantity,glazing){
    this.price = price
    this.quantity = quantity
    this.glazing = glazing
  }

  getTotal (){
    return this.price * this.quantity
  }
}

// function addToCart(){
//   var price = document.getElementById("productprice").value
//   var quantity = document.getElementById("num").value
//   //alert('selected the quantity:' + quantity)
//   //alert('selected the price:' + price)
//   var glazing = document.getElementById("glaze").value

//   var shop = new Product(price, quantity, glazing)

//   productArr.push(shop)

//   updateCartNumber(productArr.length)

//   //var quantCount = float(quantity)

//   //console.log("Here's the productArr:")
//   //console.log(productArr)
// }

function addcurcaketocart() {
  var price = document.getElementById("productprice").value;
  var quantity = document.getElementById("num").value;
  var glazing = document.getElementById("glaze").value;
  var shop = new Product(price, quantity, glazing);
  productArr.push(shop);
  //updateCartNumber(productArr.length);

  var cartCount = document.getElementById("cartCount")
  cartCount.innerHTML = productArr.length

  var cart = JSON.parse(localStorage.getItem("cart") || "{}");
  var cakeflavor = document.getElementById("cars").value;
  console.log(cakeflavor);
  var cake = JSON.parse(localStorage.getItem(curcakeid));
  cake["flavor"] = cakeflavor;


  //to add a specific item to cart count
  if (curcakeid in cart) {
    cart[curcakeid] += 1;
  } else {
    cart[curcakeid] = 1;
  }
  localStorage.setItem("cart", JSON.stringify(cart));
  console.log(cart);
  
  loadCart()
}

  
// function updateCartNumber(num) {
//   var cartCount = document.getElementById("cartCount")
//   cartCount.innerHTML = num
// }

function copyText() {
  var link = window.location.href;
  console.log(link);
  var linkparts = link.split("?");
  if (linkparts.length == 2) {
    var info = linkparts[1];
    var more = JSON.parse(localStorage.getItem(info));
    // alert(more);
    console.log(more);
    // document.getElementById("rawjson").innerHTML =
    // "name: " + mmore.name + "<br/> price: " + more.price;
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

  // if (more.name=="Original"){
  //   <input type="button" onclick="addCount('Original')" value="Add to Cart - Original"/>;
  // }
  // if (more.name=="Original Gluten Free"){
  //   <input type="button" onclick="addCount('Original')" value="Add to Cart - Original Gluten Free"/>;
  // }
  // if (more.name=="Blackberry"){
  //   <input type="button" onclick="addCount('Original')" value="Add to Cart - Blackberry"/>;
  // }
  // if (more.name=="Pumpkin Spice"){
  //   <input type="button" onclick="addCount('Original')" value="Add to Cart - Pumpkin Spice"/>;
  // }
  // if (more.name=="Walnut"){
  //   <input type="button" onclick="addCount('Original')" value="Add to Cart - Walnut"/>;
  // }
  // if (more.name=="Caramel Pecan"){
  //   <input type="button" onclick="addCount('Original')" value="Add to Cart - Caramel Pecan"/>;
  // }
}

// function loadCart() {
//   var cart = JSON.parse(localStorage.getItem("cart") || "{}");
//   console.log(cart);
//   var cartinfo = "";
//   for (var productid in cart) {
//     // check if the property/key is defined in the object itself, not in parent
//     if (cart.hasOwnProperty(productid)) {
//       console.log(productid, cart[productid]);
//       cartinfo += productid + " : " + cart[productid] + "<br/>";
//     }
//     document.getElementById("cartinfo").innerHTML = cartinfo;
    
//     document.getElementById("cartCount").innerHTML = 10;
//   }
// }
function loadCart() { 
  var cart = JSON.parse(localStorage.getItem("cart") || "{}");
  console.log(cart);
  var cartCount = 0;
  var cartinfo = ""; 
  for (var productid in cart) {   
    if (cart.hasOwnProperty(productid)) {
      console.log(productid, cart[productid]);
      cartinfo += productid + " : " + cart[productid] + "<br/>";
      //cartCount += cart[productid];
      cartCount += 1;
    }
    document.getElementById("cartinfo").innerHTML = cartinfo;
  } 
  document.getElementById("cartCount").innerHTML = cartCount;
}
