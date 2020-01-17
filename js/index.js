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
  console.log(category);
  
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