let listProduct
let itemNo = "JK01" ;
let itemLoad = {};



window.onload = loadListProduct();
loadItem(itemNo);
function loadListProduct () {
	listProduct = JSON.parse(localStorage.getItem("listProduct"));
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
console.log(itemLoad);


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
	document.getElementById("name").innerHTML = itemLoad.name;
	document.getElementById("price").innerHTML = format_curency(itemLoad.price);
	document.getElementById("description").innerHTML = itemLoad.description;
	// document.getElementById("name").innerHTML = itemLoad.name;
	// document.getElementById("name").innerHTML = itemLoad.name;
}
displayItem();


function displayImg () {
	let displayImg = `
		<div class="item active">
			<img src="img/${itemLoad.no}.1.jpg" style="width:700px">
		</div>";
		`
	for (let i = 1; i < itemLoad.images; i++) {
		displayImg +=`
			<div class="item">
				<img src="img/${itemLoad.no}.${i+1}.jpg" style="width:700px">
			</div>
		`
	}
}