import './less/index.less'

// Your code goes here!
const logo = document.querySelector('.logo-heading')
const navLink = document.querySelectorAll('.nav-link')
const busPic = document.querySelector('img')
const mapPic = document.querySelector('.img-content img')
const adventurePic = document.querySelector('.rounded')
const destinationPic = document.querySelector('.content-destination img')
const allPTags = document.querySelectorAll('p')
const funInSunButton = document.querySelector('.btn')
const mountainBtn = document.querySelector('.content-pick .destination:nth-of-type(2) .btn')
const islandBtn = document.querySelector('.content-pick .destination:nth-of-type(3) .btn')


const changeColor = () => {
  logo.classList.toggle('off')
}
logo.addEventListener('mouseover', changeColor)


const popUp = () => {
  navLink.forEach(link => {
    link.style.color = 'red'
  })
}
navLink.forEach(link => link.addEventListener('click', popUp))


document.body.addEventListener('keydown', (evt) => {
  if (evt.key === 'd') {
    busPic.style.marginLeft = '40px'
  }
})


const changeBorder = () => {
  mapPic.style.border = '10px solid purple'
}
mapPic.addEventListener('wheel', changeBorder)


const makeOpaque = () => {
  adventurePic.style.opacity = '0.4'
}
window.addEventListener('load', makeOpaque)


const addShadow = () => {
  destinationPic.style.boxShadow = '10px 10px 10px lightblue'
}
destinationPic.addEventListener('dblclick', addShadow)

const changeFont = () => {
  allPTags.forEach(pTag => {
    pTag.style.fontFamily = 'Times, Times New Roman, serif'
    pTag.style.color = 'tomato'
  })
}

window.addEventListener('resize', changeFont)

const changeBtnColor = () => {
  funInSunButton.style.color = 'pink'
}

funInSunButton.addEventListener('mouseup', changeBtnColor)


const changeBtn2Color = () => {
  mountainBtn.style.color = 'black'
}
mountainBtn.addEventListener('mousedown', changeBtn2Color)

document.body.addEventListener('keydown', (evt) => {
  if (evt.key === 'g') {
    islandBtn.style.backgroundColor = 'green'
  }
})