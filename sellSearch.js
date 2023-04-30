

const isbnSearch = document.querySelector("#isbnSearch");
const nameSearch = document.querySelector("#nameSearch");
const authorSearch = document.querySelector("#authorSearch");

const btnS = document.querySelector("#btnS");//classify search
const btnSell = document.querySelector("#btnSell");//basic search

const page = document.querySelector(".nav-link active  btn-primary");

const order = document.querySelector("#order");//結果
const blockC = document.querySelector(".blockC");//結果

const classify1 = document.querySelector("#classify1");//分類資訊
const cleanBtn = document.querySelector("#cleanBtn");//結果


let nameIN;
let isbnIN;
let authorINSell;

let classify1IN;
let classList = [];





const resultarr = [];
const resultcontainer = [];//收集變數
let arr = [];
let arrResult = [];
let arrResult2 = [];
let arrResult3 = [];
let thing;
let num = [];
for (let i = 1; i < 101; i++) {
    num.push(i);

};
let nunew = [];


btnS.addEventListener("click", function () {


    classify1IN = classify1.value;


    let body = {
        "classify": classify1IN
    }
    //fetch+postMan 原本路徑
    fetch("http://localhost:8080/find_By_Classify_Containing", {
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
            // console.log(data)
            arr = data;
            alert(data.message);
            arrResult = arr.book_list;
            console.log(arrResult);
            // if(arrResult.length===0){
            //     blockC.innerHTML=`沒有結果`;
            // }
            for(let i=0;i<arrResult.length; i++){
            arrResult2 = arrResult[i];  
            console.log();
            order.append(document.createElement("li"));
            order.append(`作者:${arrResult2.author}_書名:${arrResult2.name}`);
            order.append(document.createElement("br"));
            order.append(`【其他資訊】: isbn_${arrResult2.isbn} ; stock_${arrResult2.stock} ; price_${arrResult2.price}`);

            };
            

        })
        


        .catch(function (error) {
            //抓資料不成功，錯誤，進catch
            console.log(error);

        })

       
    

});

//======================================================================================
btnSell.addEventListener("click", function () {


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
            alert(data.message);
            arr=data;
            arrResult = arr.book_list;
           
            console.log(arrResult);
            
          
            

            for(let i=0; i<arrResult.length; i++){
            arrResult2 = arrResult[i];  
            console.log();
            order.append(document.createElement("li"));
            order.append(`author: ${arrResult2.author}_bookName:${arrResult2.name}`);
            order.append(document.createElement("br"));
            order.append(`isbn_${arrResult2.isbn} ; price_${arrResult2.price}; stock_${arrResult2.stock}`);

            };
            

        })
        


        .catch(function (error) {
            //抓資料不成功，錯誤，進catch
            console.log(error);

        })


        

});

cleanBtn.addEventListener("click", function () {
    history.go(0);
    // blockC.replaceChildren();
});