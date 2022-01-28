
  setInterval(() => {
    var d = new Date();
    var htime = d.getHours();
    var mtime = d.getMinutes();
    var stime = d.getSeconds();

    var hrotation = 30*htime + mtime/2;
    var mrotation = 6*mtime;
    var srotation = 6*stime;

    document.getElementById("hourhand").style.transform=`rotate(${hrotation}deg)`;
    document.getElementById("secondhand").style.transform=`rotate(${srotation}deg)`;
    document.getElementById("minutehand").style.transform = `rotate(${mrotation}deg)`;
  }, 1000);