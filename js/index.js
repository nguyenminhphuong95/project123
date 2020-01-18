// FUNCTION ----------------------------------------------------------------------- LẤY DANH SÁCH SẢN PHẨM
let listProduct = [];
let category ="";

listProduct = getList("listProduct");
window.onload = searchCate();

// --------------------------------------------------------------------------------------HÀM LƯU TRỮ
function getList(a) {
  if (localStorage[`${a}`] !== undefined) {
		return JSON.parse(localStorage[`${a}`]);
	} else{
		return [];
	}

}
function save(a,b) {
  let save = JSON.stringify(b,null,2);
  localStorage.setItem(`${a}`,save);     
}

// -----------------------------------------------------------------------------------SLIDE ẢNH TRANG ĐẦU -----------------------
var slideIndex = 0;
showSlides();
function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  //dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 5000); // Change image every 2 seconds
}









// ---------------------------------------------------------------------------OPEN PAGE để lưu dữ liệu mở trong salespage
function openPage (itemNo) {
	save("itemOpen",itemNo);
}








//  ------------------------------------------------------------------------------------------FORMAT DẠNG TIỀN TỆ-----------------------
function format_currency(x) {
 
  x = parseFloat(String(x).replace(/,/g, ""))
                  .toFixed(0)
                  .toString()
                  .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return x;
}





//-------------------------------------------------------------------------------------- LOADING 
function searchList(a) {
  let save = JSON.stringify(a);
  localStorage.setItem("categoryOpen",save)
  searchCate();
}

//---------------------------------------------------------------------------------------- Hiện thị ảnh theo phân loại
function searchCate() {
  category = getList("categoryOpen");
  
  let x = [];
  for (let i = 0; i < listProduct.length; i++) {
    const e = listProduct[i];
    if( e["category"].toLowerCase().includes(category.toLowerCase())) {
      x.push(e);
    }
  }
  if (category == ""){
    x = listProduct;

  }

  displayItems(x);
  window.scrollTo(0,1080);
}

function winScroll(a) {
  window.scrollTo(0,a);
}
// ------------------------------------------------------------------------------------ Function display danh sách các item
function displayItems(a) {
  
  
  let display = "";
  for (let i = 0; i < a.length; i+=4) {
     let item ="";
    for (let j = i; j < i+4; j++) {
      const e = a[j];
      if (j<a.length) {
        let newPrice = e.price * ( 1 - (e.discount/100));

        if(e.discount ==0) {
          item +=`
          <a class="col-sm" href="salespage.html" target="_blank" onclick="openPage('${e.no}')">
            <div class="items-img banner">
                <img src="img/product/${e.no}.1.jpg">
            </div>
              <p class="name">${e.name}</p>
              <p class="price">${format_currency(e.price)}đ</p>
          </a>
          `  
        } else {
          item +=`
          <a class="col-sm" href="salespage.html" target="_blank" onclick="openPage('${e.no}')">
            <div class="items-img banner">
                <img src="img/product/${e.no}.1.jpg">
            </div>
              <p class="name">${e.name}</p>
              <p class="price">${format_currency(newPrice)}đ  <span style="text-decoration: line-through; color: rgb(119, 119, 119); font-weight: 200">(${format_currency(e.price)}đ)</span></p>
          </a>
          `
        }


      } else {
        item +=`
        <div class="col-sm">
        </div>
        `  
      }
      
    }
    
    display +=`
    <div class="row main-list">
      ${item}
    </div>
    `;
  }
  
  $("div#itemsContainer").fadeOut(400, function() {
    $("div#itemsContainer").html(display);
    
    $("div#itemsContainer").fadeIn(400);
  });
    
  
} 

//-------------------------------------------------------------------------------------------------------SEARCH
 function search () {
   let search = document.getElementById("text_search").value
   let x = [];
   for (let i = 0; i < listProduct.length; i++) {
     const e = listProduct[i];
     if( e['name'].toLowerCase().includes(search.toLowerCase())) {
       x.push(e);
     }
   }
   if (search == ""){
     x = listProduct;
 
   }
   displayItems(x);
   window.scrollTo(0,1080);
 }

 //  -----------------------------------------------------------------------------------------TẮT MODAL KHI KICK RA NGOÀI------------------------------------------------
let modal1 = document.getElementById('id01');
// let modal2 = document.getElementById('id02');
// let modal3 = document.getElementById('id03');
// let modal4 = document.getElementById('id04');
// let modal5 = document.getElementById('id05');

window.onclick = function (event) {
  if(event.target == modal1) {
    modal1.style.display = 'none';
  }
  // if(event.target == modal2) {
  //   modal2.style.display = 'none';
  // }
  // if(event.target == modal3) {
  //   modal3.style.display = 'none';
  // }
  // if(event.target == modal4) {
  //   modal4.style.display = 'none';
  // }
  // if(event.target == modal5) {
  //   modal5.style.display = 'none';
  // }
}

// --------------------------------------------------------------------------------------Hiển thị miniCart---
let cusOrders = [];
cusOrders = getList("cusOrders");
let cusCart = [];
cusCart = getList("cartItem");

function displayMiniCartItems(){
  cusCart = getList("cartItem");
  let cartRows="";
  let totalSum = 0;
  for (let i = 0; i < cusCart.length; i++) {
      const e = cusCart[i];
      let name = searchCartItem(e.no,"name");
      let price = searchCartItem(e.no,"price");
      let discount = searchCartItem(e.no,"discount");
      let sum = e.quantity * price * (1-(discount/100));
      totalSum += sum; 
      cartRows +=`
      <div class="cart-items row">
          <div class="col-sm-2" style="margin: auto;"> 
              <img src="img/product/${e.no}.1.jpg" alt="item" width="100%">
          </div> 
          <div class="col-sm-6 cart-row" style="margin: auto;">
              <h4>${name}</h4>
              <p style="color: gray;">Số lượng: ${e.quantity} sản phẩm.</p>
          </div>
          <div class="col-sm-2 cart-row" style="margin: auto;">
              <button type="button" class="btn btn-outline-danger btn-sm" onclick="remove_cart_item(${i})">Xóa khỏi giỏ</button>
          </div>
  
          <div class="col-sm-2 cart-row" style="text-align: right;margin: auto;" id="sum${i}">${format_curency(sum)}đ</div>
      </div>
      `;
  }
  cartRows +=`
      <div class="row" style="border-top: 1px solid rgb(156, 156, 156)">
          <div class="col-sm-9 cart-row"> VAT </div>
          <div class="col-sm-3 cart-row" style="text-align: right;" id="VAT">${format_curency(totalSum*0.1)}đ</div>
          
      </div>        
      <div class="row">
          <div class="col-sm-9 cart-row"  style="border-top: none;"> Tổng tiền (VAT) </div>
          <div class="col-sm-3 cart-row" style="text-align: right; border-top: none;" id="totalSum">${format_curency(totalSum*1.1)}đ</div>
          
      </div>
  `
  document.getElementById("miniCart").innerHTML = cartRows; 
}

function searchCartItem(a,element) {
  for (let i = 0; i < listProduct.length; i++) {
      const e = listProduct[i];
      if (a == e.no) {
          return e[`${element}`];
      }
  }
}

function format_curency(x) {
 
  x = parseFloat(String(x).replace(/,/g, ""))
                  .toFixed(0)
                  .toString()
                  .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return x;
}

function remove_cart_item(i) {
  cusCart.splice(i,1);
  save("cartItem",cusCart);
  displayMiniCartItems();
}