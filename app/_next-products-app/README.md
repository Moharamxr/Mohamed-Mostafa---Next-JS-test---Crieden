# Next Products App

This is a full-stack Next.js application that retrieves and displays a list of products from an external API. The application includes a home page, product details page, and cart functionality.

## Features

- **Home Page**: Displays a list of products fetched from an external API.
- **Product Details Page**: Shows detailed information about a selected product, including its image, title, price, description, and category.
- **Cart Functionality**: Allows users to add products to their cart, view cart items, and see a summary of the total price.

## Tech Stack

- **Next.js**: A React framework for building server-rendered applications.
- **TypeScript**: A superset of JavaScript that adds static types.
- **Tailwind CSS**: A utility-first CSS framework for styling.
- **React Context API**: For managing global state (cart functionality).
- **External API**: Fetches product data.

## Getting Started

1. Clone the repository:
   ```
   git clone <repository-url>
   ```

2. Navigate to the project directory:
   ```
   cd next-products-app
   ```

3. Install dependencies:
   ```
   npm install
   ```

4. Create a `.env.local` file in the root directory and add your environment variables as needed.

5. Run the development server:
   ```
   npm run dev
   ```

6. Open your browser and go to `http://localhost:3000` to view the application.

## Folder Structure

- `app/`: Contains the main application code.
  - `api/products/`: API route for fetching products.
  - `cart/`: Cart page component.
  - `products/`: Dynamic route for product details.
  - `components/`: Reusable components for the application.
  - `hooks/`: Custom hooks for managing state.
  - `lib/`: API utility functions.
  - `context/`: Context for managing cart state.
  - `types/`: TypeScript types and interfaces.
  - `utils/`: Utility functions.
- `public/`: Static assets.
- `.env.local`: Environment variables.
- `.gitignore`: Files to ignore in Git.
- `next.config.js`: Next.js configuration.
- `package.json`: Project dependencies and scripts.
- `tailwind.config.js`: Tailwind CSS configuration.
- `tsconfig.json`: TypeScript configuration.

## Additional Features

- Responsive design using Tailwind CSS.
- Loading states while fetching data.
- Error handling for API requests.

Feel free to contribute to the project by submitting issues or pull requests!