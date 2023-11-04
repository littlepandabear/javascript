if (typeof(Storage) !== "undefined") {
	
    // Set localStorage
	localStorage.setItem("data", "This is local storage data.");		
	
	// Get localStorage
	var storage = localStorage.getItem("data");
	
	document.body.innerHTML = storage;



	//store complex data with objects or arrays
	const user = {
		user: "username",
		score: 100
	}

	localStorage.setItem("user", JSON.stringify(user)); 
	const userObj = JSON.parse(localStorage.getItem("getItem"));
	console.log(userObj)


	localStorage.setItem("arr", JSON.stringify([1,2,3])); 
	const arr = JSON.parse(localStorage.getItem("arr"));
	console.log(arr)

	//delete storage by key or all keys 
	deleteStorage("arr")
	
	
} else {
    // No Web Storage support
	document.body.innerHTML = "local storage is not suported";
	
}

//delete localstorage
function deleteStorage(key = null){

	if (key!= null){
		//delete by key
		localStorage.removeItem(key);	
	} else {
		//delete all
		localStorage.clear();	
	}

}
