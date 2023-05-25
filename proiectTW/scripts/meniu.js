const produse_pizza=[{
    image:'images/margherita.jpg',
    name:'Pizza Margherita',
    price:3250,
    id:111
},{
    image:'images/diavola.jpg',
    name:'Pizza Diavola',
    price: 3550,
    id:222
},{
    image:'images/artigianale.jpg',
    name:'Pizza Artigianale',
    price: 4050,
    id:333
},{
    image:'images/chorizo.jpg',
    name:'Pizza Chorizo',
    price: 3550,
    id:444
},{
    image:'images/rustica.jpg',
    name:'Pizza Rustica',
    price: 3850,
    id:555
},{
    image:'images/clasica.jpg',
    name:'Pizza Clasica',
    price: 3650,
    id:666
},{
    image:'images/dorna.jpg',
    name:'Apa plata Dorna 0.5L',
    price: 500,
    id:777
},{
    image:'images/cola.jpg',
    name:'Coca Cola 330Ml',
    price: 750,
    id:888
},{
    image:'images/heineken.jpg',
    name:'Heineken 330Ml',
    price: 850,
    id:999
}
];

let productsHTML='';



produse_pizza.forEach((product)=>{
    productsHTML+=`
        
        <div class="product-container">
            <div class="product-image-container">
            <img class="product-image"
                src="${product.image}">
            </div>

            <div class="product-name ">
            ${product.name}
            </div>

            <div class="product-price">
            ${product.price/100} lei
            </div>

            

            <div class="product-spacer"></div>


            <button class="add-to-cart-button button-primary js-add-to-cart"
            data-product-id="${product.id}">
            Adauga in cos
            </button>
            
        </div>
    `;
    
});


const cart=[];

document.querySelector('.js-products-grid').innerHTML=productsHTML;

document.querySelectorAll('.js-add-to-cart')
    .forEach((button)=>{
        button.addEventListener('click',()=>{
            const productId=button.dataset.productId;
            let matchingItem;
            cart.forEach((item)=>{
                if(productId===item.productId){
                    matchingItem = item;
                }
            });
            

            if(matchingItem){
                matchingItem.quantity+=1;
            }
            else{
                cart.push({
                    productId:productId,
                    quantity:1
                });
            }
            
            let cartQuantity=0;

            cart.forEach((item)=>{
                cartQuantity+=item.quantity;
            })

            document.querySelector('.js-cart-quantity')
                .innerHTML=cartQuantity;
            
        })
    })
