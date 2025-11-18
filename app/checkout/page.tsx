'use client';

import { useCart } from '@/app/contexts/CartContext';
import { useLanguage } from '@/app/contexts/LanguageContext';
import Link from 'next/link';
import { ArrowLeft, CreditCard, Lock, CheckCircle } from 'lucide-react';
import { useState } from 'react';

export default function CheckoutPage() {
  const { cartItems, getTotalPrice, clearCart } = useCart();
  const { language } = useLanguage();
  const [isProcessing, setIsProcessing] = useState(false);
  const [isComplete, setIsComplete] = useState(false);

  const t = {
    title: language === 'fr' ? 'Paiement' : 'Checkout',
    back: language === 'fr' ? 'Retour au panier' : 'Back to cart',
    orderSummary: language === 'fr' ? 'Résumé de la commande' : 'Order Summary',
    total: language === 'fr' ? 'Total' : 'Total',
    paymentMethod: language === 'fr' ? 'Méthode de paiement' : 'Payment Method',
    cardNumber: language === 'fr' ? 'Numéro de carte' : 'Card Number',
    expiryDate: language === 'fr' ? 'Date d\'expiration' : 'Expiry Date',
    cvv: language === 'fr' ? 'CVV' : 'CVV',
    cardholderName: language === 'fr' ? 'Nom du titulaire' : 'Cardholder Name',
    placeOrder: language === 'fr' ? 'Passer la commande' : 'Place Order',
    processing: language === 'fr' ? 'Traitement en cours...' : 'Processing...',
    secure: language === 'fr' ? 'Paiement sécurisé' : 'Secure Payment',
    empty: language === 'fr' ? 'Votre panier est vide' : 'Your cart is empty',
    browse: language === 'fr' ? 'Parcourir les cours' : 'Browse Courses',
  };

  const handleCheckout = async () => {
    setIsProcessing(true);
    // Simulate payment processing
    setTimeout(() => {
      setIsProcessing(false);
      setIsComplete(true);
      clearCart();
    }, 2000);
  };

  if (cartItems.length === 0 && !isComplete) {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-8">
          <Link
            href="/cart"
            className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 mb-6 transition-colors"
          >
            <ArrowLeft size={20} />
            {t.back}
          </Link>
          <div className="bg-white rounded-lg shadow-md p-8 text-center max-w-md mx-auto">
            <p className="text-gray-600 text-lg mb-4">{t.empty}</p>
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

  if (isComplete) {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-8">
          <div className="bg-white rounded-lg shadow-md p-8 text-center max-w-md mx-auto">
            <CheckCircle size={64} className="mx-auto text-green-500 mb-4" />
            <h1 className="text-3xl font-bold mb-4 text-gray-900">
              {language === 'fr' ? 'Commande confirmée!' : 'Order Confirmed!'}
            </h1>
            <p className="text-gray-600 mb-6">
              {language === 'fr' 
                ? 'Merci pour votre achat. Vous recevrez un email de confirmation sous peu.'
                : 'Thank you for your purchase. You will receive a confirmation email shortly.'}
            </p>
            <Link
              href="/"
              className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold"
            >
              {language === 'fr' ? 'Retour à l\'accueil' : 'Back to Home'}
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
          href="/cart"
          className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 mb-6 transition-colors"
        >
          <ArrowLeft size={20} />
          {t.back}
        </Link>

        <h1 className="text-3xl font-bold mb-8">{t.title}</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-md p-6 mb-6">
              <div className="flex items-center gap-2 mb-4">
                <Lock size={20} className="text-green-600" />
                <h2 className="text-xl font-semibold">{t.secure}</h2>
              </div>
              <p className="text-sm text-gray-600 mb-6">
                {language === 'fr' 
                  ? 'Vos informations de paiement sont sécurisées et cryptées.'
                  : 'Your payment information is secure and encrypted.'}
              </p>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {t.cardNumber}
                  </label>
                  <input
                    type="text"
                    placeholder="1234 5678 9012 3456"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      {t.expiryDate}
                    </label>
                    <input
                      type="text"
                      placeholder="MM/YY"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      {t.cvv}
                    </label>
                    <input
                      type="text"
                      placeholder="123"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {t.cardholderName}
                  </label>
                  <input
                    type="text"
                    placeholder={language === 'fr' ? 'Nom complet' : 'Full Name'}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-md p-6 sticky top-4">
              <h2 className="text-xl font-semibold mb-4">{t.orderSummary}</h2>
              
              <div className="space-y-3 mb-6">
                {cartItems.map((item) => (
                  <div key={item.id} className="flex justify-between text-sm">
                    <span className="text-gray-600">{item.title}</span>
                    <span className="font-semibold">
                      {(item.price_xof || item.price || 0).toLocaleString()} XOF
                    </span>
                  </div>
                ))}
              </div>

              <div className="border-t pt-4 mb-6">
                <div className="flex justify-between items-center">
                  <span className="text-lg font-semibold">{t.total}:</span>
                  <span className="text-2xl font-bold text-blue-600">
                    {getTotalPrice().toLocaleString()} XOF
                  </span>
                </div>
              </div>

              <button
                onClick={handleCheckout}
                disabled={isProcessing}
                className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {isProcessing ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                    {t.processing}
                  </>
                ) : (
                  <>
                    <CreditCard size={20} />
                    {t.placeOrder}
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

