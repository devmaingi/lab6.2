import { fetchProductCatalog, fetchProductReviews, fetchSalesReport } from './apiSimulator';


// fetching the product catalog
fetchProductCatalog()
  .then(products => {
    console.log('Product catalog:', products);
    // fetch product reviews for the first product
    if (products.length > 0) {
      fetchProductReviews(products[0].id)
        .then(reviews => {
          console.log(`Reviews for product ID ${products[0].id}:`, reviews);
        })
        .catch(err => {
          console.error('Product reviews error:', err);
        })
        .finally(() => {
          console.log('Product reviews request completed.');
        });
    }
  })
  .catch(err => {
    console.error('Product catalog error:', err);
  })
  .finally(() => {
    console.log('Product catalog request completed.');
  });

// fetching sales report
fetchSalesReport()
  .then(report => {
    console.log('Sales report:', report);
  })
  .catch(err => {
    console.error('Sales report error:', err);
  })
  .finally(() => {
    console.log('Sales report request completed.');
  });


// Custom Error Classes class NetworkError extends Error 
class NetworkError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "NetworkError";
  }
}
// Data error class
class DataError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "DataError";
  }
}

export { NetworkError, DataError };
