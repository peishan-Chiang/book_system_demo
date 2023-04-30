/*從postMan API抓資料*/
//Request URL
const btnTem = document.querySelector("#btnTem");//新增
const btn = document.querySelector("#btn");//新增
const btnM = document.querySelector("#btnM");//修改
const btnS = document.querySelector("#btnS");//查詢
const result = document.querySelector("#result");//結果
const result1 = document.querySelector("#result1");//結果
const bookName = document.querySelector("#name");
const isbn = document.querySelector("#isbn");
const author = document.querySelector("#author");
const price = document.querySelector("#price");
const stock = document.querySelector("#stock");
const resultClassify = document.querySelector("#resultClassify");//結果
const blockC = document.querySelector(".blockC");//結果
const btnNext = document.querySelector("#btnNext");//結果

const classify1 = document.querySelector("#classify1");


let nameIN;
let isbnIN;
let authorIN;
let priceIN;
let stockIN;
let classify1IN;
let classList = [];

//================================================


//======================================================

btnTem.addEventListener("click", function () {

    classify1IN = classify1.value;
    classList.push(classify1IN);
    resultClassify.innerHTML = classList;


});

//==================================================

btn.addEventListener("click", function () {

    nameIN = bookName.value;
    isbnIN = isbn.value;
    authorIN = author.value;
    priceIN = price.value;
    priceSwitch = parseInt(priceIN);
    stockIN = stock.value;
    stockSwitch = parseInt(stockIN);

    let body = {
        "book_list": [
            {
                "name": nameIN,
                "isbn": isbnIN,
                "author": authorIN,
                "classitfy_List": classList,
                "price": priceSwitch,
                "stock": stockSwitch



            }
        ]

    }

    //fetch+postMan 原本路徑
    fetch("http://localhost:8080/addData", {
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
            alert(data.message);
            // blockC.innerHTML = data.message;

        })
        .catch(function (error) {
            //抓資料不成功，錯誤，進catch
            console.log(error);

        })
    //========================================================
});
//========================================================
btnNext.addEventListener("click", function () {
    history.go(0);//刷新本頁
});



// btn.addEventListener("dblclick", function () {
//     history.go(0);//刷新本頁
// });

btnTem.addEventListener("dblclick", function () {
    history.go(0);//刷新本頁
});




// const resultarr = [];
// const resultcontainer = [];//收集變數
// let arr = [];
// let arrResult = [];
// let arrResult2 = [];
// let arrResult3 = [];
// let thing;
// let num = [];
// for (let i = 1; i < 101; i++) {
//     num.push(i);

// };
// let nunew = [];


// btnS.addEventListener("click", function () {


//     classify1IN = classify1.value;


//     let body = {
//         "classify": classify1IN
//     }
//     //fetch+postMan 原本路徑
//     fetch("http://localhost:8080/find_By_Classify_Containing", {
//         method: "POST",
//         headers: {
//             "Content-Type": "application/json",
//         },
//         body: JSON.stringify(body)
//     })
//         .then(function (response) {
//             //從JSON格式轉回Js物件
//             return response.json()
//         })
//         .then(function (data) {
//             // console.log(data)
//             arr = data;

//             arrResult = arr.book_list;
//             console.log(arrResult);
            
//             for(let i=0;i<arrResult.length; i++){
//             arrResult2 = arrResult[i];  
//             console.log();
//             blockC.append(`${arrResult2.author}:${arrResult2.name}_【其他資訊】: isbn_${arrResult2.isbn} ; stock_${arrResult2.stock} ; price_${arrResult2.price}`);
//             blockC.append(document.createElement("br"));
//             };

//         })
        


//         .catch(function (error) {
//             //抓資料不成功，錯誤，進catch
//             console.log(error);

//         })



// });

//==========================================================================================

