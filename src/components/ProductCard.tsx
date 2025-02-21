"use client";

import { useStore } from "@/src/store/cart";

export function ProductCard({ product }: { product: any }) {
    const { addItem, cart } = useStore();

    return (
        <div className="border rounded-lg p-4 shadow-md">
            <img
                src={product.image}
                alt={product.title}
                className="w-full h-40 object-contain mb-2"
            />
            <h2 className="text-lg font-semibold">{product.title}</h2>
            <p className="text-sm text-gray-600">{product.description.slice(0, 100)}...</p>
            <p className="text-lg font-bold mt-2">${product.price}</p>
            <button
                onClick={() => {
                    addItem({
                        id: product.id,
                        name: product.title,
                        price: product.price,
                        quantity: 1,
                    });

                    console.log("Товар додано:", product);
                    console.log("Актуальний стан кошика:", cart);
                }}
                className="mt-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
            >
                Купити
            </button>
        </div>
    );
}
