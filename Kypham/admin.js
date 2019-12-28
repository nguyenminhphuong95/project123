
/// Defines a Products storage
let listProduct= [];
var indexChange;

//load wweb
window.onload = getList();
window.onload = displayListProduct();



// tabcontent đổi khi chọn giữa các trang
function openTab(evt, Tab) {
    // Declare all variables
    let i, tabcontent, tablinks;
  
    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
  
    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
  
    // Show the current tab, and add an "active" class to the link that opened the tab
    document.getElementById(Tab).style.display = "block";
    evt.currentTarget.className += " active";
  }





  // Show list to web

function displayListProduct() {
  let list = ""; 
  for (let i = 0; i < listProduct.length; i++) {
    const e = listProduct[i];
    let status;
    if(e.quantity<=10){
      status = "Sắp hết";
    } else {
      status= "Còn";
    };
      
    list += `
    <tr>
      <td>${i+1}</td>
        <td>${e.name}</td>
        <td>${e.category}</td>
        <td>${e.price}</td>
        <td>${e.quantity}</td>
        <td>${status}</td>
        <td>
            <button class="button" onclick="document.getElementById('id01').style.display='block'">
                <img src="img/button-change.png" alt="change" class="img-button" onclick="getChangeIndex(${i})">        
            </button>
            <button class="button">
                <img src="img/button-delete.png" alt="remove" class="img-button" onclick="remove(${i})">     
            </button>
        </td>
      </tr>
    `
  }
  document.getElementById("listProduct").innerHTML = list;
}

// add new to list products
function addNew() {
  let name = document.getElementById('newName').value;
  let category = document.getElementById('newCategory').value;
  let price = document.getElementById('newPrice').value;
  let quantity = document.getElementById('newQuantity').value;
  listProduct.push({
    "name": name,
    "category": category,
    "price": price,
    "quantity": quantity
  });
  displayListProduct();
  document.getElementById('newName').value="";
  document.getElementById('newCategory').value="";
  document.getElementById('newPrice').value="";
  document.getElementById('newQuantity').value="";
  saveList();
}

// change list
function getChangeIndex(i) {
  indexChange = i;
  document.getElementById('newName').value="";
  document.getElementById('newCategory').value="";
  document.getElementById('newPrice').value="";
  document.getElementById('newQuantity').value="";
}
function change() {
  let name = document.getElementById('changeName').value;
  let category = document.getElementById('changeCategory').value;
  let price = document.getElementById('changePrice').value;
  let quantity = document.getElementById('changeQuantity').value;
  listProduct[indexChange] = {
    "name": name,
    "category": category,
    "price": price,
    "quantity": quantity
  }
  displayListProduct();
  saveList();
}
  

// remove from the list
function remove(i) {
  listProduct.splice(i,1);

  displayListProduct();
  saveList();
}

// store and get list product from localstorage
function saveList() {
  let list = JSON.stringify(listProduct,null,2);
  localStorage.setItem("listProduct",list);
}

function getList() {
  listProduct = JSON.parse(localStorage.listProduct);
}


// MODAL 
let modal = document.getElementById('id01');

window.onclick = function (event) {
  if(event.taget == modal) {
    modal.style.display = 'none';
  }
}