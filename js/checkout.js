let cartItem = [];
let listProduct = [];
listProduct = getList("listProduct");
cartItem = getList("cartItem");
window.onload = displayCartItems();
// ---------------------------------------------------------------------------LƯU TRỮ
function getList(a) {
    return JSON.parse(localStorage[`${a}`]);
}

function savecart() {
    let save = JSON.stringify(cartItem,null,2);
    localStorage.setItem("cartItem",save);
  }


//---------------------------------------------------------------------------- Hiển trị danh sách trong giỏ
function displayCartItems(){
    let cartRows="";
    let totalSum = 0;
    for (let i = 0; i < cartItem.length; i++) {
        const e = cartItem[i];
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
 
    cartItem[a].quantity = Number(document.getElementById(`cart-item-quantity${a}`).value);
    let price = searchCartItem(cartItem[a].no,"price");
    let newSum = cartItem[a].quantity * price;

    // change sum từng dòng
    document.getElementById(`sum${a}`).innerHTML = `${format_curency(newSum)}đ`;
    // change total giỏ hàng


    console.log("oldSum = "+oldSum);
    console.log("newSum = "+ newSum);
    console.log("oldTotalVAT = "+oldTotalVAT);
    let newTotalVAT = ((oldTotalVAT / 1.1) - oldSum + newSum)*1.1;

    document.getElementById(`totalSum`).innerHTML = format_curency(newTotalVAT)+"đ";
    console.log("newTotalVAT = "+newTotalVAT);
    
    savecart();    

    
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
    cartItem.splice(i,1);
    displayCartItems();
    savecart();
}

function convertTextToNumber (str){
    str = str.replace(/,/g,"");  
    str = str.replace(/đ/g,"");  
    
    return str;  
}

//----------------------------------------------------------------------------------------- Gộp giỏ hàng vào với nhau
