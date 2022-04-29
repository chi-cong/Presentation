// ********** PAGE LOADING **************
const body = document.getElementsByClassName('body');
const loader = document.querySelector('.loading')
window.addEventListener('DOMContentLoad', () => {
    loader.classList.remove('hide');
}
)


// ****************** NAVIGATE BAR ITEMS *********************
class NavItem{
    constructor(title, url) {
        this.title = title;
        this.url = url;
    }
    adding() {
            this.add = document.querySelector('.nav-li');
            this.add.innerHTML += `<li class = "li"><a href="${this.url}">${this.title}</a></li>`;
    };
    
}
const aboutMe = new NavItem(`About me`, `#`);
aboutMe.adding();
const random = new NavItem(`random adding`, `#`);
random.adding();
const sourceCode = new NavItem(`Projects's source codes`, `#`);
sourceCode.adding();
// _____ button on phone _____
const header = document.querySelector('.header');
const nav_btn = document.querySelector('.nav-btn');
const nav_li = document.querySelector('.nav-li');
const nav_links = nav_li.querySelectorAll('.li');
let total_height = 0;
let number_of_item = nav_links.length;
total_height += number_of_item * 40;
nav_btn.addEventListener('click', () => {
    nav_btn.classList.toggle('nav-btn-on');
    nav_li.classList.toggle('show');
    let nav_height = header.getBoundingClientRect().height;

    if (nav_btn.classList.contains('nav-btn-on')) {
        header.style.height = (nav_height + total_height + 'px');
    }
    else {
        header.style.height = (nav_height - total_height + 'px');
    };
});


// *************** PROJECTS ***********************
const project_list = [];
const project_section = document.querySelector('.projects');
const addProject = (img, name, description, url, type) => {
    project_list.push({
        'img': img, 'name': name, 'description': description, 'url': url,
        'type' : type
    });
    project_section.innerHTML +=
    `<div class="project">
        <a href ="${url}"><img src="${img}" alt"pokemon logo" class="img"></img></a>
        <a href ="${url}" class= "name"><h3  >${name}</h3></a>
        <p class = "description">${description}</p> 
    </div>`
    // description should be shorter than 58 letter
};
const pkm = addProject('./pictures/pokemon_logo.jpg', 'Pokemon team builder', `Build your pokemon team`, '/New project/pokemon/pokemonFirstPage.html', 'Vanila JS');
const myProjects = addProject('./pictures/download.png', 'My projects', `This's also a mini project`, '/New project/FrontPage.html', 'Vanila JS');
const myProjectsz = addProject('./pictures/download.png', 'My projects', `This also a mini project`, '/New project/FrontPage.html', 'React JS');


// ***************** FILTER BUTTONS *********************
// ____add button____
const filterName = ['Vanila JS', 'React JS'];
const addFilter = filterName.map((item) => {
    return `<button type ="button" class = "btn">${item}</button>`
}).join('');
const filterBtn = document.querySelector('.filter-li');
filterBtn.innerHTML += addFilter;
// ___when clicking a button___
const allFilter = filterBtn.querySelectorAll('.btn');
allFilter.forEach((item) => {
    item.addEventListener('click', () => {
        // change the background-color whenever a button's clicked
        allFilter.forEach((item) => item.classList.remove('clicked-btn'));
        item.classList.toggle('clicked-btn');
        project_section.innerHTML = '';
        for (let i = 0; i < project_list.length; i++){
            let temp = project_list[i];
            if (item.textContent === temp.type || item.textContent === 'All') {
                project_section.innerHTML += `<div class="project">
                <a href ="${temp.url}"><img src="${temp.img}" alt"" class="img"></img></a>
                <a href ="${temp.url}" class= "name"><h3  >${temp.name}</h3></a>
                <p class = "description">${temp.description}</p>
                </div>`
                    }
        }
    })
})
