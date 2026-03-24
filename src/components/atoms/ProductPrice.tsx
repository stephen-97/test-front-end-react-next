interface ProductPriceProps {
  price: number;
  className?: string;
}

export default function ProductPrice({ price, className }: ProductPriceProps) {
  if (price === 0) {
    return <span className={`font-semibold text-green-600 ${className}`}>Sans frais</span>;
  }

  return (
    <span className={`font-semibold text-gray-900 ${className}`}>
      à partir de {price.toFixed(2).replace('.', ',')}€/mois
    </span>
  );
}
