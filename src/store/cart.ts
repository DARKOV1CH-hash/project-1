"use client"
import { create } from "zustand";

type CartItem = {
    id: number;
    name: string;
    price: number;
    quantity: number;
};

type CartState = {
    cart: CartItem[];
    addItem: (item: CartItem) => void;
    removeItem: (id: number) => void;
    updateItemQuantity: (id: number, quantity: number) => void;
};

export const useStore = create<CartState>((set) => ({
    cart: [],
    addItem: (item) =>
        set((state) => {
            const existingItem = state.cart.find((i) => i.id === item.id);
            if (existingItem) {
                return {
                    cart: state.cart.map((i) =>
                        i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
                    ),
                };
            }
            return { cart: [...state.cart, item] };
        }),
    removeItem: (id) =>
        set((state) => ({ cart: state.cart.filter((item) => item.id !== id) })),
    updateItemQuantity: (id, quantity) =>
        set((state) => ({
            cart: state.cart.map((item) =>
                item.id === id ? { ...item, quantity } : item
            ),
        })),
}));
