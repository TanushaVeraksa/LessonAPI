
const ids = [145,298,292];
// USD RUB EUR

async function fetchCurr(id, param) {
    const url = id 
    ? 'https://www.nbrb.by/api/exrates/currencies/' + id
    : 'https://www.nbrb.by/api/exrates/currencies';

    const result = await fetch(url);
    const fetchData = await result.json();
   return fetchData[param];   
}

  
Promise.all([fetchCurr(ids[0], 'Cur_Abbreviation'), fetchCurr(ids[1], 'Cur_Abbreviation'), fetchCurr(ids[2], 'Cur_Abbreviation')])
.then(value => { 
    Selected(value);
},);


const selectEl = document.getElementsByTagName('select')[0];

function Selected(mass) {
    for(let i = 0; i<mass.length; i++) {
        const optionEl = document.createElement('option');
        optionEl.innerHTML = mass[i];
        optionEl.value = i + 1;
        selectEl.append(optionEl);
    }
}


const buttonEl = document.getElementsByTagName('button')[0];

buttonEl.addEventListener('click', function () {
    let selected = Array.from(selectEl.options)
    .filter(option => option.selected)
    .map(option => option.value);

    let s = selected[0]; 
    SelectedElement(s);
});

const spanBuyEl = document.getElementById('buy');
const spanNameMultiEl = document.getElementById('NameMulti');
const spanMoneyEl = document.getElementById('money');
const spanRateEl = document.getElementById('rate');
const spanScaleEl = document.getElementById('scale');
const spanDateEl = document.getElementById('date');

const inputEl = document.getElementById('byn');

function getValue(promElem) {
    Promise.all([promElem]).then(value => { 
       return value;
    },);
}


 

const now = new Date("2020-06-01 21:37:57");

async function SelectedElement(element, promElem) {
    const scale1 = await Promise.all([fetchCurr(ids[0], 'Cur_Scale')]);
    const multi1 = await Promise.all([fetchCurr(ids[0], 'Cur_NameMulti')]);

    const scale2 = await Promise.all([fetchCurr(ids[1], 'Cur_Scale')]);
    const multi2 = await Promise.all([fetchCurr(ids[1], 'Cur_NameMulti')]);

    const scale3 = await Promise.all([fetchCurr(ids[2], 'Cur_Scale')]);
    const multi3 = await Promise.all([fetchCurr(ids[2], 'Cur_NameMulti')]);

    if(element == 1) {
        let money = (inputEl.value / 2.41) * scale1[0];
        spanBuyEl.innerHTML = money.toFixed(2);
        spanNameMultiEl.innerHTML = multi1[0];
        spanMoneyEl.innerHTML = inputEl.value;
        spanRateEl.innerHTML = 2.41;
        spanScaleEl.innerHTML = scale1[0];
        spanDateEl.innerHTML = now.getDate() + '-' + (now.getMonth() + 1) + '-' + now.getFullYear();
    }
    if(element == 2) {
        let money = (inputEl.value / 3.41) * scale2[0];
        spanBuyEl.innerHTML = money.toFixed(2);
        spanNameMultiEl.innerHTML = multi2[0];
        spanMoneyEl.innerHTML = inputEl.value;
        spanRateEl.innerHTML = 3.41;
        spanScaleEl.innerHTML = scale2[0];
        spanDateEl.innerHTML = now.getDate() + '-' + (now.getMonth() + 1) + '-' + now.getFullYear();
    }
    if(element == 3) {
        let money = (inputEl.value / 2.68) * scale3[0];
        spanBuyEl.innerHTML = money.toFixed(2);
        spanNameMultiEl.innerHTML = multi3[0];
        spanMoneyEl.innerHTML = inputEl.value;
        spanRateEl.innerHTML = 2.68;
        spanScaleEl.innerHTML = scale3[0];
        spanDateEl.innerHTML = now.getDate() + '-' + (now.getMonth() + 1) + '-' + now.getFullYear();
    }
}

/*switch(s) {
    case 1:
        alert(s);
        break;
    case 2:
        alert(s);
        break;
    case 3:
        alert(s);
        break;
    default:
        alert("нет никаких значений!");
}*/