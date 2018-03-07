 //HOMEWORK TASK 1 Just wanted to use a lot of functions
function mOver1() {

    var barcolor = document.getElementById("selection1").style.backgroundColor = "white"
    var y = document.getElementById("selection1");
    y.style.color = 'black';
}
function mouseout1(){

    var barcolor = document.getElementById("selection1").style.backgroundColor = "#383E4C"
    var y = document.getElementById("selection1");
    y.style.color = 'white';
}
function mOver2() {

    var barcolor = document.getElementById("selection2").style.backgroundColor = "white"
    var y = document.getElementById("selection2");
    y.style.color = 'black';
}
function mouseout2(){

    var barcolor = document.getElementById("selection2").style.backgroundColor = "#383E4C"
    var y = document.getElementById("selection2");
    y.style.color = 'white';
}
function mOver3() {

    var barcolor = document.getElementById("selection3").style.backgroundColor = "white"
    var y = document.getElementById("selection3");
    y.style.color = 'black';
}
function mouseout3(){

    var barcolor = document.getElementById("selection3").style.backgroundColor = "#383E4C"
    var y = document.getElementById("selection3");
    y.style.color = 'white';
}
function mOver4() {

    var barcolor = document.getElementById("selection4").style.backgroundColor = "white"
    var y = document.getElementById("selection4");
    y.style.color = 'black';
}
function mouseout4(){

    var barcolor = document.getElementById("selection4").style.backgroundColor = "#383E4C"
    var y = document.getElementById("selection4");
    y.style.color = 'white';
}
function mOver5() {

    var barcolor = document.getElementById("selection5").style.backgroundColor = "white"
    var y = document.getElementById("selection5");
    y.style.color = 'black';
}
function mouseout5(){

    var barcolor = document.getElementById("selection5").style.backgroundColor = "#383E4C"
    var y = document.getElementById("selection5");
    y.style.color = 'white';
}
 //HOMEWORK TASKS 2 
 document.getElementById('submit').onclick = function(event) {
    event.preventDefault();

    var formValues = {
        name: document.getElementById('name').value,
        email: document.getElementById('mail').value,
        subject: document.getElementById('subject').value,
        messsage: document.getElementById('comment').value
    }

    var requiredList = [];
    for (var key in formValues) {
        if (formValues[key].trim() == '') {
            requiredList.push(key);
        }
    }

    if (requiredList.length > 0) {
        alert('The following fields are required: ' + requiredList.join(', ') + '.');
    } else {
        alert('Name: ' + name + '\nE-Mail: ' + email + '\nSubject: ' + subject + '\nMessage: ' + message);
    }
};

//EXTRA TASK git profile in index
