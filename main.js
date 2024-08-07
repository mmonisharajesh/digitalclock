let count = 0

function showDate(){
    let date = new Date();
    let ddEle = document.getElementById('dd');
    let mmEle = document.getElementById('mm');
    let yyEle = document.getElementById('yy');
    let hhEle = document.getElementById('hh');
    let minEle = document.getElementById('min');
    let secEle = document.getElementById('sec');
    //Show Date
    let d = date.getDate()
    d = d>=10 ? d : "0"+d;
    ddEle.innerHTML = d;
    //Show Month
    let month = date.getMonth() + 1;
    month = month>=10 ? month : "0"+month;
    mmEle.innerHTML = month;

    //Show Year
    let year = date.getFullYear();
    yyEle.innerHTML = year;

    //Show Hour
    let hour = date.getHours()
hour = hour > 12 ? hour -12 : hour;
hour = hour >= 10 ? hour : "0"+hour;
hhEle.innerText = hour;

//Show Minutes
let minute = date.getMinutes();
minute = minute >= 10 ? minute : "0"+minute;
minEle.innerText = minute;

//Show Seconds
let seconds = date.getSeconds();
seconds = seconds >= 10 ? seconds : "0"+seconds;
secEle.innerText = seconds;

//Show Day
let day = date.getDay();
let inputEle = document.getElementsByClassName("input");
for(let i =0;i<inputEle.length;i++){
if(i==day){
    inputEle[i].style.accentColor = "red";
    inputEle[i].setAttribute("checked","checked")
    inputEle[i].removeAttribute("disabled","disabled")

}else{
    inputEle[i].style.accentColor = "white";
    inputEle[i].removeAttribute("checked","checked")
    inputEle[i].setAttribute("disabled","disabled")

}
}

//Set Alarm
let setEle = document.getElementById('setTime');
console.log(setEle.value);
let value = setEle.value;
let h = date.getHours();
h = h<10 ? "0"+h : h;
let m = date.getMinutes();
m = m<10 ? "0"+m : m;

let time = `${h}:${m}`
console.log(time);
let alarm = document.getElementById('alarm');
if(value == time){
    if(count==0){
        let audioEle = document.createElement('audio');
        audioEle.setAttribute('src','ringtone.mp3')
        audioEle.setAttribute('controls',true);
        audioEle.setAttribute('autoplay',true);
        audioEle.setAttribute('loop',true);
        alarm.appendChild(audioEle);
        console.log(audioEle);
        count++
    }
  
}else{
    if(count!=0){
    let audioEle = document.getElementsByTagName('audio');
    audioEle.length != 0 ? audioEle[0].remove() : ""
    // audioEle[0].removeAttribute('autoplay');
    }

}
// count=0;
}

setInterval(showDate,1000)
// showDate()