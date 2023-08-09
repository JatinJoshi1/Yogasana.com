// Selecting the sidebar and buttons
const sidebar = document.querySelector(".sidebar");
const sidebarOpenBtn = document.querySelector("#sidebar-open");
const sidebarCloseBtn = document.querySelector("#sidebar-close");

// Function to hide the sidebar when the mouse leaves
const hideSidebar = () => {
    sidebar.classList.add("close");
};

// Function to show the sidebar when the mouse enters
const showSidebar = () => {
    sidebar.classList.remove("close");
};

// Function to show and hide the sidebar
const toggleSidebar = () => {
    sidebar.classList.toggle("close");
};

// If the window width is less than 800px, close the sidebar
if (window.innerWidth < 800) {
    sidebar.classList.add("close");
}

// Adding event listeners to buttons and sidebar for the corresponding actions
sidebar.addEventListener("mouseleave", hideSidebar);
sidebar.addEventListener("mouseenter", showSidebar);
sidebarOpenBtn.addEventListener("click", toggleSidebar);
sidebarCloseBtn.addEventListener("click", toggleSidebar);

// ... (existing JavaScript code) ...

// Your existing JavaScript code
// ...

// Add event listener to toggle night mode popup
function toggleNightModePopup() {
    const nightModePopup = document.getElementById('nightModePopup');
    nightModePopup.classList.toggle('active');
}

// Event listener for night mode switch
const switchBtn = document.querySelector('.radio-btn');
switchBtn.addEventListener('click', () => {
    const radioInner = document.querySelector('.radio-inner');
    document.body.classList.toggle('dark-mode');
    radioInner.classList.toggle('active');
});

// Update user information function
function updateUserInfo(user) {
    document.getElementById('username').textContent = user.username;
    document.getElementById('email').textContent = user.email;
}

// Retrieve the logged-in user information from local storage
const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));

if (loggedInUser) {
    updateUserInfo(loggedInUser);
} else {
    window.location.href = '/';
}

// Delete account function
function deleteAccount() {
    const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));

    if (loggedInUser) {
        localStorage.removeItem(loggedInUser.username);
        localStorage.removeItem('loggedInUser');
        alert('Account deleted successfully. You will be redirected to the registration page.');
        window.location.href = '/';
    }
}

// Sign out function
function signOut() {
    localStorage.removeItem('loggedInUser');
    window.location.href = 'signup.html';
}
