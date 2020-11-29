window.addEventListener('DOMContentLoaded', () => {
    let hash = document.location.hash;
    if(!hash)
        changePage("home");
    else
    changePage(hash.substring(1));
}) 

function changePage(hash) {
    let pages = document.getElementsByClassName('page');
    let pagesArr = Array.prototype.slice.call( pages );
    pagesArr.forEach(page => {
        // page.style.display = "none";
        page.classList.add("displayNone");
        page.classList.remove("activeLink");
    });
    let node = document.querySelector(`.${hash}`)
    node.classList.remove("displayNone")
    node.classList.add('activeLink');
    // node.style.display = "initial";
}