import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Available Product';
  logoImg = 'https://www.mysmartgroup.co.uk/wp-content/uploads/2017/12/1-2-dell-logo-3d-white-png.png'

  allProducts = [
    {
        id: 0,
        price: 800,
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo autem, modi repudiandae nam alias, minima tempore eum dolores itaque illum vero ipsum nesciunt sed quaerat magni laboriosam magnam? Et, dolorem.",
        image: "https://ssl-product-images.www8-hp.com/digmedialib/prodimg/lowres/c05962448.png"
    },
    {
        id: 1,
        price: 1000,
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo autem, modi repudiandae nam alias, minima tempore eum dolores itaque illum vero ipsum nesciunt sed quaerat magni laboriosam magnam? Et, dolorem.",
        image: "https://ssl-product-images.www8-hp.com/digmedialib/prodimg/lowres/c05962448.png"
    },
    {
        id: 2,
        price: 600,
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo autem, modi repudiandae nam alias, minima tempore eum dolores itaque illum vero ipsum nesciunt sed quaerat magni laboriosam magnam? Et, dolorem.",
        image: "https://ssl-product-images.www8-hp.com/digmedialib/prodimg/lowres/c05962448.png"
    },
    {
        id: 3,
        price: 2000,
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo autem, modi repudiandae nam alias, minima tempore eum dolores itaque illum vero ipsum nesciunt sed quaerat magni laboriosam magnam? Et, dolorem.",
        image: "https://ssl-product-images.www8-hp.com/digmedialib/prodimg/lowres/c05962448.png"
    },
    {
        id: 4,
        price: 3000,
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo autem, modi repudiandae nam alias, minima tempore eum dolores itaque illum vero ipsum nesciunt sed quaerat magni laboriosam magnam? Et, dolorem.",
        image: "https://ssl-product-images.www8-hp.com/digmedialib/prodimg/lowres/c05962448.png"
    },
    {
        id: 5,
        price: 4000,
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo autem, modi repudiandae nam alias, minima tempore eum dolores itaque illum vero ipsum nesciunt sed quaerat magni laboriosam magnam? Et, dolorem.",
        image: "https://ssl-product-images.www8-hp.com/digmedialib/prodimg/lowres/c05962448.png"
    },
    {
        id: 6,
        price: 8000,
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo autem, modi repudiandae nam alias, minima tempore eum dolores itaque illum vero ipsum nesciunt sed quaerat magni laboriosam magnam? Et, dolorem.",
        image: "https://ssl-product-images.www8-hp.com/digmedialib/prodimg/lowres/c05962448.png"
    },
    {
        id: 7,
        price: 200,
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo autem, modi repudiandae nam alias, minima tempore eum dolores itaque illum vero ipsum nesciunt sed quaerat magni laboriosam magnam? Et, dolorem.",
        image: "https://ssl-product-images.www8-hp.com/digmedialib/prodimg/lowres/c05962448.png"
    },
    {
        id: 8,
        price: 800,
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo autem, modi repudiandae nam alias, minima tempore eum dolores itaque illum vero ipsum nesciunt sed quaerat magni laboriosam magnam? Et, dolorem.",
        image: "https://ssl-product-images.www8-hp.com/digmedialib/prodimg/lowres/c05962448.png"
    },
    {
        id: 9,
        price: 500,
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo autem, modi repudiandae nam alias, minima tempore eum dolores itaque illum vero ipsum nesciunt sed quaerat magni laboriosam magnam? Et, dolorem.",
        image: "https://ssl-product-images.www8-hp.com/digmedialib/prodimg/lowres/c05962448.png"
    },
    {
        id: 10,
        price: 20,
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo autem, modi repudiandae nam alias, minima tempore eum dolores itaque illum vero ipsum nesciunt sed quaerat magni laboriosam magnam? Et, dolorem.",
        image: "https://ssl-product-images.www8-hp.com/digmedialib/prodimg/lowres/c05962448.png"
    },
    {
        id: 11,
        price: 9999,
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo autem, modi repudiandae nam alias, minima tempore eum dolores itaque illum vero ipsum nesciunt sed quaerat magni laboriosam magnam? Et, dolorem.",
        image: "https://ssl-product-images.www8-hp.com/digmedialib/prodimg/lowres/c05962448.png"
    }
]
   
  productList = Object.keys(this.allProducts)

  cartList = []

  show : boolean = false
  
  displayList() {
    this.show = true
  }

  displayCart(cartList) {
    if (cartList == []) {
        console.log("Cart is empty!")
    }
  }

}

