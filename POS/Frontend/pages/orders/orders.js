
function navigateToTables() {
    window.location.href = "../Frontend/pages/tabels/tabels.html";
}

function openModal() {
    var modal = document.getElementById('takeawayModal');
    modal.style.display = 'block';
}

function closeModal() {
    var modal = document.getElementById('takeawayModal');
    modal.style.display = 'none';
}

function submitCustomerName() {
    var customerNameInput = document.getElementById('customerName');
    currentCustomerName = customerNameInput.value;
    var errorMessageLabel = document.getElementById('errorMessage');

    if (currentCustomerName !== null && currentCustomerName !== "") {
        localStorage.setItem("takeawaycustomerName", currentCustomerName);
        closeModal();
        window.location.href = "../frontend/pages/takeaway/take.html";
    } else {
        // Show error message and make the label red
        errorMessageLabel.textContent = 'Please provide customer name.';
        errorMessageLabel.style.color = 'red';
    }
}