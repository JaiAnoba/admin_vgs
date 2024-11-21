// SIDEBAR NAVIGATION
document.addEventListener('DOMContentLoaded', function() {
    // Sidebar links
    const exhibitLink = document.querySelector('a[href="exhibits"]');
    const settingsLink = document.querySelector('a[href="settings"]');
  
    // Section containers
    const exhibitsSection = document.querySelector('.content-wrapper1');
    const settingsSection = document.querySelector('.content-wrapper2');
    const topSection = document.querySelector('.header-wrapper');

  
    // Display exhibits section
    settingsSection.style.display = 'none';
    exhibitsSection.style.display = 'flex';
  
     // Exhibits section
     exhibitLink.addEventListener('click', function(e) {
        e.preventDefault();
        exhibitsSection.style.display = 'block';
        settingsSection.style.display = 'none';
        topSection.style.display = 'flex';
    });

    // Settings section
    settingsLink.addEventListener('click', function(e) {
        e.preventDefault();
        exhibitsSection.style.display = 'none';
        settingsSection.style.display = 'block';
        topSection.style.display = 'none';
    });
});


// Function to format and display the current date in dashboard
function formatDate() {
    let today = new Date();

    let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    let months = ['Jan.', 'Feb.', 'Mar.', 'Apr.', 'May.', 'Jun.', 'Jul.', 'Aug.', 'Sept.', 'Oct.', 'Nov.', 'Dec.'];

    let dayName = days[today.getDay()]; 
    let day = today.getDate(); 
    let month = months[today.getMonth()]; 
    let year = today.getFullYear();

    return dayName + ", " + day + " " + month + " " + year;
}

document.getElementById("current-date").innerText = formatDate();

 
//DESCRIPTION (...) 




//POPUP MSG FOR APPOVE & DECLINE
const popupContainer = document.getElementById('p-popup-container');
const popupMessage = document.getElementById('p-popup-message');
const confirmButton = document.getElementById('p-confirm-btn');
const cancelButton = document.getElementById('p-cancel-btn');

const approveButtons = document.querySelectorAll('.approve-btn');
const declineButtons = document.querySelectorAll('.decline-btn');

// Variables to track the selected card and action
let selectedCard = null;
let selectedAction = null;

for (let i = 0; i < approveButtons.length; i++) {
    approveButtons[i].addEventListener('click', function () {
      selectedCard = this.closest('.card');
      selectedAction = 'approve';
      popupMessage.textContent = 'Are you sure you want to approve this post?';
      popupContainer.style.display = 'flex';
    });
}

for (let i = 0; i < declineButtons.length; i++) {
    declineButtons[i].addEventListener('click', function () {
      selectedCard = this.closest('.card');
      selectedAction = 'decline';
      popupMessage.textContent =
        'Declining this post will ban the user for 14 days. Are you sure?';
      popupContainer.style.display = 'flex'; 
    });
}

// Confirm button click
confirmButton.addEventListener('click', function () {
    if (selectedAction === 'approve' || selectedAction === 'decline') {
        // Remove the selected card
        selectedCard.remove();

        // Alert message
        if (selectedAction === 'approve') {
          alert('Post has been approved.');
        } else if (selectedAction === 'decline') {
          alert('Post has been declined. User banned for 14 days.');
        }
    }

    // Hide the popup
    popupContainer.style.display = 'none';
});

// Cancel button click
cancelButton.addEventListener('click', function () {
    // Hide the popup
    popupContainer.style.display = 'none';
});





// SETTINGS
document.getElementById("profile-link").addEventListener("click", function() {
showSection('s-profile-section');
});

document.getElementById("account-link").addEventListener("click", function() {
showSection('account-section');
});

function showSection(sectionId) {
let sections = document.querySelectorAll('.ss_section');
sections.forEach(section => {
    section.classList.add('hidden');
});

document.getElementById(sectionId).classList.remove('hidden');
document.getElementById(sectionId).classList.add('active');
}



// CHANGE & HIDE PASSWORD
document.getElementById('change-link').addEventListener('click', function(e) {
e.preventDefault();
document.getElementById('password-view').style.display = 'none';  // Hides the "Change" view
document.getElementById('password-edit').style.display = 'block'; // Shows the "Edit" view
});

document.getElementById('hide-link').addEventListener('click', function(e) {
e.preventDefault();
document.getElementById('password-view').style.display = 'flex'; // Shows the "Change" view
document.getElementById('password-edit').style.display = 'none'; // Hides the "Edit" view
});

document.getElementById('save-password-btn').addEventListener('click', function() {
var newPassword = document.getElementById('new-password').value;
var currentPassword = document.getElementById('current-password').value;

if (!newPassword || !currentPassword) {
    alert('Please fill in both fields.');
    return;
}

if (newPassword.length < 8) {
    alert('New password must be at least 8 characters long.');
    return;
}

if (!/[A-Z]/.test(newPassword)) {
    alert('New password must contain at least one uppercase letter.');
    return;
}

if (!/[a-z]/.test(newPassword)) {
    alert('New password must contain at least one lowercase letter.');
    return;
}

if (!/[0-9]/.test(newPassword)) {
    alert('New password must contain at least one number.');
    return;
}

if (!/[!@#$%^&*(),.?":{}|<>]/.test(newPassword)) {
    alert('New password must contain at least one special character.');
    return;
}

alert('Password successfully changed!');

document.getElementById('password-view').style.display = 'flex';  // Shows the "Change" view
document.getElementById('password-edit').style.display = 'none';  // Hides the "Edit" view
});


//DELETE ACC POP-UP
document.addEventListener("DOMContentLoaded", function () {
const deleteLink = document.querySelector(".delete-link");
const popup = document.getElementById("s-popup");
const continueButton = document.getElementById("s-continueButton");
const cancelButton = document.getElementById("s-cancelButton");

// Show the popup when the delete link is clicked
deleteLink.addEventListener("click", function (event) {
    event.preventDefault();
    popup.style.display = "flex";
});

// Handle the Continue button click (delete action)
continueButton.addEventListener("click", function () {
    popup.style.display = "none";
    alert("Account deleted successfully."); // Replace with actual delete function if needed
});

// Handle the Cancel button click (close popup)
cancelButton.addEventListener("click", function () {
    popup.style.display = "none";
});
});


//USER DROPDOWN
document.addEventListener("DOMContentLoaded", function () {
  const userImg = document.querySelector(".profile-pic1");
  const dropdown = document.querySelector(".dropdown");

  userImg.addEventListener("click", function () {
      dropdown.classList.toggle("active");
  });

  // Close dropdown if clicking outside of it
  document.addEventListener("click", function (event) {
      if (!userImg.contains(event.target) && !dropdown.contains(event.target)) {
          dropdown.classList.remove("active");
      }
  });
});


//UPLOAD PROFILE PIC
const uploadButton = document.querySelector('.upload-btn');
const removeButton = document.querySelector('.remove-btn');
const profilePics = document.querySelectorAll('.profile-pic1, .profile-pic2');

const fileInput = document.createElement('input');
fileInput.type = 'file';
fileInput.accept = 'image/*';

uploadButton.addEventListener('click', function () {
  fileInput.click();
});

fileInput.addEventListener('change', function () {
  if (fileInput.files && fileInput.files[0]) {
    const file = fileInput.files[0];
    const reader = new FileReader();

    reader.onload = function (e) {
      for (let i = 0; i < profilePics.length; i++) {
        profilePics[i].style.backgroundImage = `url('${e.target.result}')`;
        profilePics[i].style.backgroundSize = 'cover';
        profilePics[i].style.backgroundPosition = 'center';
      }
      checkImageDisplay(); 
    };

    reader.readAsDataURL(file);
  }
});

// Function to check if any profile picture has an image
function checkImageDisplay() {
  let hasImage = false;
  for (let i = 0; i < profilePics.length; i++) {
    if (profilePics[i].style.backgroundImage) {
      hasImage = true;
      break;
    }
  }
  if (hasImage) {
    removeButton.style.display = 'block'; 
  } else {
    removeButton.style.display = 'none'; 
  }
}

removeButton.addEventListener('click', function () {
  for (let i = 0; i < profilePics.length; i++) {
    profilePics[i].style.backgroundImage = '';
  }
  checkImageDisplay(); 
});


//SETTINGS-PROFILE FORM
const pencilIcon = document.querySelector('.bxs-pencil');
const formButtons = document.querySelector('.form-buttons');
const inputField = document.querySelector('.input-field');
const textareaField = document.querySelector('.textarea-field');
const saveButton = document.querySelector('.save-btn');
const clearButton = document.querySelector('.clear-btn');

formButtons.style.display = 'none';
inputField.disabled = true;
textareaField.disabled = true;

const formElements = [inputField, textareaField, formButtons];

pencilIcon.addEventListener('click', function() {
    for (let i = 0; i < formElements.length; i++) {
        if (formElements[i] === formButtons) {
            if (formButtons.style.display === 'none') {
                formButtons.style.display = 'block'; 
                inputField.disabled = false;
                textareaField.disabled = false; 
            } else {
                formButtons.style.display = 'none'; 
                inputField.disabled = true; 
                textareaField.disabled = true; 
            }
        }
    }
});


saveButton.addEventListener('click', function(event) {
    event.preventDefault(); 

    console.log('Saved Username:', inputField.value);
    console.log('Saved Bio:', textareaField.value);
});

clearButton.addEventListener('click', function(event) {
    event.preventDefault(); 

    inputField.value = '';
    textareaField.value = '';
});