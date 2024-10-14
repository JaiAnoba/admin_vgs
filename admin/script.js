// Function to format and display the current date
function formatDate() {
    const today = new Date();
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const months = ['Jan.', 'Feb.', 'Mar.', 'Apr.', 'May', 'Jun.', 'Jul.', 'Aug.', 'Sept.', 'Oct.', 'Nov.', 'Dec.'];

    const dayName = days[today.getDay()];
    const day = String(today.getDate()).padStart(2, '0'); 
    const month = months[today.getMonth()];
    const year = today.getFullYear();

    return `${dayName}, ${day} ${month} ${year}`;
}

// Display current date
document.getElementById("current-date").innerText = formatDate();

// Post Stats Chart
const ctx1 = document.getElementById('postStatsChart').getContext('2d');
const postStatsChart = new Chart(ctx1, {
    type: 'bar',
    data: {
        labels: ['Item 1', 'Item 2', 'Item 3'],
        datasets: [{
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
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                position: 'top',
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
            x: {
                grid: {
                    display: false
                },
                ticks: {
                    font: {
                        size: 14,
                        family: 'Poppins',
                    },
                    color: '#000'
                }
            },
            y: {
                beginAtZero: true,
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

// Activity Chart
document.addEventListener('DOMContentLoaded', function () {
    const ctx2 = document.getElementById('activityChart').getContext('2d');

    const dpr = window.devicePixelRatio || 1;
    ctx2.canvas.width = ctx2.canvas.clientWidth * dpr;
    ctx2.canvas.height = ctx2.canvas.clientHeight * dpr;
    ctx2.scale(dpr, dpr);

    const activityChart = new Chart(ctx2, {
        type: 'line',
        data: {
            labels: ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5'],
            datasets: [{
                label: 'Posts',
                data: [24, 25, 40, 50, 45],
                borderColor: '#a20d0d',
                backgroundColor: '#a20d0d',
                fill: false,
                borderWidth: 2 
            }, {
                label: 'Requests',
                data: [35, 17, 45, 40, 50],
                borderColor: '#ff7272',
                backgroundColor: '#ff7272',
                fill: false,
                borderWidth: 2
            }, {
                label: 'Exhibitions',
                data: [10, 5, 20, 15, 35],
                borderColor: '#ed1c24',
                backgroundColor: '#ed1c24',
                fill: false,
                borderWidth: 2
            }]
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
