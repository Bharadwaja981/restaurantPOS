// export const Orders = [
//     {
//         productName: 'JavaScript Tutorial',
//         productNumber: '85743',
//         paymentStatus: 'Due',
//         status: 'Pending'
//     },
//     {
//         productName: 'CSS Full Course',
//         productNumber: '97245',
//         paymentStatus: 'Refunded',
//         status: 'Declined'
//     },
//     {
//         productName: 'Flex-Box Tutorial',
//         productNumber: '36452',
//         paymentStatus: 'Paid',
//         status: 'Active'
//     },
// ]

export async function getOrdersData() {
    try {
        const response = await fetch('http://127.0.0.1:5000/get_orders_list');
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching category data:', error);
        return [];
    }
}

export let Orders;

export async function loadOrdersData() {
    try {
        Orders = await getOrdersData();
        return Orders;
    } catch (error) {
        console.error('Error loading category data:', error);
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
        console.error('Error fetching category data:', error);
        return [];
    }
}

export let Items;

export async function loadItemData() {
    try {
        Items = await getItemData();
        return Items;
    } catch (error) {
        console.error('Error loading category data:', error);
    }
}

await loadItemData();

// export const Items = [
//     {
//         itemId: '01',
//         itemName: 'Cocktail Samosa (8 pieces)',
//         price: '£4.00',
//         categoryId: '1'
//     },
//     {
//         itemId: '02',
//         itemName: 'Veg Samosa',
//         price: '£4.50',
//         categoryId: '1'
//     },
//     {
//         itemId: '03',
//         itemName: 'Onion Bhajia',
//         price: '£6.00',
//         categoryId: '1'
//     },
//     {
//         itemId: '04',
//         itemName: 'Chana Dry Fry',
//         price: '£6.00',
//         categoryId: '1'
//     },
//     {
//         itemId: '05',
//         itemName: 'Crispy Bhajiya',
//         price: '£7.00',
//         categoryId: '1'
//     },
//     {
//         itemId: '06',
//         itemName: 'Chilli Potato',
//         price: '£7.00',
//         categoryId: '1'
//     },
//     {
//         itemId: '07',
//         itemName: 'Veg Noodles',
//         price: '£7.00',
//         categoryId: '1'
//     },
//     {
//         itemId: '08',
//         itemName: 'Mogo (Chilli)',
//         price: '£7.00',
//         categoryId: '1'
//     },
//     {
//         itemId: '09',
//         itemName: 'Mogo (Jeera)',
//         price: '£7.00',
//         categoryId: '1'
//     },
//     {
//         itemId: '10',
//         itemName: 'Mogo (Plain)',
//         price: '£7.00',
//         categoryId: '1'
//     },
//     {
//         itemId: '11',
//         itemName: 'Chilli Mashroom',
//         price: '£7.50',
//         categoryId: '1'
//     },
//     {
//         itemId: '12',
//         itemName: 'Chilli Paneer',
//         price: '£7.50',
//         categoryId: '1'
//     },
//     {
//         itemId: '13',
//         itemName: 'Aubergine Stiry Fry',
//         price: '£7.50',
//         categoryId: '1'
//     },
//     {
//         itemId: '14',
//         itemName: 'Paneer Noodles',
//         price: '£8.00',
//         categoryId: '1'
//     },
//     {
//         itemId: '15',
//         itemName: 'Vegetable Tikka (Soya)',
//         price: '£8.00',
//         categoryId: '1'
//     },
//     {
//         itemId: '16',
//         itemName: 'Paneer Shaslik',
//         price: '£8.50',
//         categoryId: '1'
//     },
//     {
//         itemId: '17',
//         itemName: 'Mix Veg Sizzler (Reg)',
//         price: '£11.00',
//         categoryId: '1'
//     },
//     {
//         itemId: '18',
//         itemName: 'Mogo Paneer Sizzler (Reg)',
//         price: '£11.00',
//         categoryId: '1'
//     },
//     {
//         itemId: '19',
//         itemName: 'Mix Veg Sizzler (Large)',
//         price: '£15.00',
//         categoryId: '1'
//     },
//     {
//         itemId: '20',
//         itemName: 'Mogo Paneer Sizzler (Large)',
//         price: '£15.00',
//         categoryId: '1'
//     }
// ]