document.addEventListener("DOMContentLoaded", function() {

    // Get references to elements
    var plus = document.querySelector(".addbtn");
    var box = document.querySelector(".popinfo");
    var dim = document.querySelector(".pop");
    var btn1 = document.querySelector(".btn1"); // fixed variable name
    var btn2 = document.querySelector(".btn2"); // fixed variable name
    var a=document.querySelector(".A1");
    var b=document.querySelector(".A2");
    var c=document.querySelector(".A3");
    var d=document.querySelector(".top");
 var xb=document.querySelector(".xb");
    // Show popup when "+" button is clicked
    plus.addEventListener("click", function() {
        box.style.display = "block";
        dim.style.display = "block";
    });

    // Example: btn1 click (you can add functionality)
    btn1.addEventListener("click", function(event) {
    event.preventDefault();

    // Get input values
    var bookName = a.value;
    var author = b.value;
    var desc = c.value;

    // Create new book container
    var v1 = document.createElement("div");
    v1.className = "container";
    v1.innerHTML = `
        <h2>${bookName}</h2>
        <h5>${author}</h5>
        <p>${desc}</p>
        <button class="xb" type="button">REMOVE</button>
    `;

    // Append new book to .top
    d.append(v1);

    // Add remove functionality
    v1.querySelector(".xb").addEventListener("click", function() {
        v1.remove();
    });

    // Close popup and clear inputs
    box.style.display = "none";
    dim.style.display = "none";
    a.value = "";
    b.value = "";
    c.value = "";
});

    // Close popup when btn2 (Cancel) is clicked
    btn2.addEventListener("click", function(event) {
        event.preventDefault(); 
        box.style.display = "none";
        dim.style.display = "none";
    });

    // Optional: click outside the box to close popup
    dim.addEventListener("click", function(event) {
     
        box.style.display = "none";
        dim.style.display = "none";
    });
     xb.addEventListener("click", function(event) {
     
        event.target.parentElement.remove();
    });

});
