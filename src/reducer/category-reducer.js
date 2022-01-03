// setup of initial state
let initialState = {
    categories: [
      { name: 'FOOD', description: 'this is a collection of food products' },
      { name: 'ELECTRONICS', description: 'this is a collection of electronics products' }
    ],
    products: [],
    activeCategory : ''
  }
  
  const changeCategory = (state = initialState, action) => {
    let { type, payload } = action;
  
    switch(type) {
  
      case 'FOOD':
        let activeCategory = 'FOOD';
        let categories = state.categories;
        let fetched = payload;      
        let products = fetched.filter(product => product.category === activeCategory);
  
        return { activeCategory, categories, products };
  
      case 'ELECTRONICS':
        let active = 'ELECTRONICS';
        let fetchedProducts = payload;      
        let prods = fetchedProducts.filter(product => product.category === active);
  
        return { activeCategory: active, categories: state.categories, products: prods};  
  
      case 'ADDCART':
        let items = state.products.map(product => {
          if (product.name === payload.name) {
            return { id: product.id, category: product.category, name: product.name, description: product.description, price: product.price, inventory: product.inventory - 1, image: product.image };
          }
          return product;
        })  
  
        return {categories: state.categories, activeCategory: state.activeCategory, products: items};
  
      case 'REMOVECART':
        let allItems = state.products.map(product => {
          if (product.name === payload.name) {
            return { id: product.id, category: product.category, name: product.name, description: product.description, price: product.price, inventory: product.inventory + 1, image: product.image };
          }
          return product;
        })  
  
        return { categories: state.categories, activeCategory: state.activeCategory, products: allItems};
  
      case 'GET':
        let fetchedProds = payload;
        let activeCat = 'ALL PRODUCTS';
        return { categories: state.categories, activeCategory: activeCat, products: fetchedProds};
      
      default:
        return state;
    }
  }
  
  export default changeCategory;