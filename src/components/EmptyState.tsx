import React from 'react';
import { LucideIcon } from 'lucide-react';

interface EmptyStateProps {
  icon: LucideIcon;
  title: string;
  description: string;
  actionLabel?: string;
  onAction?: () => void;
  secondaryActionLabel?: string;
  onSecondaryAction?: () => void;
}

export const EmptyState: React.FC<EmptyStateProps> = ({
  icon: Icon,
  title,
  description,
  actionLabel,
  onAction,
  secondaryActionLabel,
  onSecondaryAction,
}) => {
  return (
    <div className="bg-white rounded-3xl p-8 border border-emerald-900/10 shadow-2xs text-center space-y-4 max-w-md mx-auto my-6 animate-fade-in">
      <div className="w-16 h-16 bg-emerald-50 rounded-2xl border border-emerald-200 text-[#173F2A] flex items-center justify-center mx-auto shadow-2xs">
        <Icon className="w-8 h-8" />
      </div>

      <div className="space-y-1.5">
        <h3 className="font-black text-base text-[#1D2922]">{title}</h3>
        <p className="text-xs text-gray-500 leading-relaxed">{description}</p>
      </div>

      {(actionLabel || secondaryActionLabel) && (
        <div className="flex flex-col sm:flex-row items-center justify-center gap-2 pt-2">
          {actionLabel && onAction && (
            <button
              onClick={onAction}
              className="w-full sm:w-auto bg-[#173F2A] hover:bg-[#2F6B45] text-white font-bold py-2.5 px-5 rounded-xl text-xs transition-colors shadow-2xs cursor-pointer focus-visible:outline-2 focus-visible:outline-[#82C328]"
            >
              {actionLabel}
            </button>
          )}

          {secondaryActionLabel && onSecondaryAction && (
            <button
              onClick={onSecondaryAction}
              className="w-full sm:w-auto bg-gray-50 hover:bg-gray-100 text-[#173F2A] font-bold py-2.5 px-4 rounded-xl text-xs border border-gray-200 transition-colors cursor-pointer focus-visible:outline-2 focus-visible:outline-[#82C328]"
            >
              {secondaryActionLabel}
            </button>
          )}
        </div>
      )}
    </div>
  );
};
