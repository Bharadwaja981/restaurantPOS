import { Categories, loadCategoryData } from "../../admin/data.js";

window.addEventListener('message', function (event) {
    if (event.origin === window.location.origin) {
        var data = event.data;
        createNewDiv(data);
    }
});

function createNewDiv(data) {
    if (data && data.itemName && data.quantity && data.price && data.totalPrice) {
        var itemDivContainer = document.getElementById('item-div');

        var newItemDiv = document.createElement('div');
        newItemDiv.className = 'item-add mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect btn btn-lg mb-1 custom-button';
        newItemDiv.id = 'item-add i-t';

        var itemNameDiv = document.createElement('div');
        itemNameDiv.className = 'iname-item';
        itemNameDiv.textContent = data.itemName;

        var nameSpaceDiv = document.createElement('div');
        nameSpaceDiv.className = 'name-space';

        var quantityDiv = document.createElement('div');
        quantityDiv.className = 'name-text';
        quantityDiv.id = 'qty';
        quantityDiv.textContent = data.quantity;

        var unitPriceDiv = document.createElement('div');
        unitPriceDiv.className = 'name-text';
        unitPriceDiv.id = 'unit-price';
        unitPriceDiv.textContent = data.price;

        var totalPriceDiv = document.createElement('div');
        totalPriceDiv.className = 'name-text';
        totalPriceDiv.id = 'price';
        totalPriceDiv.textContent = data.totalPrice;

        nameSpaceDiv.appendChild(quantityDiv);
        nameSpaceDiv.appendChild(unitPriceDiv);
        nameSpaceDiv.appendChild(totalPriceDiv);

        newItemDiv.appendChild(itemNameDiv);
        newItemDiv.appendChild(nameSpaceDiv);

        itemDivContainer.appendChild(newItemDiv);

        var totalItemsDiv = document.getElementById('totalItems');
        totalItemsDiv.textContent = itemDivContainer.children.length;

        var priceDiv = document.getElementById('totalprice');
        var totalItemsPrice = Array.from(itemDivContainer.children).reduce(function (total, item) {

            var itemPrice = parseFloat(item.querySelector('.name-text#price').textContent.replace('£', ''));
            return total + itemPrice;
        }, 0);

        priceDiv.textContent = '£' + totalItemsPrice.toFixed(2);
    
    } 
}

(async () => {
    await loadCategoryData();
  
    // Now you can use Categories array
    var categoryNames = Categories.map(function (category) {
      return category.categoryname;
    });

    var categoryButtonsContainer = document.getElementById("categoryButtonsContainer");
    let iframe_pages = [ "../items/vegstartercategory.html",
                     "../items/nonvegstartercategory.html",
                     "../items/seafoodstartercategory.html",
                     "../items/vegetablemaincategory.html",
                     "../items/seafoodmainscategory.html",
                     "../items/chickenmaincategory.html",
                     "../items/lambmaincategory.html",
                     "../items/chefsspecialcategory.html",
                     "../items/classicdishescategory.html",
                     "../items/ricecategory.html",
                     "../items/naancategory copy.html",
                     "../items/extrascategory.html",
                     "../items/noodlecategory.html",
                     "../items/dessertscategory.html",
                     "../items/currysaucecategory.html",
                     "../items/curryadongategory.html" 
                    ]
    function openCategoryPage(category) {
    var iframe = document.getElementById("itemlist");
    iframe.setAttribute("src", iframe_pages[category]);
    iframe.style.width = '100%';
    iframe.style.height = "100%";
    iframe.style.border = 'none';

    var leftContentContainer = document.getElementById("product-names");

    leftContentContainer.appendChild(iframe);
    document.body.appendChild(modal);

    modal.style.display = 'Hidden';
    }

    var modal = createModal();  

    function createModal() {
        var modal = document.createElement('div');

        modal.className = 'modal';
        
        return modal;
    }

    function handleClear(){
        var itemDiv = document.getElementById('item-div');
        itemDiv.innerHTML = '';
        var priceDiv = document.getElementById('totalprice');
        priceDiv.innerHTML = '';
        var totalItemsDiv = document.getElementById('totalItems');
        totalItemsDiv.innerHTML = '';
    }

    function handlePay(){
        var check = document.getElementById('item-div');
        if (check.children.length != 0){
            window.location.href = '../../pay/pay.html';
        }
        else{
            alert('Please add items to cart');
        }
    }

    for (let i = 0; i < categoryNames.length; i++) {
        var button = document.createElement("button");
        button.className = "mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect btn-lg mb-1 custom-button";
        button.style.width = "10.00rem";
        button.style.height = "5.00rem";
        button.textContent = categoryNames[i];
    
        button.style.marginRight = "10px";
        button.style.marginBottom = "10px";
        button.style.marginTop = "10px";
        button.style.marginLeft = "10px";
    
        categoryButtonsContainer.appendChild(button);
        button.onclick = function () {
          openCategoryPage(i);
        };
    }
})();