// Function to handle search form submission
function handleSearch(event) {
    event.preventDefault(); // Prevent form submission
    let query = document.getElementById('search-bar').value.trim(); // Get search query
    if (query !== '') {
        // Construct Google search URL
        let searchUrl = 'https://www.google.com/search?q=' + encodeURIComponent(query);
        // Open search results in a new tab
        window.open(searchUrl, '_blank');
    }
    return false; // Prevent default behavior
}

// Function to handle "I'm Feeling Lucky" button click
function handleLucky() {
    window.location.href = 'https://www.google.com/doodles/'; // Redirect to Google Doodles
}