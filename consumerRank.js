
const isbnSearch = document.querySelector("#isbnSearch");
const nameSearch = document.querySelector("#nameSearch");
const authorSearch = document.querySelector("#authorSearch");
const blockC = document.querySelector(".SearchListArea");//結果
const SearchResult = document.querySelector("#SearchResult");//結果
const cleanBtn = document.querySelector("#cleanBtn");//結果





let nameIN;
let isbnIN;
let authorINSell;


const resultarr = [];
const resultcontainer = [];//收集變數
let arr = [];
let arrResult = [];
let arrResult2 = [];
let arrResult3 = [];
let thing;
let num = [];


const saleBtn = document.querySelector("#saleBtn");//更新
const rankResult = document.querySelector("#rankResult");
const searchBtn = document.querySelector("#searchBtn");




saleBtn.addEventListener("click", function () {



    let body = {


    }

    //fetch+postMan 原本路徑
    fetch("http://localhost:8080/rank_Top5_Sale", {
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
            // blockC.innerHTML = data.message;
            arr = data;
            arrResult = arr.book_list;
            console.log(arrResult);

            for (let i = 0; i < arrResult.length; i++) {
                arrResult2 = arrResult[i];
                console.log();

                rankResult.append(` ◎ 書名:${arrResult2.name}`);
                rankResult.append(document.createElement("br"));
                rankResult.append(` △ 作者:${arrResult2.author}`);
                rankResult.append(document.createElement("br"));
                rankResult.append(` △ isbn:${arrResult2.isbn}`);
                rankResult.append(document.createElement("br"));
                rankResult.append(` △ price:${arrResult2.price}`);
                // _【其他資訊】: isbn_${arrResult2.isbn} ; price_${arrResult2.price}
               
                rankResult.append(document.createElement("li"));
                // rankResult.append(document.createElement("br"));
            };

        })
        .catch(function (error) {
            //抓資料不成功，錯誤，進catch
            console.log(error);

        })
    //========================================================
});
//========================================================


rankResult.addEventListener("click", function () {
    history.go(0);//刷新本頁
});

cleanBtn.addEventListener("click", function () {
    history.go(0);
    // blockC.replaceChildren();
});

//========================================================

searchBtn.addEventListener("click", function () {


    authorINSell=authorSearch.value
    nameIN=nameSearch.value;
    isbnIN=isbnSearch.value;
    // authorIN=authorSearch.value;

    let body = {
        "author":authorINSell,
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
            arr=data;
            arrResult = arr.book_list;
           
            console.log( arrResult);
            if(arrResult.length===0){
                blockC.innerHTML=`沒有結果`;
            }

            for(let i=0; i<arrResult.length ; i++){
            arrResult2 = arrResult[i];  
          
            SearchResult.append(document.createElement("li"));
            SearchResult.append(`${arrResult2.author}:${arrResult2.name}_【其他資訊】: isbn_${arrResult2.isbn} ; price_${arrResult2.price}`);
            // order.append(document.createElement("br"));
            };
            

        })
        


        .catch(function (error) {
            //抓資料不成功，錯誤，進catch
            console.log(error);

        })


        

});
