
/// -------------------------------------------------------------------------ĐỊNH NGHĨA BIẾN LƯU TRỮ DANH SÁCH SẢN PHẨM-----------------------------------------------
let listProduct= [];
var indexChange;

//load wweb
window.onload = getList();
window.onload = displayListProduct();

//  -------------------------------------------------------------------------HIỂN THỊ DANH SÁCH LÊN WEB---------------------------------------------------------

function displayListProduct() {
  let list = ""; 
  for (let i = 0; i < listProduct.length; i++) {
    const e = listProduct[i];
      
    list += `
      <tr>
        <td>${i+1}</td>
        <td>${e.no}</td>
        <td>${e.name}</td>
        <td>${e.category}</td>
        <td>${format_curency(e.price)} đ</td>
        <td>${e.quantity}</td>
        <td>${e.discount}</td>
        <td>${e.images}</td>
        <td>${e.description}</td>
        <td>
            <button class="btn btn-success" onclick="document.getElementById('id01').style.display='block'; getChangeIndex(${i})">Sửa</button>
            <button class="btn btn-danger" onclick="remove(${i})">Xóa</button>
        </td>
      </tr>
      `
  }
  document.getElementById("listProduct").innerHTML = list;
}

// ---------------------------------------------------------------------------------THÊM MỚI SẢN PHẨM --------------------------------------------------------
function addNew() {
  let newNo = document.getElementById('newNo').value;
  let name = document.getElementById('newName').value;
  let category = document.getElementById('newCategory').value;
  let price = document.getElementById('newPrice').value;
  let quantity = document.getElementById('newQuantity').value;
  let discount = document.getElementById('newDiscount').value;
  let images = document.getElementById('newImages').value;
  let description = document.getElementById('newDescription').value;
  
  listProduct.push({
    "no": newNo,
    "name": name,
    "category": category,
    "price": Number(price),
    "quantity": quantity,
    "discount": discount,
    "images": images,
    "description": description,
  });
  displayListProduct();
  saveList();
}

//  --------------------------------------------------------------------------------SỬA SẢN PHẨM---------------------------------------------------------
function getChangeIndex(i) {
  indexChange = i;
  
    document.getElementById('changeNo').value = listProduct[i].no
    document.getElementById('changeName').value = listProduct[i].name;
    document.getElementById('changeCategory').value = listProduct[i].category;
    document.getElementById('changePrice').value = listProduct[i].price;
    document.getElementById('changeQuantity').value = listProduct[i].quantity;
    document.getElementById('changeDiscount').value = listProduct[i].discount;
    document.getElementById('changeImages').value = listProduct[i].images;
    document.getElementById('changeDescription').value = listProduct[i].description;
  
    

}
function change() {
  let name = document.getElementById('changeName').value;
  let category = document.getElementById('changeCategory').value;
  let price = document.getElementById('changePrice').value;
  let quantity = document.getElementById('changeQuantity').value;
  let discount = document.getElementById('changeDiscount').value;
  let images = document.getElementById('changeImages').value;
  let description = document.getElementById('changeDescription').value;
  
  listProduct[indexChange].name = name;
  listProduct[indexChange].category = category;
  listProduct[indexChange].price = price;
  listProduct[indexChange].quantity = quantity;
  listProduct[indexChange].discount = discount;
  listProduct[indexChange].images = images;
  listProduct[indexChange].description = description;
    

  displayListProduct();
  saveList();
}
  

// ----------------------------------------------------------------------------------------- XÓA SẢN PHẨM------------------------------------------------
function remove(i) {
  if(confirm("Bạn có muốn xóa mục này không?")) {
    listProduct.splice(i,1);

    displayListProduct();
    saveList();
  }
}

//------------------------------------------------------------------------------------------ LƯU VÀ LẤY DỮ LIỆU KHI LOAD WEB -----------------------------------------------
function saveList() {
  let list = JSON.stringify(listProduct,null,2);
  localStorage.setItem("listProduct",list);
}

function getList() {
  listProduct = JSON.parse(localStorage.listProduct);
}


//  -----------------------------------------------------------------------------------------TẮT MODAL KHI KICK RA NGOÀI------------------------------------------------
let modal1 = document.getElementById('id01');
let modal2 = document.getElementById('id02');

window.onclick = function (event) {
  if(event.target == modal1) {
    modal1.style.display = 'none';
  }
  if(event.target == modal2) {
    modal2.style.display = 'none';
  }
}


//  ------------------------------------------------------------------------------------------FORMAT DẠNG TIỀN TỆ-----------------------------------------------
function format_curency(x) {
 
    x = parseFloat(String(x).replace(/,/g, ""))
                    .toFixed(0)
                    .toString()
                    .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return x;
}
