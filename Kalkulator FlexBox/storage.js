const CHACE_KEY = 'calculator-cache';

const checkForStorege = () => {
    return typeof(Storage) !== "undefined";
}

const putHistory = (data) => {
    if (checkForStorege()) {
        var historyData = null;
        const btn_delete = document.querySelector(".btn-delet");
        btn_delete.addEventListener("click", () => {
            historyData = null;
            
        }
        );
        if (localStorage.getItem(CHACE_KEY) == null) {
            historyData = [];
        } else {
            historyData = JSON.parse(localStorage.getItem(CHACE_KEY));
        }
        historyData.unshift(data);
        if (historyData.length > 5) {
            historyData.pop();
        }

        localStorage.setItem(CHACE_KEY, JSON.stringify(historyData));
    }
}

const showHistory = () => {

    if (checkForStorege()) {
        return JSON.parse(localStorage.getItem(CHACE_KEY)) || [];

    }else {
        return [];
    }
}

const renderHistory = () => {
    const historyData = showHistory();
    var historyList = document.querySelector("#historyList");

    historyList.innerHTML = "";

    for (let history of historyData) {
        let row = document.createElement("tr");
        row.innerHTML = `<td>${history.firstNumber }</td>`;
        row.innerHTML += `<td>${history.operator}</td>`;
        row.innerHTML += `<td>${history.secondNumber }</td>`;
        row.innerHTML += `<td>${history.result  }</td>`;
        
        historyList.appendChild(row);
    }
}


renderHistory();