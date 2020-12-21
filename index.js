window.addEventListener('DOMContentLoaded', () => {
    let hash = document.location.hash;
    if(!hash)
        loadHomePage();
    else
    changePage(hash.substring(1));
}) 

function changePage(hash) {
    let pages = document.getElementsByClassName('page');
    let pagesArr = Array.prototype.slice.call( pages );
    pagesArr.forEach(page => {
        page.classList.add("displayNone");
    });
    let node = document.querySelector(`.${hash}`)
    node.classList.remove("displayNone")

    let links = document.getElementsByClassName('list-item');
    let linksArr = Array.prototype.slice.call(links);
    linksArr.forEach( link => {
        link.classList.remove('activeLink');
    })
    let link = document.querySelector(`.${hash}-link`);
    link.classList.add('activeLink');

}

function loadHomePage() {
    changePage("home");
}

function loadPage(hash) {
    changePage(hash);
    const listIcon = document.querySelector("#list-icon");
    listIcon.click();
}