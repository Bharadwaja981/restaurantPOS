import { loadCategoryData, loadItemData, Categories, Items } from './data.js';
import { openEditModal, openDeleteModal } from '../admin/functions.js';
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

const recentOrdersSection = document.querySelector('.current-items');
const currentCategorySection = document.querySelector('.current-category');
const addItemSection = document.querySelector('.new-products');
const addNewProductItemSection = document.querySelector('#new-product-items');
const categoriesItem = document.querySelector('.item-list .item:nth-child(1)');
const itemsItem = document.querySelector('.item-list .item:nth-child(2)');
const addItem = document.querySelector('.item-list .item:nth-child(3)');


recentOrdersSection.style.display = 'none';
currentCategorySection.style.display = 'block';
addItemSection.style.display = 'none';
addNewProductItemSection.style.display = 'none';

categoriesItem.addEventListener('click', function () {
    currentCategorySection.style.display = 'block';
    recentOrdersSection.style.display = 'none';
    addItemSection.style.display = 'none';
    addNewProductItemSection.style.display = 'none';
});

itemsItem.addEventListener('click', function () {
    recentOrdersSection.style.display = 'block';
    currentCategorySection.style.display = 'none';
    addItemSection.style.display = 'none';
    addNewProductItemSection.style.display = 'none';
});

addItem.addEventListener('click', function () {
    recentOrdersSection.style.display = 'none';
    currentCategorySection.style.display = 'none';
    addItemSection.style.display = 'block';
    addNewProductItemSection.style.display = 'block';
});


Items.forEach(item => {
    const tr = document.createElement('tr');
    const trContent = `
        <td>${item.ItemId}</td>
        <td>${item.ItemName}</td>
        <td>${item.CategoryId}</td>
        <td>${item.Price}</td>
        <td>${item.Type}</td>
         <td class="btncon">
            <button class="edit-btn" data-id="${item.ItemId}">Edit</button>
            <button class="delete-btn" data-id="${item.ItemId}">Delete</button>
         </td>
    `;
    tr.innerHTML = trContent;
    document.querySelector('#current-items tbody').appendChild(tr);

    const editBtn = tr.querySelector('.edit-btn');
    const deleteBtn = tr.querySelector('.delete-btn');

    editBtn.addEventListener('click', () => {
        openEditModal(item, 'item');
    });

    deleteBtn.addEventListener('click', () => {
        openDeleteModal(item, 'item');
    });
});

Categories.forEach(category => {
    const tr = document.createElement('tr');
    const trContent = `
        <td>${category.id}</td>
        <td>${category.categoryname}</td>
        <td>
            <button class="edit-btn" data-id="${category.id}">Edit</button>
            <button class="delete-btn" data-id="${category.id}">Delete</button>
        </td>
    `;
    tr.innerHTML = trContent;
    document.querySelector('#current-category tbody').appendChild(tr);

    
    const editBtn = tr.querySelector('.edit-btn');
    const deleteBtn = tr.querySelector('.delete-btn');

    editBtn.addEventListener('click', () => {
        openEditModal(category, 'category');
        
    });

    deleteBtn.addEventListener('click', () => {
        openDeleteModal(category, 'category');
       
    });
});

const categorySelector = document.getElementById('categorySelector');

if (categorySelector){
    Categories.forEach(category => {
        const option = document.createElement('option');
        option.value = category.categoryname;
        option.textContent = category.categoryname;
        categorySelector.appendChild(option);
    });
}