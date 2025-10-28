
import { DataError, NetworkError } from "./errorHandler";



interface Product {
    id: number;
    name: string;
    price: number;
}

interface Review {
  reviewer: string;
  rating: number;
  comment: string;
  date: string;
}

interface SalesReport  {
  totalSales: number;
  unitsSold: number;

  averagePrice: number;
}

export const fetchProductCatalog = (): Promise<Product[]> => {
    return new Promise((resolve, reject) => {
    setTimeout(() => {
        if (Math.random() < 0.8) {
        resolve([
            { id: 1, name: "Laptop", price: 1200 },
            { id: 2, name: "Headphones", price: 200 },
        ]);
        } else {
        reject("Failed to fetch product catalog");
        }
    }, 1000);
    });
};


export function fetchProductReviews(productId: number): Promise<Review[]> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // Simulate random failure (~30% chance)
      if (Math.random() < 0.3) {
        reject(`Failed to fetch reviews for product ID ${productId}`);
        return;
      }
      // Mock reviews array
      const reviews: Review[] = [
        {
          reviewer: "Alice",
          rating: 5,
          comment: "Excellent product, highly recommend!",
          date: "2025-10-20"
        },
        {
          reviewer: "Bob",
          rating: 4,
          comment: "Good value, works as described.",
          date: "2025-09-14"
        },
        {
          reviewer: "Charlie",
          rating: 3,
          comment: "Average quality, could improve packaging.",
          date: "2025-08-06"
        }
      ];
      resolve(reviews);
    }, 1500);
  });
}
export function fetchSalesReport(): Promise<SalesReport> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // simulating a 30% chance of network error
      if (Math.random() < 0.3) {
        reject(new NetworkError("Failed to fetch sales report"));
        return;
      }
      // simulating 10% chance of data error
      if (Math.random() < 0.1) {
        reject(new DataError("Sales report data missing required fields"));
        return;
      }
      resolve({
        totalSales: 5300.85,
        unitsSold: 128,
        averagePrice: 41.42
      });
    }, 1000);
  });
}