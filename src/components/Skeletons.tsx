import React from 'react';

export const Skeleton: React.FC<{ className?: string; style?: React.CSSProperties }> = ({
  className = '',
  style,
}) => (
  <div
    style={style}
    className={`animate-pulse bg-emerald-950/10 rounded-xl relative overflow-hidden ${className}`}
  >
    <div className="absolute inset-0 -translate-x-full animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/40 to-transparent" />
  </div>
);

export const ProductCardSkeleton: React.FC = () => (
  <div className="bg-white rounded-2xl p-3 sm:p-4 border border-emerald-900/10 flex flex-col justify-between space-y-3">
    <div className="space-y-2">
      <Skeleton className="w-full h-36 sm:h-40 rounded-xl" />
      <div className="flex items-center justify-between pt-1">
        <Skeleton className="w-16 h-3 rounded-full" />
        <Skeleton className="w-12 h-3 rounded-full" />
      </div>
      <Skeleton className="w-full h-4 rounded-md" />
      <Skeleton className="w-2/3 h-3 rounded-md" />
    </div>

    <div className="space-y-2 pt-2 border-t border-gray-100">
      <div className="flex items-center justify-between">
        <Skeleton className="w-20 h-5 rounded-md" />
        <Skeleton className="w-12 h-3 rounded-md" />
      </div>
      <Skeleton className="w-full h-9 rounded-xl" />
    </div>
  </div>
);

export const CatalogSkeleton: React.FC<{ count?: number }> = ({ count = 6 }) => (
  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
    {Array.from({ length: count }).map((_, i) => (
      <ProductCardSkeleton key={i} />
    ))}
  </div>
);

export const OrderSkeleton: React.FC = () => (
  <div className="p-4 bg-white rounded-2xl border border-emerald-900/10 space-y-3">
    <div className="flex items-center justify-between">
      <Skeleton className="w-24 h-4 rounded-md" />
      <Skeleton className="w-16 h-5 rounded-full" />
    </div>
    <div className="flex items-center gap-3">
      <Skeleton className="w-12 h-12 rounded-xl shrink-0" />
      <div className="space-y-1.5 flex-1">
        <Skeleton className="w-3/4 h-3 rounded-md" />
        <Skeleton className="w-1/2 h-3 rounded-md" />
      </div>
    </div>
    <div className="pt-2 border-t border-gray-100 flex items-center justify-between">
      <Skeleton className="w-20 h-4 rounded-md" />
      <Skeleton className="w-24 h-8 rounded-xl" />
    </div>
  </div>
);

export const MetricCardSkeleton: React.FC = () => (
  <div className="p-4 bg-white rounded-2xl border border-emerald-900/10 space-y-2">
    <div className="flex items-center justify-between">
      <Skeleton className="w-20 h-3 rounded-md" />
      <Skeleton className="w-7 h-7 rounded-lg" />
    </div>
    <Skeleton className="w-28 h-7 rounded-md" />
    <Skeleton className="w-16 h-3 rounded-full" />
  </div>
);

export const ChartSkeleton: React.FC = () => (
  <div className="bg-white rounded-3xl p-5 border border-emerald-900/10 space-y-4">
    <div className="flex items-center justify-between">
      <div className="space-y-1">
        <Skeleton className="w-32 h-4 rounded-md" />
        <Skeleton className="w-48 h-3 rounded-md" />
      </div>
      <Skeleton className="w-20 h-5 rounded-full" />
    </div>
    <div className="h-40 flex items-end gap-2 pt-4">
      {Array.from({ length: 12 }).map((_, i) => (
        <Skeleton
          key={i}
          className="flex-1 rounded-t-sm"
          style={{ height: `${25 + ((i * 17) % 70)}%` }}
        />
      ))}
    </div>
  </div>
);

export const ProductDetailSkeleton: React.FC = () => (
  <div className="space-y-4">
    <Skeleton className="w-full h-56 rounded-2xl" />
    <Skeleton className="w-24 h-4 rounded-full" />
    <Skeleton className="w-3/4 h-6 rounded-md" />
    <Skeleton className="w-full h-12 rounded-xl" />
    <Skeleton className="w-full h-10 rounded-xl" />
  </div>
);
