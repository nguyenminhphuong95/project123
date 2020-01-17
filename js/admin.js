
/// -------------------------------------------------------------------------ĐỊNH NGHĨA BIẾN LƯU TRỮ DANH SÁCH SẢN PHẨM-----------------------------------------------
let listProduct= [];
let cusOrders=[];
var indexChange;

//load wweb
cusOrders = getList("cusOrders");
listProduct= getList("listProduct");
window.onload = displayTable(listProduct);
window.onload = displaylistOrder();


//  -------------------------------------------------------------------------HIỂN THỊ DANH SÁCH LÊN WEB---------------------------------------------------------

function displayTable(a) {
  sortItem(a);
  let list = ""; 
  for (let i = 0; i < a.length; i++) {
    const e = a[i];
      
    list += `
      <tr>
        <td>${i+1}</td>
        <td>${e.no}</td>
        <td>${e.name}</td>
        <td>${e.category}</td>
        <td>${format_curency(e.price)} đ</td>
        <td>${e.quantity}</td>
        <td>${e.discount}%</td>
        <td><img src="img/product/${e.no}.1.jpg" alt="${e.name}.1.jpg" width="100px"></td>
        <td>${e.description}</td>
        <td>
            <button class="btn btn-success" onclick="document.getElementById('id01').style.display='block'; getChangeIndex(${i})">Sửa</button>
            <button class="btn btn-danger" onclick="remove(${i})">Xóa</button>
        </td>
      </tr>
      `
  }
  document.getElementById("listProduct").innerHTML = list;
  let sum=0; //-----------------------------------------GRAND TOTAL THEO LỌC---------------->
  for (let i = 0; i < a.length; i++) {
    const e = a[i];
    sum += e.price* e.quantity;
  }
  document.getElementById("grandTotal").innerHTML = `${format_curency(sum)} vnđ`;
}

// ---------------------------------------------------------------------------------THÊM MỚI SẢN PHẨM --------------------------------------------------------
function addNew() {
  let newNo = document.getElementById('newNo').value;
  let name = document.getElementById('newName').value;
  let category = document.getElementById('newCategory').value;
  let price = document.getElementById('newPrice').value;
  let quantity = document.getElementById('newQuantity').value;
  let discount = document.getElementById('newDiscount').value;
  let images = document.getElementById('newImages').value.split(',');
  let description = document.getElementById('newDescription').value;
  
  listProduct.push({
    "no": newNo,
    "name": name,
    "category": category,
    "price": Number(price),
    "quantity": Number(quantity),
    "discount": Number(discount),
    "images": images,
    "description": description,
  });
  displayTable(listProduct);
  save("listProduct",listProduct);
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
    

  displayTable(listProduct);
  save("listProduct",listProduct);
}
  

// ----------------------------------------------------------------------------------------- XÓA SẢN PHẨM------------------------------------------------
function remove(i) {
  if(confirm("Bạn có muốn xóa mục này không?")) {
    listProduct.splice(i,1);

    displayTable(listProduct);
    save("listProduct",listProduct);
  }
}

//------------------------------------------------------------------------------------------ LƯU VÀ LẤY DỮ LIỆU KHI LOAD WEB -----------------------------------------------
function save(a,b) {
  let save = JSON.stringify(b,null,2);
  localStorage.setItem(a,save); 
}

function getList(a) {
	if (localStorage[`${a}`] !== undefined) {
        
		return JSON.parse(localStorage[`${a}`]);
	} else{
		return [];
	}
}


//  -----------------------------------------------------------------------------------------TẮT MODAL KHI KICK RA NGOÀI------------------------------------------------
let modal1 = document.getElementById('id01');
let modal2 = document.getElementById('id02');
let modal3 = document.getElementById('id03');
let modal4 = document.getElementById('id04');
let modal5 = document.getElementById('id05');

window.onclick = function (event) {
  if(event.target == modal1) {
    modal1.style.display = 'none';
  }
  if(event.target == modal2) {
    modal2.style.display = 'none';
  }
  if(event.target == modal3) {
    modal3.style.display = 'none';
  }
  if(event.target == modal4) {
    modal4.style.display = 'none';
  }
  if(event.target == modal5) {
    modal5.style.display = 'none';
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

// ------------------------------------------------------------------------------------------TÌM KIẾM VÀ HIỂN THỊ  LÊN BẢNG ----------------------->
function search() {
  // (chọn mục search)
  let targetSearch = document.getElementById("searchCategory").innerHTML;
  if(targetSearch == "Mã sản phẩm") { targetSearch = "no";}
  else if (targetSearch == "Tên sản phẩm") { targetSearch = "name";}
  else if (targetSearch == "Loại") { targetSearch = "category";}
  else { return}
  
  // (nội dung search)
  let search = document.getElementById("search").value;
  let x = [];
  for (let i = 0; i < listProduct.length; i++) {
    const e = listProduct[i];
    if( e[`${targetSearch}`].toLowerCase().includes(search.toLowerCase())) {
      x.push(e);
    }
  }
  if (search == ""){
    x = listProduct;

  }
  
  displayTable(x);
}

// -------------------------------------------------------------------------------------SORT ITEM---------------------------------------------->

function sortItem(a) {
  a.sort(function(value1, value2){
    return value1['no'].localeCompare(value2['no']);
  });
}



// -------------------------------------------------------SUPER SEARCH---------------OTHER SEARCH FUNCTION---------------------------------->
$(document).ready(function() {
  $(".search").keyup(function () {
    var searchTerm = $(".search").val();
    var listItem = $('.results tbody').children('tr');
    var searchSplit = searchTerm.replace(/ /g, "'):containsi('")
    
  $.extend($.expr[':'], {'containsi': function(elem, i, match, array){
        return (elem.textContent || elem.innerText || '').toLowerCase().indexOf((match[3] || "").toLowerCase()) >= 0;
    }
  });
    
  $(".results tbody tr").not(":containsi('" + searchSplit + "')").each(function(e){
    $(this).attr('visible','false');
  });

  $(".results tbody tr:containsi('" + searchSplit + "')").each(function(e){
    $(this).attr('visible','true');
  });

  var jobCount = $('.results tbody tr[visible="true"]').length;
    $('.counter').text(jobCount + ' item');

  if(jobCount == '0') {$('.no-result').show();}
    else {$('.no-result').hide();}
		  });
});


// ------------------------------------------------------------------------------------MERGE DATA FROM EXCEL -------------------------
function merge() {
  try {
    JSON.parse(document.getElementById('excelData').value);
  } catch (e) {
    if (e instanceof SyntaxError) {
        printError(e, true);
        alert("Bạn nhập sai dữ liệu từ Excel rồi. Hãy thử lại nhé");
    } else {
        printError(e, false);
        alert("Bạn nhập sai dữ liệu từ Excel rồi. Hãy thử lại nhé");
    }
  }
  let excelData = JSON.parse(document.getElementById('excelData').value);
  if(Array.isArray(excelData)){
    for (let i = 0; i < listProduct.length; i++) {
          for (let j = 0; j < excelData.length; j++) {
              if (listProduct[i].no == excelData[j].no) {
                  listProduct.splice(i,1);
                  i--;
                  break;
              }
          }  
    }
    listProduct=[...listProduct,...excelData];
    console.log(listProduct);
    
    displayTable(listProduct);
    save("listProduct",listProduct);
    alert("Đã nhập xong dữ liệu");
  } else {
    alert("Bạn nhập format từ excel rồi. Hãy vào file excel nhấn button và patse và ô thêm nhiều sản phẩm");
  }
}


function printError(error, explicit) {
  alert(`[${explicit ? 'EXPLICIT' : 'INEXPLICIT'}] ${error.name}: ${error.message}`);
}



//-------------------------------------------------------------------------------------------------- CHANGE TAB
function openTab(evt, tabName) {
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

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.className += " active";
} 


// ------------------------------------------------------------------------------------------------- Các mục về quản lý đơn hàng

function displaylistOrder() {
  let listOrder= "";
  let undefinedOrder = 0;
  for (let i = 0; i < cusOrders.length; i++) {
    const e = cusOrders[i];
    if (e.status == "chưa hoàn thành") {
      undefinedOrder++;
    }
    let numberProduct = 0;
    for (let j = 0; j < e["cusCart"].length; j++) {
      const element = e["cusCart"][j];
      numberProduct += element.quantity;
    }
    listOrder +=
    `
    <tr>
      <td>${i+1}</td>
      <td>${e.cusNo}</td>
      <td><button onclick="displayCusInfo(${i}); document.getElementById('id04').style.display='block'; " 
      class="btn btn-outline-info" style="font-size: 15px; font-weight: bold; min-width: 150px;">${e.cusName}</button></td>
      
      <td><button onclick="displayOrderInfo(${i}); document.getElementById('id05').style.display='block'; " 
      class="btn btn-outline-info" style="font-size: 15px; font-weight: bold;">${numberProduct} sản phẩm</button></td>
      <td>${e.cusComment}</td>
      <td>${e.deliMethod}</td>
      <td>${e.payMethod}</td>
      <td>${e.status}</td>
      <td>
        <button onclick="deleteCusOrder(${i})" class="btn btn-outline-danger" style="font-size: 10px; font-weight: bold; min-width: 60px;">Delete</button>
        <button onclick="finishCusOrder(${i})" class="btn btn-outline-success" style="font-size: 10px; font-weight: bold; min-width: 60px;">Done</button>
        
      </td>
    </tr>
    `
  }
  document.getElementById("listOrder").innerHTML = listOrder;
  document.getElementById("totalUnfinishedOrder").innerHTML = undefinedOrder + " đơn hàng";
}

function displayCusInfo (i){
  let x ="";
  x = `
    <thead>
      <tr>
        <th style="width: 30%">Khách hàng</td>
        <th style="width: 70%">${cusOrders[i].cusName}</td>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Email</td>
        <td>${cusOrders[i].cusEmail}</td>
      </tr>
      <tr>
        <td>Số Điện Thoại</td>
        <td>${cusOrders[i].cusPhone}</td>
      </tr>
      <tr>
        <td>Địa chỉ giao hàng</td>
        <td>${cusOrders[i].cusAddress}</td>
      </tr>
      <tr>
        <td>Lưu ý</td>
        <td>${cusOrders[i].cusComment}</td>
      </tr>
    </tbody>
  `
  document.getElementById("cusInfo").innerHTML=x;
}



// -------------------------------------------------------------------------------------------------------FUNCTION TỪ SALESPAGE SANG
function displayOrderInfo(a){
  let cartRows="";
  let totalSum = 0;
  for (let i = 0; i < cusOrders[a].cusCart.length; i++) {
      const e = cusOrders[a].cusCart[i];
      let name = searchCartItem(e.no,"name");
      let price = searchCartItem(e.no,"price");
      let discount = searchCartItem(e.no,"discount");
      let sum = e.quantity * price * (1-(discount/100));
      totalSum += sum; 
      cartRows +=`
      <div class="cart-items row">
          <div class="col-sm-3 cart-row"> 
              <img src="img/product/${e.no}.1.jpg" alt="item" width="100%">
          </div> 
          <div class="col-sm-5 cart-row" style="margin: auto">
              <h4>${name}</h4>
              <p style="margin: 0px;">- Mã sản phẩm: ${e.no}</p>
              <p style="margin: 0px;">- Đơn giá: ${format_curency(price)}đ</p>
              <p style="margin: 0px;">- Giảm giá: ${discount} %</p>
          </div>
          <div class="col-sm-2 cart-row" style="margin: auto">
              ${e.quantity} sp
          </div>
  
          <div class="col-sm-2 cart-row" style="text-align: right; margin: auto" id="sum${i}">${format_curency(sum)}đ</div>
      </div>
      `;
  }
  cartRows +=`
      <div class="row">
          <div class="col-sm-9 cart-row"> VAT </div>
          <div class="col-sm-3 cart-row" style="text-align: right;" id="VAT">${format_curency(totalSum*0.1)}đ</div>
          
      </div>        
      <div class="row">
          <div class="col-sm-9 cart-row"  style="border-top: none;"> Tổng tiền (VAT) </div>
          <div class="col-sm-3 cart-row" style="text-align: right; border-top: none;" id="totalSum">${format_curency(totalSum*1.1)}đ</div>
          
      </div>
  `;
  document.getElementById("orderInfo").innerHTML = cartRows;
}

//---------------------------------------------------------------------------- Tìm thông tin sản phẩm giỏ trong data ListProduct
function searchCartItem(a,element) {
  for (let i = 0; i < listProduct.length; i++) {
      const e = listProduct[i];
      if (a == e.no) {
          return e[`${element}`];
      }
  }
}

function deleteCusOrder (a) {
  cusOrders.splice(a,1);
  save("cusOrders",cusOrders);
  displaylistOrder();
}

function finishCusOrder(a) {
  cusOrders[a].status = "Hoàn thành";
  save("cusOrders",cusOrders);
  displaylistOrder();
}