const hoursofselect = ["00","01","02","03","04","05","06","07","08","09","10","11","12","13","14","15","16","17","18","19","20","21","22","23"];
const minutesandseconds = ["00","01","02","03","04","05","06","07","08","09","10","11","12","13","14","15","16","17","18","19","20","21","22","23","24","25","26","27","28","29","30","31","32","33","34","35","36","37","38","39","40","41","42","43","44","45","46","47","48","49","50",
"51","52","53","54","55","56","57","58","59"]




hoursofselect.forEach((hour)=>{
    document.getElementById("hours").innerHTML += "<option value="+hour+">"+hour+"</option>";
})

minutesandseconds.forEach((minute)=>{
    document.getElementById("minutes").innerHTML += "<option value="+minute+">"+minute+"</option>";
})

minutesandseconds.forEach((second)=>{
    document.getElementById("seconds").innerHTML += "<option value="+second+">"+second+"</option>";
})




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


const x = setInterval(updateCounter,1000);

