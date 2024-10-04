import React, { createContext, useState, useContext } from 'react';

const HomeContext = createContext();

export const HomeProvider = ({ children }) => {
  const [count, setCount] = useState(0);
  const [modalShow, setModalShow] = useState({ show: false, product: null });
  const [product, setProduct] = useState(null);
  const [modalShowStores, setModalShowStores] = useState(false);
  const [items, setItems] = useState({
    // name: '',
    // price: 0
  })


  const handleBuy = (product, price) => {
    setModalShow({ show: true });
    setProduct(product);
  
    // Kiểm tra nếu sản phẩm đã tồn tại trong giỏ hàng thì tăng số lượng
    setItems(prevItems => {
      if (prevItems[product]) {
        // Nếu sản phẩm đã có, tăng số lượng lên
        return {
          ...prevItems,
          [product]: {
            ...prevItems[product],
            quantity: prevItems[product].quantity + 1
          }
        };
      } else {
        // Nếu sản phẩm chưa có, thêm mới với quantity = 1
        return {
          ...prevItems,
          [product]: {
            name: product,
            price: price,
            quantity: 1
          }
        };
      }
    });
  };
  
  const handleIncrease = (product) => {
    setItems(prevItems => ({
      ...prevItems,
      [product]: {
        ...prevItems[product],
        quantity: prevItems[product].quantity + 1
      }
    }));
    setCount(count + 1)
  };
  
  const handleDecrease = (product) => {
    setItems(prevItems => {
      if (prevItems[product].quantity > 1) {
        return {
          ...prevItems,
          [product]: {
            ...prevItems[product],
            quantity: prevItems[product].quantity - 1
          }
        };
      } else {
        const newItems = { ...prevItems };
        delete newItems[product]; // Nếu số lượng là 1 và người dùng giảm, xóa sản phẩm khỏi giỏ hàng
        setCount(prevCount => prevCount - 1); // Giảm số lượng sản phẩm khác nhau trong giỏ hàng
        return newItems;
      }
    });
    setCount(count - 1)
  };
  
  const handleOpenShopping = () => {
    setModalShowStores(true)
  }

  const handleChoose = () => {
    setModalShow({ show: false, product: null });
    setCount(prevCount => prevCount + 1);
  };

  return (
    <HomeContext.Provider value={{ count, modalShow, handleBuy, handleChoose, setModalShow, product, modalShowStores, handleOpenShopping, setModalShowStores, items, handleIncrease, handleDecrease }}>
      {children}
    </HomeContext.Provider>
  );
};

export const useHome = () => useContext(HomeContext);