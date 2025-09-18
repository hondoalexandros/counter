var x = "";
const hoursofselect = ["00","01","02","03","04","05","06","07","08","09","10","11","12","13","14","15","16","17","18","19","20","21","22","23"];
const minutesandseconds = ["00","01","02","03","04","05","06","07","08","09","10","11","12","13","14","15","16","17","18","19","20","21","22","23","24","25","26","27","28","29","30","31","32","33","34","35","36","37","38","39","40","41","42","43","44","45","46","47","48","49","50",
"51","52","53","54","55","56","57","58","59"]


let url_string = window.location.href;
let url = new URL(url_string);

let date_par = url.searchParams.get("date");
let hour_par = url.searchParams.get("hours");
let minute_par = url.searchParams.get("minutes");
let second_par = url.searchParams.get("seconds");


hoursofselect.forEach((hour)=>{
    if(hour == hour_par){
       document.getElementById("hours").innerHTML+= "<option value="+hour+" selected>"+hour+"</option>";
    }else{
       document.getElementById("hours").innerHTML+= "<option value="+hour+">"+hour+"</option>";
    }
    
})

minutesandseconds.forEach((minute)=>{
    if(minute == minute_par){
      document.getElementById("minutes").innerHTML+= "<option value="+minute+" selected>"+minute+"</option>";
    }else{
      document.getElementById("minutes").innerHTML+= "<option value="+minute+">"+minute+"</option>";
    }
})

minutesandseconds.forEach((second)=>{
    if(second == second_par){
       document.getElementById("seconds").innerHTML+= "<option value="+second+" selected>"+second+"</option>";
    }else{
       document.getElementById("seconds").innerHTML+= "<option value="+second+">"+second+"</option>";
    }
    
})

if(date_par){
   document.getElementById("date").value = date_par;
}



function updateCounter(){
    let dateStringchoice = document.getElementById("date").value;
    let hourStringchoice = document.getElementById("hours").value;
    let minuteStringchoice = document.getElementById("minutes").value;
    let secondsStringchoice = document.getElementById("seconds").value;

    let target_datetime_string = dateStringchoice +" "+hourStringchoice+":"+minuteStringchoice+":"+secondsStringchoice;
  
    
    
    let now = new Date().getTime();
    let target_datetime = new Date(target_datetime_string).getTime();
    let distance = Math.trunc((target_datetime - now) / 1000);
    let oparator =  document.getElementById("choice")
    
    

    if(distance > 0){
        distance = target_datetime - now;
    }else if(distance == 0 && oparator.checked){
         console.log("welcome")
         clearInterval(x);
    }else if(distance < 0){
        distance = now - target_datetime;
    }
    
    

    let seconds = Math.floor(distance / 1000);
    let minutes = Math.floor(seconds / 60);
    let hours = Math.floor(minutes / 60);
    let days = Math.floor(hours / 24);


    document.getElementById("secondsNumber").innerHTML = seconds+" Seconds";
    document.getElementById("minutessNumber").innerHTML = minutes+" Minutes";
    document.getElementById("hoursNumber").innerHTML = hours+" Hours";
    document.getElementById("daysNumber").innerHTML = days+" Days";
   
    let daysString = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hoursString = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutesString = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let secondsString = Math.floor((distance % (1000 * 60)) / 1000);

 
  document.getElementById("datetimestring").innerHTML = daysString + "  days,  " + hoursString + "  hours, "
  + minutesString + "  minutes, " + secondsString + "  seconds ";
   
}

function startCounter(){
  x = setInterval(updateCounter,1000);
}

function stopcounter(){
    clearInterval(x);
}

