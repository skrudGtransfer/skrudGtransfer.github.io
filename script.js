document.querySelector('.search-txt').oninput = function () {
    let val = this.value.trim();
    let elasticItems = document.querySelectorAll('.cards a')
    if (val != '') {
        elasticItems.forEach(function (elem) {
            if (elem.innerText.search(val) == -1) {
                elem.classList.add('hide')
            }
            else {
                elem.classList.remove('hide');
            }
        });
    }
    else {
        elasticItems.forEach(function (elem) {
            elem.classList.remove('hide');
        });
    }
}


let ALink = document.querySelector('.cards');
let sortBase = coinBase;

function sortUp() {
    let temp = [];
    for (let i = 0; i < coinBase.length; i++) {
        temp.push(coinBase[i]['price']);
    }
    temp.sort((a, b) => { return a - b });
    sortBase = [];
    for (let i = 0; i < temp.length; i++) {
        for (let k = 0; k < coinBase.length; k++) {
            if (temp[i] == coinBase[k]['price'] && coinBase[k]['price'] != '') {
                if (coinBase[k] != coinBase[k - 1]) {
                    sortBase.push(coinBase[k]);
                }
            }
        }
    }
    console.log(sortBase)
    ALink.innerHTML = '';
    creatElem();
}

document.querySelector('.sort-asc').onclick = sortUp;

function sortDown() {
    let temp = [];
    for (let i = 0; i < coinBase.length; i++) {
        temp.push(coinBase[i]['price']);
    }
    temp.sort((a, b) => { return b - a });
    sortBase = [];
    for (let i = 0; i < temp.length; i++) {
        for (let k = 0; k < coinBase.length; k++) {
            if (temp[i] == coinBase[k]['price'] && coinBase[k]['price'] != '') {
                if (coinBase[k] != coinBase[k - 1]) {
                    sortBase.push(coinBase[k]);
                }
            }
        }
    }
    console.log(sortBase)
    ALink.innerHTML = '';
    creatElem();
}

document.querySelector('.sort-desc').onclick = sortDown;

function sortRate() {
    let temp = [];
    for (let i = 0; i < coinBase.length; i++) {
        temp.push(coinBase[i]['rate']);
    }
    temp.sort((a, b) => { return b - a });
    sortBase = [];
    for (let i = 0; i < temp.length; i++) {
        for (let k = 0; k < coinBase.length; k++) {
            if (temp[i] == coinBase[k]['rate'] && coinBase[k]['rate'] != '') {
                if (coinBase[k] != coinBase[k - 1]) {
                    sortBase.push(coinBase[k]);
                }
            }
        }
    }
    console.log(sortBase)
    ALink.innerHTML = '';
    creatElem();
}

document.querySelector('.sort-rating').onclick = sortRate;

function creatElem() {
    for (let key in sortBase) {
        ALink.innerHTML += `<a href=${sortBase[key]['link']}><div class='card card1' data-rating=${sortBase[key]['rate']}><img src="${sortBase[key]['img']}" alt=""><div class='text'><div class='date'>${sortBase[key]['price']}грн.</div><div class='big'>${sortBase[key]['denom']}</div><div class='small'>${sortBase[key]['desc']}</div></div></div></a>`
    }
}
creatElem();
