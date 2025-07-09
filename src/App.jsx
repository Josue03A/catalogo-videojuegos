import React, { useState } from 'react';

const products = [
  { id: 1, name: "The Legend of Zelda", category: "Aventura", price: "$59.99" },
  { id: 2, name: "FIFA 24", category: "Deportes", price: "$49.99" },
  { id: 3, name: "Call of Duty", category: "Acción", price: "$69.99" },
  { id: 4, name: "Mario Kart", category: "Carreras", price: "$39.99" },
  { id: 5, name: "Minecraft", category: "Creatividad", price: "$29.99" },
];

const categories = ["Todos", "Aventura", "Deportes", "Acción", "Carreras", "Creatividad"];

export default function App() {
  const [category, setCategory] = useState("Todos");
  const [search, setSearch] = useState("");

  const filtered = products.filter(p =>
    (category === "Todos" || p.category === category) &&
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="max-w-5xl mx-auto p-6 font-sans">
      <h1 className="text-4xl font-bold text-center text-blue-700 mb-6">Catálogo de Videojuegos</h1>
      <input
        type="text"
        placeholder="Buscar..."
        className="w-full p-2 border rounded mb-4"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <div className="flex flex-wrap gap-2 justify-center mb-6">
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setCategory(cat)}
            className={`px-4 py-2 rounded ${category === cat ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
          >
            {cat}
          </button>
        ))}
      </div>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filtered.map(p => (
          <div key={p.id} className="border p-4 rounded shadow hover:shadow-lg transition">
            <h2 className="text-lg font-bold text-gray-800 mb-1">{p.name}</h2>
            <p className="text-sm text-gray-500">Categoría: {p.category}</p>
            <p className="text-green-600 font-semibold">{p.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}