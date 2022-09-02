let arr = []
let score = document.getElementById("score")

let minute = document.getElementById("minute")
let second = document.getElementById("second")
let seconds = 20;
let minutes = 0;
minute.innerHTML = minutes
second.innerHTML = seconds
let interval;

let correct_one = document.getElementById("correct_one")
let buhari = document.getElementById("buhari")
let cemented = document.getElementById("cement")
let cocoas = document.getElementById("cocoa")
let softs = document.getElementById("softs")
let fivee = document.getElementById("five")
let goods = document.getElementById("good")
let facts = document.getElementById("fact")
let engs = document.getElementById("eng")
let ices = document.getElementById("ice")
let manus = document.getElementById("manu")

let incorrect_one = document.getElementById("incorrect_one")
let cheif = document.getElementById("cheif")
let cemen = document.getElementById("cemen")
let telecom = document.getElementById("telecom")
let harder = document.getElementById("harder")
let sec = document.getElementById("three")
let betters = document.getElementById("better")
let fks = document.getElementById("fk")
let jobs = document.getElementById("job")
let mals = document.getElementById("mal")
let mans = document.getElementById("man")

let incorrect_two = document.getElementById("incorrect_two")
let doctor = document.getElementById("doctor")
let bot = document.getElementById("bot")
let necoms = document.getElementById("necom")
let harders = document.getElementById("harders")
let sixs = document.getElementById("six")
let bests = document.getElementById("best")
let fakes = document.getElementById("fake")
let philos = document.getElementById("philo")
let ires = document.getElementById("ire")
let mas = document.getElementById("ma")

let answer = document.getElementById("answer")

let cardy = document.getElementById("cardy")
let card = document.getElementById("card")
let cardTwo = document.getElementById("cardTwo")
let cardThree = document.getElementById("cardThree")
let cardFour = document.getElementById("cardFour")
let cardFive = document.getElementById("cardFive")
let cardSix = document.getElementById("cardSix")
let cardSeven = document.getElementById("cardSeven")
let cardEight = document.getElementById("cardEight")
let cardNine = document.getElementById("cardNine")
let cardTen = document.getElementById("cardTen")
let cardBonus = document.getElementById("cardBonus")
let cardScore = document.getElementById("cardScore")
let aside = document.getElementById("aside")

//question one
function correctOne() {
    correct_one.style.backgroundColor = "green"
    incorrect_one.style.backgroundColor = "red"
    incorrect_two.style.backgroundColor = "red"
    arr.push(correct_one)
    correct_one.disabled = true
    console.log(arr);
}

function incorrect() {
    correct_one.style.backgroundColor = "green"
    incorrect_one.style.backgroundColor = "red"
    incorrect_two.style.backgroundColor = "red"
    correct_one.disabled = true

}

function next() {
    card.style.display = "none"
    cardTwo.style.display = "block"
}


//question two
function chef() {
    cheif.style.backgroundColor = "green"
    buhari.style.backgroundColor = "red"
    doctor.style.backgroundColor = "red"
    arr.push(cheif)
    cheif.disabled = true
    console.log(arr);
}

function buhar() {
    cheif.style.backgroundColor = "green"
    buhari.style.backgroundColor = "red"
    doctor.style.backgroundColor = "red"
    cheif.disabled = true
    console.log(arr);
}

function preTwo() {
    card.style.display = "block"
    cardTwo.style.display = "none"
}    

function nextTwo() {
    cardTwo.style.display = "none"
    cardThree.style.display = "block"
}


//question three
function cement() {
    bot.style.backgroundColor = "green"
    cemented.style.backgroundColor = "red"
    cemen.style.backgroundColor = "red"
    bot.disabled = true
}

function boths() {
    bot.style.backgroundColor = "green"
    cemented.style.backgroundColor = "red"
    cemen.style.backgroundColor = "red"
    arr.push(bot)
    bot.disabled = true
    console.log(arr);
}
function preThree() {
    cardThree.style.display = "none"
    cardTwo.style.display = "block"
}    

function nextThree() {
    cardThree.style.display = "none"
    cardFour.style.display = "block"
}


//question four
function cocoa() {
    necoms.style.backgroundColor = "green"
    cocoas.style.backgroundColor = "red"
    telecom.style.backgroundColor = "red"
    necoms.disabled = true
}

function necom() {
    necoms.style.backgroundColor = "green"
    cocoas.style.backgroundColor = "red"
    telecom.style.backgroundColor = "red"
    arr.push(necoms)
    necoms.disabled = true
    console.log(arr);
}
function preFour() {
    cardFour.style.display = "none"
    cardThree.style.display = "block"
}    

function nextFour() {
    cardFour.style.display = "none"
    cardFive.style.display = "block"
}



//question five
function hard() {
    softs.style.backgroundColor = "green"
    harder.style.backgroundColor = "red"
    harders.style.backgroundColor = "red"
    softs.disabled = true
}

function soft() {
    softs.style.backgroundColor = "green"
    harder.style.backgroundColor = "red"
    harders.style.backgroundColor = "red"
    arr.push(softs)
    softs.disabled = true
    console.log(arr);
}
function preFive() {
    cardFive.style.display = "none"
    cardFour.style.display = "block"
}    

function nextFive() {
    cardFive.style.display = "none"
    cardSix.style.display = "block"
}


//question six
function five() {
    sixs.style.backgroundColor = "green"
    fivee.style.backgroundColor = "red"
    sec.style.backgroundColor = "red"
    sixs.disabled = true
}

function six() {
    sixs.style.backgroundColor = "green"
    fivee.style.backgroundColor = "red"
    sec.style.backgroundColor = "red"
    arr.push(sixs)
    sixs.disabled = true
    console.log(arr);
}
function preSix() {
    cardSix.style.display = "none"
    cardFive.style.display = "block"
}    

function nextSix() {
    cardSix.style.display = "none"
    cardSeven.style.display = "block"
}



//question seven
function good() {
    bests.style.backgroundColor = "green"
    betters.style.backgroundColor = "red"
    goods.style.backgroundColor = "red"
    sixs.disabled = true
}

function best() {
    bests.style.backgroundColor = "green"
    betters.style.backgroundColor = "red"
    goods.style.backgroundColor = "red"
    arr.push(bests)
    bests.disabled = true
    console.log(arr);
}
function preSeven() {
    cardSeven.style.display = "none"
    cardSix.style.display = "block"
}    

function nextSeven() {
    cardSeven.style.display = "none"
    cardEight.style.display = "block"
}



//question eight
function fake() {
    facts.style.backgroundColor = "green"
    fks.style.backgroundColor = "red"
    fakes.style.backgroundColor = "red"
    facts.disabled = true
}

function fact() {
    facts.style.backgroundColor = "green"
    fks.style.backgroundColor = "red"
    fakes.style.backgroundColor = "red"
    arr.push(facts)
    facts.disabled = true
    console.log(arr);
}
function preEight() {
    cardEight.style.display = "none"
    cardSeven.style.display = "block"
}    

function nextEight() {
    cardEight.style.display = "none"
    cardNine.style.display = "block"
}



//question nine
function no() {
    engs.style.backgroundColor = "green"
    jobs.style.backgroundColor = "red"
    philos.style.backgroundColor = "red"
    engs.disabled = true
}

function en() {
    engs.style.backgroundColor = "green"
    jobs.style.backgroundColor = "red"
    philos.style.backgroundColor = "red"
    arr.push(engs)
    engs.disabled = true
    console.log(arr);
}
function preNine() {
    cardNine.style.display = "none"
    cardEight.style.display = "block"
}    

function nextNine() {
    cardNine.style.display = "none"
    cardTen.style.display = "block"
}


//question ten
function land() {
    ires.style.backgroundColor = "green"
    mals.style.backgroundColor = "red"
    ices.style.backgroundColor = "red"
    ires.disabled = true
}

function ire() {
    ires.style.backgroundColor = "green"
    mals.style.backgroundColor = "red"
    ices.style.backgroundColor = "red"
    arr.push(ires)
    ires.disabled = true
    console.log(arr);
}
function preTen() {
    cardTen.style.display = "none"
    cardNine.style.display = "block"
}    

function nextTen() {
    cardTen.style.display = "none"
    cardBonus.style.display = "block"
}



//question bonus
function sep() {
    mans.style.backgroundColor = "green"
    manus.style.backgroundColor = "red"
    mas.style.backgroundColor = "red"
    mans.disabled = true
}

function sept() {
    mans.style.backgroundColor = "green"
    manus.style.backgroundColor = "red"
    mas.style.backgroundColor = "red"
    arr.push(mans)
    mans.disabled = true
    console.log(arr);
}
function preBonus() {
    cardBonus.style.display = "none"
    cardTen.style.display = "block"
}    

function nextBonus() {
    cardBonus.style.display = "none"
    cardScore.style.display = "block"
    score.innerHTML = arr.length
}


function sw() {
    second.innerHTML = seconds
    minute.innerHTML = minutes
    seconds--;
    console.log(seconds);
    if (seconds == 0) {
        seconds = 59
        minutes--;
    }
    else if(minutes == 0 && seconds == 10){
        document.getElementById("time").style.backgroundColor = "red"
        document.getElementById("time").style.color = "white"
    }
    else if (minutes == 0 && seconds == 1) {
        seconds = 0
        minutes = 0
        minute.innerHTML = "00"
        second.innerHTML = "00"
        aside.style.display = "none"
        cardScore.style.display = "block"
        score.innerHTML = arr.length
        window.clearInterval(interval)
    }
}

function start() {
    interval = window.setInterval(sw,1000)
    cardy.style.display = "none"
    card.style.display = "block"

    // if (minutes == 0) {
    //     seconds = 0
    //     minutes = 0
    //     window.clearInterval(interval)
    // }
}