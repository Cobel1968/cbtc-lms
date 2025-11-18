'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export interface CartItem {
  id: string;
  title: string;
  description?: string;
  price: number;
  price_xof?: number;
  image?: string;
}

interface CartContextType {
  cartItems: CartItem[];
  addToCart: (item: CartItem) => void;
  removeFromCart: (id: string) => void;
  clearCart: () => void;
  getTotalPrice: () => number;
  getCartItemCount: () => number;
  isInCart: (id: string) => boolean;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const savedCart = localStorage.getItem('cbtc-cart');
    if (savedCart) {
      try {
        setCartItems(JSON.parse(savedCart));
      } catch (error) {
        console.error('Error loading cart from localStorage:', error);
        localStorage.removeItem('cbtc-cart');
      }
    }
  }, []);

  useEffect(() => {
    if (isMounted) {
      localStorage.setItem('cbtc-cart', JSON.stringify(cartItems));
    }
  }, [cartItems, isMounted]);

  const addToCart = (item: CartItem) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((i) => i.id === item.id);
      if (existingItem) {
        return prevItems;
      }
      return [...prevItems, item];
    });
  };

  const removeFromCart = (id: string) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const clearCart = () => {
    setCartItems([]);
    if (isMounted) {
      localStorage.removeItem('cbtc-cart');
    }
  };

  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + (item.price_xof || item.price || 0), 0);
  };

  const getCartItemCount = () => {
    return cartItems.length;
  };

  const isInCart = (id: string) => {
    return cartItems.some((item) => item.id === id);
  };

  const value: CartContextType = {
    cartItems,
    addToCart,
    removeFromCart,
    clearCart,
    getTotalPrice,
    getCartItemCount,
    isInCart,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}

