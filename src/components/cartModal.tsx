"use client";

import { useStore } from "@/src/store/cart";
import * as Dialog from "@radix-ui/react-dialog";
import { X } from "lucide-react";

export function CartModal() {
    const { cart, removeItem } = useStore();

    return (
        <Dialog.Root>

            <Dialog.Trigger className="fixed top-4 right-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                 Відкрити кошик ({cart.length})
            </Dialog.Trigger>


            <Dialog.Portal>
                <Dialog.Overlay className="fixed inset-0 bg-black/50" />
                <Dialog.Content className="fixed top-1/2 left-1/2 w-96 bg-white shadow-lg p-4 rounded-lg -translate-x-1/2 -translate-y-1/2">


                    <Dialog.Title className="sr-only">Кошик</Dialog.Title>

                    <div className="flex justify-between items-center mb-4">
                        <h2 className="text-xl font-bold">Кошик</h2>
                        <Dialog.Close className="text-gray-500 hover:text-gray-700">
                            <X size={24} />
                        </Dialog.Close>
                    </div>


                    {cart.length === 0 ? (
                        <p>Кошик порожній</p>
                    ) : (
                        <ul>
                            {cart.map((item) => (
                                <li key={item.id} className="flex justify-between items-center mb-2">
                                    <span>{item.name} x {item.quantity}</span>
                                    <span>${item.price * item.quantity}</span>
                                    <button onClick={() => removeItem(item.id)} className="text-red-500">
                                        Видалити
                                    </button>
                                </li>
                            ))}
                        </ul>
                    )}


                    <Dialog.Close className="mt-4 bg-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-400 w-full">
                        Закрити
                    </Dialog.Close>
                </Dialog.Content>
            </Dialog.Portal>
        </Dialog.Root>
    );
}
