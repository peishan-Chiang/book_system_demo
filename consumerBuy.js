const btnSearch = document.querySelector("#btnSearch");
const btnBuyIt = document.querySelector("#btnBuyIt");
const blockC = document.querySelector("#BuyEndList");

const BuyEndListol = document.querySelector("#BuyEndListol");
const priceArea = document.querySelector(".priceArea");

let text1 = document.getElementById('text1');//isbn
let text2 = document.getElementById('text2');//num
let textAuthor = document.getElementById('textAuthor')
let textName = document.getElementById('textName')
let searchList = document.querySelector('#searchListol');//num
let ol = document.getElementById('ol'); //ol


let buyTem = [];
let buyNumTem = [];

let isbnIN;
let nameIN;
let authorINSell;
// pageBtn.addEventListener("click", function () {

// });
let keyItem;
let valueItem;

function addItem() {
    let li = document.createElement('li');//li
    let checkbox = document.createElement('input');
    checkbox.type = "checkbox";
    checkbox.name = text1.value;
    checkbox.value = text2.value;
    checkbox.id = "id";
    li.append(checkbox);
    li.append(`品項isbn:  `);
    li.append(document.createTextNode(text1.value));
    // buyTem.push(text1.value);
    // console.log(buyTem);

    li.append(`_`);
    li.append(`預計購買數量:  `);
    li.append(document.createTextNode(text2.value));
    // valueItem=text2.value;
    // valueItem= parseInt(valueItem);
    // buyNumTem.push(text2.value);
    // console.log(buyNumTem);

    ol.append(li);
}
let button = document.getElementById('btn');
button.addEventListener("click", function () {
    addItem();
    console.log(buyTem);
});


btnSearch.addEventListener("click", function () {
    authorINSell = textAuthor.value
    nameIN = textName.value;
    isbnIN = text1.value;
    // authorIN=authorSearch.value;

    let body = {
        "author": authorINSell,
        "name": nameIN,
        "isbn": isbnIN
    }
    //fetch+postMan 原本路徑
    fetch("http://localhost:8080/get_User_Book_Info", {
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
            alert(data.message);
            arr = data;
            arrResult = arr.book_list;

            console.log(arrResult);

            for (let i = 0; i < arrResult.length; i++) {
                arrResult2 = arrResult[i];

                searchList.append(document.createElement("li"));
                searchList.append(`${arrResult2.author}:${arrResult2.name}_【其他資訊】: isbn_${arrResult2.isbn} ; price_${arrResult2.price}`);

                searchList.append(document.createElement("br"));

            };
            searchList.append(`==============================`);

        })



        .catch(function (error) {
            //抓資料不成功，錯誤，進catch
            console.log(error);

        })




});


var months = [{ "id": 1, "name": "January" }, { "id": 2, "name": "February" }];
console.log(JSON.stringify(months));

var monthNames = ["January", "February"];
var month = {};
var monthsArray = [];
for (let i = 0; i < 2; i++) {
    month.id = (i + 1);
    month.name = monthNames[i];
    monthsArray.push({ ...month });
}
console.log(JSON.stringify(monthsArray));



// buyTem=['99','98'];
// buyNumTem=['1','2'];

// var buylist = {};
// var buyArray = [];
// for (let i = 0; i <buyTem.length ; i++) {
//     buylist.name = buyTem[i];
//     buylist.num =  buyNumTem[i];
//     buyArray.push({...buylist});
// }
// console.log(JSON.stringify(buyArray));

var buylist = {};
var getchecked = function () {

    var buyArray = [];
    var arrayValue = []
    var arrayKey = []
    var checkboxes = document.querySelectorAll('input[type=checkbox]:checked')

    for (var i = 0; i < checkboxes.length; i++) {


        // buylist.checkboxes[i].name=buylist.checkboxes[i].value;
        // buyArray.push({...buylist});

        valueSwitch = parseInt(checkboxes[i].value);
        // console.log(buyArray);
        arrayKey.push(checkboxes[i].name)
        arrayValue.push(valueSwitch);
        // buyArray.push({ checkboxes[i].name , checkboxes[i].value })
        // checkboxes[i].name = checkboxes[i].value;
        console.log(arrayKey);
        console.log(arrayValue);
        buylist[arrayKey[i]] = arrayValue[i];
        console.log(buylist);
    }
    // result[ array1 [ i ] ] = array2 [ i ] ;

    console.log(buylist);
    alert(`勾選項目已加入清單，請【結帳】完成交易`);


}

let bodyIsbn;
let bodynum;

let arr = [];
let arrResult = [];
let arrResult2 = [];
let totalPrice;
let number;

btnBuyIt.addEventListener("click", function () {


    let body = {
        "buy_list": buylist
    }

    //fetch+postMan 原本路徑
    fetch("http://localhost:8080/book_Sell", {
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

            arr = data;
            console.log(arr);
            if (arr.message !== 0) {
                alert(arr.message);
            }


            if (arr.length === 0) {
                blockC.innerHTML = `沒有結果`;
            }

            totalPrice = data.totalPrice;
            number = data.num;
            arrResult = arr.book_list;
            console.log(arrResult);
            console.log(totalPrice);
            priceArea.innerHTML = `總價:${totalPrice}_總數量:${number}`;


            for (let i = 0; i < arrResult.length; i++) {
                arrResult2 = arrResult[i];
                console.log(arrResult2);

                BuyEndListol.append(document.createElement("li"));
                BuyEndListol.append(`${arrResult2.author}:${arrResult2.name}_【其他資訊】: isbn_${arrResult2.isbn} ; price_${arrResult2.price}`);
                BuyEndListol.append(document.createElement("br"));
            };


        })



        .catch(function (error) {
            //抓資料不成功，錯誤，進catch
            console.log(error);

        })


});