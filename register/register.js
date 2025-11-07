// register.js - Main JavaScript for registration form functionality

// Initialize participant count
let participantCount = 1;

// Add event listener for "Add Participant" button
document.getElementById('add').addEventListener('click', function() {
    // Increment participant count
    participantCount++;
    
    // Generate new participant HTML using template
    const newParticipantHTML = participantTemplate(participantCount);
    
    // Insert new participant before the "Add Participant" button
    this.insertAdjacentHTML('beforebegin', newParticipantHTML);
});

// Add event listener for form submission
document.getElementById('registrationForm').addEventListener('submit', function(event) {
    // Prevent default form submission (page reload)
    event.preventDefault();
    
    // Calculate total fees
    const fees = totalFees();
    
    // Get adult name from form
    const adultName = document.getElementById('adult_name').value;
    
    // Create info object for success message
    const info = {
        adultName: adultName,
        numParticipants: participantCount,
        totalFees: fees
    };
    
    // Hide the form
    this.style.display = 'none';
    
    // Show and populate the summary
    const summaryElement = document.getElementById('summary');
    summaryElement.innerHTML = successTemplate(info);
});

// Function to calculate total fees
function totalFees() {
    // Select all elements with id starting with "fee"
    let feeElements = document.querySelectorAll("[id^=fee]");
    
    // Convert NodeList to Array using spread operator
    feeElements = [...feeElements];
    
    // Sum up all the fees using reduce
    const total = feeElements.reduce((sum, element) => {
        return sum + Number(element.value);
    }, 0);
    
    return total;
}