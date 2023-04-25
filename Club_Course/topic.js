let topic = [
    "尚未開學",
    "國定假日",
    "環境介紹",
    "隨機性",
    "重複性",
    "條件判斷"
] ;

let startDate = new Date();

function setMonthAndDay(startMonth, startDay){
    startDate.setMonth(startMonth-1, startDay);
    startDate.setHours(0);
    startDate.setMinutes(0);
    startDate.setSeconds(0);

}
function myDate(){

    var date1 = new Date(document.getElementById("dateinput").value);
    startDate=date1;
    $("#courseTable").empty();
    $("#courseTable").append("<tr><th>場次</th><th>時間</th><th>主題</th></tr>")
    let topicCount =topic.length;

    let millisecsPerDay = 24*60*60*1000;

    for(let x=0; x<topicCount;x++){
        $("#courseTable").append(
            
            "<tr>"+
            `<td>${x+1}</td>`+
            `<td>${startDate.getMonth()+1}/${startDate.getDate()}</td>`+
            `<td>${topic[x]}</td>`+
            "</tr>"
            );
            console.log(startDate.getTime());
            startDate.setTime(startDate.getTime()+7*millisecsPerDay);
    }
}
setMonthAndDay(2,14);
console.log(startDate);

//update();
