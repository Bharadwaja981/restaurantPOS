import { loadItemData, loadCategoryData, loadOrdersData, Categories, Items, Orders} from './data.js';
import { openEditModal, openDeleteModal, confirmDelete } from '../admin/functions.js';

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

const recentOrdersTbody = document.querySelector('#recent-orders tbody');
const currentItemsTbody = document.querySelector('#current-items tbody');
const currentCategoryTbody = document.querySelector('#current-category tbody');
if (recentOrdersTbody) {
    Orders.forEach(order => {
        const tr = document.createElement('tr');
        const trContent = `
            <td>${order.OrderID}</td>
            <td>${order.CustomerName}</td>
            <td>${order.OrderType}</td>
            <td>${order.TableNumber}</td>
            <td>${order.OrderDate}</td>
            <td>${order.Price}</td>
            <td>${order.PaymentType}</td>
            <td>${order.EmployeeName}</td>
            <td>${order.status}</td>
            <td class="primary">Details</td>
        `;
        tr.innerHTML = trContent;
        recentOrdersTbody.appendChild(tr);
    });
}

if (currentItemsTbody) {
    Items.forEach(item => {
        const tr = document.createElement('tr');
        const trContent = `
            <td>${item.ItemId}</td>
            <td>${item.ItemName}</td>
            <td>${item.CategoryId}</td>
            <td>${item.Price}</td>
             <td class="primary">
                <button class="edit-btn" data-id="${item.itemId}">Edit</button>
                <button class="delete-btn" data-id="${item.itemId}">Delete</button>
             </td>
        `;
        tr.innerHTML = trContent;
        currentItemsTbody.appendChild(tr);

        const editBtn = tr.querySelector('.edit-btn');
        const deleteBtn = tr.querySelector('.delete-btn');

        editBtn.addEventListener('click', () => {
            openEditModal(item, 'item');
        });

        deleteBtn.addEventListener('click', () => {
            openDeleteModal(item, 'item');
        });
    });
}

if (currentCategoryTbody) {
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
        currentCategoryTbody.appendChild(tr);

        // Add event listeners for the buttons (you can define separate functions for edit and delete)
        const editBtn = tr.querySelector('.edit-btn');
        const deleteBtn = tr.querySelector('.delete-btn');

        editBtn.addEventListener('click', () => {
            openEditModal(category, 'category');
        });

        deleteBtn.addEventListener('click', () => {
            confirmDelete(category, 'category');
        });
    });
}


