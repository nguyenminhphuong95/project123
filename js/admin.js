
/// -------------------------------------------------------------------------ĐỊNH NGHĨA BIẾN LƯU TRỮ DANH SÁCH SẢN PHẨM-----------------------------------------------
let listProduct= [];
var indexChange;

//load wweb
window.onload = getList();
window.onload = displayTable(listProduct);

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
        <td><img src="img/product/${e.no} (1).jpg" alt="${e.name} (1)" width="100px"></td>
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
  let images = document.getElementById('newImages').value.split(','); /////////////////////////////////////////////////////////////////// <--
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
    

  displayTable(listProduct);
  saveList();
}
  

// ----------------------------------------------------------------------------------------- XÓA SẢN PHẨM------------------------------------------------
function remove(i) {
  if(confirm("Bạn có muốn xóa mục này không?")) {
    listProduct.splice(i,1);

    displayTable(listProduct);
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

// ------------------------------------------------------------------------------------------TÌM KIẾM VÀ HIỂN THỊ  LÊN BẢNG ----------------------->
function search() {
  let search = document.getElementById("search").value;
  let x = [];
  for (let i = 0; i < listProduct.length; i++) {
    const e = listProduct[i];
    if( e["name"].includes(search)) {
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
    saveList();
    alert("Đã nhập xong dữ liệu");
  } else {
    alert("Bạn nhập format từ excel rồi. Hãy vào file excel nhấn button và patse và ô thêm nhiều sản phẩm");
  }
}


function printError(error, explicit) {
  alert(`[${explicit ? 'EXPLICIT' : 'INEXPLICIT'}] ${error.name}: ${error.message}`);
}

