/* =========================================
   FREHIWOT KIDS BOUTIQUE
   MAIN STYLESHEET
========================================= */
/* =========================================
   GOOGLE FONTS
========================================= */
@import url('https://fonts.googleapis.com/css2?family=Baloo+2:wght@400;500;600;700;800&family=Poppins:wght@300;400;500;600;700&display=swap');
/* =========================================
   ROOT VARIABLES
========================================= */
:root {
    --purple: #7B61FF;
    --purple-dark: #5B43D6;
    --pink: #FF85A1;
    --yellow: #FFEA00;
    --blue: #A2D2FF;
    --mint: #B8E0D2;
    --peach: #FFD3B6;
    --lavender: #C8B6FF;
    --cream-bg: #FFFDF7;
    --white: #FFFFFF;
    --text-dark: #2D3142;
    --text-muted: #777777;
    --border: #EEEEEE;
    --font-heading: 'Baloo 2', cursive;
    --font-body: 'Poppins', sans-serif;
    --shadow:
        0 10px 30px rgba(45, 49, 66, 0.08);
    --shadow-hover:
        0 18px 40px rgba(45, 49, 66, 0.14);
    --radius: 24px;
}
/* =========================================
   RESET
========================================= */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
html {
    scroll-behavior: smooth;
}
body {
    font-family: var(--font-body);
    background: var(--cream-bg);
    color: var(--text-dark);
    line-height: 1.6;
    overflow-x: hidden;
}
button,
a {
    font-family: inherit;
}
button {
    border: none;
    background: none;
    cursor: pointer;
}
a {
    text-decoration: none;
    color: inherit;
}
/* =========================================
   NAVIGATION
========================================= */
.navbar {
    position: sticky;
    top: 0;
    z-index: 1000;
    background: rgba(255, 253, 247, 0.95);
    backdrop-filter: blur(12px);
    border-bottom: 1px solid rgba(0, 0, 0, 0.05);
}
.nav-container {
    width: min(1200px, 92%);
    margin: auto;
    min-height: 80px;
    display: flex;
    align-items: center;
    justify-content: space-between;
}
.logo {
    font-family: var(--font-heading);
    font-size: 1.6rem;
    font-weight: 800;
    color: var(--purple);
    line-height: 0.9;
    display: flex;
    flex-direction: column;
}
.logo span {
    color: var(--pink);
    font-size: 0.75rem;
    letter-spacing: 1px;
    font-weight: 600;
}
.nav-links {
    display: flex;
    align-items: center;
    gap: 2rem;
}
.nav-links a {
    font-weight: 500;
    transition: 0.25s ease;
}
.nav-links a:hover {
    color: var(--purple);
}
.cart-button {
    background: var(--purple);
    color: white;
    padding: 0.7rem 1.1rem;
    border-radius: 50px;
    font-weight: 600;
    transition: 0.25s ease;
}
.cart-button:hover {
    background: var(--purple-dark);
    transform: translateY(-2px);
}
#cartCount {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    width: 22px;
    height: 22px;
    margin-left: 5px;
    border-radius: 50%;
    background: white;
    color: var(--purple);
    font-size: 0.75rem;
    font-weight: 700;
}
.menu-toggle {
    display: none;
    font-size: 1.7rem;
    color: var(--text-dark);
}
/* =========================================
   HERO
========================================= */
.hero {
    position: relative;
    min-height: 650px;
    width: min(1200px, 92%);
    margin: auto;
    display: flex;
    align-items: center;
    padding: 5rem 0;
    overflow: hidden;
}
.hero-content {
    max-width: 650px;
    position: relative;
    z-index: 2;
}
.hero-small-title {
    display: inline-block;
    color: var(--pink);
    font-weight: 700;
    letter-spacing: 3px;
    font-size: 0.85rem;
    margin-bottom: 1rem;
}
.hero h1 {
    font-family: var(--font-heading);
    font-size: clamp(3.5rem, 8vw, 7rem);
    line-height: 0.85;
    font-weight: 800;
    color: var(--text-dark);
}
.hero h1 span {
    color: var(--purple);
}
.hero p {
    max-width: 520px;
    margin: 2rem 0;
    color: var(--text-muted);
    font-size: 1.05rem;
}
.btn-primary {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    background: var(--purple);
    color: white;
    padding: 0.9rem 1.7rem;
    border-radius: 50px;
    font-weight: 600;
    transition: all 0.25s ease;
    cursor: pointer;
}
.btn-primary:hover {
    background: var(--purple-dark);
    transform: translateY(-3px);
    box-shadow: 0 10px 25px rgba(123, 97, 255, 0.25);
}
.hero-decoration {
    position: absolute;
    right: 5%;
    top: 20%;
    font-size: 14rem;
    transform: rotate(10deg);
    opacity: 0.9;
    animation: float 4s ease-in-out infinite;
}
@keyframes float {
    0%,
    100% {
        transform: translateY(0) rotate(10deg);
    }
    50% {
        transform: translateY(-20px) rotate(5deg);
    }
}
/* =========================================
   SHOP SECTION
========================================= */
.shop-section {
    width: min(1200px, 92%);
    margin: auto;
    padding: 6rem 0;
}
.section-heading {
    text-align: center;
    max-width: 700px;
    margin: 0 auto 3rem;
}
.section-heading > span {
    color: var(--pink);
    font-weight: 700;
    font-size: 0.8rem;
    letter-spacing: 3px;
}
.section-heading h2 {
    font-family: var(--font-heading);
    font-size: clamp(2.5rem, 5vw, 4rem);
    line-height: 1;
    margin: 0.8rem 0 1rem;
}
.section-heading p {
    color: var(--text-muted);
}
/* =========================================
   FILTER BUTTONS
========================================= */
.filter-container {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.7rem;
    flex-wrap: wrap;
    margin-bottom: 3rem;
}
.filter-btn {
    padding: 0.65rem 1.2rem;
    border-radius: 50px;
    border: 1px solid var(--border);
    background: white;
    color: var(--text-dark);
    font-weight: 600;
    transition: 0.25s ease;
}
.filter-btn:hover {
    border-color: var(--purple);
    color: var(--purple);
}
.filter-btn.active {
    background: var(--purple);
    color: white;
    border-color: var(--purple);
}
/* =========================================
   PRODUCTS GRID
========================================= */
.products-grid {
    display: grid;
    grid-template-columns:
        repeat(4, 1fr);
    gap: 1.5rem;
}
/* =========================================
   PRODUCT CARD
========================================= */
.product-card {
    position: relative;
    padding: 1.3rem;
    min-height: 430px;
    border-radius: var(--radius);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    overflow: hidden;
    transition: all 0.3s ease;
    box-shadow: var(--shadow);
}
.product-card:hover {
    transform: translateY(-8px);
    box-shadow: var(--shadow-hover);
}
.bg-pink {
    background: #FFF0F4;
}
.bg-blue {
    background: #EDF7FF;
}
.bg-yellow {
    background: #FFFBE6;
}
.bg-lavender {
    background: #F4F0FF;
}
.bg-mint {
    background: #EFFAF6;
}
.bg-peach {
    background: #FFF2EA;
}
/* =========================================
   PRODUCT BADGES
========================================= */
.product-badge {
    position: absolute;
    top: 1rem;
    left: 1rem;
    z-index: 2;
    padding: 0.3rem 0.7rem;
    border-radius: 50px;
    font-size: 0.65rem;
    font-weight: 800;
    letter-spacing: 0.5px;
}
.badge-new {
    background: var(--purple);
    color: white;
}
.badge-bestseller {
    background: var(--yellow);
    color: var(--text-dark);
}
.badge-popular {
    background: var(--pink);
    color: white;
}
.badge-coming {
    background: var(--text-dark);
    color: white;
}
/* =========================================
   PRODUCT IMAGE
========================================= */
.product-img-wrap {
    min-height: 220px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 20px;
    background: rgba(255, 255, 255, 0.5);
    margin-bottom: 1.2rem;
}
.product-img-wrap svg {
    width: 150px;
    height: 150px;
    transition: 0.3s ease;
}
.product-card:hover .product-img-wrap svg {
    transform: scale(1.08);
}
/* =========================================
   PRODUCT TEXT
========================================= */
.product-category {
    font-size: 0.7rem;
    text-transform: uppercase;
    letter-spacing: 1px;
    color: var(--purple);
    font-weight: 700;
}
.product-title {
    font-family: var(--font-heading);
    font-size: 1.35rem;
    line-height: 1.1;
    margin: 0.3rem 0;
}
.product-desc {
    color: var(--text-muted);
    font-size: 0.78rem;
    line-height: 1.5;
}
/* =========================================
   PRODUCT FOOTER
========================================= */
.product-footer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 1rem;
}
.product-price {
    font-family: var(--font-heading);
    font-size: 1.5rem;
    font-weight: 800;
    color: var(--purple);
}
.btn-view-product {
    width: 42px;
    height: 42px;
    border-radius: 50%;
    background: var(--text-dark);
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.2rem;
    transition: 0.25s ease;
}
.btn-view-product:hover {
    background: var(--purple);
    transform: rotate(-10deg) scale(1.05);
}
/* =========================================
   ABOUT SECTION
========================================= */
.about-section {
    background: #F5F0FF;
    padding: 7rem 8%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5rem;
}
.about-content {
    max-width: 600px;
}
.section-label {
    color: var(--pink);
    font-size: 0.8rem;
    letter-spacing: 3px;
    font-weight: 700;
}
.about-content h2 {
    font-family: var(--font-heading);
    font-size: clamp(2.5rem, 5vw, 4.5rem);
    line-height: 0.95;
    margin: 1rem 0 1.5rem;
}
.about-content h2 span {
    color: var(--purple);
}
.about-content p {
    color: var(--text-muted);
    margin-bottom: 1rem;
}
.about-decoration {
    font-size: 12rem;
    animation: float 4s ease-in-out infinite;
}
/* =========================================
   FOOTER
========================================= */
.footer {
    background: var(--text-dark);
    color: white;
    padding: 4rem 0 1.5rem;
}
.footer-container {
    width: min(1100px, 90%);
    margin: auto;
    display: grid;
    grid-template-columns:
        2fr 1fr 1fr;
    gap: 3rem;
}
.footer-brand h3 {
    font-family: var(--font-heading);
    color: var(--purple);
    font-size: 2rem;
    line-height: 0.8;
}
.footer-brand span {
    color: var(--pink);
    font-size: 0.75rem;
}
.footer-brand p {
    margin-top: 1rem;
    color: #BBBBBB;
}
.footer h4 {
    margin-bottom: 1rem;
    font-size: 1rem;
}
.footer-links,
.footer-contact {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
}
.footer-links a {
    color: #BBBBBB;
    transition: 0.2s ease;
}
.footer-links a:hover {
    color: white;
}
.footer-contact p {
    color: #BBBBBB;
}
.footer-bottom {
    width: min(1100px, 90%);
    margin: 3rem auto 0;
    padding-top: 1.5rem;
    border-top: 1px solid rgba(255,255,255,0.1);
    text-align: center;
    color: #999;
    font-size: 0.8rem;
}
/* =========================================
   PRODUCT MODAL
========================================= */
.modal {
    position: fixed;
    inset: 0;
    z-index: 3000;
    display: none;
    align-items: center;
    justify-content: center;
    padding: 1rem;
}
.modal.active {
    display: flex;
}
.modal-overlay {
    position: absolute;
    inset: 0;
    background: rgba(45, 49, 66, 0.65);
    backdrop-filter: blur(5px);
}
.modal-content {
    position: relative;
    z-index: 2;
    background: white;
    width: min(550px, 95%);
    max-height: 90vh;
    overflow-y: auto;
    border-radius: 30px;
    padding: 2rem;
    box-shadow: 0 30px 80px rgba(0,0,0,0.25);
    animation: modalIn 0.25s ease;
}
@keyframes modalIn {
    from {
        opacity: 0;
        transform: translateY(20px) scale(0.97);
    }
    to {
        opacity: 1;
        transform: translateY(0) scale(1);
    }
}
.modal-close {
    position: absolute;
    right: 1rem;
    top: 1rem;
    width: 38px;
    height: 38px;
    border-radius: 50%;
    background: #F5F5F5;
    color: var(--text-dark);
    font-size: 1rem;
    z-index: 5;
}
/* =========================================
   CART DRAWER
========================================= */
.cart-drawer {
    position: fixed;
    top: 0;
    right: -450px;
    width: min(430px, 100%);
    height: 100vh;
    background: white;
    z-index: 2500;
    box-shadow: -15px 0 40px rgba(0,0,0,0.12);
    display: flex;
    flex-direction: column;
    transition: right 0.35s ease;
}
.cart-drawer.active {
    right: 0;
}
.cart-header {
    padding: 1.5rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid var(--border);
}
.cart-header h2 {
    font-family: var(--font-heading);
    font-size: 1.7rem;
}
.cart-header button {
    font-size: 1.2rem;
    width: 38px;
    height: 38px;
    border-radius: 50%;
    background: #F5F5F5;
}
.cart-items-container {
    flex: 1;
    overflow-y: auto;
    padding: 1rem 1.5rem;
}
.empty-cart {
    text-align: center;
    color: #888;
    margin-top: 3rem;
}
.cart-item {
    display: flex;
    align-items: center;
    gap: 0.8rem;
    padding: 0.9rem 0;
    border-bottom: 1px solid var(--border);
}
.cart-item svg {
    width: 45px;
    height: 45px;
}
.cart-item-info {
    flex: 1;
}
.cart-item-info div:first-child {
    font-weight: 700;
    font-size: 0.9rem;
}
.cart-item-info div:last-child {
    color: var(--purple);
    font-weight: 600;
    font-size: 0.85rem;
}
.cart-item button {
    color: #FF5D5D;
    font-weight: 700;
}
.cart-footer {
    padding: 1.5rem;
    border-top: 1px solid var(--border);
}
.cart-total-row {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 1rem;
}
.cart-total-row strong {
    color: var(--purple);
    font-family: var(--font-heading);
    font-size: 1.5rem;
}
.checkout-btn {
    width: 100%;
}
/* =========================================
   TOAST
========================================= */
.toast {
    position: fixed;
    left: 50%;
    bottom: 30px;
    transform: translate(-50%, 100px);
    background: var(--text-dark);
    color: white;
    padding: 0.8rem 1.3rem;
    border-radius: 50px;
    z-index: 5000;
    opacity: 0;
    transition: all 0.3s ease;
    font-size: 0.85rem;
    box-shadow: var(--shadow);
}
.toast.show {
    opacity: 1;
    transform: translate(-50%, 0);
}
/* =========================================
   MOBILE NAVIGATION
========================================= */
@media (max-width: 900px) {
    .menu-toggle {
        display: block;
    }
    .nav-links {
        position: absolute;
        top: 80px;
        left: 0;
        right: 0;
        background: var(--cream-bg);
        padding: 1.5rem;
        flex-direction: column;
        align-items: stretch;
        gap: 0.8rem;
        border-bottom: 1px solid var(--border);
        transform: translateY(-150%);
        opacity: 0;
        pointer-events: none;
        transition: 0.3s ease;
    }
    .nav-links.active {
        transform: translateY(0);
        opacity: 1;
        pointer-events: auto;
    }
    .nav-links a {
        padding: 0.7rem;
        text-align: center;
    }
    .cart-button {
        width: 100%;
    }
    .products-grid {
        grid-template-columns:
            repeat(2, 1fr);
    }
}
/* =========================================
   TABLET
========================================= */
@media (max-width: 700px) {
    .hero {
        min-height: 570px;
        text-align: center;
        justify-content: center;
    }
    .hero-content {
        max-width: 100%;
    }
    .hero p {
        margin-left: auto;
        margin-right: auto;
    }
    .hero-decoration {
        right: 50%;
        transform: translateX(50%);
        top: 8%;
        font-size: 8rem;
        opacity: 0.25;
    }
    .about-section {
        flex-direction: column;
        text-align: center;
        gap: 2rem;
    }
    .about-decoration {
        font-size: 8rem;
    }
    .footer-container {
        grid-template-columns: 1fr 1fr;
    }
    .footer-brand {
        grid-column: 1 / -1;
    }
}
/* =========================================
   MOBILE
========================================= */
@media (max-width: 520px) {
    .nav-container {
        min-height: 70px;
    }
    .nav-links {
        top: 70px;
    }
    .hero {
        padding: 4rem 0;
        min-height: 530px;
    }
    .hero h1 {
        font-size: 3.7rem;
    }
    .hero p {
        font-size: 0.9rem;
    }
    .shop-section {
        padding: 4rem 0;
    }
    .products-grid {
        grid-template-columns: 1fr;
    }
    .product-card {
        min-height: 420px;
    }
    .filter-container {
        gap: 0.4rem;
    }
    .filter-btn {
        font-size: 0.75rem;
        padding: 0.55rem 0.8rem;
    }
    .about-section {
        padding: 5rem 8%;
    }
    .footer-container {
        grid-template-columns: 1fr;
        text-align: center;
    }
    .footer-brand {
        grid-column: auto;
    }
    .footer-links,
    .footer-contact {
        align-items: center;
    }
    .modal-content {
        padding: 1.3rem;
        border-radius: 22px;
    }
}
/* =========================================
   ACCESSIBILITY
========================================= */
button:focus-visible,
a:focus-visible {
    outline: 3px solid var(--purple);
    outline-offset: 3px;
}
/* =========================================
   SELECTION
========================================= */
::selection {
    background: var(--purple);
    color: white;
}
