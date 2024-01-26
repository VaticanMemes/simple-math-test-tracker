loadEverything();
	
function loadEverything() {
    if (localStorage.getItem("mx2-ct1") === null) {
    localStorage.setItem("mx2-ct1", '[{"title":"Test 1","marks":[15,30]},{"title":"Test 2","marks":[20,30]},{"title":"Test 3","marks":[25,30]},{"title":"Test 4","marks":[30,30]}]')
    }
    if (localStorage.getItem("mx1-ct1") === null) {
    localStorage.setItem("mx1-ct1", '[{"title":"Test 1","marks":[15,30]},{"title":"Test 2","marks":[20,30]},{"title":"Test 3","marks":[25,30]},{"title":"Test 4","marks":[30,30]}]')
    }
    
    let mx2ct1 = "<input id='mx2-ct1-input' type='text' size='50' value='" + localStorage.getItem("mx2-ct1") + "'><input id='mx2-ct1-submit' type='submit'>"
    
    document.getElementById("mx2-ct1").innerHTML = mx2ct1;
    
    document.getElementById("mx2-ct1-submit").addEventListener("click", (e) => {
    e.preventDefault;
    localStorage.setItem("mx2-ct1", document.getElementById("mx2-ct1-input").value);
    loadEverything();
    })
    
    let mx2ct1text = "<tr><th scope='col'>Tests</th><th scope='col'>Mark</th><th scope='col'>Out of</th></tr>"
    JSON.parse(localStorage.getItem("mx2-ct1")).forEach(tableCreator)
        
    document.getElementById("mx2-ct1-table").innerHTML = mx2ct1text;
    
    function tableCreator(value) {
    mx2ct1text += "<tr><td scope='row'>" + value['title'] + "</td><td scope='row'>" + value['marks'][0] + "</td><td scope'row'>" + value['marks'][1] + "</tr>"
    }
    
    let mx2ct1data = JSON.parse(localStorage.getItem("mx2-ct1"))
    
    const labelsList = []
    for (let i = 0; i < mx2ct1data.length; i++) {
    labelsList.push(mx2ct1data[i]['title'])
    }
    
    const dataList = []
    for (let i = 0; i < mx2ct1data.length; i++) {
    dataList.push(mx2ct1data[i]['marks'][0]/mx2ct1data[i]['marks'][1])
    }
    
    const ctx = document.getElementById('mx2-ct1-chart');

    new Chart(ctx, {
    type: 'line',
    data: {
        labels: labelsList,
        datasets: [{
        label: 'Marks %',
        data: dataList,
        borderWidth: 1
        }]
    },
    options: {
        scales: {
        y: {
            beginAtZero: true
        }
        }
    }
    });
        
    let mx1ct1 = "<input id='mx1-ct1-input' type='text' size='50' value='" + localStorage.getItem("mx1-ct1") + "'><input id='mx1-ct1-submit' type='submit'>"
    
    document.getElementById("mx1-ct1").innerHTML = mx1ct1;
    
    document.getElementById("mx1-ct1-submit").addEventListener("click", (e) => {
    e.preventDefault;
    localStorage.setItem("mx1-ct1", document.getElementById("mx1-ct1-input").value);
    loadEverything();
    })
    
    let mx1ct1text = "<tr><th scope='col'>Tests</th><th scope='col'>Mark</th><th scope='col'>Out of</th></tr>"
    JSON.parse(localStorage.getItem("mx1-ct1")).forEach(tableCreator2)
    
    document.getElementById("mx1-ct1-table").innerHTML = mx1ct1text;
    
    function tableCreator2(value) {
    mx1ct1text += "<tr><td scope='row'>" + value['title'] + "</td><td scope='row'>" + value['marks'][0] + "</td><td scope'row'>" + value['marks'][1] + "</tr>"
    }
    
    let mx1ct1data = JSON.parse(localStorage.getItem("mx1-ct1"))
    
    const labelsList2 = []
    for (let i = 0; i < mx1ct1data.length; i++) {
    labelsList2.push(mx1ct1data[i]['title'])
    }
    
    const dataList2 = []
    for (let i = 0; i < mx1ct1data.length; i++) {
    dataList2.push(mx1ct1data[i]['marks'][0]/mx1ct1data[i]['marks'][1])
    }
    
    const ctx2 = document.getElementById('mx1-ct1-chart');

    new Chart(ctx2, {
    type: 'line',
    data: {
        labels: labelsList2,
        datasets: [{
        label: 'Marks %',
        data: dataList2,
        borderWidth: 1
        }]
    },
    options: {
        scales: {
        y: {
            beginAtZero: true
        }
        }
    }
    });
    }