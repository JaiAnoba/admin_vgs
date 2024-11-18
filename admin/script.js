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
        labels: ['Item 1', 'Item 2', 'Item 3'], // Labels for each bar
        datasets: [
            {
                label: 'Saved', // Dataset label
                data: [5, 10, 15], // Data points
                backgroundColor: '#d68b8b', // Bar color
                borderRadius: 20, // Rounded corners
                barThickness: 40 // Bar width
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
                        family: 'Poppins', // Font style
                    },
                    color: '#000' // Text color
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

// Wait for the DOM to fully load
document.addEventListener('DOMContentLoaded', function () {
    // Get the canvas for the Activity Chart
    let activityCanvas = document.getElementById('activityChart').getContext('2d');

    // Adjust canvas resolution for high-DPI displays
    let dpr = window.devicePixelRatio || 1; // Device Pixel Ratio
    activityCanvas.canvas.width = activityCanvas.canvas.clientWidth * dpr;
    activityCanvas.canvas.height = activityCanvas.canvas.clientHeight * dpr;
    activityCanvas.scale(dpr, dpr);

    // Create a line chart
    let activityChart = new Chart(activityCanvas, {
        type: 'line', // Chart type
        data: {
            labels: ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5'], // Labels for the chart
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
