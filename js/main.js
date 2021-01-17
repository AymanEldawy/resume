const works = [
  {title:'Bedaya', img:'bedaya.png' , category:'website',link:'bedaya-stationery.com/'},
  {title:'EISA', img:'eisa.png' , category:'website',link:'https://www.eisa.org.eg/'},
  {title:'Horizon', img:'horizon.png' , category:'website',link:'https://jctoday.com/demo/horizon/'},
  {title:'Smart Group', img:'smartgroup.png' , category:'website',link:'http://www.smartgroup-alex.com/'},
  {title:'Paper wall', img:'paper-wall.png' , category:'github',link:'https://aymaneldawy.github.io/paper-wall-app/'},
  // {title:'', img:'' , category:'website',link:''},
  // {title:'', img:'' , category:'github',link:''},
  {title:'Terminologies', img:'terminologies.png' , category:'github',link:'https://aymaneldawy.github.io/terminologies/'},
]
const skills = [

  {
    skill: 'Html',
    img: 'Html.png',
    syntax: '#fff',
    ui: '#e1521bd1',
    progress: 4
  },
  {
    skill: 'Css',
    img: 'Css.png',
    syntax: '#fff',
    ui: '#5b9bcf',
    icon: 'fa fa-css',
    progress: 4
  },

  {
    skill: 'Javascript',
    img: 'Javascript.png',
    syntax: '#252525',
    ui: '#f0db4fe0',
    progress: 4
  },
  {
    skill: 'ECMAScript',
    img: 'ECMAScript.png',
    syntax: '#252525',
    ui: '#f3da43',
    progress: 3
  },
  {
    skill: 'Typescript',
    img: 'Typescript.png',
    syntax: '#fff',
    ui: '#2479bfcf',
    progress: 3
  },

  {
    skill: 'Pug',
    img: 'Pug.png',
    syntax: '#fff',
    ui: '#a7634b',
    progress: 4
  },
  {
    skill: 'Sass',
    img: 'Sass.png',
    syntax: '#fff',
    ui: '#e279ae',
    progress: 4
  },
  {
    skill: 'Bootstrap',
    img: 'Bootstrap.png',
    syntax: '#fff',
    ui: '#5b4486de',
    progress: 4
  },

  {
    skill: 'React',
    img: 'React.png',
    syntax: '#fff',
    ui: '#138eb1bf',
    progress: 4
  },
  {
    skill: 'Gulp',
    img: 'Gulp.png',
    syntax: '#fff',
    ui: '#fd7075',
    progress: 4
  },
  {
    skill: 'Webpack',
    img: 'Webpack.png',
    syntax: '#fff',
    ui: '#278bda',
    progress: "basic"
  },
  {
    skill: 'Git',
    img: 'Git.png',
    syntax: '#fff',
    ui: '#ff7b67',
    progress: "basic"
  },

  {
    skill: 'Redux',
    img: 'Redux.png',
    syntax: '#fff',
    ui: '#a166d6',
    progress: "basic"
  },
  {
    skill: 'GraphQL',
    img: 'graphql.png',
    syntax: '#fff',
    ui: '#bf1c86',
    progress: "basic"
  },
]

window.addEventListener('DOMContentLoaded', function () {

  let content = ''
  skills.map(item => {
    content += `<div class="skill-box" style="background:${item.ui};color:${item.syntax}">
  <span>${item.skill}</span>
  <img src=${'img/skills/' + item.img} alt=${item.skill} />
  <div class="skill-progress">
    ${item.progress == 'basic' ? '<span>Basic</span>' : (`
      <i class="fa fa-star ${item.progress  >= 1 ? 'active' : ''}" ></i>
      <i class="fa fa-star ${item.progress  >= 2 ? 'active' : ''}" ></i>
      <i class="fa fa-star ${item.progress  >= 3 ? 'active' : ''}" ></i>
      <i class="fa fa-star ${item.progress  >= 4 ? 'active' : ''}" ></i>
      <i class="fa fa-star ${item.progress  >= 5 ? 'active' : ''}" ></i>
      `)}
      </div>
      </div>`
    })
  // Wrap skills content inside projects container
  document.querySelector('.skills').innerHTML = content;
  
  // Display Works
  displayWork()
})
const displayWork = (filter) => {
  const projectFilter = filter ? (works.filter(project => project.category == filter )) : works;
  let worksContent = '';
  projectFilter.map(project => {
    worksContent += ` <div class="box">
    <img src="img/works/${project.img}" alt="${project.title}">
    <a href="${project.link}" target="_blank">
      <i class="fa fa-eye"></i>
      <h3>${project.title}</h3>
    </a>
    </div>` 
  })
  // Wrap WorksContent inside projects container
  document.querySelector('.projects').innerHTML = worksContent;
}

let menuItem = document.querySelectorAll('.menu li')
let tabsChildren = document.querySelectorAll('.tabs > div')

let toggleContent = (that) => {
  menuItem.forEach(item => item.classList.remove('active'))
  that.parentElement.classList.add('active')
  tabsChildren.forEach(child => {
    if (child.classList.contains(that.dataset.show)) {
      child.style.display = "block"
      child.style.maxHeight = "fit-content"
    } else {
      child.style.maxHeight = "0"
      child.style.display = "none"
    }
  })
}
let toggleMood = () =>{
  document.body.classList.toggle('light')
}

// Filters Work 
let filters = document.querySelectorAll('.filters button')
filters.forEach(element => {
  element.addEventListener('click',() => {
    filters.forEach(el => el.classList.remove('active'))
    element.classList.add('active')
    displayWork(element.dataset.filter)
  })
})

let name = document.querySelector('form .name')
let email = document.querySelector('form .email')
let phone = document.querySelector('form .phone')
let message = document.querySelector('form .message')
let buttonSend = document.querySelector('form button')

const checkField = (e) => {
  if(e.target.value === '')
    e.target.parentElement.classList = 'field err'
  else   
    e.target.parentElement.classList = 'field success'
}
const checkEmail = (e) => {
  if(e.target.value === '')
    e.target.parentElement.classList = 'field err';
  else if (e.target.value.indexOf('@') === -1 )
    e.target.parentElement.classList = 'field err';
  else   
    e.target.parentElement.classList = 'field success'
}
name.addEventListener('keyup',checkField); 
message.addEventListener('keyup',checkField); 
email.addEventListener('keyup',checkEmail); 

const sendMessage = () => {
  if(name.value !== '' && email.value !== '' && email.value.indexOf('@') !== ''){
    Email.send({
        Host : "bedaya-stationery.com/",
        Username : "eldawyayman@yahoo.com",
        Password : "784201134C8B8C0206AA8DBD96E6401C659F",
        To : 'aymaneldawy@yahoo.com',
        From : email.value,
        Subject : "This is the subject",
        Body : `
          <div>
            <h3>${name.value}</h3>
            <p>${message.value}</p>
          </div>
        `
    }).then(
      message => alert(message)
    );
  }
}
buttonSend.addEventListener('click',sendMessage)

function donwloadCV (){
  window.open('../img/cv.pdf',"_blank")
}
