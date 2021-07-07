function initializeFullpageJS() {
    var myFullpage = new fullpage('#fullpage', {
        navigation: false,
        navigationPosition: 'right',
        autoScrolling: false,
    });
}

function initializeTypedJS() {
    var options = {
        strings: [
            'IN MONET I TRUST'
        ],
        typeSpeed: 100,
        backSpeed: 20,
        loop: true,
      };
      
    var typed = new Typed('.typing-text', options);
}

function initializeTimer(){
    var date = new Date();
    var h = date.getHours(); // 0 - 23
    var m = date.getMinutes(); // 0 - 59
    var s = date.getSeconds(); // 0 - 59
    var session = "AM";
    
    if(h == 0){
        h = 12;
    }
    
    if(h > 12){
        h = h - 12;
        session = "PM";
    }
    
    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;
    
    var time = h + "   " + m + "   " + s;
    document.getElementById("MyClockDisplay").innerText = time;
    document.getElementById("MyClockDisplay").textContent = time;
    
    setTimeout(initializeTimer, 1000);   
}

$(document).ready(function() {
    initializeFullpageJS();
    initializeTypedJS();
    initializeTimer();
});
