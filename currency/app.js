const api = 'http://v6.exchangerate-api.com/v6/82b882390711d38bfa37df17/latest/NGN'

//Currency value
const curName = document.getElementById('currency')
const curNgn = document.querySelector('.ngncur');

const button = document.querySelector('#but');

const span = document.querySelector('.span1');

//Amounts
const cur = document.getElementById('curUnit')
const ngnUnit = document.getElementById('ngnUnit')

loadEventListeners();

function loadEventListeners(){
  ngnUnit.addEventListener('change',ngcalc)
  cur.addEventListener('change',calculate)
  curName.addEventListener('input',calculate)
  button.addEventListener('click',swap)
}

function calculate(){
  const currencyVal = curName.value;
  const Ngncurrency = curNgn.value;

  fetch(`https://v6.exchangerate-api.com/v6/82b882390711d38bfa37df17/latest/${currencyVal}`)
  .then((res) => res.json())
  .then((data) => {
    // console.log(data);

    const rate = data.conversion_rates[Ngncurrency]
    
    span.textContent = `1 ${currencyVal} = ${rate} ${Ngncurrency}`
    
    ngnUnit.value = (rate * cur.value).toFixed(2)

    
  });

 
}

function ngcalc(){
  const currencyVal = curName.value;
  const Ngncurrency = curNgn.value;

  fetch(`https://v6.exchangerate-api.com/v6/82b882390711d38bfa37df17/latest/${Ngncurrency}`)
  .then((res) => res.json())
  .then((data) => {
    const rate = data.conversion_rates[currencyVal]
    
    span.textContent = `1 ${Ngncurrency} = ${rate} ${currencyVal}`
    
    cur.value = (rate * ngnUnit.value).toFixed(2)

    
  })
}

