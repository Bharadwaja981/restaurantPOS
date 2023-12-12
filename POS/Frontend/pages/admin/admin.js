import { Orders, loadCategoryData, Categories } from './data.js';
import { openEditModal, openDeleteModal } from '../admin/functions.js';

const sideMenu = document.querySelector('aside');
const menuBtn = document.getElementById('menu-btn');
const closeBtn = document.getElementById('close-btn');

const darkMode = document.querySelector('.dark-mode');

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

Orders.forEach(order => {
    const tr = document.createElement('tr');
    const trContent = `
        <td>${order.productName}</td>
        <td>${order.productNumber}</td>
        <td>${order.paymentStatus}</td>
        <td class="${order.status === 'Declined' ? 'danger' : order.status === 'Pending' ? 'warning' : 'primary'}">${order.status}</td>
        <td class="primary">Details</td>
    `;
    tr.innerHTML = trContent;
    document.querySelector('#recent-orders tbody').appendChild(tr);
});
   
Categories.forEach(category => {
    const tr = document.createElement('tr');
    const trContent = `
        <td>${category.id}</td>
        <td>${category.categoryname}</td>
        <td class="primary">
            <button class="edit-btn" data-id="${category.id}">Edit</button>
            <button class="delete-btn" data-id="${category.id}">Delete</button>
        </td>
    `;
    tr.innerHTML = trContent;
    document.querySelector('#current-category tbody').appendChild(tr);

    // Add event listeners for the buttons (you can define separate functions for edit and delete)
    const editBtn = tr.querySelector('.edit-btn');
    const deleteBtn = tr.querySelector('.delete-btn');

    editBtn.addEventListener('click', () => {
        openEditModal(category, 'category');
    });

    deleteBtn.addEventListener('click', () => {
        openDeleteModal(category, 'category');
    });
});

