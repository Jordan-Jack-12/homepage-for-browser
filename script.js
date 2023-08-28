// Global Variable
const dateArea = document.getElementsByClassName("header-right");
let time = document.getElementById("time");
let date = document.getElementById("date");

//function for toggle time and date
const changeitem = () => {
  if (date.style.display === 'block') {
    date.style.display = 'none';
    time.style.display = 'block';
  }
  else {
    date.style.display = 'block';
    time.style.display = 'none';
  }
}

// Display time with 1s interval
setInterval(() => {
  let a = new Date();
  let h = a.getHours();
  let m = a.getMinutes();
  let s = a.getSeconds();

  if (h > 12) {
    h = h - 12;
    am = "PM";
  } else {
    h = h;
    am = "AM";
  }
  if (s < 10) {
    s = "0" + s;
  } else {
    s = s;
  }
  if (m < 10) {
    m = "0" + m;
  } else {
    m = m;
  }

  time.innerHTML = h + ":" + m + ":" + s + " " + am;
}, 1000)

// Display date
let datenew = new Date();
let dd = datenew.getDate();
let mm = datenew.getMonth() + 1;
let yyyy = datenew.getFullYear();
date.innerHTML = dd + "/" + mm + "/" + yyyy

// Search bar 
const f = document.getElementById('form');
const q = document.getElementById('query');
const google = 'https://www.google.com/search?q=';
const dudck = 'https://duckduckgo.com/?q=';

function submitted(event) {
    event.preventDefault();
    const url = dudck + q.value;
    const win = window.open(url, '_self');
    win.focus();
}

f.addEventListener('submit', submitted);