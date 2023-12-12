import { Orders, loadCategoryData, Categories } from './data.js';

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
        <td>${category.categoryid}</td>
        <td>${category.categoryname}</td>
        <td class="primary">
            <button class="edit-btn" data-categoryid="${category.categoryid}">Edit</button>
            <button class="delete-btn" data-categoryid="${category.categoryid}">Delete</button>
        </td>
    `;
    tr.innerHTML = trContent;
    document.querySelector('#current-category tbody').appendChild(tr);

    // Add event listeners for the buttons (you can define separate functions for edit and delete)
    const editBtn = tr.querySelector('.edit-btn');
    const deleteBtn = tr.querySelector('.delete-btn');

    editBtn.addEventListener('click', () => {
        openEditModal(category);
    });

    deleteBtn.addEventListener('click', () => {
        openDeleteModal(category);
    });
});

// Function to open the edit modal with category details
function openEditModal(category) {
    const modal = document.getElementById('editModal');
    const categoryIdInput = document.getElementById('categoryId');
    const categoryNameInput = document.getElementById('categoryName');
    const newCategoryNameInput = document.getElementById('newCategoryName');

    categoryIdInput.value = category.categoryid;
    categoryNameInput.value = category.categoryname;
    newCategoryNameInput.value = '';

    modal.style.display = 'block';

    // Handle the modal close button
    const closeModalButton = document.getElementById('closeModal');
    closeModalButton.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    // Handle the update button
    const updateButton = document.getElementById('updateCategory');
    updateButton.addEventListener('click', () => {
        // Implement your logic to update the category using the values in categoryIdInput and newCategoryNameInput
        console.log('Category ID:', categoryIdInput.value);
        console.log('Category Name:', categoryNameInput.value);
        console.log('New Category Name:', newCategoryNameInput.value);

        // Close the modal after updating
        modal.style.display = 'none';
    });

    // Handle the cancel button
    const cancelButton = document.getElementById('cancelUpdate');
    cancelButton.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    // Handle clicks outside the modal to close it
    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
}

// Function to open the edit modal with category details
function openDeleteModal(category) {
    const modal = document.getElementById('deleteModal');
    const categoryIdInput = document.getElementById('categoryId');
    const categoryNameInput = document.getElementById('categoryName');

    if (categoryIdInput && categoryNameInput) {
        console.log('Category ID:', category.categoryid);
        console.log('Category Name:', category.categoryname);

        categoryIdInput.value = category.categoryid;
        categoryNameInput.value = category.categoryname;

        console.log('After assignment - Category ID:', categoryIdInput.value);
        console.log('After assignment - Category Name:', categoryNameInput.value);

        modal.style.display = 'block';

        // Handle the modal close button
        const closeModalButton = document.getElementById('closeModal');
        closeModalButton.addEventListener('click', () => {
            modal.style.display = 'none';
        });

        // Handle the update button
        const updateButton = document.getElementById('deleteCategory');
        updateButton.addEventListener('click', () => {
            console.log('Record Deleted Successfully');

            modal.style.display = 'none';
        });

        // Handle the cancel button
        const cancelButton = document.getElementById('cancelDelete');
        cancelButton.addEventListener('click', () => {
            modal.style.display = 'none';
        });

        // Handle clicks outside the modal to close it
        window.addEventListener('click', (event) => {
            if (event.target === modal) {
                modal.style.display = 'none';
            }
        });
    } else {
        console.error('Input elements not found');
    }
}
