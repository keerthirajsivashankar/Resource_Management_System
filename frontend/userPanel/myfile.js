let isSidebarOpen = false; // Initialize the variable

function toggleNav() {
    if (isSidebarOpen) {
        closeNav();
    } else {
        openNav();
    }
}

function openNav() {
    document.getElementById("mySidenav").style.width = "230px";
    document.getElementById("main").style.marginLeft = "230px";
    isSidebarOpen = true;
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
    isSidebarOpen = false;
}

// Open sidebar by default in phone mode
if (window.matchMedia("(max-width: 600px)").matches) {
    closeNav();
}

// Close sidebar by default in tablet mode
if (window.matchMedia("(min-width: 601px) and (max-width: 1024px)").matches) {
    closeNav();
}

// Toggle sidebar when the button is clicked
document.getElementById("ham").addEventListener("click", function() {
    toggleNav();
});
var modal = document.getElementById('id01');
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
// JavaScript to capture form data and submit it
document.getElementById("submitProjectorBookingForm").addEventListener("click", function() {
    // Capture selected options and input values
    var projectorId = document.getElementById("inputGroupSelect01").value;
    var hour = document.getElementById("inputGroupSelect02").value;
    var timeSpan = document.getElementById("inputGroupSelect03").value;
    // Set the captured values to the hidden input fields
    document.getElementById("projectorId").value = projectorId;
    document.getElementById("hour").value = hour;
    document.getElementById("timeSpan").value = timeSpan;
    // Submit the form
    document.getElementById("projectorBookingForm").submit();
});