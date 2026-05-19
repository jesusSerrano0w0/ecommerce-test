export const formatPrice = (price) => {
  if (price == null || isNaN(price)) return "$0";
  
  return new Intl.NumberFormat('es-CO', {
    style: 'currency',
    currency: 'COP',
    minimumFractionDigits: 0, // ← Sin decimales (estándar colombiano)
    maximumFractionDigits: 0  // ← Sin decimales
  }).format(price);
};