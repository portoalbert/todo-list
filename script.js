const listone = []
const listtwo = []
const listthree = []
const mainDiv = document.getElementById('main');
function itemMaker (title,date,notes,list){
    let temp = {}
    temp.title = title;
    temp.date = date;
    temp.notes = notes;
    list.push(temp);
}

itemMaker("Doctor Appointment","Today","need to get blood work",listone);
itemMaker("Doctor Appointment","Today","need to get blood work",listone);
itemMaker("Tomorrow tile","tomorrow","this is some sample text to make sure its working",listtwo);
listone.forEach(cardMaker);

////////// DOM MANIPULATION //////////

function cardMaker (arrayindex){
    const cardDiv = document.createElement('div');
    cardDiv.classList.add('card');
    const checkDiv = document.createElement('div');
    checkDiv.classList.add('checkdiv')
    const checkEl = document.createElement('input')
    checkEl.setAttribute('type',"checkbox");
    checkDiv.appendChild(checkEl);
    cardDiv.appendChild(checkDiv);
    const titleDiv = document.createElement('div');
    titleDiv.classList.add('cardtitle');
    titleDiv.innerText = arrayindex.title;
    cardDiv.appendChild(titleDiv);
    const dateDiv = document.createElement('div');
    dateDiv.classList.add('carddate');
    dateDiv.innerText = arrayindex.date;
    cardDiv.appendChild(dateDiv);
    const noteDiv = document.createElement('div');
    noteDiv.classList.add('notediv')
    noteDiv.innerText = arrayindex.notes;
    cardDiv.appendChild(noteDiv);
    const iconDiv = document.createElement('div');
    iconDiv.classList.add('icondiv')
    cardDiv.appendChild(iconDiv);
    mainDiv.appendChild(cardDiv);
}
function cleaner(){
    while(mainDiv.firstChild){
        mainDiv.removeChild(mainDiv.lastChild);
    }
}



////////// POPUP MENU ////////////////////////////////
const menuArray = ['Today','Tomorrow','Future'];
const popMenu = document.getElementById('menupop');
const popMenuUl = document.createElement('ul');
menuArray.forEach(liMaker);

popMenu.appendChild(popMenuUl);
function liMaker (classname){
    temp = document.createElement('li')
    temp.setAttribute('id',`${classname.toLowerCase()}id`)
    temp.innerText = classname
    popMenuUl.appendChild(temp)
}
function menuPopper (){
    if (popMenu.style.display == 'flex'){
      popMenu.style.display = 'none' 
    }
    else{
        popMenu.style.display = 'flex'  
    }
}

const todayLink = document.getElementById('tomorrowid')
todayLink.addEventListener('click',()=>{
    cleaner();
    popMenu.style.display = ''
    listtwo.forEach(cardMaker);
})
