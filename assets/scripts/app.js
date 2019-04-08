class Product {
    constructor(title, image, desc, price) {
        this.title = title;
        this.imageUrl = image;
        this.description = desc;
        this.price = price;
    }
}

class ShoppingCart {
    items = [];

    set cartItems(value) {
        this.items = value;
        this.totalOutput.innerHTML = `<h2>Total: \$${this.totalAmount.toFixed(
            2
        )}</h2>`;
    }

    get totalAmount() {
        const sum = this.items.reduce((prevVal, curItem) => {
            return prevVal + curItem.price;
        }, 0);
        return sum;
    }

    addProduct(product) {
        const updatedItems = [...this.items];
        updatedItems.push(product);
        this.cartItems = updatedItems;
    }
    render() {
        console.log("Aprod", this.items);
        const cartElement = document.createElement("section");
        cartElement.innerHTML = `
            <h2>Total: \$${0}</h2>
            <button>Order Now!</button>
        `;
        cartElement.className = "cart";
        this.totalOutput = cartElement.querySelector("h2"); // Another property of this class
        return cartElement;
    }
}

class singleProduct {
    constructor(product) {
        this.product = product;
    }

    addToCart() {
        App.addProductToCart(this.product); // App is a static method created down below
        console.log(this.product);
    }
    render() {
        const prodElement = document.createElement("li");
        prodElement.className = "product-item";
        prodElement.innerHTML = `
        <div>
        
          <img style="maximum-width:600px; height:250px" src="${this.product.imageUrl}" alt="${this.product.title}" >
          <div class="product-item__content">
            <h2>${this.product.title}</h2>
            <h3>\$${this.product.price}</h3>
            <p>${this.product.description}</p>
            <button>Add to Cart</button>
            
          </div>
        </div>
      `;

        const addToCartBtn = prodElement.querySelector("button");
        addToCartBtn.addEventListener("click", this.addToCart.bind(this));
        return prodElement;
    }
}

class ProductList {
    products = [
        new Product(
            "A Laptop",
            "file:///C:/Users/ONIGA/Downloads/Product%20images/hpenv.jpg",
            "Hp laptop 16 gig ram",
            19.99
        ),
        new Product(
            "An Earbud",
            "file:///C:/Users/ONIGA/Downloads/Product%20images/earbud.jpg",
            "Listen to the Amazing sound of life.",
            89.99
        )
    ];
    constructor() {}

    render() {
        const prodList = document.createElement("ul");
        prodList.className = "product-list";

        for (const prod of this.products) {
            const singleproduct = new singleProduct(prod);
            const prodEl = singleproduct.render();
            prodList.append(prodEl);
        }
        return prodList;
    }
}

class Shop {
    render() {
        const rootHook = document.getElementById("app");

        // const cart = new ShoppingCart();
        this.cart = new ShoppingCart(); // Now a property of shop obj
        const cartElement = this.cart.render();
        const productL = new ProductList();
        const productListEl = productL.render();

        rootHook.append(cartElement);
        rootHook.append(productListEl);
    }
}

class App {
    static init() {
        const shop = new Shop();
        shop.render();
        this.cart = shop.cart; // ie Shop.cart
    }

    static addProductToCart(product) {
        const shopIt = new ShoppingCart();
        shopIt.render();
        this.cart.addProduct(product);
    }
}

App.init();
