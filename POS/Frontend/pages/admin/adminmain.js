import { loadCategoryData, Categories, Items } from './data.js';

const sideMenu = document.querySelector('aside');
const menuBtn = document.getElementById('menu-btn');
const closeBtn = document.getElementById('close-btn');

const darkMode = document.querySelector('.dark-mode');


let newCategoryName = '';

menuBtn.addEventListener('click', () => {
    sideMenu.style.display = 'block';
});

closeBtn.addEventListener('click', () => {
    sideMenu.style.display = 'none';
});

darkMode.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode-variables');
    darkMode.querySelector('span:nth-child(1)').classList.toggle('active');
    darkMode.querySelector('span:nth-child(2)').classList.toggle('active');
})

Items.forEach(item => {
    const tr = document.createElement('tr');
    const trContent = `
        <td>${item.itemId}</td>
        <td>${item.itemName}</td>
        <td>${item.price}</td>
        <td>${item.categoryId}</td>
       <td class="primary">Details</td>
    `;
    tr.innerHTML = trContent;
    document.querySelector('#current-items tbody').appendChild(tr);
});

Categories.forEach(category => {
    const tr = document.createElement('tr');
    const trContent = `
        <td>${category.categoryid}</td>
        <td>${category.categoryname}</td>
        <td>
            <button class="edit-btn" data-categoryid="${category.categoryid}">Edit</button>
            <button class="delete-btn" data-categoryid="${category.categoryid}">Delete</button>
        </td>
    `;
    tr.innerHTML = trContent;
    document.querySelector('#current-category tbody').appendChild(tr);
});

const recentOrdersSection = document.querySelector('.current-items');
const currentCategorySection = document.querySelector('.current-category');
const addItemSection = document.querySelector('.new-products');
const categoriesItem = document.querySelector('.item-list .item:nth-child(1)');
const itemsItem = document.querySelector('.item-list .item:nth-child(2)');
const addItem = document.querySelector('.item-list .item:nth-child(3)');

recentOrdersSection.style.display = 'none';
currentCategorySection.style.display = 'none';
addItemSection.style.display = 'none';


categoriesItem.addEventListener('click', function () {
    currentCategorySection.style.display = 'block';
    recentOrdersSection.style.display = 'none';
    addItemSection.style.display = 'none';
});

itemsItem.addEventListener('click', function () {
    recentOrdersSection.style.display = 'block';
    currentCategorySection.style.display = 'none';
    addItemSection.style.display = 'none';
});

addItem.addEventListener('click', function () {
    recentOrdersSection.style.display = 'none';
    currentCategorySection.style.display = 'none';
    addItemSection.style.display = 'block';
});
