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

function addToCart(){
  var price = document.getElementById("productprice").value
  var quantity = document.getElementById("num").value
  //alert('selected the quantity:' + quantity)
  //alert('selected the price:' + price)
  var glazing = document.getElementById("glaze").value

  var shop = new Product(price, quantity, glazing)

  productArr.push(shop)

  updateCartNumber(productArr.length)

  //var quantCount = float(quantity)

  //console.log("Here's the productArr:")
  //console.log(productArr)
}

// function changeBackground(){
//   document.body.style.backgroundImage = "url('back1.png')";
// }

// function backTwo() {
//   document.body.style.backgroundImage = "url('back2.png')";
// }

// function backThree() {
//   document.body.style.backgroundImage = "url('back3.png')";
// }

function updateCartNumber(num) {
  var cartCount = document.getElementById("cartCount")
  cartCount.innerHTML = num

}

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
  }

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


function updateCart(){
  var link = window.location.href;
  console.log(link);
  var linkparts = link.split("?");
  if (linkparts.length == 2) {
    var info1 = linkparts[1];
    var more1 = JSON.parse(localStorage.getItem(info1));
  
    console.log(more1);
  
    document.getElementById("productname1").innerHTML = more1.name;

  }
  if (more1.name=="Original"){
    document.body.style.backgroundImage = "url('back1.png')";
  }
  if (more1.name=="Original Gluten Free"){
    document.body.style.backgroundImage = "url('back2.png')";
  }
  if (more1.name=="Blackberry"){
    document.body.style.backgroundImage = "url('back3.png')";
  }
  if (more1.name=="Pumpkin Spice"){
    document.body.style.backgroundImage = "url('back4.png')";
  }
  if (more1.name=="Walnut"){
    document.body.style.backgroundImage = "url('back5.png')";
  }
  if (more1.name=="Caramel Pecan"){
    document.body.style.backgroundImage = "url('back6.png')";
  }
}

// function checkoutPage{
//   localStorage.
//   //load that new HTML page
//   //do stuff with productArr
// }

//json takes an object or a list of objects
//makes them into a string, including all the attribuutes
//you then pass this string to another page (via several methods)
//then that receiving page decodes the string and makes it back into an object