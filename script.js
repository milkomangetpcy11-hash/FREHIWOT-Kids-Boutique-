/* =========================================
   FREHIWOT KIDS BOUTIQUE
   COLLECTION JAVASCRIPT
========================================= */
/* =========================================
   COLLECTIONS
========================================= */
const products = [
    {
        id: 1,
        name: "Kids' T-Shirts",
        category: "tshirts",
        categoryLabel: "T-Shirts",
        priceDisplay: "700 – 1,000 ETB",
        badge: "COLLECTION",
        badgeClass: "badge-new",
        bgClass: "bg-pink",
        desc:
            "Comfortable and playful T-shirts for kids, perfect for everyday wear.",
        imageSVG:
            `<svg width="150" height="150" viewBox="0 0 100 100">
                <path
                    d="M25 25 L40 15 L50 25 L60 15 L75 25
                    L85 40 L70 50 L65 42 L65 85
                    L35 85 L35 42 L30 50 L15 40 Z"
                    fill="#FF85A1"/>
                <circle
                    cx="50"
                    cy="42"
                    r="5"
                    fill="#FFFFFF"/>
            </svg>`
    },
    {
        id: 2,
        name: "Kids' Trousers",
        category: "trousers",
        categoryLabel: "Trousers",
        priceDisplay: "2,500 – 4,000 ETB",
        badge: "COLLECTION",
        badgeClass: "badge-bestseller",
        bgClass: "bg-blue",
        desc:
            "Stylish and comfortable trousers suitable for everyday outfits and special occasions.",
        imageSVG:
            `<svg width="150" height="150" viewBox="0 0 100 100">
                <path
                    d="M25 15 L75 15 L70 85
                    L52 85 L50 50 L48 85
                    L30 85 Z"
                    fill="#A2D2FF"/>
                <line
                    x1="50"
                    y1="15"
                    x2="50"
                    y2="50"
                    stroke="#2D3142"
                    stroke-width="2"/>
            </svg>`
    },
    {
        id: 3,
        name: "Kids' Shoes",
        category: "shoes",
        categoryLabel: "Shoes",
        priceDisplay: "3,000 – 5,000 ETB",
        badge: "COLLECTION",
        badgeClass: "badge-popular",
        bgClass: "bg-yellow",
        desc:
            "Cute and comfortable shoes designed for little feet and everyday adventures.",
        imageSVG:
            `<svg width="150" height="150" viewBox="0 0 100 100">
                <path
                    d="M15 60
                    C25 58 35 65 45 70
                    L75 72
                    C85 73 90 80 85 87
                    L20 87
                    C10 87 8 78 15 60 Z"
                    fill="#FFEA00"/>
                <path
                    d="M20 75 L78 75"
                    stroke="#2D3142"
                    stroke-width="4"/>
            </svg>`
    },
    {
        id: 4,
        name: "Kids' Dresses",
        category: "dresses",
        categoryLabel: "Dresses",
        priceDisplay: "4,000 – 6,000 ETB",
        badge: "COLLECTION",
        badgeClass: "badge-new",
        bgClass: "bg-lavender",
        desc:
            "Beautiful dresses for everyday moments, celebrations and special occasions.",
        imageSVG:
            `<svg width="150" height="150" viewBox="0 0 100 100">
                <path
                    d="M40 15
                    L60 15
                    L65 35
                    L85 85
                    L15 85
                    L35 35 Z"
                    fill="#C8B6FF"/>
                <circle
                    cx="50"
                    cy="28"
                    r="4"
                    fill="#FFFFFF"/>
            </svg>`
    },
    {
        id: 5,
        name: "Kids' Cardigans",
        category: "cardigans",
        categoryLabel: "Cardigans",
        priceDisplay: "3,500 – 4,500 ETB",
        badge: "COLLECTION",
        badgeClass: "badge-coming",
        bgClass: "bg-mint",
        desc:
            "Soft and stylish cardigans for keeping little ones comfortable on cooler days.",
        imageSVG:
            `<svg width="150" height="150" viewBox="0 0 100 100">
                <path
                    d="M25 20
                    L50 32
                    L75 20
                    L88 45
                    L75 52
                    L75 85
                    L25 85
                    L25 52
                    L12 45 Z"
                    fill="#B8E0D2"/>
                <line
                    x1="50"
                    y1="32"
                    x2="50"
                    y2="85"
                    stroke="#FFFFFF"
                    stroke-width="3"/>
                <circle
                    cx="50"
                    cy="45"
                    r="3"
                    fill="#2D3142"/>
                <circle
                    cx="50"
                    cy="58"
                    r="3"
                    fill="#2D3142"/>
            </svg>`
    }
];
/* =========================================
   PAGE LOAD
========================================= */
document.addEventListener(
    "DOMContentLoaded",
    function () {
        renderProducts(products);
    }
);
/* =========================================
   RENDER COLLECTIONS
========================================= */
function renderProducts(items) {
    const container =
        document.getElementById("productsGrid");
    if (!container) return;
    container.innerHTML = "";
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
                    aria-label="View collection">
                    ➜
                </button>
            </div>
        `;
        container.appendChild(card);
    });
}
/* =========================================
   FILTER COLLECTIONS
========================================= */
function filterProducts(category, button) {
    document
        .querySelectorAll(".filter-btn")
        .forEach(function (btn) {
            btn.classList.remove("active");
        });
    if (button) {
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
   COLLECTION MODAL
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
                font-family:var(--font-heading);
                font-size:1.7rem;
                font-weight:800;
                margin:0.7rem 0;
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
            <div style="
                background:#F5F0FF;
                border-radius:15px;
                padding:1rem;
                color:var(--text-dark);
                font-size:0.85rem;
            ">
                👀 This collection is currently
                <strong>view-only</strong>.
                <br>
                Ordering will be available soon.
            </div>
        </div>
    `;
    modal.classList.add("active");
}
/* =========================================
   CLOSE MODAL
========================================= */
function closeModal() {
    const modal =
        document.getElementById("productModal");
    if (modal) {
        modal.classList.remove("active");
    }
}
/* =========================================
   MOBILE NAVIGATION
========================================= */
function toggleNav() {
    const nav =
        document.getElementById("navLinks");
    if (nav) {
        nav.classList.toggle("active");
    }
}
function closeNav() {
    const nav =
        document.getElementById("navLinks");
    if (nav) {
        nav.classList.remove("active");
    }
}
/* =========================================
   ESCAPE KEY
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
   CLOSE MODAL OUTSIDE CONTENT
========================================= */
document.addEventListener(
    "click",
    function (event) {
        const modal =
            document.getElementById("productModal");
        if (
            modal &&
            event.target === modal
        ) {
            closeModal();
        }
    }
);
