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



// --- Post Stats Chart ---

// Get the canvas for the Post Stats Chart
let postStatsCanvas = document.getElementById('postStatsChart').getContext('2d');

// Bar chart
let postStatsChart = new Chart(postStatsCanvas, {
    type: 'bar', // Chart type
    data: {
        labels: ['Item 1', 'Item 2', 'Item 3'], 
        datasets: [
            {
                label: 'Saved',
                data: [5, 10, 15],
                backgroundColor: '#d68b8b', 
                borderRadius: 20, 
                barThickness: 40 
            },
            {
                label: 'Likes', 
                data: [8, 12, 18],
                backgroundColor: '#8b0d0d',
                borderRadius: 20,
                barThickness: 40
            }
        ]
    },
    options: {
        responsive: true, // Make chart responsive
        maintainAspectRatio: false, // Disable fixed aspect ratio
        plugins: {
            legend: {
                position: 'top', // Legend position
                labels: {
                    boxWidth: 25,
                    font: {
                        size: 14,
                        family: 'Poppins', 
                    },
                    color: '#000' 
                }
            }
        },
        scales: {
            x: { // X-axis settings
                grid: {
                    display: false // Remove grid lines
                },
                ticks: {
                    font: {
                        size: 14,
                        family: 'Poppins'
                    },
                    color: '#000'
                }
            },
            y: { // Y-axis settings
                beginAtZero: true, // Start from 0
                ticks: {
                    stepSize: 5,
                    font: {
                        size: 14,
                        family: 'Poppins',
                        weight: 'bold'
                    },
                    color: '#000'
                }
            }
        }
    }
});



// --- Activity Chart ---

document.addEventListener('DOMContentLoaded', function () {
    // Get the canvas for the Activity Chart
    let activityCanvas = document.getElementById('activityChart').getContext('2d');

    // Adjust canvas resolution for high-DPI displays
    let dpr = window.devicePixelRatio || 1; // Device Pixel Ratio
    activityCanvas.canvas.width = activityCanvas.canvas.clientWidth * dpr;
    activityCanvas.canvas.height = activityCanvas.canvas.clientHeight * dpr;
    activityCanvas.scale(dpr, dpr);

    // Line chart
    let activityChart = new Chart(activityCanvas, {
        type: 'line', // Chart type
        data: {
            labels: ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5'], 
            datasets: [
                {
                    label: 'Posts', 
                    data: [24, 25, 40, 50, 45], 
                    borderColor: '#a20d0d', 
                    backgroundColor: '#a20d0d', 
                    fill: false, 
                    borderWidth: 2
                },
                {
                    label: 'Requests', 
                    data: [35, 17, 45, 40, 50], 
                    borderColor: '#ff7272', 
                    backgroundColor: '#ff7272', 
                    fill: false, 
                    borderWidth: 2
                },
                {
                    label: 'Exhibitions', 
                    data: [10, 5, 20, 15, 35], 
                    borderColor: '#ed1c24', 
                    backgroundColor: '#ed1c24', 
                    fill: false, 
                    borderWidth: 2
                }
            ]
        },
        options: {
            responsive: true, 
            maintainAspectRatio: false, 
            scales: {
                y: {
                    beginAtZero: true, 
                    ticks: {
                        font: {
                            size: 14, 
                            family: 'Poppins', 
                            weight: 'bold'
                        }
                    }
                },
                x: {
                    ticks: {
                        font: {
                            size: 14, 
                            family: 'Poppins', 
                        }
                    }
                }
            },
            plugins: {
                legend: {
                    labels: {
                        font: {
                            size: 14, 
                            family: 'Poppins', 
                        }
                    }
                }
            }
        }
    });
});


// POPUP DELETE MESSAGE IN MANAGE ACOUNTS
document.addEventListener('DOMContentLoaded', function () {
    const trashIcons = document.querySelectorAll('.bx-trash-alt');
    const popup = document.getElementById('popup');
    const cancelBtn = document.getElementById('cancelBtn');
    const continueBtn = document.getElementById('continueBtn');
  
    for (let i = 0; i < trashIcons.length; i++) {
      trashIcons[i].addEventListener('click', function () {
        // Show the popup 
        if (popup.style.display === 'none' || popup.style.display === '') {
          popup.style.display = 'flex';
        }
      });
    }
  
    // Cancel button click event
    cancelBtn.addEventListener('click', function () {
      // Hide the popup
      if (popup.style.display === 'flex') {
        popup.style.display = 'none';
      }
    });
  
    // Continue button click event
    continueBtn.addEventListener('click', function () {
      alert('User deleted successfully!');
  
      if (popup.style.display === 'flex') {
        popup.style.display = 'none';
      }
    });
});


//FILTER IN SORTING USER NAMES
document.addEventListener('DOMContentLoaded', function () {
    const filterButton = document.querySelector('.bx-filter');
    const tableBody = document.querySelector('.user-table tbody');
  
    filterButton.addEventListener('click', function () {
        const rows = tableBody.querySelectorAll('tr');
        
        // Array to store name and corresponding row
        const rowsArray = [];
        for (let i = 0; i < rows.length; i++) {

          const nameCell = rows[i].querySelector('.name');
          const nameText = nameCell.textContent.trim();
        
          // Push the name and the corresponding row to the array
          rowsArray.push({ name: nameText, row: rows[i] });
        }
      
        // Alphabetical order
        for (let i = 0; i < rowsArray.length; i++) {
          for (let j = 0; j < rowsArray.length - 1; j++) {
            if (rowsArray[j].name > rowsArray[j + 1].name) {
              // Swap the elements
              const temp = rowsArray[j];
              rowsArray[j] = rowsArray[j + 1];
              rowsArray[j + 1] = temp;
            }
          }
        }
      
        tableBody.innerHTML = '';
      
        for (let i = 0; i < rowsArray.length; i++) {
          tableBody.appendChild(rowsArray[i].row);
        }
    });
});
  

//SEARCH BAR FOR USERS
document.addEventListener('DOMContentLoaded', () => {
    const searchBar = document.querySelector('.search-bar');
    const tableRows = document.querySelectorAll('.user-table tbody tr');
  
    searchBar.addEventListener('input', () => {
        const query = searchBar.value.toLowerCase();
        
        // Loop sa tanan table rows
        for (let i = 0; i < tableRows.length; i++) {
            const nameCell = tableRows[i].querySelector('.name');
            const name = nameCell.textContent.toLowerCase();
            
            if (query === '' || name.includes(query)) {
              tableRows[i].style.display = '';
            } else {
              tableRows[i].style.display = 'none';
            }
        }
    });
});
  

//TOTAL NO. OF ALL USERS
document.addEventListener("DOMContentLoaded", function() {
    const tableRows = document.querySelectorAll('.user-table tbody tr');
    
    let rowCount = 0;

    for (let i = 0; i < tableRows.length; i++) {
        const cells = tableRows[i].querySelectorAll('td');
        
        let hasContent = false;
        
        for (let j = 0; j < cells.length; j++) {
            if (cells[j].textContent.trim() !== "" || cells[j].querySelector('img') !== null) {
                hasContent = true;
                break;  
            }
        }
        
        if (hasContent) {
            rowCount++;
        }
    }

    const totalUsersElement = document.querySelector('.total-users');
    const aNumberElement = document.querySelector('.a_number');

    if (totalUsersElement) {
        totalUsersElement.textContent = rowCount;
    }

    if (aNumberElement) {
        aNumberElement.textContent = rowCount;
    }else if (aNumberElement == 0) {
        aNumberElement.textContent = 0;
    }
});


//A-BADGE (NO. OF NEW USERS WITHIN A DAY)

// Function to check if the date is today's date
function isToday(dateString) {
    const today = new Date();
    const date = new Date(dateString);
    return today.getDate() === date.getDate() && today.getMonth() === date.getMonth() && today.getFullYear() === date.getFullYear();
}

// Function to count new rows for current day
function updateNewUsersCount() {
    const rows = document.querySelectorAll('.user-table tbody tr');
    let newUsersCount = 0;

    for (let i = 0; i < rows.length; i++) {
        const row = rows[i];
        const dateAdded = row.getAttribute('data-date');
        
        if (isToday(dateAdded)) {
            newUsersCount++;
        }
    }

    const badge = document.querySelector('.a-badge');
    badge.textContent = newUsersCount;

    if (newUsersCount === 0) {
        badge.textContent = 0;
    }
}

updateNewUsersCount();


//CARD MODAL
document.addEventListener("DOMContentLoaded", function () {
    const bannerImages = document.querySelectorAll(".banner-image");
    const modal = document.getElementById("image-modal");
    const modalImage = modal.querySelector(".modal-image");
    const leftBtn = modal.querySelector(".left-btn");
    const rightBtn = modal.querySelector(".right-btn");
    let imageList = [];
    let currentIndex = 0;
  
    for (let i = 0; i < bannerImages.length; i++) {
      bannerImages[i].addEventListener("click", function () {
        // Collect all images in the same card
        const parentCard = bannerImages[i].closest(".card");
        const imagesInCard = parentCard.querySelectorAll(".banner-image");
  
        imageList = [];
        for (let j = 0; j < imagesInCard.length; j++) {
          imageList.push(imagesInCard[j].src);
        }
  
        currentIndex = imageList.indexOf(bannerImages[i].src);
  
        showImage();
        updateNavButtons();
        modal.style.display = "flex";
      });
    }
  
    leftBtn.addEventListener("click", function () {
      if (currentIndex > 0) {
        currentIndex--;
        showImage();
        updateNavButtons();
      }
    });
  
    rightBtn.addEventListener("click", function () {
      if (currentIndex < imageList.length - 1) {
        currentIndex++;
        showImage();
        updateNavButtons();
      }
    });
  
    modal.addEventListener("click", function (e) {
      if (e.target === modal) {
        modal.style.display = "none";
      }
    });
  
    function showImage() {
      modalImage.src = imageList[currentIndex];
    }
  
    function updateNavButtons() {
      if (imageList.length <= 1) {
        // Hide both buttons if there's only one image
        leftBtn.style.display = "none";
        rightBtn.style.display = "none";
      } else {
        // Show/hide left button
        if (currentIndex > 0) {
          leftBtn.style.display = "block";
        } else {
          leftBtn.style.display = "none";
        }
  
        // Show/hide right button
        if (currentIndex < imageList.length - 1) {
          rightBtn.style.display = "block";
        } else {
          rightBtn.style.display = "none";
        }
      }
    }
});
  

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
      popupContainer.style.display = 'flex'; // Show the popup
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
document.addEventListener('DOMContentLoaded', function() {
  // Sidebar links
  const dashboardLink = document.getElementById('dashboard-link');
  const projectsLink = document.getElementById('projects-link');
  const calendarLink = document.getElementById('calendar-link');
  const chatsLink = document.getElementById('chats-link');
  const settingsLink = document.getElementById('settings-link');

  // Section containers
  const rightSection = document.querySelector('.right');
  const projSection = document.querySelector('.proj');
  const calendarSection = document.querySelector('.calendars');
  const messageSection = document.querySelector('.message');
  const settingsSection = document.querySelector('.settings');
  const topSection = document.querySelector('.top');
  const projDetails = document.querySelector('.proj-details');

  // Hide all sections initially except for the dashboard (.right)
  projSection.style.display = 'none';
  calendarSection.style.display = 'none';
  messageSection.style.display = 'none';
  settingsSection.style.display = 'none';

  // Dashboard section
  dashboardLink.addEventListener('click', function(e) {
    e.preventDefault();
    rightSection.style.display = 'block';
    projSection.style.display = 'none';
    calendarSection.style.display = 'none';
    messageSection.style.display = 'none';
    settingsSection.style.display = 'none';
    topSection.style.display = 'flex';
    projDetails.style.display = 'none';
  });

  // Projects section
  projectsLink.addEventListener('click', function(e) {
    e.preventDefault();
    rightSection.style.display = 'none';
    projSection.style.display = 'block';
    projSection.style.visibility = 'visible'; 
    projSection.style.position = 'relative';  
    projDetails.style.display = 'none'; 
    calendarSection.style.display = 'none';
    messageSection.style.display = 'none';
    settingsSection.style.display = 'none';
    topSection.style.display = 'flex';
  });

  // Calendar section
  calendarLink.addEventListener('click', function(e) {
    e.preventDefault();
    rightSection.style.display = 'none';
    projSection.style.display = 'none';
    calendarSection.style.display = 'block';
    messageSection.style.display = 'none';
    settingsSection.style.display = 'none';
    topSection.style.display = 'flex';
    projDetails.style.display = 'none';
  });

  // Message section
  chatsLink.addEventListener('click', function(e) {
    e.preventDefault();
    rightSection.style.display = 'none';
    projSection.style.display = 'none';
    calendarSection.style.display = 'none';
    messageSection.style.display = 'block';
    settingsSection.style.display = 'none';
    topSection.style.display = 'flex';
    projDetails.style.display = 'none';
  });

  // Settings section
  settingsLink.addEventListener('click', function(e) {
    e.preventDefault();
    rightSection.style.display = 'none';
    projSection.style.display = 'none';
    calendarSection.style.display = 'none';
    messageSection.style.display = 'none';
    settingsSection.style.display = 'block';
    topSection.style.display = 'none'; 
    projDetails.style.display = 'none';
  });
});




// SETTINGS
document.getElementById("profile-link").addEventListener("click", function() {
showSection('s-profile-section');
});

document.getElementById("account-link").addEventListener("click", function() {
showSection('account-section');
});

document.getElementById("notifications-link").addEventListener("click", function() {
showSection('notifications-section');
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
