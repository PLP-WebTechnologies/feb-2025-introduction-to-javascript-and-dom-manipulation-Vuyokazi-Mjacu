// Function to change the text content of the intro paragraph
document.getElementById('changeTextButton').addEventListener('click', function() {
    document.getElementById('intro-text').textContent = "I am passionate about data analytics and web development. I'm currently learning new skills to improve my expertise!";
});

// Function to change the background color of the page
document.getElementById('changeColorButton').addEventListener('click', function() {
    document.body.style.backgroundColor = '#e1bee7'; // Change background color to light purple
});

// Function to add a new section about hobbies
document.getElementById('addElementButton').addEventListener('click', function() {
    const hobbySection = document.createElement('div');
    hobbySection.id = 'hobbySection';
    hobbySection.innerHTML = '<p>In my free time, I enjoy crocheting, creating handmade clothing, and exploring new crafts!</p>';
    document.body.appendChild(hobbySection);
});

// Function to remove the added hobby section
document.getElementById('removeElementButton').addEventListener('click', function() {
    const hobbySection = document.getElementById('hobbySection');
    if (hobbySection) {
        hobbySection.remove(); // Removes the hobby section if it exists
    }
});


