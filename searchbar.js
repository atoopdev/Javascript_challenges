


// event listener on input field
document.getElementById("searchInput").addEventListener("keyup", function(){

    // grabs the event off the eventlistner - function() returns event - function(event)
    let searchQuery = event.target.value.toLowerCase();
    console.log("searchQuery", searchQuery);

    let allNamesDOMCollection = document.getElementsByClassName("name");
// returns htmlcollection
console.log(allNamesDOMCollection);
// shows text content in the html at index 0
console.log(allNamesDOMCollection[0].textContent);
})