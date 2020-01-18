// FUNCTION ----------------------------------------------------------------------- LẤY DANH SÁCH SẢN PHẨM
let listProduct=[{"no":"JK01","name":"DA BIKER JACKET","category":"Áo khoác","price":850000,"quantity":5,"discount":5,"images":"4","description":"Size S: Chiều dài: 62cm; Chiều rộng: 106cm <br>Size M: Chiều dài: 63cm; Chiều rộng: 108cm <br>Size L: Chiều dài: 64cm; Chiều rộng: 112cm"},{"no":"JK02","name":"CODY BLAZER","category":"Áo khoác","price":890000,"quantity":15,"discount":5,"images":"5","description":"Size S: Chiều dài: 74cm; Chiều rộng: 112cm, Dài tay: 62cm<br>Size M: Chiều dài: 78cm; Chiều rộng: 114cm, Dài tay: 68cm"},{"no":"JK03","name":"METAL JACKET","category":"Áo khoác","price":790000,"quantity":30,"discount":20,"images":"6","description":"Size S: Chiều dài: 69cm; Chiều rộng: 120cm<br>Size M: Chiều dài: 72cm; Chiều rộng: 122cm<br>Size L: Chiều dài: 75cm; Chiều rộng: 124cm"},{"no":"JK04","name":"TRACK JACKET BLACK","category":"Áo khoác","price":790000,"quantity":12,"discount":0,"images":"5","description":"Size S: Chiều dài: 65cm; Chiều rộng: 128cm; Dài tay: 64cm<br>Size M: Chiều dài: 67cm; Chiều rộng: 132cm; Dài tay: 66cm<br>Size L: Chiều dài: 69cm; Chiều rộng: 136cm; Dài tay: 68cm"},{"no":"JK05","name":"TRACK JACKET WHITE","category":"Áo khoác","price":790000,"quantity":10,"discount":0,"images":"4","description":"Size S: Chiều dài: 65cm; Chiều rộng: 128cm; Dài tay: 64cm<br>Size M: Chiều dài: 67cm; Chiều rộng: 132cm; Dài tay: 66cm<br>Size L: Chiều dài: 69cm; Chiều rộng: 136cm; Dài tay: 68cm"},{"no":"JK06","name":"MILLI JACKET","category":"Áo khoác","price":820000,"quantity":50,"discount":0,"images":"4","description":"Size S: Chiều dài: 67 cm; Chiều rộng: 118 cm; Dài tay: 69 cm<br>Size M: Chiều dài: 68 cm; Chiều rộng: 122 cm; Dài tay: 70 cm<br>Size L: Chiều dài: 69 cm; Chiều rộng: 126 cm; Dài tay: 71 cm"},{"no":"JK07","name":"RACING HOODED JACKET","category":"Áo khoác","price":690000,"quantity":2,"discount":0,"images":"5","description":"Size M: Chiều dài: 71 cm; Chiều rộng 120 cm<br>Size L: Chiều dài: 73 cm; Chiều rộng 124 cm"},{"no":"JK08","name":"POC POC VEST","category":"Áo khoác","price":720000,"quantity":10,"discount":0,"images":"6","description":"Size S: Chiều dài: 66cm; Chiều rộng: 56cm<br>Size M: Chiều dài: 69cm; Chiều rộng: 58cm<br>Size L: Chiều dài: 72cm; Chiều rộng: 60cm"},{"no":"JK09","name":"LEX VEST","category":"Áo khoác","price":780000,"quantity":10,"discount":0,"images":"5","description":"Size S: Chiều dài: 60 cm; Chiều rộng: 106 cm<br>Size M: Chiều dài: 63 cm; Chiều rộng: 110 cm<br>Size L: Chiều dài: 66 cm; Chiều rộng: 114 cm"},{"no":"JK10","name":"YOUTH BLAZER","category":"Áo khoác","price":920000,"quantity":10,"discount":0,"images":"4","description":"Size S: Chiều dài: 74cm; Chiều rộng: 112cm, Dài tay: 62cm<br>Size M: Chiều dài: 78cm; Chiều rộng: 114cm, Dài tay: 68cm<br>Size L: Chiều dài: 80cm; Chiều rộng: 116cm, Dài tay: 69cm"},{"no":"SH01","name":"LIDER 2020 DANTON","category":"Áo sơ mi","price":450000,"quantity":10,"discount":0,"images":"6","description":"Size S: Chiều dài: 70cm; Chiều rộng: 120cm <br>Size M: Chiều dài: 72cm; Chiều rộng: 124cm <br>Size L: Chiều dài: 74cm; Chiều rộng: 128cm "},{"no":"SH02","name":"LDR DANTON","category":"Áo sơ mi","price":450000,"quantity":10,"discount":0,"images":"6","description":"Size S: Chiều dài: 70cm; Chiều rộng: 120cm <br>Size M: Chiều dài: 72cm; Chiều rộng: 124cm <br>Size L: Chiều dài: 74cm; Chiều rộng: 128cm "},{"no":"SH03","name":"LAYER SHIRT","category":"Áo sơ mi","price":650000,"quantity":10,"discount":0,"images":"5","description":"Size M: Chiều dài: 68cm; Chiều rộng: 140cm <br>Size L: Chiều dài: 70cm; Chiều rộng: 142cm "},{"no":"SH04","name":"RTG SHIRT GREY","category":"Áo sơ mi","price":520000,"quantity":10,"discount":0,"images":"7","description":"Size S: Chiều dài: 75cm; Chiều rộng: 65cm<br>Size M: Chiều dài: 77cm; Chiều rộng: 66cm<br>Size L: Chiều dài: 79cm; Chiều rộng: 67cm"},{"no":"SH05","name":"RTG SHIRT RED","category":"Áo sơ mi","price":520000,"quantity":10,"discount":0,"images":"7","description":"Size S: Chiều dài: 75cm; Chiều rộng: 65cm<br>Size M: Chiều dài: 77cm; Chiều rộng: 66cm<br>Size L: Chiều dài: 79cm; Chiều rộng: 67cm"},{"no":"SH06","name":"LIDER 2020 SHIRT","category":"Áo sơ mi","price":490000,"quantity":10,"discount":0,"images":"6","description":"Size M: Chiều dài: 68cm; Chiều rộng: 140cm <br>Size L: Chiều dài: 70cm; Chiều rộng: 142cm "},{"no":"SH07","name":"FLORES SHIRT BLACK","category":"Áo sơ mi","price":620000,"quantity":10,"discount":0,"images":"4","description":"Size M: Chiều dài: 68cm; Chiều rộng: 140cm <br>Size L: Chiều dài: 70cm; Chiều rộng: 142cm "},{"no":"SH08","name":"FLORES SHIRT BLUE","category":"Áo sơ mi","price":620000,"quantity":10,"discount":0,"images":"6","description":"Size M: Chiều dài: 68cm; Chiều rộng: 140cm <br>Size L: Chiều dài: 70cm; Chiều rộng: 142cm "},{"no":"SH09","name":"FLORES SHIRT WHITE","category":"Áo sơ mi","price":590000,"quantity":10,"discount":0,"images":"6","description":"Size M: Chiều dài: 68cm; Chiều rộng: 140cm <br>Size L: Chiều dài: 70cm; Chiều rộng: 142cm "},{"no":"SH10","name":"PIZZA DANTON","category":"Áo sơ mi","price":420000,"quantity":10,"discount":0,"images":"6","description":"Size S: Chiều dài: 73cm; Chiều rộng: 106cm <br>Size M: Chiều dài: 75cm; Chiều rộng: 109cm <br>Size L: Chiều dài: 77cm; Chiều rộng: 112cm "},{"no":"TS01","name":"LIDER 2020 TEE WHITE","category":"Áo phông","price":360000,"quantity":10,"discount":0,"images":"3","description":"Size S: Chiều dài: 72cm; Chiều rộng: 108cm<br>Size M: Chiều dài: 73cm; Chiều rộng: 109cm<br>Size L: Chiều dài: 74cm; Chiều rộng: 110cm"},{"no":"TS02","name":"LIDER 2020 TEE PINK","category":"Áo phông","price":360000,"quantity":10,"discount":0,"images":"6","description":"Size S: Chiều dài: 72cm; Chiều rộng: 108cm<br>Size M: Chiều dài: 73cm; Chiều rộng: 109cm<br>Size L: Chiều dài: 74cm; Chiều rộng: 110cm"},{"no":"TS03","name":"RACING FIVE TEE","category":"Áo phông","price":360000,"quantity":10,"discount":0,"images":"6","description":"Size S: Chiều dài: 72cm; Chiều rộng 108cm<br>Size M: Chiều dài: 73cm; Chiều rộng: 109cm<br>Size L: Chiều dài: 74cm; Chiều rộng: 110cm"},{"no":"TS04","name":"OVAL TEE WHITE","category":"Áo phông","price":380000,"quantity":10,"discount":0,"images":"5","description":"Size S Chiều dài 72cm Chiều rộng 114cm<br>Size M Chiều dài 75cm Chiều rộng 117cm<br>Size L Chiều dài 77cm Chiều rộng 120cm"},{"no":"TS05","name":"OVAL TEE BLACK","category":"Áo phông","price":380000,"quantity":10,"discount":0,"images":"4","description":"Size S: Chiều dài: 72cm; Chiều rộng: 114cm<br>Size M: Chiều dài: 75cm; Chiều rộng: 117cm<br>Size L: Chiều dài: 77cm; Chiều rộng: 120cm"},{"no":"TS06","name":"LIDER 5TH TEE","category":"Áo phông","price":360000,"quantity":10,"discount":0,"images":"4","description":"Size S: Chiều dài: 72cm; Chiều rộng: 108cm<br>Size M: Chiều dài: 73cm; Chiều rộng: 109cm<br>Size L: Chiều dài: 74cm; Chiều rộng: 110cm"},{"no":"TS07","name":"RACING CAR TEE RED","category":"Áo phông","price":390000,"quantity":10,"discount":0,"images":"5","description":"Size S: Chiều dài: 72cm; Chiều rộng: 108cm<br>Size M: Chiều dài: 73cm; Chiều rộng: 109cm<br>Size L: Chiều dài: 74cm; Chiều rộng: 110cm"},{"no":"TS08","name":"ROD TEE BLACK","category":"Áo phông","price":360000,"quantity":10,"discount":0,"images":"3","description":"Size S: Chiều dài: 72cm; Chiều rộng: 108cm<br>Size M: Chiều dài: 73cm; Chiều rộng: 109cm<br>Size L: Chiều dài: 74cm; Chiều rộng: 110cm"},{"no":"TS09","name":"JAN TEE WHITE","category":"Áo phông","price":360000,"quantity":10,"discount":0,"images":"4","description":"Size S: Chiều dài: 72cm; Chiều rộng: 108cm<br>Size M: Chiều dài: 73cm; Chiều rộng: 109cm<br>Size L: Chiều dài: 74cm; Chiều rộng: 110cm"},{"no":"TS10","name":"JAN TEE PINK","category":"Áo phông","price":360000,"quantity":10,"discount":0,"images":"6","description":"Size S: Chiều dài: 72cm; Chiều rộng: 108cm<br>Size M: Chiều dài: 73cm; Chiều rộng: 109cm<br>Size L: Chiều dài: 74cm; Chiều rộng: 110cm"},{"no":"TS11","name":"FLORES STRIPES TEE GREY","category":"Áo phông","price":390000,"quantity":10,"discount":0,"images":"6","description":"Size S: Chiều dài: 72cm; Chiều rộng: 108cm<br>Size M: Chiều dài: 73cm; Chiều rộng: 109cm<br>Size L: Chiều dài: 74cm; Chiều rộng: 110cm"},{"no":"TS12","name":"FLORES STRIPES TEE BEIGE","category":"Áo phông","price":390000,"quantity":10,"discount":0,"images":"6","description":"Size S: Chiều dài: 72cm; Chiều rộng: 108cm<br>Size M: Chiều dài: 73cm; Chiều rộng: 109cm<br>Size L: Chiều dài: 74cm; Chiều rộng: 110cm"},{"no":"TS13","name":"BLUR TEE BLACK","category":"Áo phông","price":380000,"quantity":10,"discount":0,"images":"5","description":"Size S: Chiều dài: 72cm; Chiều rộng: 114cm<br>Size M: Chiều dài: 75cm; Chiều rộng: 117cm<br>Size L: Chiều dài: 77cm; Chiều rộng: 120cm"},{"no":"TS14","name":"BLUR TEE WHITE","category":"Áo phông","price":380000,"quantity":10,"discount":0,"images":"4","description":"Size S: Chiều dài: 72cm; Chiều rộng: 114cm<br>Size M: Chiều dài: 75cm; Chiều rộng: 117cm<br>Size L: Chiều dài: 77cm; Chiều rộng: 120cm"},{"no":"TS15","name":"JAN TEE BLACK","category":"Áo phông","price":360000,"quantity":10,"discount":0,"images":"6","description":"Size S: Chiều dài: 72cm; Chiều rộng: 108cm<br>Size M: Chiều dài: 73cm; Chiều rộng: 109cm<br>Size L: Chiều dài: 74cm; Chiều rộng: 110cm"},{"no":"TS16","name":"DAISY TEE BLACK","category":"Áo phông","price":380000,"quantity":10,"discount":0,"images":"6","description":"Size S: Chiều dài: 73cm; Chiều rộng: 106cm <br>Size M: Chiều dài: 75cm; Chiều rộng: 109cm <br>Size L: Chiều dài: 77cm; Chiều rộng: 112cm"},{"no":"TS17","name":"DAISY TEE OLIVE","category":"Áo phông","price":380000,"quantity":10,"discount":0,"images":"6","description":"Size S: Chiều dài: 73cm; Chiều rộng: 106cm <br>Size M: Chiều dài: 75cm; Chiều rộng: 109cm <br>Size L: Chiều dài: 77cm; Chiều rộng: 112cm"},{"no":"TS18","name":"DAISY TEE WHITE","category":"Áo phông","price":380000,"quantity":10,"discount":0,"images":"4","description":"Size S: Chiều dài: 73cm; Chiều rộng: 106cm <br>Size M: Chiều dài: 75cm; Chiều rộng: 109cm <br>Size L: Chiều dài: 77cm; Chiều rộng: 112cm"},{"no":"TS19","name":"DAISY TEE BEIGE","category":"Áo phông","price":380000,"quantity":10,"discount":0,"images":"6","description":"Size S: Chiều dài: 73cm; Chiều rộng: 106cm <br>Size M: Chiều dài: 75cm; Chiều rộng: 109cm <br>Size L: Chiều dài: 77cm; Chiều rộng: 112cm"},{"no":"TS20","name":"LIDER 2020 TEE BLACK","category":"Áo phông","price":360000,"quantity":10,"discount":0,"images":"3","description":"Size S: Chiều dài: 72cm; Chiều rộng: 108cm<br>Size M: Chiều dài: 73cm; Chiều rộng: 109cm<br>Size L: Chiều dài: 74cm; Chiều rộng: 110cm"},{"no":"TR01","name":"UPSIDE DOWN JEANS","category":"Quần dài","price":720000,"quantity":10,"discount":0,"images":"5","description":"SIZE XS: Eo: 72cm; Dài quần: 90cm; Đùi: 50cm"},{"no":"TR02","name":"RACING LEATHER PANTS","category":"Quần dài","price":720000,"quantity":10,"discount":0,"images":"5","description":"SIZE S: Eo: 78cm; Dài quần: 98cm; Đùi: 50cm<br>SIZE M: Eo: 82cm; Dài quần: 99cm; Đùi: 52cm<br>SIZE L: Eo: 86cm; Dài quần: 100cm; Đùi: 54cm"},{"no":"TR03","name":"TRACK PANTS WHITE","category":"Quần dài","price":640000,"quantity":10,"discount":0,"images":"5","description":"SIZE S: Dài quần: 104cm; Đùi: 68cm<br>SIZE M: Dài quần: 107cm; Đùi: 72cm<br>SIZE L: Dài quần: 110cm; Đùi: 76cm"},{"no":"TR04","name":"METAL PANTS","category":"Quần dài","price":650000,"quantity":10,"discount":0,"images":"4","description":"SIZE S: Dài quần: 102cm, Đùi: 60cm<br>SIZE M: Dài quần: 106cm, Đùi: 64cm<br>SIZE L: Dài quần: 120cm, Đùi: 68cm"},{"no":"TR05","name":"YOUTH PANTS","category":"Quần dài","price":650000,"quantity":10,"discount":0,"images":"4","description":"SIZE S: Eo: 76cm, Dài quần: 104cm, Đùi: 58cm<br>SIZE M: Eo: 78cm, Dài quần: 105cm, Đùi: 60cm<br>SIZE L: Eo: 80cm, Dài quần: 106cm, Đùi: 62cm"},{"no":"TR06","name":"TOM JEANS","category":"Quần dài","price":820000,"quantity":10,"discount":0,"images":"5","description":"SIZE XS: Eo: 75cm, Dài quần: 99cm, Đùi: 56cm<br>SIZE S: Eo: 78cm, Dài quần: 100cm, Đùi: 58cm<br>SIZE M: Eo: 81cm, Dài quần: 101cm, Đùi: 60cm<br>SIZE L: Eo: 84cm, Dài quần: 102cm, Đùi: 62cm"},{"no":"TR07","name":"POCPOC CARGO PANTS","category":"Quần dài","price":720000,"quantity":10,"discount":0,"images":"6","description":"SIZE S: Dài quần: 104cm; Đùi: 60cm<br>SIZE M: Dài quần: 106cm; Đùi: 61cm<br>SIZE L: Dài quần: 108cm; Đùi: 62cm"},{"no":"TR08","name":"CODY PANTS","category":"Quần dài","price":690000,"quantity":10,"discount":0,"images":"4","description":"SIZE S: Eo: 72cm, Dài quần: 102cm, Đùi: 62cm<br>SIZE M: Eo: 74cm, Dài quần: 106cm, Đùi: 64cm"},{"no":"TR09","name":"DAVID TROUSERS","category":"Quần dài","price":650000,"quantity":10,"discount":0,"images":"6","description":"SIZE S: Eo: 72cm, Dài quần: 102cm, Đùi: 62cm<br>SIZE M: Eo: 74cm, Dài quần: 106cm, Đùi: 64cm<br>SIZE L: Eo: 76cm, Dài quần: 110cm, Đùi: 66cm"},{"no":"TR10","name":"ADAM PANTS","category":"Quần dài","price":650000,"quantity":10,"discount":0,"images":"6","description":"SIZE S: Eo: 72cm, Dài quần: 102cm, Đùi: 62cm<br>SIZE M: Eo: 74cm, Dài quần: 106cm, Đùi: 64cm<br>SIZE L: Eo: 76cm, Dài quần: 110cm, Đùi: 66cm"},{"no":"SS01","name":"2P SHORTS","category":"Quần soóc","price":450000,"quantity":10,"discount":0,"images":"4","description":"SIZE S: Eo: 76cm, Dài quần: 43cm, Đùi: 68cm<br>SIZE M: Eo: 84cm, Dài quần: 46cm, Đùi: 70cm<br>SIZE L: Eo: 92cm, Dài quần: 49cm, Đùi: 72cm"},{"no":"SS02","name":"PPINK SHORTS","category":"Quần soóc","price":420000,"quantity":10,"discount":0,"images":"5","description":"SIZE S: Eo: 80cm, Dài quần: 41cm, Đùi: 64cm<br>SIZE M: Eo: 81cm, Dài quần: 42cm, Đùi: 68cm<br>SIZE L: Eo: 82cm, Dài quần: 43cm, Đùi: 72cm"},{"no":"SS03","name":"ROCKET SHORTS BLUE","category":"Quần soóc","price":520000,"quantity":10,"discount":0,"images":"5","description":"SIZE S: Eo: 76cm, Dài quần: 43cm, Đùi: 68cm<br>SIZE M: Eo: 84cm, Dài quần: 46cm, Đùi: 70cm<br>SIZE L: Eo: 81cm, Dài quần: 49cm, Đùi: 72cm"},{"no":"SS04","name":"RTG SHORTS BLACK","category":"Quần soóc","price":420000,"quantity":10,"discount":0,"images":"5","description":"SIZE S: Dài quần: 42cm; Đùi: 72cm<br>SIZE M: Dài quần: 43cm; Đùi: 72cm<br>SIZE L: Dài quần: 44cm; Đùi: 72cm"},{"no":"SS05","name":"PBLUE SHORTS","category":"Quần soóc","price":420000,"quantity":10,"discount":0,"images":"3","description":"SIZE S: Eo: 80cm, Dài quần: 41cm, Đùi: 64cm<br>SIZE M: Eo: 81cm, Dài quần: 42cm, Đùi: 68cm<br>SIZE L: Eo: 82cm, Dài quần: 43cm, Đùi: 72cm"},{"no":"SS06","name":"PYELLOW SHORTS","category":"Quần soóc","price":420000,"quantity":10,"discount":0,"images":"4","description":"SIZE S: Eo: 80cm, Dài quần: 41cm, Đùi: 64cm<br>SIZE M: Eo: 81cm, Dài quần: 42cm, Đùi: 68cm<br>SIZE L: Eo: 82cm, Dài quần: 43cm, Đùi: 72cm"},{"no":"SS07","name":"ROCKET SHORTS DENIM","category":"Quần soóc","price":520000,"quantity":10,"discount":0,"images":"5","description":"SIZE XS: Eo: 68cm, Dài quần: 40cm, Đùi: 66cm<br>SIZE S: Eo: 76cm, Dài quần: 43cm, Đùi: 68cm<br>SIZE M: Eo: 84cm, Dài quần: 46cm, Đùi: 70cm<br>SIZE L: Eo: 81cm, Dài quần: 49cm, Đùi: 72cm"},{"no":"SS08","name":"RTG SHORTS PINK","category":"Quần soóc","price":420000,"quantity":10,"discount":0,"images":"5","description":"SIZE S: Dài quần: 42cm; Đùi: 72cm<br>SIZE M: Dài quần: 43cm; Đùi: 72cm<br>SIZE L: Dài quần: 44cm; Đùi: 72cm"},{"no":"SS09","name":"ROCKET SHORTS BLACK","category":"Quần soóc","price":520000,"quantity":10,"discount":0,"images":"4","description":"SIZE XS: Eo: 68cm, Dài quần: 40cm, Đùi: 66cm<br>SIZE S: Eo: 76cm, Dài quần: 43cm, Đùi: 68cm<br>SIZE M: Eo: 84cm, Dài quần: 46cm, Đùi: 70cm<br>SIZE L: Eo: 86cm, Dài quần: 49cm, Đùi: 72cm"},{"no":"AC01","name":"LIDER TUMBLER BLACK","category":"Phụ kiện","price":340000,"quantity":10,"discount":0,"images":"3","description":"Dung tích: 450ml<br>Màu sắc: Đen<br>Kèm ống hút<br>Giữ lạnh: 2-3 tiếng"},{"no":"AC02","name":"LIDER TUMBLER WHITE","category":"Phụ kiện","price":340000,"quantity":10,"discount":0,"images":"3","description":"Dung tích: 450ml<br>Màu sắc: Trắng<br>Kèm ống hút<br>Giữ lạnh: 2-3 tiếng"},{"no":"AC03","name":"RTG CROSS BAG","category":"Phụ kiện","price":320000,"quantity":10,"discount":0,"images":"3","description":"Chiều dài: 13cm<br>Chiều rộng:10cm"},{"no":"AC04","name":"RTG BACKPACK","category":"Phụ kiện","price":650000,"quantity":10,"discount":0,"images":"5","description":"Đựng vừa laptop 15 inch<br>Có 2 ngăn chứa lớn, nhiều ngăn nhỏ<br>Dây đeo vai êm, chịu được trọng lượng lớn"}];
save("listProduct",listProduct);
console.log(listProduct);
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