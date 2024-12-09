document.addEventListener("DOMContentLoaded", () => {
    const checkboxes = document.querySelectorAll(".filters input[type='checkbox']");
    const products = document.querySelectorAll(".product-card");

    // Function to filter products
    function filterProducts() {
        const activeFilters = {
            price: [],
            brand: [],
            category: [],
            skinType: [],
        };

        // Gather selected filters
        checkboxes.forEach((checkbox) => {
            if (checkbox.checked) {
                const value = checkbox.value;
                const group = checkbox.closest(".filter-group").querySelector("h4").textContent.toLowerCase();
                if (group === "price") {
                    activeFilters.price.push(value);
                } else if (group === "brand") {
                    activeFilters.brand.push(value);
                } else if (group === "category") {
                    activeFilters.category.push(value);
                } else if (group === "suitable for") {
                    activeFilters.skinType.push(value);
                }
            }
        });

        // Show/hide products based on filters
        products.forEach((product) => {
            const productPrice = parseFloat(product.querySelector(".price").textContent.replace("EGP", "").trim());
            const productBrand = product.dataset.brand;
            const productCategory = product.dataset.category;
            const productSkinType = product.dataset.skinType;

            let matches = true;

            // Check price
            if (activeFilters.price.length) {
                matches =
                    activeFilters.price.some((range) => {
                        if (range === "0-250") return productPrice < 250;
                        if (range === "250-500") return productPrice >= 250 && productPrice <= 500;
                        if (range === "500-1000") return productPrice > 500 && productPrice <= 1000;
                        if (range === "1000+") return productPrice > 1000;
                    }) && matches;
            }

            // Check brand
            if (activeFilters.brand.length) {
                matches = activeFilters.brand.includes(productBrand) && matches;
            }

            // Check category
            if (activeFilters.category.length) {
                matches = activeFilters.category.includes(productCategory) && matches;
            }

            // Check skin type
            if (activeFilters.skinType.length) {
                matches = activeFilters.skinType.includes(productSkinType) && matches;
            }

            // Show or hide product
            product.style.display = matches ? "block" : "none";
        });
    }

    // Attach event listeners to checkboxes
    checkboxes.forEach((checkbox) => {
        checkbox.addEventListener("change", filterProducts);
    });
});
document.addEventListener("DOMContentLoaded", () => {
    const searchInput = document.querySelector('.search-bar');
    searchInput.addEventListener('input', (event) => {
        const query = event.target.value.toLowerCase();
        const products = document.querySelectorAll('.product-card');

        products.forEach((product) => {
            const productName = product.querySelector('h2').textContent.toLowerCase();
            if (productName.includes(query)) {
                product.style.display = 'block';
            } else {
                product.style.display = 'none';
            }
        });
    });
});