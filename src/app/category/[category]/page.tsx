import { notFound } from "next/navigation";
import Link from "next/link";
import { ProductCard } from "@/src/components/ProductCard";

async function getProductsByCategory(category: string) {
    const res = await fetch(
        `https://fakestoreapi.com/products/category/${category}`,
        { next: { revalidate: 3600 } }
    );

    if (!res.ok) return null;
    return res.json();
}

export default async function CategoryPage({params,}: {
    params: { category: string };
}) {
    const products = await getProductsByCategory(params.category);

    if (!products) {
        notFound();
    }

    return (
        <div className="container mx-auto px-4 py-6">
            <h1 className="text-2xl font-bold mb-4 capitalize">{params.category}</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {products.map((product: any) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
            <Link href="/" className="block mt-6 text-blue-500 hover:underline hover:text-blue-700">
                Назад до каталогу
            </Link>
        </div>
    );
}
