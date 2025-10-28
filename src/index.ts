import { fetchProductCatalog, fetchProductReviews, fetchSalesReport } from './apiSimulator';

async function mainApp() {
  try {
    const products = await fetchProductCatalog();
    console.log("Product catalog:", products);

    if (products.length > 0) {
      try {
        const reviews = await fetchProductReviews(products[0].id);
        console.log(`Reviews for product ID ${products[0].id}:`, reviews);
      } catch (err) {
        console.error("Product reviews error:", err);
      }
    }

    try {
      const salesReport = await fetchSalesReport();
      console.log("Sales report:", salesReport);
    } catch (err) {
      console.error("Sales report error:", err);
    }
  } catch (err) {
    console.error("Product catalog error:", err);
  } finally {
    console.log("All API calls have been attempted.");
  }
}

// Run the main function
export default mainApp;
