export function openEditModal(module, type) {

    const modal = document.getElementById('editModal');
    const editModalContent = document.createElement('div');
    editModalContent.className = 'editmodal-content';
    editModalContent.id = 'editModalContent';
    modal.appendChild(editModalContent);

    const headerElement = document.createElement('h2');
    headerElement.textContent = 'Edit' + module;
    if (type === 'category') {
        headerElement.textContent = 'Edit Category';
    } else if (type === 'item') {
        headerElement.textContent = 'Edit Item';
    } else {
        headerElement.textContent = 'Edit';
    }
    editModalContent.appendChild(headerElement);

    const formElement = document.createElement('form');
    formElement.id = 'editForm';
    editModalContent.appendChild(formElement);

    if (type === 'category') {
        const placeContainer1 = document.createElement('div');
        placeContainer1.className = 'placecontainer';
        formElement.appendChild(placeContainer1);

        const categoryIdText = document.createElement('h2');
        categoryIdText.textContent = 'Category Id';
        placeContainer1.appendChild(categoryIdText);

        const categoryIdInput = document.createElement('input');
        categoryIdInput.id = 'categoryId';
        categoryIdInput.readOnly = true;
        categoryIdInput.value = module.id;
        placeContainer1.appendChild(categoryIdInput);

        
        const placeContainer2 = document.createElement('div');
        placeContainer2.className = 'placecontainer';
        formElement.appendChild(placeContainer2);

        const categoryNameText = document.createElement('h2');
        categoryNameText.textContent = 'Category Name';
        placeContainer2.appendChild(categoryNameText);

        const categoryNameInput = document.createElement('input');
        categoryNameInput.id = 'categoryName';
        categoryNameInput.readOnly = true;
        categoryNameInput.value = module.categoryname;
        placeContainer2.appendChild(categoryNameInput);
        
        const placeContainer3 = document.createElement('div');
        placeContainer3.className = 'placecontainer';
        formElement.appendChild(placeContainer3);

        const newCategoryNameText = document.createElement('h2');
        newCategoryNameText.textContent = 'New Category Name';
        placeContainer3.appendChild(newCategoryNameText);

        const newCategoryNameInput = document.createElement('input');
        newCategoryNameInput.id = 'newCategoryName';
        newCategoryNameInput.className = 'newCategoryName';
        newCategoryNameInput.placeholder = 'Enter name';
        newCategoryNameInput.style.backgroundColor = 'aliceblue';
        placeContainer3.appendChild(newCategoryNameInput);
    }else if (type === 'item') {
        const placeContainer1 = document.createElement('div');
        placeContainer1.className = 'placecontainer';
        formElement.appendChild(placeContainer1);

        const itemIdText = document.createElement('h2');
        itemIdText.textContent = 'Item Id';
        placeContainer1.appendChild(itemIdText);

        const itemIdInput = document.createElement('input');
        itemIdInput.id = 'itemId';
        itemIdInput.readOnly = true;
        itemIdInput.value = module.itemId;
        placeContainer1.appendChild(itemIdInput);

        
        const placeContainer2 = document.createElement('div');
        placeContainer2.className = 'placecontainer';
        formElement.appendChild(placeContainer2);

        const itemNameText = document.createElement('h2');
        itemNameText.textContent = 'Item Name';
        placeContainer2.appendChild(itemNameText);

        const itemNameInput = document.createElement('input');
        itemNameInput.id = 'itemName';
        itemNameInput.readOnly = true;
        itemNameInput.value = module.itemName;
        placeContainer2.appendChild(itemNameInput);
        
        
        const placeContainer3 = document.createElement('div');
        placeContainer3.className = 'placecontainer';
        formElement.appendChild(placeContainer3);

        const itemPriceText = document.createElement('h2');
        itemPriceText.textContent = 'Price';
        placeContainer3.appendChild(itemPriceText);

        const itemPriceInput = document.createElement('input');
        itemPriceInput.id = 'itemPrice';
        itemPriceInput.readOnly = true;
        itemPriceInput.value = module.price;
        placeContainer3.appendChild(itemPriceInput);

        const placeContainer4 = document.createElement('div');
        placeContainer4.className = 'placecontainer';
        formElement.appendChild(placeContainer4);

        const newItemNameText = document.createElement('h2');
        newItemNameText.textContent = 'New Item Name';
        placeContainer4.appendChild(newItemNameText);

        const newItemNameInput = document.createElement('input');
        newItemNameInput.id = 'newItemName';
        newItemNameInput.className = 'newItemName';
        newItemNameInput.placeholder = 'Enter name';
        newItemNameInput.style.backgroundColor = 'aliceblue';
        placeContainer4.appendChild(newItemNameInput);

        const placeContainer5 = document.createElement('div');
        placeContainer5.className = 'placecontainer';
        formElement.appendChild(placeContainer5);

        const newItemPriceText = document.createElement('h2');
        newItemPriceText.textContent = 'New Item Price';
        placeContainer5.appendChild(newItemPriceText);

        const newItemPriceInput = document.createElement('input');
        newItemPriceInput.id = 'newItemPrice';
        newItemPriceInput.className = 'newItemPrice';
        newItemPriceInput.placeholder = 'Enter Price';
        newItemPriceInput.style.backgroundColor = 'aliceblue';
        placeContainer5.appendChild(newItemPriceInput);

    }
    else{
        console.log('Please pass right module');
    }

    const btnConElement = document.createElement('div');
    btnConElement.className = 'button-container';
    formElement.appendChild(btnConElement);

    // Handle the update button
    const button1 = document.createElement('button');
    button1.className = 'modalbtn';
    button1.id = 'update'+module.modulename;
    button1.textContent = 'Update';
    btnConElement.appendChild(button1);

    const button2 = document.createElement('button');
    button2.className = 'modalbtn';
    button2.id = 'cancel';
    button2.textContent = 'Cancel';
    button2.addEventListener('click', () => {
        modal.style.display = 'none';
    });
    btnConElement.appendChild(button2);

    modal.style.display = 'block';   
}


export function openDeleteModal(module, type) {


    const modal = document.getElementById('editModal');
    const editModalContent = document.createElement('div');
    editModalContent.className = 'editmodal-content';
    editModalContent.id = 'editModalContent';
    modal.appendChild(editModalContent);

    const headerElement = document.createElement('h2');
    headerElement.textContent = 'Delete' + module;
    if (type === 'category') {
        headerElement.textContent = 'Delete Category';
    } else if (type === 'item') {
        headerElement.textContent = 'Delete Item';
    } else {
        headerElement.textContent = 'Delete';
    }
    editModalContent.appendChild(headerElement);

    const formElement = document.createElement('form');
    formElement.id = 'deleteForm';
    editModalContent.appendChild(formElement);

    if (type === 'category') {
        const placeContainer = document.createElement('div');
        placeContainer.className = 'placecontainer';
        formElement.appendChild(placeContainer);

        const cText = document.createElement('h2');
        cText.textContent = 'You sure want to this ?';
        placeContainer.appendChild(cText);

        const placeContainer1 = document.createElement('div');
        placeContainer1.className = 'placecontainer';
        formElement.appendChild(placeContainer1);

        const categoryIdText = document.createElement('h2');
        categoryIdText.textContent = 'Category Id';
        placeContainer1.appendChild(categoryIdText);

        const categoryIdInput = document.createElement('input');
        categoryIdInput.id = 'delcategoryId';
        categoryIdInput.readOnly = true;
        categoryIdInput.value = module.id;
        placeContainer1.appendChild(categoryIdInput);

        
        const placeContainer2 = document.createElement('div');
        placeContainer2.className = 'placecontainer';
        formElement.appendChild(placeContainer2);

        const categoryNameText = document.createElement('h2');
        categoryNameText.textContent = 'Category Name';
        placeContainer2.appendChild(categoryNameText);

        const categoryNameInput = document.createElement('input');
        categoryNameInput.id = 'categoryName';
        categoryNameInput.readOnly = true;
        categoryNameInput.value = module.categoryname;
        placeContainer2.appendChild(categoryNameInput);
        
    }
    else if (type === 'item'){
        const placeContainer = document.createElement('div');
        placeContainer.className = 'placecontainer';
        formElement.appendChild(placeContainer);

        const cText = document.createElement('h2');
        cText.textContent = 'You sure want to this ?';
        placeContainer.appendChild(cText);

        const placeContainer1 = document.createElement('div');
        placeContainer1.className = 'placecontainer';
        formElement.appendChild(placeContainer1);

        const itemIdText = document.createElement('h2');
        itemIdText.textContent = 'Item Id';
        placeContainer1.appendChild(itemIdText);

        const itemIdInput = document.createElement('input');
        itemIdInput.id = 'delItemId';
        itemIdInput.readOnly = true;
        itemIdInput.value = module.itemId;
        placeContainer1.appendChild(itemIdInput);

        
        const placeContainer2 = document.createElement('div');
        placeContainer2.className = 'placecontainer';
        formElement.appendChild(placeContainer2);

        const itemNameText = document.createElement('h2');
        itemNameText.textContent = 'Item Name';
        placeContainer2.appendChild(itemNameText);

        const itemNameInput = document.createElement('input');
        itemNameInput.id = 'categoryName';
        itemNameInput.readOnly = true;
        itemNameInput.value = module.itemName;
        placeContainer2.appendChild(itemNameInput);
    }
    else{
        console.log('Please pass right module');
    }

    const btnConElement = document.createElement('div');
    btnConElement.className = 'button-container';
    formElement.appendChild(btnConElement);

    // Handle the update button
    const button1 = document.createElement('button');
    button1.className = 'modalbtn';
    button1.id = 'update'+module.modulename;
    button1.textContent = 'Delete';
    btnConElement.appendChild(button1);

    const button2 = document.createElement('button');
    button2.className = 'modalbtn';
    button2.id = 'cancel';
    button2.textContent = 'Cancel';
    button2.addEventListener('click', () => {
        modal.style.display = 'none';
    });
    btnConElement.appendChild(button2);

    modal.style.display = 'block';   
}
