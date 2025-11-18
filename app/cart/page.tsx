'use client';

import { useCart } from '@/app/contexts/CartContext';
import Link from 'next/link';
import { ShoppingCart, Trash2, ArrowLeft } from 'lucide-react';
import { useLanguage } from '@/app/contexts/LanguageContext';

export default function CartPage() {
  const { cartItems, removeFromCart, clearCart, getTotalPrice } = useCart();
  const { language } = useLanguage();

  const t = {
    title: language === 'fr' ? 'Panier' : 'Shopping Cart',
    empty: language === 'fr' ? 'Votre panier est vide' : 'Your cart is empty',
    browse: language === 'fr' ? 'Parcourir les cours' : 'Browse Courses',
    total: language === 'fr' ? 'Total' : 'Total',
    clear: language === 'fr' ? 'Vider le panier' : 'Clear Cart',
    checkout: language === 'fr' ? 'Passer à la caisse' : 'Proceed to Checkout',
    remove: language === 'fr' ? 'Retirer' : 'Remove',
    back: language === 'fr' ? 'Retour aux cours' : 'Back to courses',
  };

  if (!cartItems || cartItems.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 mb-6 transition-colors"
          >
            <ArrowLeft size={20} />
            {t.back}
          </Link>
          
          <div className="bg-white rounded-lg shadow-md p-8 text-center max-w-md mx-auto">
            <ShoppingCart size={64} className="mx-auto text-gray-400 mb-4" />
            <h1 className="text-3xl font-bold mb-4">{t.title}</h1>
            <p className="text-gray-600 text-lg mb-6">{t.empty}</p>
            <Link
              href="/"
              className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold"
            >
              {t.browse}
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 mb-6 transition-colors"
        >
          <ArrowLeft size={20} />
          {t.back}
        </Link>

        <h1 className="text-3xl font-bold mb-6">{t.title}</h1>
        
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="space-y-4">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between border-b pb-4 last:border-b-0"
              >
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900">{item.title}</h3>
                  {item.description && (
                    <p className="text-gray-600 text-sm mt-1">{item.description}</p>
                  )}
                  <p className="text-lg font-bold text-blue-600 mt-2">
                    {(item.price_xof || item.price || 0).toLocaleString()} XOF
                  </p>
                </div>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="ml-4 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors flex items-center gap-2"
                  aria-label={t.remove}
                >
                  <Trash2 size={18} />
                  <span className="hidden sm:inline">{t.remove}</span>
                </button>
              </div>
            ))}
          </div>

          <div className="mt-6 pt-6 border-t">
            <div className="flex justify-between items-center mb-4">
              <span className="text-2xl font-bold text-gray-900">{t.total}:</span>
              <span className="text-2xl font-bold text-blue-600">
                {getTotalPrice().toLocaleString()} XOF
              </span>
            </div>
            
            <div className="flex gap-4">
              <button
                onClick={clearCart}
                className="flex-1 px-6 py-3 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 transition-colors font-semibold"
              >
                {t.clear}
              </button>
              <Link
                href="/checkout"
                className="flex-1 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-center font-semibold"
              >
                {t.checkout}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

