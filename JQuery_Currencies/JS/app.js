let a;
let b;
const saveData = (currencies, date) => {
    if(!currencies.length) {
        return;
    }
    let data = {
        currencies,
        date
    }
    localStorage.setItem('currencies', JSON.stringify(data));
}

const loadSaveData = () => {
    a = new Date().getTime();
    let dataStr = localStorage.getItem('currencies');
    if(dataStr) {
        let data = JSON.parse(dataStr);
        $('input[name=date]').val(moment(data.date).format('YYYY-MM-DD'));
        currencyRender(data.currencies);
    } else {
        let currentDate = moment().format('YYYYMMDD');
        let currentDateNew = moment().format('YYYY-MM-DD');
        $('input[name=date]').val(currentDateNew);   
        loadDate(currentDate);

         }
}


const currencyRender = currencies => {
    htmlStr = '';
    if(currencies.length) {
        for( let currency of currencies) {
            htmlStr += `<tr><td>${currency.txt}</td><td>${currency.rate.toFixed(2)}</td></tr>`
        }
    } else {
        htmlStr += `<tr><td colspan ="2"> No data is available </td></tr>`
    }
    
    $('table tbody').html(htmlStr); 
    b = new Date().getTime();
    console.log(b - a);
}

const loadDate = date => {
    $.ajax({
        url: 'https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json&date=' + date,
        method: 'GET',
        success: data => {
            console.log(data);
            currencyRender(data);
            saveData(data, date);
        },
        error: error => {
            console.log(error, ':(')
        }
    }); 
}

$('input[name=date]').change( e => {
    let date = $(e.target).val();
    let dateForAjax = moment(date).format('YYYYMMDD');
    loadDate(dateForAjax);
});

loadSaveData();

