
var modal = document.getElementById("myModal");
var addInfoBtn = document.getElementById("addInfoBtn");
var span = document.getElementsByClassName("close")[0];

// When you clicks the button it opens the form
addInfoBtn.onclick = function() {
    modal.style.display = "block";
}

// When you clicks on x it closes the form
span.onclick = function() {
    modal.style.display = "none";
}

// When you click outside the form it closes
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

document.getElementById("infoForm").onsubmit = function(event) {
    event.preventDefault(); // Prevent the form from submitting normally

    var title = document.getElementById("bookTitle").value;
    var author = document.getElementById("bookAuthor").value;
    var description = document.getElementById("bookDescription").value;
	var comments = document.getElementById("comments").value;

    var bookDiv = document.createElement("div");
    bookDiv.className = "container";
    bookDiv.innerHTML = `
		<center>
            <h5>${title} by ${author}</h5>
            <p>Description: ${description}</p>
            <p>Comments: ${comments}</p>
        </center>
    `;

    // PUT THAT SH*T ON THE BOOKSHELF
       document.getElementById("aditionalInfo").appendChild(bookDiv);

    // Close IT
    modal.style.display = "none";

    // Reset the form MUAHAHA
    document.getElementById("infoForm").reset();
}
