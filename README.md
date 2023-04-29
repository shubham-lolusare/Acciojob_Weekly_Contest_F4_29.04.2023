# Acciojob_Weekly_Contest_F4_29.04.2023
- This project is the real life simulation of the shopping cart. It is built using ReactJs, ReduxToolKit, TailwindCSS and React Router
- Deployed Link: https://shubham-lolusare.github.io/Acciojob_Weekly_Contest_F4_29.04.2023/
- Figma Link- https://www.figma.com/file/qDWVMfoVJknM2YYYiC2kz6/Untitled?node-id=0-1&t=fCS662OrInm9Rt9E-0


# Task
- Make a real life shopping cart application where there are 2 pages - First is the home page where you fetch a list of products from an api and the products are displayed. The second page is the my cart Page.
- The goal is to accomplish the cart functionality using redux. So make a redux state for your cart and make a redux state of all the products that you get from the API.

# Home Page:
- Fetch the products from this API link - execute a get request at this link - https://dummyjson.com/products
- This gives a list of 30 products, all of which have an id, title, price and image. Show all of these in the UI and create an add to the cart button.
- Map the products as shown in the home page and on click of add to the cart button - add the object in the redux state.
- Make sure that if an item is already added you cannot add it again.

# My Cart Page:
- Get your cart products from the redux state and map them as shown.
- On click of remove from the cart - again update the redux state everytime.
- On the right side, make a sidebar where you show the final checkout list and also the total price.
- On click of checkout button - get rid of the entire cart and reset the redux state of myCart and display a success message saying that items have been checkout out.

# Marking Scheme (100 Marks)
- Functionality (50 marks)
- Redux implementation (30 marks)
- User Interface (10 marks)
- Deployment(10 Marks)
