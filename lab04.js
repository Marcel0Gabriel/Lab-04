// Exercise 1
function print(){
    return alert('¡Hello World!');
}



// Exercise 2
function sum(){
    var a = parseInt(document.getElementById('a').value)
    var b = parseInt(document.getElementById('b').value)

    return alert('Your addition is: ' + (a + b));
}


// Exercise 3

function showOption(){
    var options = document.getElementsByName('selection');
    console.log(options);
    for(let i = 0; i < options.length ; i++){
        if(options[i].checked){
            alert(options[i].value);
        }
    }
}

// Exercise 4

function mayorNum(){
    var num1 = parseInt(document.getElementById('num1').value);
    var num2 = parseInt(document.getElementById('num2').value);
    if(num1 && num2){
        if(num1 >= num2){
            if(num1 == num2){
                alert('numbers are equals')
            }else{
                alert('num1 is greater')
            }
        }else{
            alert('num2 is greater')
        }
    }else{
        alert('Missing one number')
    }
}

// Exercise 5


function val(){
    if(document.getElementById("Dollar").checked){
        value = calculate('Dollar');
    }
    if(document.getElementById("Euro").checked){
        value = calculate('Euro');
    }
}

function calculate(action){
    var num1 = document.getElementById('money').value;
    var result;
    console.log(action)
            
    switch(action){
        case 'Dollar':
                console.log(num1*3.72)
            break;
        case 'Euro':
                console.log(num1 *4.04)
            break;
    }
}