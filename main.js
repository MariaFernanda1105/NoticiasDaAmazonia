const navitems = document.querySelector('.nav__items');
const opennavbtn = document.querySelector('#open__nav-btn');
const closenavbtn = document.querySelector('#close__nav-btn');

// Opens nav menue
const openNav = () =>{
    navitems.style.display = 'flex';
    opennavbtn.style.display = 'none';
    closenavbtn.style.display = 'inline-block';
}
// Close nav menue
const closeNav = () =>{
    navitems.style.display = 'none';
    opennavbtn.style.display = 'inline-block';
    closenavbtn.style.display = 'none';
}

opennavbtn.addEventListener('click',openNav);
closenavbtn.addEventListener('click',closeNav);


const sidebar = document.querySelector('aside');
const showSidebarBtn = document.querySelector('#show__sidebar-btn');
const hideSidebarBtn = document.querySelector('#hide__sidebar-btn');

//show side bar on small devices
const showSidebar = () =>{
    sidebar.style.left = '0';
    showSidebarBtn.style.display = 'none';
    hideSidebarBtn.style.display = 'inline-block';
}
//show side bar on small devices
const hideSidebar = () =>{
    sidebar.style.left = '-100%';
    showSidebarBtn.style.display = 'inline-block';
    hideSidebarBtn.style.display = 'none';
}
showSidebarBtn.addEventListener('click', showSidebar);
hideSidebarBtn.addEventListener('click', hideSidebar);
