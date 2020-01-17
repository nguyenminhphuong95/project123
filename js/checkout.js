let cusOrder[i].cusCart = [];
let listProduct = [];
let cusOrders = [];
listProduct = getList("listProduct");
cusOrder[i].cusCart = getList("cartItem");
cusOrders = getList("cusOrders");
// cusOrders.pop();
// cusOrders.pop();
// cusOrders.pop();
// save("cusOrders",cusOrders);




console.log(listProduct);
console.log(cusOrder[i].cusCart);
console.log(cusOrders);


window.onload = displayCartItems();

    



// ---------------------------------------------------------------------------LƯU TRỮ
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


//---------------------------------------------------------------------------- Hiển trị danh sách trong giỏ
function displayCartItems(){
    let cartRows="";
    let totalSum = 0;
    for (let i = 0; i < cusOrder[i].cusCart.length; i++) {
        const e = cusOrder[i].cusCart[i];
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
            <div class="col-sm-4 cart-row">
                <h3>${name}</h3>
                <p>- Mã sản phẩm: ${e.no}</p>
                <p>- Đơn giá: ${format_curency(price)}đ</p>
                <p>- Giảm giá: ${discount} %</p>
                <button type="button" class="btn btn-outline-danger btn-sm" onclick="remove_cart_item(${i})">Xóa</button>
            </div>
            <div class="col-sm-2 cart-row" >
                <input style="width: 40px" id="cart-item-quantity${i}" type="number" value ="${e.quantity}" min="1" onchange="changeQuantity(${i})">
            </div>
    
            <div class="col-sm-3 cart-row" style="text-align: right;" id="sum${i}">${format_curency(sum)}đ</div>
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
    `
    document.getElementById("cart-body").innerHTML = cartRows; 
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


// --------------------------------------------------------------------------- Đổi khi số lượng thay đổi
function changeQuantity(a){
    let oldSum = document.getElementById(`sum${a}`).innerHTML;
    let oldTotalVAT = document.getElementById('totalSum').innerHTML.toString();
    console.log(oldTotalVAT);
    
    oldSum = parseInt(convertTextToNumber(oldSum));
    oldTotalVAT = parseInt(convertTextToNumber(oldTotalVAT));
 
    cusOrder[i].cusCart[a].quantity = Number(document.getElementById(`cart-item-quantity${a}`).value);
    let price = searchCartItem(cusOrder[i].cusCart[a].no,"price");
    let newSum = cusOrder[i].cusCart[a].quantity * price;

    // change sum từng dòng
    document.getElementById(`sum${a}`).innerHTML = `${format_curency(newSum)}đ`;
    // change total giỏ hàng


    console.log("oldSum = "+oldSum);
    console.log("newSum = "+ newSum);
    console.log("oldTotalVAT = "+oldTotalVAT);
    let newTotalVAT = ((oldTotalVAT / 1.1) - oldSum + newSum)*1.1;

    document.getElementById(`totalSum`).innerHTML = format_curency(newTotalVAT)+"đ";
    console.log("newTotalVAT = "+newTotalVAT);
    
    save("cartItem",cusOrder[i].cusCart);    

    
}

//  ------------------------------------------------------------------------------------------FORMAT DẠNG TIỀN TỆ-----------------------
function format_curency(x) {
 
    x = parseFloat(String(x).replace(/,/g, ""))
                    .toFixed(0)
                    .toString()
                    .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return x;
}

// ------------------------------------------------------------------------------------------XÓA KHỎI GIỎ HÀNG
function remove_cart_item(i) {
    cusOrder[i].cusCart.splice(i,1);
    displayCartItems();
    save("cartItem",cusOrder[i].cusCart);
}

function convertTextToNumber (str){
    str = str.replace(/,/g,"");  
    str = str.replace(/đ/g,"");  
    
    return str;  
}

//----------------------------------------------------------------------------------------- Mo trang
function categoryOpen(a){
	localStorage.setItem("categoryOpen",JSON.stringify(a));
}
function winScroll(a) {
	window.scrollTo(0,a);
  }
  

// ---------------------------------------------------------------------------------------- New Order Save and THanks
function newOrder() {
    cusOrders = getList("cusOrders");
    console.log(cusOrders);
   
    
    let cusNo = 0;
    if (cusOrders == [] ) {
        cusNo = 01;
    } else {
        let x = 0;
        for (let i = 0; i < cusOrders.length; i++) {
            x=Math.max(x,cusOrders[i].cusNo);    
        }
        cusNo = x+1;
    }
    console.log(cusNo);

    let newOrder = {
        "cusNo": cusNo,
        "cusName": document.getElementById("cusName").value,
        "cusEmail": document.getElementById("cusEmail").value,
        "cusPhone": document.getElementById("cusPhone").value,
        "cusAddress": document.getElementById("cusAddress").value, 
        "cusComment": document.getElementById("cusComment").value,
        "deliMethod": $("input[name=deliMethod]:checked").val(),
        "payMethod": $("input[name=payMethod]:checked").val(),
        "status": "chưa hoàn thành",
        "cusCart": cusOrder[i].cusCart,
    };
    cusOrders.push(newOrder);
    console.log(cusOrders);
    alert("Quý khách đã đặt hàng thành công. Xin trân trọng cảm ơn.");
    save("cusOrders",cusOrders);

    cusOrder[i].cusCart=[];
    save("cartItem",cusOrder[i].cusCart);

    

}