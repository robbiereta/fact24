'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

interface Product {
  id: string;
  name: string;
  description?: string;
  price: number;
  imageUrl?: string;
  categoryId?: string;
}

export default function ProductsPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [newProduct, setNewProduct] = useState<Partial<Product>>({});
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const router = useRouter();

  const handleImageUpload = async (file: File) => {
    const formData = new FormData();
    formData.append('file', file);
    
    try {
      const response = await fetch('/api/upload', {
        method: 'POST',
        body: formData,
      });
      
      if (response.ok) {
        const data = await response.json();
        return data.url;
      }
    } catch (error) {
      console.error('Error uploading image:', error);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    let imageUrl;
    if (selectedImage) {
      imageUrl = await handleImageUpload(selectedImage);
    }

    const productData = {
      ...newProduct,
      imageUrl,
    };

    try {
      const response = await fetch('/api/products', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(productData),
      });

      if (response.ok) {
        const savedProduct = await response.json();
        setProducts([...products, savedProduct]);
        setNewProduct({});
        setSelectedImage(null);
      }
    } catch (error) {
      console.error('Error creating product:', error);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Product Management</h1>
      
      <form onSubmit={handleSubmit} className="mb-8">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <input
            type="text"
            placeholder="Product Name"
            className="p-2 border rounded"
            value={newProduct.name || ''}
            onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
          />
          
          <input
            type="number"
            placeholder="Price"
            className="p-2 border rounded"
            value={newProduct.price || ''}
            onChange={(e) => setNewProduct({ ...newProduct, price: parseFloat(e.target.value) })}
          />
          
          <textarea
            placeholder="Description"
            className="p-2 border rounded"
            value={newProduct.description || ''}
            onChange={(e) => setNewProduct({ ...newProduct, description: e.target.value })}
          />
          
          <input
            type="file"
            accept="image/*"
            onChange={(e) => setSelectedImage(e.target.files?.[0] || null)}
            className="p-2 border rounded"
          />
        </div>
        
        <button
          type="submit"
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Add Product
        </button>
      </form>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {products.map((product) => (
          <div key={product.id} className="border rounded p-4">
            {product.imageUrl && (
              <div className="relative h-48 mb-2">
                <Image
                  src={product.imageUrl}
                  alt={product.name}
                  fill
                  className="object-cover rounded"
                />
              </div>
            )}
            <h3 className="font-bold">{product.name}</h3>
            <p className="text-gray-600">${product.price}</p>
            <p className="text-sm">{product.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
