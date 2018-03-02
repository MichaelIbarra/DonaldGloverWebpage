function submitForm() {
	var staywoke = document.forms['myForm']['firstname'].value;
	alert(staywoke);
}
function myFunction(){
	var txt;
	var person = prompt("Please enter your name:", "Donald Glover");
	if (person == null || person == "") {
		alert("What the heck dude? Why did you cancel it?");
	}
	else{ 
		alert("Hello " + person + "! Welcome to the Donald Glover Fan Club! You are now easily the coolest person in your friend group! Congrats!");
	}
}
