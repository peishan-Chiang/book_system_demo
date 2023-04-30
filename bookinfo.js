
const bookName = document.querySelector("#name");
const isbn = document.querySelector("#isbn");



const author = document.querySelector("#author");
const authorlabel = document.querySelector(".authorlabel");

const blockC = document.querySelector(".blockC");//結果
const btnTem = document.querySelector("#btnTem");//新增站存
const btnM = document.querySelector("#btnM");//修改

const newName = document.querySelector("#newName");
const newNamelabel = document.querySelector(".newNamelabel");


const newAuthor = document.querySelector("#newAuthor");
const newAuthorlabel = document.querySelector(".newAuthorlabel");

const newPrice = document.querySelector("#newPrice");
const newPricelabel = document.querySelector(".newPricelabel");

const newStock = document.querySelector("#newStock");
const newStocklabel = document.querySelector(".newStocklabel");

const btnPur = document.querySelector("#btnPur");
const btnAdj = document.querySelector("#btnAdj");
const btnRe = document.querySelector("#btnRe");

const classify2 = document.querySelector(".classify2");
const classLabel = document.querySelector(".classLabel");

const newSale = document.querySelector(".newSale");
const newSalelabel = document.querySelector(".newSalelabel");

const btnUpdatePur = document.querySelector("#btnUpdatePur");
const btnUpdatePri = document.querySelector("#btnUpdatePri");

let classify1IN;
let classList = [];
let nameIN;
let nameNewIN;
let isbnIN;
let authorIN;
let authorNewIN;
let priceIN;

let stockIN;
let saleIN;

let arr = [];
let arrResult = [];
let arrResult2 = [];



btnTem.addEventListener("click", function () {

    classify1IN = classify1.value;
    classList.push(classify1IN);
    resultClassify.innerHTML = classList;


});


function modi() {
    nameIN = bookName.value;
    isbnIN = isbn.value;
    authorIN = author.value;

    authorNewIN = newAuthor.value;
    nameNewIN = newName.value

    priceIN = newPrice.value;
    priceSwitch = parseInt(priceIN);
    stockIN = newStock.value;
    stockSwitch = parseInt(stockIN);
    saleIN = newSale.value;
    saleSwitch = parseInt(saleIN);


    let body = {
        "isbn": isbnIN,
        "author": authorIN,
        "name": nameIN,


        "newName": nameNewIN,
        "newAuthor": authorNewIN,
        "price": priceIN,
        "stock": stockIN,
        "saleAmount": saleIN,
        "classify_list": classList

    }

    //fetch+postMan 原本路徑
    fetch("http://localhost:8080/alterData", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(body)
    })
        .then(function (response) {
            //從JSON格式轉回Js物件
            return response.json()
        })
        .then(function (data) {
            console.log(data)
            blockC.innerHTML = data.message;

        })
        .catch(function (error) {
            //抓資料不成功，錯誤，進catch
            console.log(error);

        })
}

function found() {
    let body = {
        "isbn": isbnIN,
        "author": authorIN,
        "name": nameIN,


        "newName": nameNewIN,
        "newAuthor": authorNewIN,
        "price": priceIN,
        "stock": stockIN,
        "saleAmount": saleIN,
        "classify_list": classList

    }

    //fetch+postMan 原本路徑
    fetch("http://localhost:8080/get_Publisher_Book_Info", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(body)
    })
        .then(function (response) {
            //從JSON格式轉回Js物件
            return response.json()
        })
        .then(function (data) {
            console.log(data)
            blockC.innerHTML = data.message;

        })
        .catch(function (error) {
            //抓資料不成功，錯誤，進catch
            console.log(error);

        })


}



btnPur.addEventListener("click", function () {

    if (author.getAttribute("class") === "author") {//屬性判斷，如果我的類別名稱叫做box box1，我的類別就要改變屬性
        author.setAttribute("class", "author hidden");
    }
    if (authorlabel.getAttribute("class") === "authorlabel") {//屬性判斷，如果我的類別名稱叫做box box1，我的類別就要改變屬性
        authorlabel.setAttribute("class", "authorlabel hidden");
    }


    if (newAuthor.getAttribute("class") === "newAuthor") {//屬性判斷，如果我的類別名稱叫做box box1，我的類別就要改變屬性
        newAuthor.setAttribute("class", "newAuthor hidden");
    }
    if (newAuthorlabel.getAttribute("class") === "newAuthorlabel") {//屬性判斷，如果我的類別名稱叫做box box1，我的類別就要改變屬性
        newAuthorlabel.setAttribute("class", "newAuthorlabel hidden");
    }

    if (newPrice.getAttribute("class") === "newPrice") {//屬性判斷，如果我的類別名稱叫做box box1，我的類別就要改變屬性
        newPrice.setAttribute("class", "newPrice hidden");
    }
    if (newPricelabel.getAttribute("class") === "newPricelabel") {//屬性判斷，如果我的類別名稱叫做box box1，我的類別就要改變屬性
        newPricelabel.setAttribute("class", "newPricelabel hidden");
    }

    if (newName.getAttribute("class") === "newName") {//屬性判斷，如果我的類別名稱叫做box box1，我的類別就要改變屬性
        newName.setAttribute("class", "newName hidden");
    }
    if (newNamelabel.getAttribute("class") === "newNamelabel") {//屬性判斷，如果我的類別名稱叫做box box1，我的類別就要改變屬性
        newNamelabel.setAttribute("class", "newNamelabel hidden");
    }

    if (classify2.getAttribute("class") === "classify2") {//屬性判斷，如果我的類別名稱叫做box box1，我的類別就要改變屬性
        classify2.setAttribute("class", "classify2 hidden");
    }
    if (classLabel.getAttribute("class") === "classLabel") {//屬性判斷，如果我的類別名稱叫做box box1，我的類別就要改變屬性
        classLabel.setAttribute("class", "classLabel hidden");
    }

    // if (newStock .getAttribute("class") === "newStock") {//屬性判斷，如果我的類別名稱叫做box box1，我的類別就要改變屬性
    //     newStock .setAttribute("class", "newStock  hidden");
    // }
    // if (newStocklabel.getAttribute("class") === "newStocklabel") {//屬性判斷，如果我的類別名稱叫做box box1，我的類別就要改變屬性
    //     newStocklabel.setAttribute("class", "newStocklabel hidden");
    // }

    if (btnTem.getAttribute("class") === "btn") {//屬性判斷，如果我的類別名稱叫做box box1，我的類別就要改變屬性
        btnTem.setAttribute("class", "btn disabled");
    }


    if (newSale.getAttribute("class") === "newSale") {//屬性判斷，如果我的類別名稱叫做box box1，我的類別就要改變屬性
        newSale.setAttribute("class", "newSale  hidden");
    }
    if (newSalelabel.getAttribute("class") === "newSalelabel") {//屬性判斷，如果我的類別名稱叫做box box1，我的類別就要改變屬性
        newSalelabel.setAttribute("class", "newSalelabel hidden");
    }

    blockC.replaceChildren();

});

btnUpdatePur.addEventListener("click", function () { //庫存更新
    nameIN = bookName.value;
    isbnIN = isbn.value;
    stockIN = newStock.value;
    stockSwitch = parseInt(stockIN);
    let body = {
        "isbn": isbnIN,
        "name": nameIN,
        "stock": stockIN
    }

    //fetch+postMan 原本路徑
    fetch("http://localhost:8080/update_Stock_Info", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(body)
    })
        .then(function (response) {
            //從JSON格式轉回Js物件
            return response.json()
        })
        .then(function (data) {
            console.log(data);
            // alert(data.message);
            // blockC.innerHTML = data.message;

            alert(data.message)


            arr = data;
            console.log(arr);


            blockC.append(`message:${data.message}`);
            blockC.append(document.createElement("br"));
            blockC.append(`author:${data.author}`);
            blockC.append(document.createElement("br"));
            blockC.append(`bookName:${data.name}`);
            blockC.append(document.createElement("br"));
            blockC.append(`isbn: ${data.isbn}`);
            blockC.append(document.createElement("br"));
            blockC.append(`stock: ${data.stock}`);
            blockC.append(document.createElement("br"));
            blockC.append(`price:${data.price}`);
            blockC.append(document.createElement("br"));


        })
        .catch(function (error) {
            //抓資料不成功，錯誤，進catch
            console.log(error);

        })




});



btnAdj.addEventListener("click", function () {


    if (author.getAttribute("class") === "author") {//屬性判斷，如果我的類別名稱叫做box box1，我的類別就要改變屬性
        author.setAttribute("class", "author hidden");
    }
    if (authorlabel.getAttribute("class") === "authorlabel") {//屬性判斷，如果我的類別名稱叫做box box1，我的類別就要改變屬性
        authorlabel.setAttribute("class", "authorlabel hidden");
    }


    if (newAuthor.getAttribute("class") === "newAuthor") {//屬性判斷，如果我的類別名稱叫做box box1，我的類別就要改變屬性
        newAuthor.setAttribute("class", "newAuthor hidden");
    }
    if (newAuthorlabel.getAttribute("class") === "newAuthorlabel") {//屬性判斷，如果我的類別名稱叫做box box1，我的類別就要改變屬性
        newAuthorlabel.setAttribute("class", "newAuthorlabel hidden");
    }

    if (newName.getAttribute("class") === "newName") {//屬性判斷，如果我的類別名稱叫做box box1，我的類別就要改變屬性
        newName.setAttribute("class", "newName hidden");
    }
    if (newNamelabel.getAttribute("class") === "newNamelabel") {//屬性判斷，如果我的類別名稱叫做box box1，我的類別就要改變屬性
        newNamelabel.setAttribute("class", "newNamelabel hidden");
    }

    if (classify2.getAttribute("class") === "classify2") {//屬性判斷，如果我的類別名稱叫做box box1，我的類別就要改變屬性
        classify2.setAttribute("class", "classify2 hidden");
    }
    if (classLabel.getAttribute("class") === "classLabel") {//屬性判斷，如果我的類別名稱叫做box box1，我的類別就要改變屬性
        classLabel.setAttribute("class", "classLabel hidden");
    }

    if (newStock.getAttribute("class") === "newStock") {//屬性判斷，如果我的類別名稱叫做box box1，我的類別就要改變屬性
        newStock.setAttribute("class", "newStock  hidden");
    }
    if (newStocklabel.getAttribute("class") === "newStocklabel") {//屬性判斷，如果我的類別名稱叫做box box1，我的類別就要改變屬性
        newStocklabel.setAttribute("class", "newStocklabel hidden");
    }

    if (btnTem.getAttribute("class") === "btn") {//屬性判斷，如果我的類別名稱叫做box box1，我的類別就要改變屬性
        btnTem.setAttribute("class", "btn disabled");
    }


    if (newSale.getAttribute("class") === "newSale") {//屬性判斷，如果我的類別名稱叫做box box1，我的類別就要改變屬性
        newSale.setAttribute("class", "newSale  hidden");
    }


    if (newSalelabel.getAttribute("class") === "newSalelabel") {//屬性判斷，如果我的類別名稱叫做box box1，我的類別就要改變屬性
        newSalelabel.setAttribute("class", "newSalelabel hidden");
    } 
    

   
    blockC.replaceChildren();


});


btnUpdatePri.addEventListener("click", function () { //價格更新

    nameIN = bookName.value;
    isbnIN = isbn.value;
    priceIN = newPrice.value;
    stockSwitch = parseInt(stockIN);
    let body = {
        "isbn": isbnIN,
        "name": nameIN,
        "price": priceIN
    }

    //fetch+postMan 原本路徑
    fetch("http://localhost:8080/update_Price_Info", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(body)
    })
        .then(function (response) {
            //從JSON格式轉回Js物件
            return response.json()
        })
        .then(function (data) {
            console.log(data);
            // alert(data.message);
            // blockC.innerHTML = data.message;

            alert(data.message)


            arr = data;
            console.log(arr);


            blockC.append(`message:${data.message}`);
            blockC.append(document.createElement("br"));
            blockC.append(`author:${data.author}`);
            blockC.append(document.createElement("br"));
            blockC.append(`bookName:${data.name}`);
            blockC.append(document.createElement("br"));
            blockC.append(`isbn: ${data.isbn}`);
            blockC.append(document.createElement("br"));
            blockC.append(`stock: ${data.stock}`);
            blockC.append(document.createElement("br"));
            blockC.append(`price:${data.price}`);
            blockC.append(document.createElement("br"));


        })
        .catch(function (error) {
            //抓資料不成功，錯誤，進catch
            console.log(error);

        })






});


btnM.addEventListener("click", function () {
    if (confirm('確定修改嗎?資料會直接覆蓋掉喔~') == true) {
        modi();

    } else {
        window.alert("已取消資料更新");
    }

});

// blockC.addEventListener("click", function () {
//     history.go(0);//刷新本頁
// });

// btnRe.addEventListener("click", function () {
  
// //如果庫存看不到表示，我是在更新價格
//     // setTimeout(() => {//延後執行
//     //     blockC.click();
//     // }, 0)
//     setTimeout(() => {//延後執行，一旦box1做完，我後面0.5秒就要改屬性
//     document.querySelector("#btnAdj").click();
//     }, 500)

// });

