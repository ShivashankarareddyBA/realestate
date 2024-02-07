// Function to handle button clicks
function handleButtonClick(buttonType) {
    // Remove the 'selected' class from all buttons
    const buttons = document.querySelectorAll('.headerbtn button');
    buttons.forEach(btn => btn.classList.remove('selected'));

    // Add the 'selected' class to the clicked button
    document.getElementById('btn-' + buttonType).classList.add('selected');

    // Perform navigation based on button type
    if (buttonType === 'client-list') {
        window.location.href = 'dashboard.html'; // Navigate to dashboard.html
    } else if (buttonType === 'add-client') {
        window.location.href = 'form.html'; // Navigate to form.html
    }
}

// Function to load client list for a specific page
function loadClientList(pageNumber) {
    // Here you would make an API call to fetch client data for the given page number
    // Update the table content with the fetched data
    
    // For demonstration purposes, let's assume client data is fetched from an array
    const clientsPerPage = 10; // Number of clients to display per page
    const startIndex = (pageNumber - 1) * clientsPerPage;
    const endIndex = startIndex + clientsPerPage;
    const clientData = []; // Replace this with your actual client data
    
    // Display client data for the current page
    const tableBody = document.getElementById('userList');
    tableBody.innerHTML = ''; // Clear previous content
    
    for (let i = startIndex; i < endIndex && i < clientData.length; i++) {
        const client = clientData[i];
        // Create table row and populate with client data
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>
                <button type="button" class="edit-btn"><i class="fas fa-edit"></i></button>
                <button type="button" class="delete-btn"><i class="fas fa-trash-alt"></i></button>
            </td>
            <td>${client.id}</td>
            <td>${client.name}</td>
            <td>${client.email}</td>
            <td>${client.phone}</td>
            <td>${client.whatsapp}</td>
            <td>${client.intent}</td>
            <td>${client.status}</td>
            <td>${client.recall}</td>
            <td>${client.location}</td>
            <td>${client.siteRatio}</td>
            <td>${client.vehicleNumber}</td>
            <td>${client.profession}</td>
            <td>${client.rating}</td>
        `;
        tableBody.appendChild(row);
    }
    
    // Update the page number display
    document.getElementById('page-number').innerText = `Page ${pageNumber}`;
}

// Initial load of client list on page load
loadClientList(1);

// Add event listeners to the buttons
document.getElementById('btn-client-list').addEventListener('click', function() {
    handleButtonClick('client-list');
});

document.getElementById('btn-add-client').addEventListener('click', function() {
    handleButtonClick('add-client');
});

document.getElementById('btn-add').addEventListener('click', function() {
    // Navigate to form.html
    window.location.href = 'form.html';
});

// Pagination event listeners
document.getElementById('prev-page').addEventListener('click', () => {
    // Handle previous page button click
    // Decrement page number if it's greater than 1
    const currentPage = parseInt(document.getElementById('page-number').innerText.split(' ')[1]);
    if (currentPage > 1) {
        loadClientList(currentPage - 1);
    }
});

document.getElementById('next-page').addEventListener('click', () => {
    // Handle next page button click
    // Increment page number
    const currentPage = parseInt(document.getElementById('page-number').innerText.split(' ')[1]);
    loadClientList(currentPage + 1);
});
