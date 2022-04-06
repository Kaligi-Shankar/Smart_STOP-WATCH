
var seconds = 00;
var tens = 00;
var mins = 00;
var laplist = []
var appendseconds = document.getElementById("timer__seconds")
var appendtens = document.getElementById("timer__tens")
var appendmins = document.getElementById("timer__minutes")
var buttonstart = document.getElementById('start_button');
var buttonstop = document.getElementById('stop_button');
var buttonReset = document.getElementById('reset_button');
var buttonLap = document.getElementById('lap_button');
var lapvalues = document.getElementById('lap_span');
var interval; //to store the values

//this function will run when click on start

function startTimer() {
  tens++;

  if (tens < 9) {
    appendtens.innerHTML = "0" + tens;
  }
  if (tens > 9) {
    appendtens.innerHTML = tens;
  }
  if (tens > 99) {
    seconds++;
    appendseconds.innerHTML = "0" + seconds;
    tens = 0;
    appendtens.innerHTML = "0" + 0;
  }
  if (seconds > 9) {
    appendseconds.innerHTML = seconds;
  }
  if (seconds > 59) {
    mins++
    appendmins.innerHTML = "0" + mins
    seconds = 0
  }
  if (mins > 9) {
    appendmins.innerHTML = mins
  }
}


buttonstart.onclick = function () {
  interval = setInterval(startTimer, 10);  //10 is used to reduce the milli seconds to 2digit number.
  buttonstart.disabled = true  //to avoid running this function twice we are disabling it.
}

//this function is to stop the timer
buttonstop.onclick = function () {
  clearInterval(interval);   //we need to stop timer to avoid interval triggers.
  buttonstart.disabled = false
};

// to track the time stamps of laps we use this function
buttonLap.onclick = function () {
  if (tens !== 00 && seconds !== 00) {
    lapvalues.innerHTML = "" //to remove previous laps and map freshly.
    var lap = `${mins} : ${seconds} : ${tens}` //template to create time stamp.
    laplist.push(lap)  //pusing each lap into an array to map and show in the page.

    laplist.map((value, index) => {
      var li = document.createElement("li")
      li.appendChild(document.createTextNode(`Lap-${index + 1} - ${value}`))
      lapvalues.appendChild(li)
    })

  }
}

//this function is to Reset the timer
buttonReset.onclick = function () {
  clearInterval(interval);
  lapvalues.innerHTML = ""
  seconds = 00;
  tens = 00;
  mins = 00
  laplist = []
  appendseconds.innerHTML = "00";
  appendtens.innerHTML = "00";
  appendmins.innerHTML = "00"
  buttonstart.disabled = false

};



