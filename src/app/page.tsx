import Link from "next/link";

async function getCategories() {
    const res = await fetch("https://fakestoreapi.com/products/categories", {
        next: { revalidate: 3600 },
    });
    return res.json();
}

export default async function CatalogPage() {
    const categories = await getCategories();

    return (
        <div className="container mx-auto px-4 py-6">
            <h1 className="text-2xl font-bold mb-4 flex justify-center">Категорії товарів</h1>
            <ul className="flex justify-between flex-wrap">
                {categories.map((category: string) => (
                    <li key={category}>
                        <Link
                            href={`/category/${category}`}
                            className="block p-4 bg-white shadow-md rounded-lg hover:bg-gray-100 transition"
                        >
                            {category}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}
