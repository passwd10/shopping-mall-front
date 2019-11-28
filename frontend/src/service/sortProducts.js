const sortProducts = (products,v) => {
    let sortItems = [];

    if (v == 'oreum') {
        sortItems = products.sort((a, b) => {
            return b.price - a.price;
        });
    }
    if (v == 'naerim') {
        sortItems = products.sort((a, b) => {
            return a.price - b.price;
        });
    }
    
    return sortItems;
};