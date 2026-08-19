/* =====================================================
   PRODUCT DETAIL PAGE RENDERER
   Reads ?slug=... from the URL and fills product.html
   using the matching entry from PRODUCTS (products-data.js)
===================================================== */

let currentProduct = null;
let currentQty = 1;
let currentVariant = null;

function initPDP() {

    const params = new URLSearchParams(window.location.search);
    const slug = params.get("slug");
    const product = getProductBySlug(slug);

    const wrap = document.getElementById("pdp-wrap");
    const notFound = document.getElementById("pdp-not-found");

    if (!product) {
        if (wrap) wrap.style.display = "none";
        if (notFound) notFound.style.display = "block";
        return;
    }

    currentProduct = product;

    document.title = product.name + " | Sattvic Eats";

    document.getElementById("pdp-image").src = product.image;
    document.getElementById("pdp-image").alt = product.name;
    document.getElementById("pdp-category-link").textContent = product.category;
    document.getElementById("pdp-name").textContent = product.name;
    document.getElementById("pdp-tagline").textContent = product.tagline;
    document.getElementById("pdp-price").textContent = "₹" + product.price;
    document.getElementById("pdp-unit").textContent = product.unit;
    document.getElementById("pdp-desc").textContent = product.description;

    const waText = "Hi Sattvic Eats, I would like to place an order for " + product.name + ". Please help me with this: " + window.location.href;
    const waHref = "https://wa.me/919535476030?text=" + encodeURIComponent(waText);

    const waLink = document.getElementById("footer-whatsapp-link");
    if (waLink) {
        waLink.href = waHref;
    }

    const waOrderBtn = document.getElementById("btn-whatsapp-order");
    if (waOrderBtn) {
        waOrderBtn.href = waHref;
    }

    const tagsWrap = document.getElementById("pdp-tags");
    tagsWrap.innerHTML = "";
    product.tags.forEach(tag => {
        const span = document.createElement("span");
        span.className = "pdp-tag";
        span.textContent = tag;
        tagsWrap.appendChild(span);
    });

    const benefitsList = document.getElementById("pdp-benefits");
    benefitsList.innerHTML = "";
    product.benefits.forEach(b => {
        const li = document.createElement("li");
        li.innerHTML = '<i class="fas fa-leaf"></i> ' + b;
        benefitsList.appendChild(li);
    });

    const healthList = document.getElementById("pdp-health");
    healthList.innerHTML = "";
    product.healthValue.forEach(h => {
        const li = document.createElement("li");
        li.innerHTML = '<i class="fas fa-heart"></i> ' + h;
        healthList.appendChild(li);
    });

    if (product.variants) {
        renderVariants(product);
    }

    renderRelated(product);

    document.getElementById("qty-value").textContent = currentQty;

    document.getElementById("btn-add-cart").addEventListener("click", () => {
        addToCart(getCartLineName(), currentProduct.price, currentProduct.image, currentQty);
    });

    document.getElementById("btn-buy-now").addEventListener("click", () => {
        buyNow(getCartLineName(), currentProduct.price, currentProduct.image, currentQty);
    });

    document.getElementById("btn-share").addEventListener("click", () => {
        shareProduct(currentProduct.name);
    });

    document.getElementById("qty-minus").addEventListener("click", () => {
        if (currentQty > 1) currentQty--;
        document.getElementById("qty-value").textContent = currentQty;
    });

    document.getElementById("qty-plus").addEventListener("click", () => {
        currentQty++;
        document.getElementById("qty-value").textContent = currentQty;
    });

}

function getCartLineName() {

    if (currentProduct.variants && currentVariant) {
        return currentProduct.name + " (" + currentVariant.name + " Roast)";
    }

    return currentProduct.name;

}

function renderVariants(product) {

    const block = document.getElementById("pdp-variants");
    const label = document.getElementById("pdp-variant-label");
    const options = document.getElementById("pdp-variant-options");
    const ratio = document.getElementById("pdp-variant-ratio");

    block.style.display = "block";
    label.textContent = product.variants.label;

    currentVariant = product.variants.options[1] || product.variants.options[0];

    options.innerHTML = "";

    product.variants.options.forEach(opt => {

        const btn = document.createElement("button");
        btn.type = "button";
        btn.className = "variant-pill" + (opt.id === currentVariant.id ? " active" : "");
        btn.textContent = opt.name;

        btn.addEventListener("click", () => {
            currentVariant = opt;
            document.querySelectorAll(".variant-pill").forEach(p => p.classList.remove("active"));
            btn.classList.add("active");
            ratio.textContent = opt.coffee + "% Coffee · " + opt.chicory + "% Chicory";
        });

        options.appendChild(btn);

    });

    ratio.textContent = currentVariant.coffee + "% Coffee · " + currentVariant.chicory + "% Chicory";

}

function renderRelated(product) {

    const grid = document.getElementById("pdp-related-grid");
    if (!grid) return;

    const related = PRODUCTS.filter(p => p.category === product.category && p.slug !== product.slug).slice(0, 3);

    if (related.length === 0) {
        document.getElementById("pdp-related-section").style.display = "none";
        return;
    }

    grid.innerHTML = "";

    related.forEach(p => {

        const card = document.createElement("div");
        card.className = "product-card";
        card.innerHTML = `
            <a href="product.html?slug=${p.slug}">
                <div class="product-image"><img src="${p.image}" alt="${p.name}"></div>
            </a>
            <div class="product-info">
                <h3><a href="product.html?slug=${p.slug}">${p.name}</a></h3>
                <p>${p.tagline}</p>
                <div class="price">₹${p.price}</div>
                <button class="gold-btn" onclick="addToCart('${p.name.replace(/'/g, "\\'")}', ${p.price}, '${p.image}')">Add to Cart</button>
            </div>
        `;
        grid.appendChild(card);

    });

}

window.addEventListener("DOMContentLoaded", initPDP);
