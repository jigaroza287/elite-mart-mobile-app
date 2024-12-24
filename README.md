# **Elite Mart**

Elite Mart is a feature-rich React Native-based mobile application designed to deliver a seamless e-commerce experience. It provides an intuitive and dynamic user interface for product browsing, listing, and interaction, making online shopping convenient and enjoyable.

---

## **Features**

### General

- **Cross-Platform Compatibility**: Fully functional on both iOS and Android.
- **State Management**: Powered by Redux Toolkit for centralized state handling.
- **Scalable Architecture**: Clean and modular structure, making the app easy to extend and maintain.

### Core Functionalities

- **Home Page**:
  - Displays categories, top-selling products, and new arrivals in an optimized layout.
- **Product Listing Page**:
  - Dynamically loads and paginates products.
  - Features advanced FlatList optimization for large datasets.
- **Product Details**:
  - Displays detailed product information with an interactive image gallery supporting zoom and swipe.
- **Pin Code Check**:
  - Validates delivery availability with error handling and success messages.
- **Wishlist Integration**:
  - Enables adding or removing products from the wishlist.

### Advanced Features

- **Global Loading Overlay**:
  - A reusable, singleton-style, full-screen loading indicator.
- **FlatList Optimization**:
  - Efficient and smooth scrolling for handling large datasets.

---

## **Technologies Used**

### Core

- **React Native**: Framework for building cross-platform mobile applications.
- **TypeScript**: Static typing for improved code quality and maintainability.

### Libraries

- **Navigation**:
  - `@react-navigation/native`
  - `@react-navigation/stack`
  - `@react-navigation/bottom-tabs`
- **State Management**:
  - `@reduxjs/toolkit`, `redux`, and `redux-thunk`
  - `react-redux` for connecting React components to the Redux store.
- **Forms and Validation**:
  - `react-hook-form` for form management.
  - `yup` for schema-based form validation.
- **Network Requests**:
  - `axios` for handling API calls.
- **UI Enhancements**:
  - `react-native-gesture-handler` and `react-native-reanimated` for gesture support.
  - `react-native-vector-icons` for custom icons.
  - `@gorhom/bottom-sheet` for modal-like behavior.
  - `react-native-keyboard-aware-scroll-view` for better input handling.

### Development

- **Testing**: `jest` for unit testing.
- **Code Quality**: `eslint` and `prettier` for linting and formatting.

---

## **Installation**

### Prerequisites

- **Node.js**: >= 18.x
- **React Native CLI**: Installed globally
- **Yarn**: >= 3.6.4
- **Xcode**: For iOS development
- **Android Studio**: For Android development

### Steps

1. Clone the repository:

   ```bash
   git clone https://github.com/jigaroza287/elite-mart-mobile-app.git
   cd elite-mart-mobile-app
   ```

2. Install dependencies:

   ```bash
   yarn install
   ```

3. Start Metro bundler:

   ```bash
   yarn start
   ```

4. Run the app:

   - For iOS

   ```bash
   yarn ios
   ```

   - For Android

   ```bash
   yarn android
   ```

## **Global API Request and Response Handling**

To streamline API interactions and manage authentication tokens and error responses globally, this project uses Axios interceptors.

### **Request Interceptor**

The request interceptor adds an authentication token (if available) to every outgoing API request, ensuring secure communication.

```typescript
axiosInstance.interceptors.request.use(async config => {
  const token = await AsyncStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});
```

### **Response Interceptor**

The response interceptor processes API responses and handles errors consistently. It extracts meaningful error messages for various scenarios like bad requests, unauthorized access, and server issues.

```typescript
axiosInstance.interceptors.response.use(
  response => response,
  (error: AxiosError) => {
    let errorMessage = 'An unexpected error occurred.';
    if (error.response) {
      const { status, data } = error.response;
      if (status === 400) {
        errorMessage =
          (data as { message?: string }).message || 'Invalid request.';
      } else if (status === 401) {
        errorMessage = 'Unauthorized. Please login again.';
      } else if (status === 404) {
        errorMessage = 'Requested resource not found.';
      } else if (status >= 500) {
        errorMessage = 'Server error. Please try again later.';
      }
    } else if (error.request) {
      errorMessage = 'No response from the server. Please check your network.';
    } else {
      errorMessage = error.message;
    }
    console.error('API Error:', errorMessage);
    return Promise.reject(new Error(errorMessage));
  },
);
```

### **Why This Implementation?**

- **Centralized Token Management:** Ensures all API requests automatically include the authentication token.
- **Consistent Error Handling:** Provides a unified way to manage errors, making debugging and user feedback easier.
- **Security:** By dynamically injecting the token, sensitive data is kept secure.

This approach is highly scalable and aligns with industry standards for handling authentication and API errors in a React Native application.

## **API Endpoints**

### Base URL

```arduino
http://localhost:3000
```

### Key APIs

| Endpoint             | Method | Description                    |
| -------------------- | ------ | ------------------------------ |
| `/home`              | GET    | Fetch products for Home page   |
| `/products`          | GET    | Fetch all products             |
| `/products/:id`      | GET    | Fetch product details          |
| `/categories`        | GET    | Fetch product categories       |
| `/validate-pin-code` | GET    | Validate delivery availability |
| `/users/register`    | POST   | User registration (Signup)     |
| `/users/login`       | POST   | User login (Login)             |

### Backend Implementation

- The backend for this application is implemented in Node.js with Sequelize ORM.
- Find the backend project and setup instructions here:  
  [Elite Mart Backend](https://github.com/jigaroza287/elite-mart-backend.git)

---

## **Contributing**

We welcome contributions to make Elite Mart better!  
To contribute:

1. Fork the repository.
2. Create a new branch (`feature/your-feature-name`).
3. Commit and push your changes.
4. Submit a pull request.

---

## **License**

This project is licensed under the MIT License.

---

## **Contact**

For questions or suggestions, reach out to us at:

- **GitHub Issues**: [Elite Mart Issues](https://github.com/jigaroza287/elite-mart-mobile-app/issues)
