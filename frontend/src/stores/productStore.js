const DEFAULT_IMAGE = '/../img/cantfind.jpg';

const productStore = {
    _category : [
        {"group" : [ {"id": 1, "title": "견과류"},
                     {"id": 2, "title": "음료"},
                     {"id": 3, "title": "스포츠"},
                     {"id": 4, "title": "화장품"},
                     {"id": 5, "title": "컴퓨터"},]
        }
    ],

    _product : [
        {"id": 1, "title": "가온 호두", "category" : "견과류", "detail" :"호두는 가온호두!","img": "/../img/nut.jpg", "price" : "10000"},
        {"id": 2, "title": "건강담은 고소한 견과", "category" : "견과류", "detail" :"건강을 담은 고소한 견과입니다.", "img": "/../img/nut2.jpg", "price" : "15000"},
        {"id": 3, "title": "김동곤 명인 티백", "img": "/../img/tea.jpg", "category" : "음료", "detail" :"종류별로 드실 수 있습니다", "price" : "10000"},
        {"id": 4, "title": "카카오 킥보드", "img": "/../img/kickboard.jpg", "category" : "스포츠", "detail" :"씽씽~", "price" : "100000"},
        {"id": 5, "title": "비첩 자생 에센스", "img": "/../img/cosmetic.png", "category" : "화장품", "detail" :"피부가 점점 좋아지고있어요", "price" : "50000"},
        {"id": 6, "title": "SSD", "img": "/../img/삼성.jpg", "category" : "컴퓨터", "detail" :"", "price" : "40000"},
        {"id": 7, "title": "농구공", "img": "/../img/농구공.png", "category" : "스포츠", "detail" :"프로들이 사용하는 농구공입니다.", "price" : "80000"},
        {"id": 8, "title": "조던 농구화", "img": "/../img/농구화.jpg", "category" : "스포츠", "detail" :"조던 농구화!!!!", "price" : "180000"},
        
    ],

    get products() {
        return this._product;
    },
    
    getProduct(id) {
        return this.products.find(product => product.id == id);
    },

    getProductTitle(title) {
        return this.products.find(product => product.title == title);
    },

    get categories() {
        return this._category;
    },

    getCategoryTitle(id) {
        return this.categories[0].group.find(category => category.id == id);
    },

    getCategories() {
        return this.categories[0].group;
    },

    createProduct({title, category, detail, img, price}) {
        this._product = [
            ...this._product,
            {
                id: this._product.length + 1,
                title,
                category,
                detail,
                img : DEFAULT_IMAGE,
                price,
            }
        ];  ``
    },
};

export default productStore;