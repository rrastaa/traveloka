const checkLists = document.querySelectorAll('.check');
const hotelcheck = document.querySelector('.hotelmenu');
const flightcheck = document.querySelector('.flightmenu');
const hotelmenuChecks = document.querySelectorAll('.hotelmenucheck');



checkLists.forEach(checkList => {
    checkList.addEventListener('click', () => {
    document.querySelector('.on')?.classList.remove('on');
       checkList.classList.add('on');
    })
})

const hotelchecklists = document.querySelectorAll('.hotelchecklist');
const flightchecklists = document.querySelectorAll('.flightchecklist');

hotelchecklists.forEach(hotelchecklist => {
    hotelchecklist.addEventListener('click',() => {
        document.querySelector('.active')?.classList.remove('active');
        hotelcheck.classList.add('active');
    })
})

flightchecklists.forEach(flightchecklist => {
    flightchecklist.addEventListener('click',() => {
        document.querySelector('.active')?.classList.remove('active');
        flightcheck.classList.add('active');
    })
})

const triptypes = document.querySelectorAll('.triptype')

triptypes.forEach(triptype => {
    triptype.addEventListener('click',() => {
        document.querySelector('.flight')?.classList.remove('flight');
        triptype.classList.add('flight')
    })
})


function moreInfo(){
    const showmore = document.querySelector('.moremenu')
    showmore.classList.add('active');
}

function moreCancel(){
    const showmore = document.querySelector('.moremenu')
    showmore.classList.remove('active');
    
}

const copypopup = document.querySelector('.copypopupsection');

function copyCoupon1(){
    copypopup.classList.add('pop');
    setTimeout((copyCoupon1) => {
        copypopup.classList.remove('pop')
    }, 3000);
    const coupon1 = document.querySelector(".copiedcoupon1")
    navigator.clipboard.writeText(coupon1.innerText)
}

function copyCoupon2(){
    copypopup.classList.add('pop');
    setTimeout((copyCoupon2) => {
        copypopup.classList.remove('pop')
    }, 3000);
    const coupon2 = document.querySelector(".copiedcoupon2")
    navigator.clipboard.writeText(coupon2.innerText)
}

function copyCoupon3(){
    copypopup.classList.add('pop');
    setTimeout((copyCoupon3) => {
        copypopup.classList.remove('pop')
    }, 3000);
    const coupon3 = document.querySelector(".copiedcoupon3")
    navigator.clipboard.writeText(coupon3.innerText)
}

hotelmenuChecks.forEach(hotelmenucheck => {
     hotelmenucheck.addEventListener('click', () => {
        document.querySelector('.true')?.classList.remove('true');
        hotelmenucheck.classList.add('true');
     })
})
