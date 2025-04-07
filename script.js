    /*function handleImagePreview(inputId, previewId) {
    document.getElementById(inputId).addEventListener('change', function(event) {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function(e) {
                const preview = document.getElementById(previewId);
                preview.src = e.target.result;
                preview.style.display = 'block';
            };
            reader.readAsDataURL(file);
        }
    });
}

// Call the image preview function for each input
handleImagePreview('imageInputFinished', 'previewFinished');


handleImagePreview('imageInputTBR', 'previewTBR');
handleImagePreview('imageInputDNF', 'previewDNF');
*/


var modal = document.getElementById("myModal");
var addBookBtn = document.getElementById("addBookBtnF");
var span = document.getElementsByClassName("close")[0];

// When you clicks the button it opens the form
addBookBtnF.onclick = function() {
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

document.getElementById("bookForm").onsubmit = function(event) {
    event.preventDefault(); // Prevent the form from submitting normally

    var title = document.getElementById("bookTitle").value;
    var author = document.getElementById("bookAuthor").value;
    var imageUrl = document.getElementById("bookImage").value;
    var rating = document.getElementById("bookRating").value;

    var bookDiv = document.createElement("div");
    bookDiv.className = "container";
    bookDiv.innerHTML = `
		<center>
            <img alt="Book" src="${imageUrl}" width="175" height="250"/>
            <h5>${title} by ${author}</h5>
            <p>${rating}★</p><br>
            <a class="moreBtn" href="more.html">Read More</a>
        </center>
    `;

    // PUT THAT SH*T ON THE BOOKSHELF
       document.getElementById("finishedBookshelf").appendChild(bookDiv);

    // Close IT
    modal.style.display = "none";

    // Reset the form MUAHAHA
    document.getElementById("bookForm").reset();
}
