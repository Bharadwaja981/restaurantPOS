import { Categories, loadCategoryData, loadOrdersData, Orders } from "../../admin/data.js";

 const loadNameDiv = document.getElementById("selectedTableInfo");
 if(loadNameDiv){ 
  const customerName = localStorage.getItem("customerName");
  const selectedTable = localStorage.getItem("selectedTable");

  const custName = document.createElement("div");
  custName.className = "info-text";
  custName.innerHTML = 'Name: ' + customerName;
  loadNameDiv.appendChild(custName);

  const tabNumber = document.createElement("div");
  tabNumber.className = "info-text";
  tabNumber.innerHTML = 'Table Number: '+ selectedTable;
  loadNameDiv.appendChild(tabNumber);
 }

 window.selectedCategory = {
    index: null,
    name: null,
  };

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
    function openCategoryPage(category, name) {
    localStorage.setItem('selectedCategory', JSON.stringify({ index: category+1, name: name }));
    var iframe = document.getElementById("itemlist");
    iframe.setAttribute("src", iframe_pages[category]);
    iframe.style.width = '100%';
    iframe.style.height = "100%";
    iframe.style.border = 'none';

    var categoryNameHeader = document.getElementById('select-cat');
    categoryNameHeader.textContent = name; // Set the header text
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
            var name = categoryNames[i];
          openCategoryPage(i,name);
        };
    }
})();

