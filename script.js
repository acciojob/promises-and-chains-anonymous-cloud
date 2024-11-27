//your JS code here. If required.
document.getElementById("ageForm").addEventListener("submit",function(event){

	 event.preventDefault();

 let age = document.getElementById("age").value.trim();
let name  = document.getElementById("name").value.trim();

	if(!name|| !age ){
		alert("name and age cant be empty")
			return;
	}

	const ageNumber = parseInt(age);
	let promise = new Promise((resolve,reject) =>{

		setTimeout(() =>{
			if(ageNumber>18){
				resolve(`welcome ${name} . You can vote`);
			}else{
				reject(`Oh sorry ${name}. You aren't old enough.`);
			}
		},4000);

});
promise
 .then(message => alert(message))
        .catch(errorMessage => alert(errorMessage));

