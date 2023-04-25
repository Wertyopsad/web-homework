//window.onload = function() {

//}
let image_URL_Array = [
    "https://ankemedia.com/wp-content/uploads/2018/09/219566d0127d001e13d9d64ee113f511_m.jpg" ,
    "https://img-global.cpcdn.com/recipes/4f37e6ecbc491688/680x482cq70/%E9%AD%9A%E4%BB%8B%E9%86%AC%E6%B2%B9%E6%8B%89%E9%BA%B5-%E9%A3%9F%E8%AD%9C%E6%88%90%E5%93%81%E7%85%A7%E7%89%87.webp",
    "https://cdn.bella.tw/files/messageImage_1595231156865.jpg",
    "https://cdn2.ettoday.net/images/2843/d2843433.jpg",
    "https://www.gomaji.com/blog/wp-content/uploads/2021/02/Dong-1.jpg",
    "https://etaiwan.blog/wp-content/uploads/20191203150805_77.jpg"
];

$(function(){
    $("input").on("click",function(){
        var numberOfListItem = $("li").length;
        var randomChildNumber = Math.floor(Math.random()*numberOfListItem);
        console.log(randomChildNumber);
        $("h1").text($("li").eq(randomChildNumber).text());
       $("img").attr("src",image_URL_Array[randomChildNumber])
        
    });

});