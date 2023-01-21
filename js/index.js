$(document).ready(function() {
    $('.sidenav').sidenav();
});
$(document).ready(function() {
    $('.collapsible').collapsible();
});
AOS.init();

function animation(obj, target) {
    clearInterval(obj.timer);
    obj.timer = setInterval(function() {
        var step = (target - obj.scrollTop) / 10;
        if (obj.scrollTop >= target) {
            clearInterval(obj.timer);
        }
        obj.scrollTop = obj.scrollTop + step;
    }, 30)
}

$(".scroll-to-bottom").click(function() {
    var contact = document.getElementById('about-this-site');
    var num = contact.offsetTop;
    $('body,html').animate({
        scrollTop: num
    }, 1000);
    return false;
});

$("#this_site").click(function() {
    var contact = document.getElementById('about-this-site');
    var num = contact.offsetTop;
    $('body,html').animate({
        scrollTop: num
    }, 1000);
    return false;
});

$(".scroll-to-top-li").click(function() {
    $('body,html').animate({
        scrollTop: 0
    }, 1000);
    return false;
});

$("#last").click(function() {
    $('body,html').animate({
        scrollTop: 0
    }, 1000);
    return false;
});

$("#Contact").click(function() {
    var contact = document.getElementById('contact');
    var num = contact.offsetTop;
    $('body,html').animate({
        scrollTop: num
    }, 1000);
    return false;
});

$(".Contact").click(function() {
    var contact = document.getElementById('contact');
    var num = contact.offsetTop;
    $('body,html').animate({
        scrollTop: num
    }, 1000);
    return false;
});

$("#propro").click(function() {
    var contact = document.getElementById('about-me');
    var num = contact.offsetTop;
    $('body,html').animate({
        scrollTop: num
    }, 1000);
    return false;
});

$("#Projects").click(function() {
    var contact = document.getElementById('projects');
    var num = contact.offsetTop;
    $('body,html').animate({
        scrollTop: num
    }, 1000);
    return false;
});

$("#Skills").click(function() {
    var skills = document.getElementById('skills');
    var num = skills.offsetTop;
    $('body,html').animate({
        scrollTop: num
    }, 1000);
    return false;
});

$("#Profile").click(function() {
    var profile = document.getElementById('profile');
    var num = profile.offsetTop;
    $('body,html').animate({
        scrollTop: num
    }, 1000);
    return false;
});

$("#sp_works").click(function() {
    var contact = document.getElementById('projects');
    var num = contact.offsetTop;
    $('body,html').animate({
        scrollTop: num
    }, 1000);
    return false;
});

$("#sp_skills").click(function() {
    var skills = document.getElementById('skills');
    var num = skills.offsetTop;
    $('body,html').animate({
        scrollTop: num
    }, 1000);
    return false;
});

$("#sp_profile").click(function() {
    var profile = document.getElementById('profile');
    var num = profile.offsetTop;
    $('body,html').animate({
        scrollTop: num
    }, 1000);
    return false;
});

// project-----------------------------------------------------

var modal_trigger = document.getElementsByClassName("modal-trigger");
var modal = document.getElementsByClassName("modal");
var modal_content = document.getElementsByClassName("modal-content");
for(let i = 0;i < modal_trigger.length;i++){
    modal_trigger[i].onclick = ()=>{
        modal[i].style.display = 'block';
        modal_content[i].style.display = 'block';
        let close = document.getElementsByClassName("close");
        close[i].onclick = ()=>{
            modal[i].style.display = 'none';
            modal_content[i].style.display = 'none';
        }
    }
}


const programmingSkillSet = document.getElementById('programmingSkillSet');
  var myChart = new Chart(programmingSkillSet, {
    type: 'radar',
    data: {
      labels: ["HTML/CSS", "JavaScript", "jQuery", "Vue.js/Vue CLI", "SASS/LESS","WordPress"],
      datasets: [{
        label: "Front-end",
        data: [3, 3, 2, 2, 3, 2],
        backgroundColor: "rgba(235,101,101,0.5)",
      }]
    },
    options: {
        scales: {
          r: {
            max: 5,        //グラフの最大値
            min: 0,        //グラフの最小値
            ticks: {
              stepSize: 1  //目盛間隔
            }
          }
        },
      }
  });

  const infraSkillSet = document.getElementById('infraSkillSet');
  var myChart = new Chart(infraSkillSet, {
    type: 'radar',
    data: {
      labels: ["Numpy", "Pytorch", "Tensorflow", "Django", "Pandas","Matplotlib"],
      datasets: [{
        label: "AI Devlop",
        data: [3, 2, 2, 1, 3, 3],
        backgroundColor: "rgba(160,208,108,0.5)",
      }]
    },
    options: {
        scales: {
          r: {
            max: 5,        //グラフの最大値
            min: 0,        //グラフの最小値
            ticks: {
              stepSize: 1  //目盛間隔
            }
          }
        },
      }
  });

  const interests = document.getElementById('interests');
  var myChart = new Chart(interests, {
    type: 'radar',
    data: {
      labels: ["Linux", "Git/Github", "Npm"],
      datasets: [{
        label: "DevOps",
        data: [1, 3, 2],
        backgroundColor: "rgba(142,164,207,0.5)",
      }]
    },
    options: {
        scales: {
          r: {
            max: 5,        //グラフの最大値
            min: 0,        //グラフの最小値
            ticks: {
              stepSize: 1  //目盛間隔
            }
          }
        },
      }
  });