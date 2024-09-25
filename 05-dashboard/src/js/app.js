//= modules/chart.js

isWebp();

document.addEventListener('DOMContentLoaded', function() {
    initSurveyChart()
    initKPChart()
});


function isElementExist(_el, _cb) {
	var elem = document.querySelector(_el);

	if (document.body.contains(elem)) {
		try {
			_cb();
		} catch(e) {
			console.log(e);
		}
	}
}

function isWebp() {
    function testWebP(callback) {

        var webP = new Image()
        webP.onload = webP.onerror = function () {
            callback(webP.height == 2)
        };
        webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA"
    }
    
    testWebP(function (support) {
    
        if (support == true) {
            document.querySelector('body').classList.add('webp')
        } else {
            document.querySelector('body').classList.add('no-webp')
        }
    })
}


function initSurveyChart() {
    let data = {
        labels: ["A","B","C","D","E","F","G","H","I","J","K","L"],
        datasets: [{
            backgroundColor: "#F18C5C",
            borderColor: "#F18C5C",
            barThickness: 15,
            borderRadius: 16,
            borderWidth: 2,
            data: [4.5, 1.5, 2.3, 4.5, 1.5, 4.5, 4.5, 1.8, 2.5, 4.5, 1.5, 4.5],
        }]
    };

    let options = {
      maintainAspectRatio: false,
      plugins: {
           legend: {
               display: false
           }
       },
      scales: {
        y: {
            min: 1,
            max: 5,
            stacked: true,
            grid: {
                display: true,
                color: "#EFF2F5",
                borderColor: 'transparent',
                borderWidth: 0
            },
            ticks: {
              color: "#616E85",
              font: {
                size: 12,
                family: 'Inter'
              },
              padding: 10,
              stepSize: 1
            }
        },
        x: {
          offset: true,
          grid: {
            display: false,
            borderColor: 'transparent'
          },
          ticks: {
            color: "#616E85",
            font: {
                size: 12,
                family: 'Inter'
            },
          }
        }
      },
      legend: {
        display: false
      }
    };

    let ctx = document.getElementById('chart').getContext('2d');
    const chart = new Chart(ctx, {
      type: 'bar',
      options: options,
      data: data
    });


}

function initKPChart() {
    let data = {
        labels: ["KP 1", "KP 2", "KP 3", "KP 4", "KP 5"],
        datasets: [{
            backgroundColor: ['#5155C3', '#597DBE', '#5F99BB', '#65B8B7', '#6CDDB1'],
            borderColor: ['#5155C3', '#597DBE', '#5F99BB', '#65B8B7', '#6CDDB1'],
            barThickness: window.addEventListener('resize', () => window.innerWidth < 600 ? 40 : 76),
            borderRadius: 16,
            borderWidth: 2,
            data: [90, 75, 25, 60, 25]
        }]
    };

    let options = {
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: false
            }
        },
        scales: {
            y: {
                min: 0,
                max: 100,
                stacked: true,
                grid: {
                    display: true,
                    color: "#EFF2F5",
                    borderColor: 'transparent',
                    borderWidth: 0
                },
                ticks: {
                    color: "#616E85",
                    font: {
                        size: 12,
                        family: 'Inter'
                    },
                    padding: 10,
                    stepSize: 25,
                    callback: function(value) {
                        return value + "%"; 
                    }
                }
            },
            x: {
                offset: true,
                grid: {
                    display: false,
                    borderColor: 'transparent'
                },
                ticks: {
                    color: "#616E85",
                    font: {
                        size: 12,
                        family: 'Inter'
                    },
                }
            }
        },
    };

    let ctx = document.getElementById('kps-chart').getContext('2d');
    const chart = new Chart(ctx, {
        type: 'bar',
        options: options,
        data: data
    });
}



