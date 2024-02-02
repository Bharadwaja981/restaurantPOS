import { Items, loadItemData} from "../../admin/data.js";

var selectedCategory = localStorage.getItem('selectedCategory');
selectedCategory = selectedCategory ? JSON.parse(selectedCategory) : { index: 1, name: 'Default Category' };
var categoryButtonsContainer = document.getElementById("vegstartercontainer");

(async () => {
    await loadItemData();
   
    var filteredItems = Items.filter(item => item.CategoryId === selectedCategory.index.toString());
    
    for (let i = 0; i < filteredItems.length; i++) {
        var button = document.createElement("button");
        button.className = "mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect btn btn-lg mb-1 custom-button";
        button.style.width = "12.375rem";
        button.style.height = "7.375rem";
        var itemNameDiv = document.createElement("div");
        itemNameDiv.className = "item-name";
        itemNameDiv.textContent = filteredItems[i].ItemName;

        // Create a div for the price
        var priceDiv = document.createElement("div");
        priceDiv.className = "item-price";
        priceDiv.textContent = "£ "+ filteredItems[i].Price;

        // Append the item name and price divs to the button
        button.appendChild(itemNameDiv);
        button.appendChild(priceDiv);

        // Manually control the spacing between buttons
        button.style.marginRight = "10px";
        button.style.marginBottom = "10px";
        button.onclick = function () {
                openModal(filteredItems[i].ItemName , filteredItems[i].Price);
            };

        categoryButtonsContainer.appendChild(button);
        
    }
})();

