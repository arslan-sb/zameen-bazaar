// Importing necessary tools from React library
import React, { createContext } from "react";

// Importing the list of all products from a file
import all_products from '../Components/Assets/all_product';

// Creating a special storage space (context) for sharing data
export const ShopContext = createContext(null);

// Defining a helper component that provides the data storage (context) to its children
const ShopContextProvider = (props) => {
  // Preparing the data to be shared in the context
  const contextValue = { all_products };

  // Wrapping the children components with the data storage (context) provider
  return (
    <ShopContext.Provider value={contextValue}>
      {props.children} {/* Displaying the children components */}
    </ShopContext.Provider>
  );
}

// Making the helper component available for other parts of the application
export default ShopContextProvider;