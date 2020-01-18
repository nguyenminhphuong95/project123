let listProduct;

let itemLoad = {};



window.onload = loadListProduct();
window.onload = run();

function run() { // ----------------------------------------------------------Sửa lại khi nhận được thông itn đầu vào
	let itemNo = JSON.parse(localStorage.getItem("itemOpen"));
	
	loadItem(itemNo);
	displayItem();
}

function loadListProduct () {
	listProduct = JSON.parse(localStorage.getItem("listProduct"));
	console.log(listProduct);
	
}

// -------------------------------------------------------------------------------------- Chuyển động slide ảnh ----------->
$(document).on('click', '.number-spinner button', function () {    
	var btn = $(this),
		oldValue = btn.closest('.number-spinner').find('input').val().trim(),
		newVal = 0;
	
	if (btn.attr('data-dir') == 'up') {
		newVal = parseInt(oldValue) + 1;
	} else {
		if (oldValue > 1) {
			newVal = parseInt(oldValue) - 1;
		} else {
			newVal = 1;
		}
	}
	btn.closest('.number-spinner').find('input').val(newVal);
});

//------------------------------------------------------------------------------------- Tìm ảnh theo no ------------------->

function loadItem (itemNo) {
	for (let i = 0; i < listProduct.length; i++) {
		const e = listProduct[i];
		if (itemNo == e.no) {
			itemLoad.no = e.no;
			itemLoad.name = e.name;
			itemLoad.category = e.category;
			itemLoad.price = e.price;
			itemLoad.quantity = e.quantity;
			itemLoad.discount = e.discount;
			itemLoad.images = e.images;
			itemLoad.description = e.description;
			break;
		}
	}
}

//  ------------------------------------------------------------------------------------------FORMAT DẠNG TIỀN TỆ-----------------------------------------------
function format_curency(x) {
 
    x = parseFloat(String(x).replace(/,/g, ""))
                    .toFixed(0)
                    .toString()
                    .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return x+"VNĐ";
}

// -----------------------------------------------------------------------------------------Thay thế thông tin hiển thị
function displayItem (item){
	document.getElementById("name").innerHTML = "<b>"+itemLoad.name+"</b>";
	console.log(itemLoad.discount);
	
	
	//price
	if (itemLoad.discount == 0) {
		document.getElementById("price").innerHTML = `<h2 class="price" id="price"><b>${format_curency(itemLoad.price)}</b></h2><br>`;
	
	} else {
		let newPrice = itemLoad.price * ( 1 - (itemLoad.discount/100));
		document.getElementById("price").innerHTML = `
		<h2 class="price" id="price"><b>${format_curency(newPrice)}</b></h2>
		<h4 class="price" style="text-decoration: line-through; color: rgb(119, 119, 119);">Giá gốc: ${format_curency(itemLoad.price)}</h4>
		
		`
	}


	document.getElementById("description").innerHTML = itemLoad.description;
	let displayImg = `
		<div class="item active">
			<img src="img/product/${itemLoad.no}.1.jpg" style="width:700px">
		</div>
		`;
	for (let i = 1; i < itemLoad.images; i++) {
		displayImg +=`
			<div class="item">
				<img src="img/product/${itemLoad.no}.${i+1}.jpg" style="width:700px">
			</div>
		`
	}
	document.getElementById("img_slide").innerHTML = displayImg;
	
	// Hiển thị ô kick thước
	let size="";
	if (itemLoad["description"].toLowerCase().includes("size xs" || "size s" || "size m" || "size l") ) {
		size = "<B>Kích thước</B><br>"
	}
	if (itemLoad.description.toLowerCase().includes("size xs")) {
		size += `
		<button type="button" class="btn btn-outline-light text-dark">XS</button>
		`;
	}
	if (itemLoad.description.toLowerCase().includes("size s")) {
		size += `
		<button type="button" class="btn btn-outline-light text-dark">S</button>
		`;
	}
	if (itemLoad.description.toLowerCase().includes("size m")) {
		size += `
		<button type="button" class="btn btn-outline-light text-dark">M</button>
		`;
	}
	if (itemLoad.description.toLowerCase().includes("size l")) {
		size += `
		<button type="button" class="btn btn-outline-light text-dark">L</button>
		`;
	}
	
	document.getElementById("size").innerHTML = size+"<br><br>";
}


// --------------------------------------------------------------------------------THÊM SẢN PHẨM VÀO GIỎ HÀNG
cartItem = getList("cartItem");
function getList(a) {
	if (localStorage[`${a}`] !== undefined) {
		return JSON.parse(localStorage[`${a}`]);
	} else{
		return [];
	}
}
function save(a,b) {
    let save = JSON.stringify(b,null,2);
    localStorage.setItem(a,save); 
  }

function addToCart() {
	let item = {
		"no": itemLoad.no,
		"quantity": document.getElementById("quantity").value
	};
	cartItem = getList("cartItem");
	cartItem.push(item);
	compressCart();
	save('cartItem',cartItem);
	console.log(item);
	
}

function categoryOpen(a){
	localStorage.setItem("categoryOpen",JSON.stringify(a));
}

function compressCart() {
    for (let i = 0; i < cartItem.length; i++) {
      const x = cartItem[i];
      
      for (let j = i+1; j < cartItem.length; j++) {
        const y = cartItem[j];
        
        if (x.no == y.no) {
          x.quantity = Number(x.quantity) + Number(y.quantity);
          cartItem.splice(j,1);
          j--;
        }
      }
    }
}

function winScroll(a) {
	window.scrollTo(0,a);
  }
  