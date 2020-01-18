
/// -------------------------------------------------------------------------ĐỊNH NGHĨA BIẾN LƯU TRỮ DANH SÁCH SẢN PHẨM-----------------------------------------------
let listProduct=JSON.parse([{"no":"JK01","name":"DA BIKER JACKET","category":"Áo khoác","price":850000,"quantity":5,"discount":5,"images":"4","description":"Size S: Chiều dài: 62cm; Chiều rộng: 106cm <br>Size M: Chiều dài: 63cm; Chiều rộng: 108cm <br>Size L: Chiều dài: 64cm; Chiều rộng: 112cm"},{"no":"JK02","name":"CODY BLAZER","category":"Áo khoác","price":890000,"quantity":15,"discount":5,"images":"5","description":"Size S: Chiều dài: 74cm; Chiều rộng: 112cm, Dài tay: 62cm<br>Size M: Chiều dài: 78cm; Chiều rộng: 114cm, Dài tay: 68cm"},{"no":"JK03","name":"METAL JACKET","category":"Áo khoác","price":790000,"quantity":30,"discount":20,"images":"6","description":"Size S: Chiều dài: 69cm; Chiều rộng: 120cm<br>Size M: Chiều dài: 72cm; Chiều rộng: 122cm<br>Size L: Chiều dài: 75cm; Chiều rộng: 124cm"},{"no":"JK04","name":"TRACK JACKET BLACK","category":"Áo khoác","price":790000,"quantity":12,"discount":0,"images":"5","description":"Size S: Chiều dài: 65cm; Chiều rộng: 128cm; Dài tay: 64cm<br>Size M: Chiều dài: 67cm; Chiều rộng: 132cm; Dài tay: 66cm<br>Size L: Chiều dài: 69cm; Chiều rộng: 136cm; Dài tay: 68cm"},{"no":"JK05","name":"TRACK JACKET WHITE","category":"Áo khoác","price":790000,"quantity":10,"discount":0,"images":"4","description":"Size S: Chiều dài: 65cm; Chiều rộng: 128cm; Dài tay: 64cm<br>Size M: Chiều dài: 67cm; Chiều rộng: 132cm; Dài tay: 66cm<br>Size L: Chiều dài: 69cm; Chiều rộng: 136cm; Dài tay: 68cm"},{"no":"JK06","name":"MILLI JACKET","category":"Áo khoác","price":820000,"quantity":50,"discount":0,"images":"4","description":"Size S: Chiều dài: 67 cm; Chiều rộng: 118 cm; Dài tay: 69 cm<br>Size M: Chiều dài: 68 cm; Chiều rộng: 122 cm; Dài tay: 70 cm<br>Size L: Chiều dài: 69 cm; Chiều rộng: 126 cm; Dài tay: 71 cm"},{"no":"JK07","name":"RACING HOODED JACKET","category":"Áo khoác","price":690000,"quantity":2,"discount":0,"images":"5","description":"Size M: Chiều dài: 71 cm; Chiều rộng 120 cm<br>Size L: Chiều dài: 73 cm; Chiều rộng 124 cm"},{"no":"JK08","name":"POC POC VEST","category":"Áo khoác","price":720000,"quantity":10,"discount":0,"images":"6","description":"Size S: Chiều dài: 66cm; Chiều rộng: 56cm<br>Size M: Chiều dài: 69cm; Chiều rộng: 58cm<br>Size L: Chiều dài: 72cm; Chiều rộng: 60cm"},{"no":"JK09","name":"LEX VEST","category":"Áo khoác","price":780000,"quantity":10,"discount":0,"images":"5","description":"Size S: Chiều dài: 60 cm; Chiều rộng: 106 cm<br>Size M: Chiều dài: 63 cm; Chiều rộng: 110 cm<br>Size L: Chiều dài: 66 cm; Chiều rộng: 114 cm"},{"no":"JK10","name":"YOUTH BLAZER","category":"Áo khoác","price":920000,"quantity":10,"discount":0,"images":"4","description":"Size S: Chiều dài: 74cm; Chiều rộng: 112cm, Dài tay: 62cm<br>Size M: Chiều dài: 78cm; Chiều rộng: 114cm, Dài tay: 68cm<br>Size L: Chiều dài: 80cm; Chiều rộng: 116cm, Dài tay: 69cm"},{"no":"SH01","name":"LIDER 2020 DANTON","category":"Áo sơ mi","price":450000,"quantity":10,"discount":0,"images":"6","description":"Size S: Chiều dài: 70cm; Chiều rộng: 120cm <br>Size M: Chiều dài: 72cm; Chiều rộng: 124cm <br>Size L: Chiều dài: 74cm; Chiều rộng: 128cm "},{"no":"SH02","name":"LDR DANTON","category":"Áo sơ mi","price":450000,"quantity":10,"discount":0,"images":"6","description":"Size S: Chiều dài: 70cm; Chiều rộng: 120cm <br>Size M: Chiều dài: 72cm; Chiều rộng: 124cm <br>Size L: Chiều dài: 74cm; Chiều rộng: 128cm "},{"no":"SH03","name":"LAYER SHIRT","category":"Áo sơ mi","price":650000,"quantity":10,"discount":0,"images":"5","description":"Size M: Chiều dài: 68cm; Chiều rộng: 140cm <br>Size L: Chiều dài: 70cm; Chiều rộng: 142cm "},{"no":"SH04","name":"RTG SHIRT GREY","category":"Áo sơ mi","price":520000,"quantity":10,"discount":0,"images":"7","description":"Size S: Chiều dài: 75cm; Chiều rộng: 65cm<br>Size M: Chiều dài: 77cm; Chiều rộng: 66cm<br>Size L: Chiều dài: 79cm; Chiều rộng: 67cm"},{"no":"SH05","name":"RTG SHIRT RED","category":"Áo sơ mi","price":520000,"quantity":10,"discount":0,"images":"7","description":"Size S: Chiều dài: 75cm; Chiều rộng: 65cm<br>Size M: Chiều dài: 77cm; Chiều rộng: 66cm<br>Size L: Chiều dài: 79cm; Chiều rộng: 67cm"},{"no":"SH06","name":"LIDER 2020 SHIRT","category":"Áo sơ mi","price":490000,"quantity":10,"discount":0,"images":"6","description":"Size M: Chiều dài: 68cm; Chiều rộng: 140cm <br>Size L: Chiều dài: 70cm; Chiều rộng: 142cm "},{"no":"SH07","name":"FLORES SHIRT BLACK","category":"Áo sơ mi","price":620000,"quantity":10,"discount":0,"images":"4","description":"Size M: Chiều dài: 68cm; Chiều rộng: 140cm <br>Size L: Chiều dài: 70cm; Chiều rộng: 142cm "},{"no":"SH08","name":"FLORES SHIRT BLUE","category":"Áo sơ mi","price":620000,"quantity":10,"discount":0,"images":"6","description":"Size M: Chiều dài: 68cm; Chiều rộng: 140cm <br>Size L: Chiều dài: 70cm; Chiều rộng: 142cm "},{"no":"SH09","name":"FLORES SHIRT WHITE","category":"Áo sơ mi","price":590000,"quantity":10,"discount":0,"images":"6","description":"Size M: Chiều dài: 68cm; Chiều rộng: 140cm <br>Size L: Chiều dài: 70cm; Chiều rộng: 142cm "},{"no":"SH10","name":"PIZZA DANTON","category":"Áo sơ mi","price":420000,"quantity":10,"discount":0,"images":"6","description":"Size S: Chiều dài: 73cm; Chiều rộng: 106cm <br>Size M: Chiều dài: 75cm; Chiều rộng: 109cm <br>Size L: Chiều dài: 77cm; Chiều rộng: 112cm "},{"no":"TS01","name":"LIDER 2020 TEE WHITE","category":"Áo phông","price":360000,"quantity":10,"discount":0,"images":"3","description":"Size S: Chiều dài: 72cm; Chiều rộng: 108cm<br>Size M: Chiều dài: 73cm; Chiều rộng: 109cm<br>Size L: Chiều dài: 74cm; Chiều rộng: 110cm"},{"no":"TS02","name":"LIDER 2020 TEE PINK","category":"Áo phông","price":360000,"quantity":10,"discount":0,"images":"6","description":"Size S: Chiều dài: 72cm; Chiều rộng: 108cm<br>Size M: Chiều dài: 73cm; Chiều rộng: 109cm<br>Size L: Chiều dài: 74cm; Chiều rộng: 110cm"},{"no":"TS03","name":"RACING FIVE TEE","category":"Áo phông","price":360000,"quantity":10,"discount":0,"images":"6","description":"Size S: Chiều dài: 72cm; Chiều rộng 108cm<br>Size M: Chiều dài: 73cm; Chiều rộng: 109cm<br>Size L: Chiều dài: 74cm; Chiều rộng: 110cm"},{"no":"TS04","name":"OVAL TEE WHITE","category":"Áo phông","price":380000,"quantity":10,"discount":0,"images":"5","description":"Size S Chiều dài 72cm Chiều rộng 114cm<br>Size M Chiều dài 75cm Chiều rộng 117cm<br>Size L Chiều dài 77cm Chiều rộng 120cm"},{"no":"TS05","name":"OVAL TEE BLACK","category":"Áo phông","price":380000,"quantity":10,"discount":0,"images":"4","description":"Size S: Chiều dài: 72cm; Chiều rộng: 114cm<br>Size M: Chiều dài: 75cm; Chiều rộng: 117cm<br>Size L: Chiều dài: 77cm; Chiều rộng: 120cm"},{"no":"TS06","name":"LIDER 5TH TEE","category":"Áo phông","price":360000,"quantity":10,"discount":0,"images":"4","description":"Size S: Chiều dài: 72cm; Chiều rộng: 108cm<br>Size M: Chiều dài: 73cm; Chiều rộng: 109cm<br>Size L: Chiều dài: 74cm; Chiều rộng: 110cm"},{"no":"TS07","name":"RACING CAR TEE RED","category":"Áo phông","price":390000,"quantity":10,"discount":0,"images":"5","description":"Size S: Chiều dài: 72cm; Chiều rộng: 108cm<br>Size M: Chiều dài: 73cm; Chiều rộng: 109cm<br>Size L: Chiều dài: 74cm; Chiều rộng: 110cm"},{"no":"TS08","name":"ROD TEE BLACK","category":"Áo phông","price":360000,"quantity":10,"discount":0,"images":"3","description":"Size S: Chiều dài: 72cm; Chiều rộng: 108cm<br>Size M: Chiều dài: 73cm; Chiều rộng: 109cm<br>Size L: Chiều dài: 74cm; Chiều rộng: 110cm"},{"no":"TS09","name":"JAN TEE WHITE","category":"Áo phông","price":360000,"quantity":10,"discount":0,"images":"4","description":"Size S: Chiều dài: 72cm; Chiều rộng: 108cm<br>Size M: Chiều dài: 73cm; Chiều rộng: 109cm<br>Size L: Chiều dài: 74cm; Chiều rộng: 110cm"},{"no":"TS10","name":"JAN TEE PINK","category":"Áo phông","price":360000,"quantity":10,"discount":0,"images":"6","description":"Size S: Chiều dài: 72cm; Chiều rộng: 108cm<br>Size M: Chiều dài: 73cm; Chiều rộng: 109cm<br>Size L: Chiều dài: 74cm; Chiều rộng: 110cm"},{"no":"TS11","name":"FLORES STRIPES TEE GREY","category":"Áo phông","price":390000,"quantity":10,"discount":0,"images":"6","description":"Size S: Chiều dài: 72cm; Chiều rộng: 108cm<br>Size M: Chiều dài: 73cm; Chiều rộng: 109cm<br>Size L: Chiều dài: 74cm; Chiều rộng: 110cm"},{"no":"TS12","name":"FLORES STRIPES TEE BEIGE","category":"Áo phông","price":390000,"quantity":10,"discount":0,"images":"6","description":"Size S: Chiều dài: 72cm; Chiều rộng: 108cm<br>Size M: Chiều dài: 73cm; Chiều rộng: 109cm<br>Size L: Chiều dài: 74cm; Chiều rộng: 110cm"},{"no":"TS13","name":"BLUR TEE BLACK","category":"Áo phông","price":380000,"quantity":10,"discount":0,"images":"5","description":"Size S: Chiều dài: 72cm; Chiều rộng: 114cm<br>Size M: Chiều dài: 75cm; Chiều rộng: 117cm<br>Size L: Chiều dài: 77cm; Chiều rộng: 120cm"},{"no":"TS14","name":"BLUR TEE WHITE","category":"Áo phông","price":380000,"quantity":10,"discount":0,"images":"4","description":"Size S: Chiều dài: 72cm; Chiều rộng: 114cm<br>Size M: Chiều dài: 75cm; Chiều rộng: 117cm<br>Size L: Chiều dài: 77cm; Chiều rộng: 120cm"},{"no":"TS15","name":"JAN TEE BLACK","category":"Áo phông","price":360000,"quantity":10,"discount":0,"images":"6","description":"Size S: Chiều dài: 72cm; Chiều rộng: 108cm<br>Size M: Chiều dài: 73cm; Chiều rộng: 109cm<br>Size L: Chiều dài: 74cm; Chiều rộng: 110cm"},{"no":"TS16","name":"DAISY TEE BLACK","category":"Áo phông","price":380000,"quantity":10,"discount":0,"images":"6","description":"Size S: Chiều dài: 73cm; Chiều rộng: 106cm <br>Size M: Chiều dài: 75cm; Chiều rộng: 109cm <br>Size L: Chiều dài: 77cm; Chiều rộng: 112cm"},{"no":"TS17","name":"DAISY TEE OLIVE","category":"Áo phông","price":380000,"quantity":10,"discount":0,"images":"6","description":"Size S: Chiều dài: 73cm; Chiều rộng: 106cm <br>Size M: Chiều dài: 75cm; Chiều rộng: 109cm <br>Size L: Chiều dài: 77cm; Chiều rộng: 112cm"},{"no":"TS18","name":"DAISY TEE WHITE","category":"Áo phông","price":380000,"quantity":10,"discount":0,"images":"4","description":"Size S: Chiều dài: 73cm; Chiều rộng: 106cm <br>Size M: Chiều dài: 75cm; Chiều rộng: 109cm <br>Size L: Chiều dài: 77cm; Chiều rộng: 112cm"},{"no":"TS19","name":"DAISY TEE BEIGE","category":"Áo phông","price":380000,"quantity":10,"discount":0,"images":"6","description":"Size S: Chiều dài: 73cm; Chiều rộng: 106cm <br>Size M: Chiều dài: 75cm; Chiều rộng: 109cm <br>Size L: Chiều dài: 77cm; Chiều rộng: 112cm"},{"no":"TS20","name":"LIDER 2020 TEE BLACK","category":"Áo phông","price":360000,"quantity":10,"discount":0,"images":"3","description":"Size S: Chiều dài: 72cm; Chiều rộng: 108cm<br>Size M: Chiều dài: 73cm; Chiều rộng: 109cm<br>Size L: Chiều dài: 74cm; Chiều rộng: 110cm"},{"no":"TR01","name":"UPSIDE DOWN JEANS","category":"Quần dài","price":720000,"quantity":10,"discount":0,"images":"5","description":"SIZE XS: Eo: 72cm; Dài quần: 90cm; Đùi: 50cm"},{"no":"TR02","name":"RACING LEATHER PANTS","category":"Quần dài","price":720000,"quantity":10,"discount":0,"images":"5","description":"SIZE S: Eo: 78cm; Dài quần: 98cm; Đùi: 50cm<br>SIZE M: Eo: 82cm; Dài quần: 99cm; Đùi: 52cm<br>SIZE L: Eo: 86cm; Dài quần: 100cm; Đùi: 54cm"},{"no":"TR03","name":"TRACK PANTS WHITE","category":"Quần dài","price":640000,"quantity":10,"discount":0,"images":"5","description":"SIZE S: Dài quần: 104cm; Đùi: 68cm<br>SIZE M: Dài quần: 107cm; Đùi: 72cm<br>SIZE L: Dài quần: 110cm; Đùi: 76cm"},{"no":"TR04","name":"METAL PANTS","category":"Quần dài","price":650000,"quantity":10,"discount":0,"images":"4","description":"SIZE S: Dài quần: 102cm, Đùi: 60cm<br>SIZE M: Dài quần: 106cm, Đùi: 64cm<br>SIZE L: Dài quần: 120cm, Đùi: 68cm"},{"no":"TR05","name":"YOUTH PANTS","category":"Quần dài","price":650000,"quantity":10,"discount":0,"images":"4","description":"SIZE S: Eo: 76cm, Dài quần: 104cm, Đùi: 58cm<br>SIZE M: Eo: 78cm, Dài quần: 105cm, Đùi: 60cm<br>SIZE L: Eo: 80cm, Dài quần: 106cm, Đùi: 62cm"},{"no":"TR06","name":"TOM JEANS","category":"Quần dài","price":820000,"quantity":10,"discount":0,"images":"5","description":"SIZE XS: Eo: 75cm, Dài quần: 99cm, Đùi: 56cm<br>SIZE S: Eo: 78cm, Dài quần: 100cm, Đùi: 58cm<br>SIZE M: Eo: 81cm, Dài quần: 101cm, Đùi: 60cm<br>SIZE L: Eo: 84cm, Dài quần: 102cm, Đùi: 62cm"},{"no":"TR07","name":"POCPOC CARGO PANTS","category":"Quần dài","price":720000,"quantity":10,"discount":0,"images":"6","description":"SIZE S: Dài quần: 104cm; Đùi: 60cm<br>SIZE M: Dài quần: 106cm; Đùi: 61cm<br>SIZE L: Dài quần: 108cm; Đùi: 62cm"},{"no":"TR08","name":"CODY PANTS","category":"Quần dài","price":690000,"quantity":10,"discount":0,"images":"4","description":"SIZE S: Eo: 72cm, Dài quần: 102cm, Đùi: 62cm<br>SIZE M: Eo: 74cm, Dài quần: 106cm, Đùi: 64cm"},{"no":"TR09","name":"DAVID TROUSERS","category":"Quần dài","price":650000,"quantity":10,"discount":0,"images":"6","description":"SIZE S: Eo: 72cm, Dài quần: 102cm, Đùi: 62cm<br>SIZE M: Eo: 74cm, Dài quần: 106cm, Đùi: 64cm<br>SIZE L: Eo: 76cm, Dài quần: 110cm, Đùi: 66cm"},{"no":"TR10","name":"ADAM PANTS","category":"Quần dài","price":650000,"quantity":10,"discount":0,"images":"6","description":"SIZE S: Eo: 72cm, Dài quần: 102cm, Đùi: 62cm<br>SIZE M: Eo: 74cm, Dài quần: 106cm, Đùi: 64cm<br>SIZE L: Eo: 76cm, Dài quần: 110cm, Đùi: 66cm"},{"no":"SS01","name":"2P SHORTS","category":"Quần soóc","price":450000,"quantity":10,"discount":0,"images":"4","description":"SIZE S: Eo: 76cm, Dài quần: 43cm, Đùi: 68cm<br>SIZE M: Eo: 84cm, Dài quần: 46cm, Đùi: 70cm<br>SIZE L: Eo: 92cm, Dài quần: 49cm, Đùi: 72cm"},{"no":"SS02","name":"PPINK SHORTS","category":"Quần soóc","price":420000,"quantity":10,"discount":0,"images":"5","description":"SIZE S: Eo: 80cm, Dài quần: 41cm, Đùi: 64cm<br>SIZE M: Eo: 81cm, Dài quần: 42cm, Đùi: 68cm<br>SIZE L: Eo: 82cm, Dài quần: 43cm, Đùi: 72cm"},{"no":"SS03","name":"ROCKET SHORTS BLUE","category":"Quần soóc","price":520000,"quantity":10,"discount":0,"images":"5","description":"SIZE S: Eo: 76cm, Dài quần: 43cm, Đùi: 68cm<br>SIZE M: Eo: 84cm, Dài quần: 46cm, Đùi: 70cm<br>SIZE L: Eo: 81cm, Dài quần: 49cm, Đùi: 72cm"},{"no":"SS04","name":"RTG SHORTS BLACK","category":"Quần soóc","price":420000,"quantity":10,"discount":0,"images":"5","description":"SIZE S: Dài quần: 42cm; Đùi: 72cm<br>SIZE M: Dài quần: 43cm; Đùi: 72cm<br>SIZE L: Dài quần: 44cm; Đùi: 72cm"},{"no":"SS05","name":"PBLUE SHORTS","category":"Quần soóc","price":420000,"quantity":10,"discount":0,"images":"3","description":"SIZE S: Eo: 80cm, Dài quần: 41cm, Đùi: 64cm<br>SIZE M: Eo: 81cm, Dài quần: 42cm, Đùi: 68cm<br>SIZE L: Eo: 82cm, Dài quần: 43cm, Đùi: 72cm"},{"no":"SS06","name":"PYELLOW SHORTS","category":"Quần soóc","price":420000,"quantity":10,"discount":0,"images":"4","description":"SIZE S: Eo: 80cm, Dài quần: 41cm, Đùi: 64cm<br>SIZE M: Eo: 81cm, Dài quần: 42cm, Đùi: 68cm<br>SIZE L: Eo: 82cm, Dài quần: 43cm, Đùi: 72cm"},{"no":"SS07","name":"ROCKET SHORTS DENIM","category":"Quần soóc","price":520000,"quantity":10,"discount":0,"images":"5","description":"SIZE XS: Eo: 68cm, Dài quần: 40cm, Đùi: 66cm<br>SIZE S: Eo: 76cm, Dài quần: 43cm, Đùi: 68cm<br>SIZE M: Eo: 84cm, Dài quần: 46cm, Đùi: 70cm<br>SIZE L: Eo: 81cm, Dài quần: 49cm, Đùi: 72cm"},{"no":"SS08","name":"RTG SHORTS PINK","category":"Quần soóc","price":420000,"quantity":10,"discount":0,"images":"5","description":"SIZE S: Dài quần: 42cm; Đùi: 72cm<br>SIZE M: Dài quần: 43cm; Đùi: 72cm<br>SIZE L: Dài quần: 44cm; Đùi: 72cm"},{"no":"SS09","name":"ROCKET SHORTS BLACK","category":"Quần soóc","price":520000,"quantity":10,"discount":0,"images":"4","description":"SIZE XS: Eo: 68cm, Dài quần: 40cm, Đùi: 66cm<br>SIZE S: Eo: 76cm, Dài quần: 43cm, Đùi: 68cm<br>SIZE M: Eo: 84cm, Dài quần: 46cm, Đùi: 70cm<br>SIZE L: Eo: 86cm, Dài quần: 49cm, Đùi: 72cm"},{"no":"AC01","name":"LIDER TUMBLER BLACK","category":"Phụ kiện","price":340000,"quantity":10,"discount":0,"images":"3","description":"Dung tích: 450ml<br>Màu sắc: Đen<br>Kèm ống hút<br>Giữ lạnh: 2-3 tiếng"},{"no":"AC02","name":"LIDER TUMBLER WHITE","category":"Phụ kiện","price":340000,"quantity":10,"discount":0,"images":"3","description":"Dung tích: 450ml<br>Màu sắc: Trắng<br>Kèm ống hút<br>Giữ lạnh: 2-3 tiếng"},{"no":"AC03","name":"RTG CROSS BAG","category":"Phụ kiện","price":320000,"quantity":10,"discount":0,"images":"3","description":"Chiều dài: 13cm<br>Chiều rộng:10cm"},{"no":"AC04","name":"RTG BACKPACK","category":"Phụ kiện","price":650000,"quantity":10,"discount":0,"images":"5","description":"Đựng vừa laptop 15 inch<br>Có 2 ngăn chứa lớn, nhiều ngăn nhỏ<br>Dây đeo vai êm, chịu được trọng lượng lớn"}]
)
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
      numberProduct += Number(element.quantity);
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

