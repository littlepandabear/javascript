if (typeof(Storage) !== "undefined") {
	
    // Set localStorage
	localStorage.setItem("data", "This is local storage data.");		
	
	// Get localStorage
	var storage = localStorage.getItem("data");
	
	document.body.innerHTML = storage;
	
	
} else {
    // No Web Storage support
	document.body.innerHTML = "local storage is not suported";
	
}