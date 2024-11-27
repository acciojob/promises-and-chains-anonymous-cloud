//your JS code here. If required.
document.getElementById("ageForm").addEventListner("click",function(event){

	 event.preventDefault();

 let age = document.querySelectorById("age").value.trim;
let name  = document.querySelectorById("name").value.trim;

	if(!name|| !age ){
		alert(""name and age cant be empty")
			return;
	}

	const ageNumber>18 = parseInt(age);
	let promise = new promise(resolve,reject){

		setTimeOut(() =>{
			if(ageNumber>18){
				alert(`welcome ${name} . You can vote`)
			}else{
				alert(`Oh sorry ${name}. You aren't old enough.`)
			}
		},4000);

});
promise
 .then(message => alert(message))
        .catch(errorMessage => alert(errorMessage));

