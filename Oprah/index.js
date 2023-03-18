


function myFunction(){
let person = prompt("Please enter your name", "");
let text = " ";

if(person == "Juan"){
    text= person + " have won a BMW";
}
else if(person != "" ||  person != null){
    text = "Hello " + person ;
}
else{
    text="Vaya Ricky";
}



document.getElementById("demo").innerHTML = text;

}

