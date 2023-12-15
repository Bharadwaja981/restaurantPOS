
export async function getOrdersData() {
    try {
        const response = await fetch('http://127.0.0.1:5000/get_orders_list');
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching Order data:', error);
        return [];
    }
}

export let Orders;

export async function loadOrdersData() {
    try {
        Orders = await getOrdersData();
        return Orders;
    } catch (error) {
        console.error('Error loading Order data:', error);
    }
}

await loadOrdersData();

export async function getCategoryData() {
    try {
        const response = await fetch('http://127.0.0.1:5000/get_category_list');
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching category data:', error);
        return [];
    }
}

export let Categories;

export async function loadCategoryData() {
    try {
        Categories = await getCategoryData();
        return Categories;
    } catch (error) {
        console.error('Error loading category data:', error);
    }
}

await loadCategoryData();

export async function getItemData() {
    try {
        const response = await fetch('http://127.0.0.1:5000/get_item_list');
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching Item data:', error);
        return [];
    }
}

export let Items;

export async function loadItemData() {
    try {
        Items = await getItemData();
        return Items;
    } catch (error) {
        console.error('Error loading Item data:', error);
    }
}

await loadItemData();