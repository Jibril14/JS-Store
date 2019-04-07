class Product {
    constructor(title, image, desc, price) {
        this.title = title;
        this.imageUrl = image;
        this.description = desc;
        this.price = price;
    }
}

class singleProduct {
    constructor(product, elemclass) {
        this.product = product;
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
        return prodElement;
    }
}

class ProductList {
    products = [
        new Product(
            "A Laptop",
            "file:///C:/Users/ONIGA/Downloads/Product%20images/hpenv.jpg",
            "A soft pillow!",
            19.99
        ),
        new Product(
            "An Earbud",
            "file:///C:/Users/ONIGA/Downloads/Product%20images/earbud.jpg",
            "A carpet which you might like - or not.",
            89.99
        )
    ];
    constructor() {}

    render() {
        const renderHook = document.getElementById("app");
        const prodList = document.createElement("ul");
        prodList.className = "product-list";

        for (const prod of this.products) {
            const singleproduct = new singleProduct(prod);
            const prodEl = singleproduct.render();
            prodList.append(prodEl);
        }
        renderHook.append(prodList);
    }
}

const productL = new ProductList();
productL.render();
