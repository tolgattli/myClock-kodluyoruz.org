let clock;
function showTime(){
    var Days = ['Pazar','Pazartesi','Salı','Çarşamba','Perşembe','Cuma','Cumartesi'];
    let date = new Date();
    let toRightDate = Days[date.getDay()];
    let second = date.getSeconds();
    let hour = date.getHours();
    let minute = date.getMinutes();

    clock = `${hour}:${minute}:${second} ${toRightDate}`;
    document.getElementById("myClock").innerHTML = clock 
}
setInterval(showTime,1000)
let name = prompt("Adınız?")
document.getElementById("myName").innerHTML= name;









