$(function(){
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
});