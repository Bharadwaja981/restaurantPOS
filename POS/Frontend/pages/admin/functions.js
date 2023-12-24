export function openEditModal(module, type) {

    const modal = document.getElementById('editModal');
    const editModalContent = document.createElement('div');
    editModalContent.className = 'editmodal-content';
    editModalContent.id = 'editModalContent';
    while (modal.firstChild) {
        modal.removeChild(modal.firstChild);
    }
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
        itemIdInput.value = module.ItemId;
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
        itemNameInput.value = module.ItemName;
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
        itemPriceInput.value = module.Price;
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
    const modal = document.getElementById('deleteModal');
    const deleteModalContent = document.createElement('div');
    deleteModalContent.className = 'deleteModal-content';
    deleteModalContent.id = 'deleteModalContent';
    while (modal.firstChild) {
        modal.removeChild(modal.firstChild);
    }
    modal.appendChild(deleteModalContent);

    const headerElement = document.createElement('h2');
    headerElement.textContent = 'Delete ' + type;
    deleteModalContent.appendChild(headerElement);

    const formElement = document.createElement('form');
    formElement.id = 'deleteForm';
    deleteModalContent.appendChild(formElement);

    const placeContainer = document.createElement('div');
    placeContainer.className = 'placecontainer';
    formElement.appendChild(placeContainer);

    const cText = document.createElement('h2');
    cText.textContent = 'You sure want to this ' + type + ' ?';
    cText.style.color = 'Red';
    placeContainer.appendChild(cText);

    if(type === 'item') {
        const placeContainer1 = document.createElement('div');
        placeContainer1.className = 'placecontainer';
        formElement.appendChild(placeContainer1);

        const categoryIdText = document.createElement('h2');
        categoryIdText.textContent = 'Item Id';
        placeContainer1.appendChild(categoryIdText);

        const categoryIdInput = document.createElement('input');
        categoryIdInput.id = 'delcategoryId';
        categoryIdInput.readOnly = true;
        categoryIdInput.value = module.ItemId;
        placeContainer1.appendChild(categoryIdInput);


        const placeContainer2 = document.createElement('div');
        placeContainer2.className = 'placecontainer';
        formElement.appendChild(placeContainer2);

        const categoryNameText = document.createElement('h2');
        categoryNameText.textContent = 'Item Name';
        placeContainer2.appendChild(categoryNameText);

        const categoryNameInput = document.createElement('input');
        categoryNameInput.id = 'categoryName';
        categoryNameInput.readOnly = true;
        categoryNameInput.value = module.ItemName;
        placeContainer2.appendChild(categoryNameInput);
    }else if (type === 'category'){
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
        
    const btnConElement = document.createElement('div');
    btnConElement.className = 'button-container';
    formElement.appendChild(btnConElement);

    // Handle the update button
    const button1 = document.createElement('button');
    button1.className = 'modalbtn';
    button1.id = 'update'+type;
    button1.textContent = 'Delete';
    if(type === 'item'){
        button1.addEventListener('click', () => {
            const divEle = document.getElementById('deleteForm');
            divEle.style.display = 'none';

            const newDivEle = document.createElement('div');
            deleteModalContent.appendChild(newDivEle);

            const newDivTxt = document.createElement('h1');
            newDivTxt.textContent = type + ' Deleted Successfully !';
            newDivEle.appendChild(newDivTxt);

            setTimeout(function () {
                modal.style.display = 'none';
            }, 2000);
        });
    }else if(type === 'category'){
        button1.addEventListener('click', () => {

            const divEle = document.getElementById('deleteForm');
            divEle.style.display = 'none';

            const newDivEle = document.createElement('div');
            deleteModalContent.appendChild(newDivEle);

            const newDivTxt = document.createElement('h1');
            newDivTxt.textContent = type + ' Deleted Successfully !';
            newDivEle.appendChild(newDivTxt);
            deleteCategory(module);
            setTimeout(function () {
                modal.style.display = 'none';
            }, 2000);
        });
    }
    btnConElement.appendChild(button1);

    const button2 = document.createElement('button');
    button2.className = 'modalbtn';
    button2.id = 'cancel';
    button2.textContent = 'Cancel';
    button2.addEventListener('click', (event) => {
        event.preventDefault();
        modal.style.display = 'none';
    });
    btnConElement.appendChild(button2);

    modal.style.display = 'block';   
}

export function viewModal(module, type){
    document.body.style.overflow = 'hidden';
    const modal = document.getElementById('viewModal');
    const viewModalContent = document.createElement('div');
    viewModalContent.className = 'viewmodal-content';
    viewModalContent.id = 'viewmodalContent';
    while (modal.firstChild) {
        modal.removeChild(modal.firstChild);
    }
    modal.appendChild(viewModalContent);

    const detailCon = document.createElement('div');
    detailCon.className = 'detail-con';
    viewModalContent.appendChild(detailCon);

    const detailConRow1 = document.createElement('div');
    detailConRow1.className = 'detail-con-row';
    detailCon.appendChild(detailConRow1);

    const orderIdElement = document.createElement('h2');
    orderIdElement.className = 'detail-con-row-text';
    orderIdElement.textContent = 'Order ID : '+module.OrderID;
    detailConRow1.appendChild(orderIdElement);

    const tableNoElement = document.createElement('h2');
    tableNoElement.className = 'detail-con-row-text';
    tableNoElement.textContent = 'Table No : '+module.TableNumber;
    detailConRow1.appendChild(tableNoElement);
    
    const detailConRow2 = document.createElement('div');
    detailConRow2.className = 'detail-con-row';
    detailCon.appendChild(detailConRow2);

    const custNameElement = document.createElement('h2');
    custNameElement.className = 'detail-con-row-text';
    custNameElement.textContent = 'Customer Name : '+module.CustomerName;
    detailConRow2.appendChild(custNameElement);

    const orderDateElement = document.createElement('h2');
    orderDateElement.className = 'detail-con-row-text';
    const rawDateStringFromDatabase = module.OrderDate;
    const formattedDate = formatDatabaseDate(rawDateStringFromDatabase); 
    orderDateElement.textContent = 'OrderDate : '+formattedDate;
    detailConRow2.appendChild(orderDateElement);
    
    const orderTypeElement = document.createElement('h2');
    orderTypeElement.className = 'detail-con-row-text';
    orderTypeElement.textContent = 'Order Type : '+module.OrderType;
    detailConRow2.appendChild(orderTypeElement);

    const elementCon = document.createElement('div');
    elementCon.className = 'element-con';
    viewModalContent.appendChild(elementCon);

    let totalitems = 25;
    const totalItemsElement = document.createElement('h3');
    totalItemsElement.textContent = 'Total Items in Order: ' + totalitems;
    elementCon.appendChild(totalItemsElement);

    const totalPriceElement = document.createElement('h2');
    totalPriceElement.textContent = 'Total Order Price :£' + module.Price + '.00';
    elementCon.appendChild(totalPriceElement);
    
    const formElement = document.createElement('form');
    formElement.id = 'editForm';
    viewModalContent.appendChild(formElement);

    // const itemCon = document.createElement('div');
    // itemCon.className = 'item-con';
    // formElement.appendChild(itemCon);

    if (type === 'order') {
        const itemCon = document.createElement('div');
        itemCon.className = 'item-con';
        formElement.appendChild(itemCon);
    
        // Assume you want to create 10 itemDataCon elements
        for (let i = 1; i <= totalitems; i++) {
            const itemDataCon = document.createElement('div');
            itemDataCon.className = 'item-data-con';
            itemCon.appendChild(itemDataCon);
    
            const itemIdElement = document.createElement('h3');
            itemIdElement.className = 'item-data-txt';
            itemIdElement.textContent = i; // Assuming you want IDs like 01, 02, ..., 10
            itemDataCon.appendChild(itemIdElement);
    
            const itemNameElement = document.createElement('h3');
            itemNameElement.className = 'item-data-txt';
            itemNameElement.textContent = 'Item ' + i; // Adjust this based on your data
            itemDataCon.appendChild(itemNameElement);
    
            const itemQuantityElement = document.createElement('h3');
            itemQuantityElement.className = 'item-data-txt';
            itemQuantityElement.textContent = '03'; // Set your quantity accordingly
            itemDataCon.appendChild(itemQuantityElement);
    
            const itemIndPriceElement = document.createElement('h3');
            itemIndPriceElement.className = 'item-data-txt';
            itemIndPriceElement.textContent = '£10.00'; // Set your individual price accordingly
            itemDataCon.appendChild(itemIndPriceElement);
    
            const itemTotPriceElement = document.createElement('h3');
            itemTotPriceElement.className = 'item-data-txt';
            itemTotPriceElement.textContent = '£30.00'; // Set your total price accordingly
            itemDataCon.appendChild(itemTotPriceElement);
    
            const editDelBtnCon = document.createElement('div');
            editDelBtnCon.className = 'edit-del-btn-container';
            itemDataCon.appendChild(editDelBtnCon);
    
            const editBtnElement = document.createElement('div');
            editBtnElement.className = 'edit-btn';
            editBtnElement.textContent = 'edit';
            editBtnElement.addEventListener('click', () => {
                console.log('Edit button clicked');
                
                const allItemDataCons = document.querySelectorAll('.item-data-con');
                allItemDataCons.forEach((item) => {
                    if (item !== itemDataCon) {
                        item.style.display = 'none';
                        button1.style.display = 'none';
                        button2.style.display = 'none';
                        editBtnElement.style.display = 'none';
                        delBtnElement.style.display = 'none';
                        itemIdElement.style.fontSize = '1.5rem';
                        itemIndPriceElement.style.fontSize = '1.5rem';
                        itemNameElement.style.fontSize = '1.5rem';
                        itemQuantityElement.style.fontSize = '1.5rem';
                        itemTotPriceElement.style.fontSize = '1.5rem';
                    }
                });
            
                
                const newDiv = document.createElement('div');
                newDiv.className = 'item-edit-con';
                newDiv.style.width = '60vw';
                newDiv.style.height = '50vh';
                
                const editOptionsSelect = document.createElement('select');
                editOptionsSelect.className = 'selector';
                editOptionsSelect.addEventListener('change', () => {
                    const selectedOption = editOptionsSelect.value;
            
                    newDiv0.style.display = 'none';
                    newDiv1.style.display = 'none';
            
                    if (selectedOption === 'editQuantity') {
                        newDiv0.style.display = 'block';
                    } else if (selectedOption === 'editUnitPrice') {
                        newDiv1.style.display = 'block';
                    } else if (selectedOption === 'editBoth') {
                        newDiv0.style.display = 'block';
                        newDiv1.style.display = 'block';
                    }
                }); 
            
                const editOption1 = document.createElement('option');
                editOption1.value = 'editQuantity';
                editOption1.text = 'Edit Quantity';
                editOptionsSelect.appendChild(editOption1);
            
                const editOption2 = document.createElement('option');
                editOption2.value = 'editUnitPrice';
                editOption2.text = 'Edit Unit Price';
                editOptionsSelect.appendChild(editOption2);
            
                const editOption3 = document.createElement('option');
                editOption3.value = 'editBoth';
                editOption3.text = 'Edit Both';
                editOptionsSelect.appendChild(editOption3);
            
                newDiv.appendChild(editOptionsSelect);
            
                const newDiv0 = document.createElement('div');
                newDiv0.className = 'item-edit-con-row';
                newDiv0.style.display = 'none'; 

                const itemQtyEdit = document.createElement('h2');
                itemQtyEdit.textContent = `Item Quantity:`;
                newDiv0.appendChild(itemQtyEdit);
            
                const itemQuantityInput = document.createElement('input');
                itemQuantityInput.placeholder = 'Enter New Quantity';
                newDiv0.appendChild(itemQuantityInput);
            
                newDiv.appendChild(newDiv0);
            
                const newDiv1 = document.createElement('div');
                newDiv1.className = 'item-edit-con-row';
                newDiv1.style.display = 'none'; 

                const itemPriceEdit = document.createElement('h2');
                itemPriceEdit.textContent = `Item Price:`;
                newDiv1.appendChild(itemPriceEdit);
            
                const itemPriceInput = document.createElement('input');
                itemPriceInput.placeholder = 'Enter New Item Price';
                newDiv1.appendChild(itemPriceInput);
            
                newDiv.appendChild(newDiv1);
            
                const modCanBtnCon = document.createElement('div');
                modCanBtnCon.className = 'button-container';
                newDiv.appendChild(modCanBtnCon);
            
                const updateBtn = document.createElement('button');
                updateBtn.className = 'modalbtn';
                updateBtn.textContent = 'Modify';
                updateBtn.addEventListener('click', () => {
                   
                    console.log('Update button clicked');
                });
                modCanBtnCon.appendChild(updateBtn);
            
                const cancelBtn = document.createElement('button');
                cancelBtn.className = 'modalbtn';
                cancelBtn.textContent = 'Cancel';
                cancelBtn.addEventListener('click', () => {
                    
                    newDiv.style.display = 'none';
                    button1.style.display = 'block';
                        button2.style.display = 'block';
                    editBtnElement.style.display = 'block';
                    delBtnElement.style.display = 'block';
                    itemIdElement.style.fontSize = '0.87rem';
                    itemIndPriceElement.style.fontSize = '0.87rem';
                    itemNameElement.style.fontSize = '0.87rem';
                    itemQuantityElement.style.fontSize = '0.87rem';
                    itemTotPriceElement.style.fontSize = '0.87rem';
                    allItemDataCons.forEach((item) => {
                        item.style.display = 'flex';
                    });
                });
                modCanBtnCon.appendChild(cancelBtn);
            
                itemDataCon.appendChild(newDiv);
            });
            editDelBtnCon.appendChild(editBtnElement);
    
            const delBtnElement = document.createElement('div');
            delBtnElement.className = 'edit-btn';
            delBtnElement.textContent = 'Delete';
            delBtnElement.addEventListener('click', () => {
                console.log('Delete button clicked');
            });
            editDelBtnCon.appendChild(delBtnElement);   
        }
    }
    else{
        console.log('Please pass right module');
    }

    const btnConElement = document.createElement('div');
    btnConElement.className = 'button-container';
    formElement.appendChild(btnConElement);

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
        document.body.style.overflow = 'visible';
        document.body.style.overflowX = 'hidden';
    });
    btnConElement.appendChild(button2);

    modal.style.display = 'block';   
}

export function formatDatabaseDate(rawDateString) {
    const date = new Date(rawDateString);

    const options = { day: 'numeric', month: 'numeric', year: 'numeric' };
    const formatter = new Intl.DateTimeFormat('en-GB', options);

    return formatter.format(date);
}

export function deleteCategory(category) {

    fetch(`http://127.0.0.1:5000/del_category/${category.id}`, {
        method: 'DELETE'
    })
        .then(response => {
            if (response.ok) {
                return response.json();
            }
            throw new Error('Network response was not ok.');
        })
        .then(data => {
            console.log(data.message); // This will log the response from Flask
            // Handle success or perform additional actions based on the response
        })
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
            // Handle errors or show appropriate messages to the user
        });
}


export function confirmDelete(module) {
    deleteCategory(module);
}

