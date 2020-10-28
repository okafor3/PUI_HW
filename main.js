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


function updateCartNumber(num) {
  var cartCount = document.getElementById("cartCount")
  cartCount.innerHTML = num

}

function test123() {
  document.body.style.backgroundImage = "url('back1.png')";
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