import { Categories, loadCategoryData, loadOrdersData, Orders } from "../admin/data.js";

 const loadNameDiv = document.getElementById("selectedTableInfo");
 if(loadNameDiv){ 
  const customerName = localStorage.getItem("takeawaycustomerName");

  const custName = document.createElement("div");
  custName.className = "info-text";
  custName.innerHTML = 'Name: ' + customerName;
  loadNameDiv.appendChild(custName);

 }

(async () => {
    await loadCategoryData();
  
    // Now you can use Categories array
    var categoryNames = Categories.map(function (category) {
      return category.categoryname;
    });

    var categoryButtonsContainer = document.getElementById("categoryButtonsContainer");
    let iframe_pages = ["../products/items/vegstartercategory.html",
                        "../products/items/nonvegstartercategory.html",
                        "../products/items/seafoodstartercategory.html",
                        "../products/items/vegetablemaincategory.html",
                        "../products/items/seafoodmainscategory.html",
                        "../products/items/chickenmaincategory.html",
                        "../products/items/lambmaincategory.html",
                        "../products/items/chefsspecialcategory.html",
                        "../products/items/classicdishescategory.html",
                        "../products/items/ricecategory.html",
                        "../products/items/naancategory copy.html",
                        "../products/items/extrascategory.html",
                        "../products/items/noodlecategory.html",
                        "../products/items/dessertscategory.html",
                        "../products/items/currysaucecategory.html",
                        "../products/items/curryadongategory.html" 
                    ]
    function openCategoryPage(category, name) {
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