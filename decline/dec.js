
// --- Post Stats Chart ---





// --- Activity Chart ---

document.addEventListener('DOMContentLoaded', function () {
    let activityCanvas = document.getElementById('activityChart').getContext('2d');

    let dpr = window.devicePixelRatio || 1; 
    activityCanvas.canvas.width = activityCanvas.canvas.clientWidth * dpr;
    activityCanvas.canvas.height = activityCanvas.canvas.clientHeight * dpr;
    activityCanvas.scale(dpr, dpr);

    let activityChart = new Chart(activityCanvas, {
        type: 'line',
        data: {
            labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'], 
            datasets: [
                {
                    label: 'Exhibits Requests', 
                    data: [24, 25, 40, 50, 45], 
                    borderColor: '#a20d0d', 
                    backgroundColor: '#a20d0d', 
                    fill: false, 
                    borderWidth: 2
                },
                {
                    label: 'Accepted Exhibits', 
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
                            size: 11, 
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


document.addEventListener("DOMContentLoaded", function () {
    const dateElement = document.querySelector(".ex-date");
    const today = new Date();
    const month = today.getMonth() + 1;
    const day = today.getDate();
    const year = today.getFullYear();
    const shortYear = year.toString().slice(-2);
    const formattedDate = `${month}/${day}/${shortYear}`;
    dateElement.textContent = formattedDate;
  });
  
