// Function to filter products based on selected filters
function filterProducts() {
    const productCards = document.querySelectorAll('.product-card');
    const priceFilters = document.querySelectorAll('input[name="price"]:checked');
    const brandFilters = document.querySelectorAll('input[name="brand"]:checked');
    const categoryFilters = document.querySelectorAll('input[name="category"]:checked');
    const skinTypeFilters = document.querySelectorAll('input[name="skin-type"]:checked');
  
    // Convert NodeLists to arrays for easier manipulation
    const priceFiltersArray = Array.from(priceFilters).map(input => input.value);
    const brandFiltersArray = Array.from(brandFilters).map(input => input.value);
    const categoryFiltersArray = Array.from(categoryFilters).map(input => input.value);
    const skinTypeFiltersArray = Array.from(skinTypeFilters).map(input => input.value);
  
    productCards.forEach(card => {
      const productPrice = parseFloat(card.querySelector('.price').textContent.replace('EGP', ''));
      const productBrand = card.dataset.brand;
      const productCategory = card.dataset.category;
      const productSkinType = card.dataset.skinType;
  
      let priceMatch = priceFiltersArray.length === 0 || priceFiltersArray.some(filter => {
        const [min, max] = filter.split('-');
        return productPrice >= parseFloat(min) && productPrice <= parseFloat(max || Infinity);
      });
  
      let brandMatch = brandFiltersArray.length === 0 || brandFiltersArray.includes(productBrand);
      let categoryMatch = categoryFiltersArray.length === 0 || categoryFiltersArray.includes(productCategory);
      let skinTypeMatch = skinTypeFiltersArray.length === 0 || skinTypeFiltersArray.includes(productSkinType);
  
      if (priceMatch && brandMatch && categoryMatch && skinTypeMatch) {
        card.style.display = '';
      } else {
        card.style.display = 'none';
      }
    });
  }
  
  // Add event listeners to filter inputs
  document.querySelectorAll('input[name="price"], input[name="brand"], input[name="category"], input[name="skin-type"]').forEach(input => {
    input.addEventListener('change', filterProducts);
  });
  
  // Initial filter application
  filterProducts();
  