/* =========================================
   FREHIWOT KIDS BOUTIQUE
   JAVASCRIPT
========================================= */


/* =========================================
   PRODUCTS DATABASE
========================================= */

const products = [

    {
        id: 1,
        name: "Floral Summer Twirl Dress",
        category: "girls",
        categoryLabel: "Girls",
        price: 1400,
        priceDisplay: "1,400 ETB",
        badge: "NEW",
        badgeClass: "badge-new",
        bgClass: "bg-pink",

        desc:
            "Soft cotton floral pattern dress designed for everyday comfort and summer play.",

        imageSVG:
            `<svg width="150" height="150" viewBox="0 0 100 100">
                <path
                    d="M30 30 Q50 10 70 30 L85 80 Q50 90 15 80 Z"
                    fill="#FF85A1"/>
                <circle
                    cx="50"
                    cy="55"
                    r="8"
                    fill="#FFFDE7"/>
            </svg>`
    },


    {
        id: 2,
        name: "Casual Denim & Polo Set",
        category: "boys",
        categoryLabel: "Boys",
        price: 1600,
        priceDisplay: "1,600 ETB",
        badge: "BESTSELLER",
        badgeClass: "badge-bestseller",
        bgClass: "bg-blue",

        desc:
            "Comfortable breathable polo shirt paired with elastic-waist soft denim trousers.",

        imageSVG:
            `<svg width="150" height="150" viewBox="0 0 100 100">
                <rect
                    x="25"
                    y="20"
                    width="50"
                    height="35"
                    rx="5"
                    fill="#A2D2FF"/>

                <rect
                    x="30"
                    y="58"
                    width="40"
                    height="35"
                    rx="5"
                    fill="#2D3142"/>
            </svg>`
    },


    {
        id: 3,
        name: "Cozy Cotton Romper",
        category: "baby",
        categoryLabel: "Baby & Toddler",
        price: 950,
        priceDisplay: "950 ETB",
        badge: "POPULAR",
        badgeClass: "badge-popular",
        bgClass: "bg-yellow",

        desc:
            "Ultra-soft full body romper with easy snap buttons for quick dressing.",

        imageSVG:
            `<svg width="150" height="150" viewBox="0 0 100 100">
                <path
                    d="M30 20 C30 20 50 30 70 20
                    L80 60 C80 75 70 85 50 85
                    C30 85 20 75 20 60 Z"
                    fill="#FFEA00"/>
            </svg>`
    },


    {
        id: 4,
        name: "Pastel Knit Cardigan",
        category: "girls",
        categoryLabel: "Girls",
        price: 1300,
        priceDisplay: "1,300 ETB",
        badge: "NEW",
        badgeClass: "badge-new",
        bgClass: "bg-lavender",

        desc:
            "Charming hand-knit look cardigan with colorful buttons, perfect for chilly afternoons.",

        imageSVG:
            `<svg width="150" height="150" viewBox="0 0 100 100">
                <path
                    d="M20 25 L50 35 L80 25
                    L90 50 L75 55 L75 80
                    L25 80 L25 55 L10 50 Z"
                    fill="#C8B6FF"/>
            </svg>`
    },


    {
        id: 5,
        name: "Little Explorer T-Shirt & Shorts",
        category: "boys",
        categoryLabel: "Boys",
        price: 1100,
        priceDisplay: "1,100 ETB",
        badge: "POPULAR",
        badgeClass: "badge-popular",
        bgClass: "bg-mint",

        desc:
            "Fun graphic t-shirt made with 100% organic cotton and matching cotton shorts.",

        imageSVG:
            `<svg width="150" height="150" viewBox="0 0 100 100">

                <rect
                    x="25"
                    y="20"
                    width="50"
                    height="35"
                    rx="4"
                    fill="#B8E0D2"/>

                <rect
                    x="25"
                    y="58"
                    width="50"
                    height="25"
                    rx="4"
                    fill="#FFD166"/>

            </svg>`
    },


    {
        id: 6,
        name: "Teddy Bear Toddler Outfit",
        category: "baby",
        categoryLabel: "Baby & Toddler",
        price: 1250,
        priceDisplay: "1,250 ETB",
        badge: "BESTSELLER",
        badgeClass: "badge-bestseller",
        bgClass: "bg-peach",

        desc:
            "Adorable 2-piece set with teddy bear hood detail and stretch waist bottoms.",

        imageSVG:
            `<svg width="150" height="150" viewBox="0 0 100 100">

                <circle
                    cx="35"
                    cy="25"
                    r="8"
                    fill="#FFD3B6"/>

                <circle
                    cx="65"
                    cy="25"
                    r="8"
                    fill="#FFD3B6"/>

                <rect
                    x="25"
                    y="30"
                    width="50"
                    height="50"
                    rx="10"
                    fill="#FFD3B6"/>

            </svg>`
    },


    {
        id: 7,
        name: "Princess Party Skirt Set",
        category: "girls",
        categoryLabel: "Girls",
        price: 1750,
        priceDisplay: "1,750 ETB",
        badge: "COMING SOON",
        badgeClass: "badge-coming",
        bgClass: "bg-pink",

        desc:
            "Tulle layered skirt with a shimmering top designed for birthday celebrations.",

        imageSVG:
            `<svg width="150" height="150" viewBox="0 0 100 100">

                <path
                    d="M30 25 L70 25 L65 45 L35 45 Z"
                    fill="#FFFFFF"/>

                <path
                    d="M20 48 L80 48 L90 85 L10 85 Z"
                    fill="#FF85A1"/>

            </svg>`
    },


    {
        id: 8,
        name: "Classic Smart Blazer Jacket",
        category: "boys",
        categoryLabel: "Boys",
        price: 2100,
        priceDisplay: "2,100 ETB",
        badge: "NEW",
        badgeClass: "badge-new",
        bgClass: "bg-blue",

        desc:
            "Tailored comfortable lightweight jacket for holiday events and family gatherings.",

        imageSVG:
            `<svg width="150" height="150" viewBox="0 0 100 100">

                <path
                    d="M25 20 L50 35 L75 20
                    L85 80 L15 80 Z"
                    fill="#2D3142"/>

                <path
                    d="M45 35 L50 80 L55 35 Z"
                    fill="#FFFFFF"/>

            </svg>`
    }

];


/* =========================================
   SHOPPING CART
========================================= */

let cart = [];


/* =========================================
   PAGE LOAD
========================================= */

document.addEventListener("DOMContentLoaded", function () {

    renderProducts(products);

    updateCartUI();

});


/* =========================================
   RENDER PRODUCTS
========================================= */

function renderProducts(items) {

    const container =
        document.getElementById("productsGrid");

    if (!container) return;

    container.innerHTML = "";


    if (items.length === 0) {

        container.innerHTML = `
            <p style="
                grid-column: 1/-1;
                text-align:center;
                padding:2rem;
            ">
                No items found in this category.
            </p>
        `;

        return;
    }


    items.forEach(function (product) {

        const card =
            document.createElement("div");

        card.className =
            `product-card ${product.bgClass}`;


        card.innerHTML = `

            <span class="
                product-badge
                ${product.badgeClass}
            ">
                ${product.badge}
            </span>


            <div class="product-img-wrap">

                ${product.imageSVG}

            </div>


            <div>

                <span class="product-category">

                    ${product.categoryLabel}

                </span>


                <h3 class="product-title">

                    ${product.name}

                </h3>


                <p class="product-desc">

                    ${product.desc}

                </p>

            </div>


            <div class="product-footer">

                <div class="product-price">

                    ${product.priceDisplay}

                </div>


                <button
                    class="btn-view-product"
                    onclick="openModal(${product.id})"
                    aria-label="View Product Details">

                    ➜

                </button>

            </div>

        `;


        container.appendChild(card);

    });

}


/* =========================================
   CATEGORY FILTER
========================================= */

function filterProducts(category, button) {

    if (button) {

        document
            .querySelectorAll(".filter-btn")
            .forEach(function (btn) {

                btn.classList.remove("active");

            });


        button.classList.add("active");

    }


    if (category === "all") {

        renderProducts(products);

        return;

    }


    const filtered =
        products.filter(function (product) {

            return product.category === category;

        });


    renderProducts(filtered);

}


/* =========================================
   PRODUCT MODAL
========================================= */

function openModal(id) {

    const product =
        products.find(function (item) {

            return item.id === id;

        });


    if (!product) return;


    const modal =
        document.getElementById("productModal");

    const modalContent =
        document.getElementById("modalContent");


    modalContent.innerHTML = `

        <div style="
            text-align:center;
            margin-bottom:1.5rem;
        ">


            <div style="
                background:var(--cream-bg);
                border-radius:20px;
                padding:2rem;
                display:inline-block;
                margin-bottom:1rem;
            ">

                ${product.imageSVG}

            </div>


            <br>


            <span
                class="
                    product-badge
                    ${product.badgeClass}
                "
                style="
                    position:static;
                    display:inline-block;
                    margin-bottom:0.5rem;
                "
            >

                ${product.badge}

            </span>


            <h2 style="
                font-family:var(--font-heading);
                font-size:1.8rem;
                margin-top:0.5rem;
            ">

                ${product.name}

            </h2>


            <p style="
                color:var(--purple);
                font-size:1.5rem;
                font-weight:700;
                margin:0.5rem 0;
            ">

                ${product.priceDisplay}

            </p>


            <p style="
                color:var(--text-muted);
                font-size:0.95rem;
                margin-bottom:1.5rem;
            ">

                ${product.desc}

            </p>

        </div>


        <div style="
            margin-bottom:1.5rem;
        ">

            <label style="
                font-weight:700;
                font-size:0.9rem;
                display:block;
                margin-bottom:0.5rem;
            ">

                Select Size:

            </label>


            <div style="
                display:flex;
                gap:0.5rem;
                justify-content:center;
                flex-wrap:wrap;
            ">

                <button
                    class="size-option"
                    onclick="selectSize(this)">

                    1-2 Yrs

                </button>


                <button
                    class="size-option"
                    onclick="selectSize(this)">

                    3-4 Yrs

                </button>


                <button
                    class="size-option"
                    onclick="selectSize(this)">

                    5-6 Yrs

                </button>

            </div>

        </div>


        <div style="
            display:flex;
            gap:1rem;
        ">

            <button
                class="btn-primary"
                style="
                    flex:1;
                    justify-content:center;
                "
                onclick="addToCart(${product.id})">

                Add To Bag 🛍️

            </button>

        </div>

    `;


    modal.classList.add("active");

}


/* =========================================
   SELECT SIZE
========================================= */

function selectSize(button) {

    document
        .querySelectorAll(".size-option")
        .forEach(function (item) {

            item.style.background = "";
            item.style.color = "";

        });


    button.style.background =
        "var(--purple)";

    button.style.color =
        "white";

}


/* =========================================
   CLOSE MODAL
========================================= */

function closeModal() {

    const modal =
        document.getElementById("productModal");

    modal.classList.remove("active");

}


/* =========================================
   ADD TO CART
========================================= */

function addToCart(id) {

    const product =
        products.find(function (item) {

            return item.id === id;

        });


    if (!product) return;


    cart.push(product);


    updateCartUI();

    closeModal();

    showToast(
        `Added "${product.name}" to shopping bag! 🎈`
    );

}


/* =========================================
   UPDATE CART
========================================= */

function updateCartUI() {

    const count =
        document.getElementById("cartCount");

    const container =
        document.getElementById("cartItemsContainer");

    const totalElement =
        document.getElementById("cartTotal");


    if (!count || !container || !totalElement) {
        return;
    }


    count.textContent = cart.length;


    container.innerHTML = "";


    let total = 0;


    if (cart.length === 0) {

        container.innerHTML = `

            <p class="empty-cart">

                Your bag is currently empty.

            </p>

        `;

    }


    else {

        cart.forEach(function (item, index) {

            total += item.price;


            const cartItem =
                document.createElement("div");


            cartItem.className =
                "cart-item";


            cartItem.innerHTML = `

                <div style="width:45px;">

                    ${item.imageSVG}

                </div>


                <div class="cart-item-info">

                    <div>

                        ${item.name}

                    </div>


                    <div>

                        ${item.priceDisplay}

                    </div>

                </div>


                <button
                    onclick="removeFromCart(${index})"
                    aria-label="Remove item">

                    ✕

                </button>

            `;


            container.appendChild(cartItem);

        });

    }


    totalElement.textContent =
        total.toLocaleString() + " ETB";

}


/* =========================================
   REMOVE FROM CART
========================================= */

function removeFromCart(index) {

    if (
        index < 0 ||
        index >= cart.length
    ) {
        return;
    }


    const removed =
        cart[index];


    cart.splice(index, 1);


    updateCartUI();


    showToast(
        `"${removed.name}" removed from your bag.`
    );

}


/* =========================================
   TOGGLE CART
========================================= */

function toggleCart() {

    const drawer =
        document.getElementById("cartDrawer");


    drawer.classList.toggle("active");

}


/* =========================================
   WHATSAPP CHECKOUT
========================================= */

function checkoutWhatsApp() {

    if (cart.length === 0) {

        alert(
            "Your shopping bag is empty!"
        );

        return;

    }


    let message =
        "Hello FREHIWOT Kids Boutique! " +
        "I would like to order:%0A%0A";


    cart.forEach(function (item, index) {

        message +=
            `${index + 1}. ` +
            `${item.name} ` +
            `(${item.priceDisplay})%0A`;

    });


    const total =
        cart.reduce(function (sum, item) {

            return sum + item.price;

        }, 0);


    message +=
        `%0ATotal: ${total.toLocaleString()} ETB`;


    /*
       IMPORTANT:
       Replace 251911000000 below
       with the actual WhatsApp number.

       Example:
       Ethiopia number:
       0911 123 4567

       becomes:
       2519111234567
    */


    const phoneNumber =
        "251911000000";


    const whatsappURL =
        `https://wa.me/${phoneNumber}?text=${message}`;


    window.open(
        whatsappURL,
        "_blank"
    );

}


/* =========================================
   TOAST NOTIFICATION
========================================= */

function showToast(message) {

    const toast =
        document.getElementById("toast");


    if (!toast) return;


    toast.textContent =
        message;


    toast.classList.add("show");


    setTimeout(function () {

        toast.classList.remove("show");

    }, 3000);

}


/* =========================================
   MOBILE NAVIGATION
========================================= */

function toggleNav() {

    const nav =
        document.getElementById("navLinks");


    nav.classList.toggle("active");

}


function closeNav() {

    const nav =
        document.getElementById("navLinks");


    nav.classList.remove("active");

}


/* =========================================
   CLOSE MODAL WITH ESCAPE KEY
========================================= */

document.addEventListener(
    "keydown",
    function (event) {

        if (event.key === "Escape") {

            closeModal();

        }

    }
);


/* =========================================
   CLOSE MODAL WHEN CLICKING OUTSIDE
========================================= */

document.addEventListener(
    "click",
    function (event) {

        const modal =
            document.getElementById("productModal");


        if (
            event.target ===
            modal
        ) {

            closeModal();

        }

    }
);
