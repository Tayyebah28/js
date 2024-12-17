let loginbtn = document.getElementById('loginbtn');
loginbtn.addEventListener("click", function(){
    let email= document.getElementById("email").value;
    let password = document.getElementById("password").value;
    if(email==""){
        document.getElementById("email").style. borderColor =  "red"
        document.getElementById("error").style. display =  "block"
    } 
    else{
        document.getElementById("error").style. display =  "none"
    }

    if(password ==""){
        document.getElementById("password").style. borderColor =  "red"
    
    } 
    else{
         document.getElementById("password").style. borderColor = "none"
    }


})


























let btn = document.getElementById('addbtn');
btn.addEventListener('click', function(){
    let num1 = document.getElementById('num1').value;
    let num2 = document.getElementById('num2').value;
   num1 =  parseInt(num1);
    num2 = parseInt(num2);
    r = num1 + num2
    document.getElementById('result').value = r
    
})

let sub = document.getElementById('subbtn');
sub.addEventListener('click', function(){
    let num1 = document.getElementById('num1').value;
    let num2 = document.getElementById('num2').value;
   num1 =  parseInt(num1);
    num2 = parseInt(num2);
    r = num1 - num2
    document.getElementById('result').value = r
    
})



let multiply = document.getElementById('multiplybtn');
multiply.addEventListener('click', function(){
    let num1 = document.getElementById('num1').value;
    let num2 = document.getElementById('num2').value;
   num1 =  parseInt(num1);
    num2 = parseInt(num2);
     let r = num1 * num2
    document.getElementById('result').value = r
    
})

let divide = document.getElementById('divbtn');
divide.addEventListener('click', function(){
    let num1 = document.getElementById('num1').value;
    let num2 = document.getElementById('num2').value;
   num1 =  parseInt(num1);
    num2 = parseInt(num2);
    r = num1 / num2
    document.getElementById('result').value = r
    
})

















let t=10
window.setInterval(function(){
    document.getElementById('time').innerText = t
    t--
},2000)



let date = new Date();
document.getElementById('time').innerText =  date.getHours()+' : '+ date.getMinutes()+" : "+date.getSeconds();



let button = document.getElementById('cross');
button.addEventListener('click', function(){
 document.getElementById('layer').style.display= 'none'
})

let icon= document.getElementById('bell');
icon.addEventListener('click', function(){
    document.getElementById('layer').style.display= 'block'
})


let text= document.getElementById('testing');
text.addEventListener('click', function(){
    let date = new Date();
    text.innerText = date.getHours()+' ; '+ date.getMinutes();
})
let heading= document.getElementById('test2');
heading.addEventListener('click', function(){
    heading.innerHTML=  "<h4> testing java script</h4>";
})
console.log(Date())