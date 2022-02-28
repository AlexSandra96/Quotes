// Variabels 
const ru = document.querySelector('.ru')
const en = document.querySelector('.en')
const quoteBtn = document.querySelector('.quotes-btn')
const quote = document.querySelector('.quote')
const author = document.querySelector('.author')
const audio = document.querySelector('audio')
const pickle = document.querySelector('.img-pickle')
const sun = document.querySelector('.sun')

let sound = [1, 2, 3]
let songIndex = 0;



// Link json
async function getQuotes() {  
    if(en.classList.contains('active')){
        const quotesEn = 'data_eng.json';
        const res = await fetch(quotesEn);
        const data = await res.json(); 
        quote.textContent = data[Math.floor(Math.random() * 15)].text;
        quoteBtn.textContent = 'I\'m Mr. Meeseeks! Сlick on me!'
        
    } else if (ru.classList.contains('active')){
        const quotesRu = 'data_ru.json';
        const res = await fetch(quotesRu);
        const data = await res.json(); 
        quote.textContent = data[Math.floor(Math.random() * 15)].text;
        quoteBtn.textContent = 'Я мистер Миссикс! Нажми на меня!'
    }  
}
getQuotes();

quoteBtn.addEventListener('click', getQuotes)

// Language

en.addEventListener('click', changeEnglish)
function changeEnglish() {
    if(ru.classList.contains('active')) {
        ru.classList.remove('active')
        en.classList.add('active')
    }
}

ru.addEventListener('click', changeRussian)
function changeRussian(){
    if(en.classList.contains('active')) {
        en.classList.remove('active')
        ru.classList.add('active')
    }
}


// Audio

function loadAudio() {
    if(en.classList.contains('active')){
        audio.src = `./assets/audio/eng/${songIndex + 1}.mp3`
    } else if (ru.classList.contains('active')) {
        audio.src = `./assets/audio/ru/${songIndex + 1}.mp3`
    }
    audio.play()
}
loadAudio([songIndex])

quoteBtn.addEventListener('click', () => {
    songIndex++
    if (songIndex > sound.length - 1){
        songIndex = 0;
    } 
    else if(songIndex < 0) {
        songIndex = sound.length -1
    }
    loadAudio([songIndex])
})

// Show Image
function showPickle(){
    
    pickle.classList.toggle('show')
}
pickle.addEventListener('mouseover', showPickle)
pickle.addEventListener('mouseout', showPickle)

// Sound sun

function playSun(){
    sun.classList.add('play')
    audio.src = './assets/audio/sun.mp3'
    audio.play()
}
function pauseSun() {
    sun.classList.remove('play')
    audio.src = './assets/audio/sun.mp3'
    audio.pause()
}

sun.addEventListener('click', () => {
    const isPlay = sun.classList.contains('play')
    if(isPlay){
        pauseSun()
    } else {
        playSun() 
    }
     
})
