import { fetchProductCatalog, fetchProductReviews, fetchSalesReport } from './apiSimulator';






// Fetch product catalog
fetchProductCatalog()
  .then(products => {
    console.log('Product catalog:', products);
    // Example: Fetch reviews for the first product if available
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

// Fetch sales report
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


// Custom Error Classes
  export class NetworkError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "NetworkError";
    Object.setPrototypeOf(this, NetworkError.prototype);
  }
}

export class DataError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "DataError";
    Object.setPrototypeOf(this, DataError.prototype);
  }
}
