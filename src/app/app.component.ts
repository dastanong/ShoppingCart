import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  pdPagetitle = 'Available Product';
  cartPagetitle = 'My Cart';
  logoImg = 'https://www.mysmartgroup.co.uk/wp-content/uploads/2017/12/1-2-dell-logo-3d-white-png.png'

  allProducts = [
    {
        id: 0,
        price: 800,
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo autem, modi repudiandae nam alias, minima tempore eum dolores itaque illum vero ipsum nesciunt sed quaerat magni laboriosam magnam? Et, dolorem.",
        image: "https://ssl-product-images.www8-hp.com/digmedialib/prodimg/lowres/c05962448.png",
        selected: false,
        currentQty: 0
    },
    {
        id: 1,
        price: 1000,
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo autem, modi repudiandae nam alias, minima tempore eum dolores itaque illum vero ipsum nesciunt sed quaerat magni laboriosam magnam? Et, dolorem.",
        image: "https://ssl-product-images.www8-hp.com/digmedialib/prodimg/lowres/c05962448.png",
        selected: false,
        currentQty: 0
    },
    {
        id: 2,
        price: 600,
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo autem, modi repudiandae nam alias, minima tempore eum dolores itaque illum vero ipsum nesciunt sed quaerat magni laboriosam magnam? Et, dolorem.",
        image: "https://ssl-product-images.www8-hp.com/digmedialib/prodimg/lowres/c05962448.png",
        selected: false,
        currentQty: 0
    },
    {
        id: 3,
        price: 2000,
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo autem, modi repudiandae nam alias, minima tempore eum dolores itaque illum vero ipsum nesciunt sed quaerat magni laboriosam magnam? Et, dolorem.",
        image: "https://ssl-product-images.www8-hp.com/digmedialib/prodimg/lowres/c05962448.png",
        selected: false,
        currentQty: 0
    },
    {
        id: 4,
        price: 3000,
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo autem, modi repudiandae nam alias, minima tempore eum dolores itaque illum vero ipsum nesciunt sed quaerat magni laboriosam magnam? Et, dolorem.",
        image: "https://ssl-product-images.www8-hp.com/digmedialib/prodimg/lowres/c05962448.png",
        selected: false,
        currentQty: 0
    },
    {
        id: 5,
        price: 4000,
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo autem, modi repudiandae nam alias, minima tempore eum dolores itaque illum vero ipsum nesciunt sed quaerat magni laboriosam magnam? Et, dolorem.",
        image: "https://ssl-product-images.www8-hp.com/digmedialib/prodimg/lowres/c05962448.png",
        selected: false,
        currentQty: 0
    },
    {
        id: 6,
        price: 8000,
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo autem, modi repudiandae nam alias, minima tempore eum dolores itaque illum vero ipsum nesciunt sed quaerat magni laboriosam magnam? Et, dolorem.",
        image: "https://ssl-product-images.www8-hp.com/digmedialib/prodimg/lowres/c05962448.png",
        selected: false,
        currentQty: 0
    },
    {
        id: 7,
        price: 200,
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo autem, modi repudiandae nam alias, minima tempore eum dolores itaque illum vero ipsum nesciunt sed quaerat magni laboriosam magnam? Et, dolorem.",
        image: "https://ssl-product-images.www8-hp.com/digmedialib/prodimg/lowres/c05962448.png",
        selected: false,
        currentQty: 0
    },
    {
        id: 8,
        price: 800,
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo autem, modi repudiandae nam alias, minima tempore eum dolores itaque illum vero ipsum nesciunt sed quaerat magni laboriosam magnam? Et, dolorem.",
        image: "https://ssl-product-images.www8-hp.com/digmedialib/prodimg/lowres/c05962448.png",
        selected: false,
        currentQty: 0
    },
    {
        id: 9,
        price: 500,
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo autem, modi repudiandae nam alias, minima tempore eum dolores itaque illum vero ipsum nesciunt sed quaerat magni laboriosam magnam? Et, dolorem.",
        image: "https://ssl-product-images.www8-hp.com/digmedialib/prodimg/lowres/c05962448.png",
        selected: false,
        currentQty: 0
    },
    {
        id: 10,
        price: 20,
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo autem, modi repudiandae nam alias, minima tempore eum dolores itaque illum vero ipsum nesciunt sed quaerat magni laboriosam magnam? Et, dolorem.",
        image: "https://ssl-product-images.www8-hp.com/digmedialib/prodimg/lowres/c05962448.png",
        selected: false,
        currentQty: 0
    },
    {
        id: 11,
        price: 9999,
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo autem, modi repudiandae nam alias, minima tempore eum dolores itaque illum vero ipsum nesciunt sed quaerat magni laboriosam magnam? Et, dolorem.",
        image: "https://ssl-product-images.www8-hp.com/digmedialib/prodimg/lowres/c05962448.png",
        selected: false,
        currentQty: 0
    }
]
  allCarts = []

  productList = Object.keys(this.allProducts)
  cartList = Object.keys(this.allCarts)

  quantity = 0
  maxQty = 10
  totalPrice = 0
  showProduct : boolean = false
  showCart : boolean = false
  showQty : boolean = false
  hideSelect : boolean = true

    displayList() {
        this.showProduct = true
        console.log(this.showProduct)
        if(this.showProduct = true) {
            this.showCart = false
            //console.log(this.showCart)
        }
    }

    displayCart() {
        this.showCart = true
        console.log(this.showCart)
        if(this.showCart = true) {
            this.showProduct = false
            //console.log(this.showProduct)
        }
    }

    addQuantity(index: number) {
        if(index == this.allProducts[index].id && this.allProducts[index].selected == true) {
            if(this.allProducts[index].currentQty == 0 || this.allProducts[index].currentQty < this.maxQty) {
                this.quantity++
                console.log(this.quantity)
                return this.quantity
            }
        }
    }

    minusQuantity(index: number) {
        if(index == this.allProducts[index].id && this.allProducts[index].selected == true) {
            if(this.quantity > 0) {
                this.quantity--
                console.log(this.quantity)
                return this.quantity
            }
        }
    }
 
    checkprdId(index: number) {
        if(index == this.allProducts[index].id) {
            this.allProducts[index].selected = true
            if(this.allProducts[index].selected == true) {
                index = this.allProducts[index].id
                this.showQty = true
                this.hideSelect = false
                console.log(index)
                console.log(this.allProducts[index].price)
                console.log("Selected")
                console.log(this.allProducts[index].selected)
            }
        }
    }

    selectedColor(index: number): string {
        if(index == this.allProducts[index].id && this.allProducts[index].selected == true) {
            return "#E7E7E9"
        }
    }

    cancelSelect(index: number) {
        if(index == this.allProducts[index].id && this.allProducts[index].selected == true) {
            this.allProducts[index].selected = false
            this.showQty = false
            this.hideSelect = true
            this.quantity = 0
            this.allProducts[index].currentQty = this.quantity
            console.log("Unselected")
        }
    }

    addToCart(index: number) {
        if(this.allProducts[index].selected == true && this.quantity > 0) {
            if(index == this.allProducts[index].id) {
                this.allProducts[index].currentQty = this.quantity
                this.allCarts.push(
                    {
                        id: this.allProducts[index].id,
                        image: this.allProducts[index].image,
                        description: this.allProducts[index].description,
                        price: this.allProducts[index].price,
                        currentQty: this.allProducts[index].currentQty
                    },
                )
            }
            console.log(this.allCarts)
            alert("Item added to Cart. Please Click on My Cart to view your item.")
            this.allProducts[index].selected = false
            if(this.allProducts[index].selected == false) {
                this.showQty = false
                this.hideSelect = true
                this.quantity = 0
            }
            this.totalPrice = this.totalPrice + (this.allProducts[index].currentQty*this.allProducts[index].price)
        } else {
            alert("Please select at least 1 quantity for the item.")
        }
    }

    clearAllCart(index: number) {
        for(let i = 0; i < this.allCarts.length; i++) {
            index = this.allCarts[i].id
            this.allCarts[index].currentQty = 0
            this.allProducts[index].currentQty = this.allCarts[index].currentQty
            this.totalPrice = 0
        }
        this.allCarts = []
    }

    removeItem(index: number) {
        if(index == this.allCarts[index].id && this.allCarts[index].currentQty > 0) {
            this.totalPrice = this.totalPrice - (this.allCarts[index].currentQty*this.allCarts[index].price)
            this.allCarts[index].currentQty = 0
            this.allProducts[index].currentQty = this.allCarts[index].currentQty
        }
    }

}

