import React from 'react';
import { CheckCircle2, AlertCircle, ShoppingBag, Heart, Trash2, X } from 'lucide-react';

export type ToastType = 'success' | 'info' | 'favorite' | 'remove' | 'order';

export interface ToastMessage {
  id: string;
  type: ToastType;
  title: string;
  message?: string;
}

interface ToastProps {
  toasts: ToastMessage[];
  onDismiss: (id: string) => void;
}

export const ToastContainer: React.FC<ToastProps> = ({ toasts, onDismiss }) => {
  if (toasts.length === 0) return null;

  return (
    <div className="fixed bottom-20 sm:bottom-6 right-4 left-4 sm:left-auto sm:max-w-md z-50 space-y-2 pointer-events-none">
      {toasts.map((toast) => {
        let Icon = CheckCircle2;
        let iconBg = 'bg-emerald-100 text-[#173F2A]';

        if (toast.type === 'favorite') {
          Icon = Heart;
          iconBg = 'bg-rose-100 text-rose-600';
        } else if (toast.type === 'remove') {
          Icon = Trash2;
          iconBg = 'bg-amber-100 text-amber-700';
        } else if (toast.type === 'order') {
          Icon = ShoppingBag;
          iconBg = 'bg-[#82C328]/30 text-[#173F2A]';
        } else if (toast.type === 'info') {
          Icon = AlertCircle;
          iconBg = 'bg-blue-100 text-blue-700';
        }

        return (
          <div
            key={toast.id}
            className="pointer-events-auto bg-[#173F2A] text-white p-3.5 rounded-2xl shadow-xl border border-emerald-700 flex items-center justify-between gap-3 animate-slide-up backdrop-blur-md"
            role="status"
            aria-live="polite"
          >
            <div className="flex items-center gap-3 min-w-0">
              <div className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 ${iconBg}`}>
                <Icon className="w-5 h-5" />
              </div>
              <div className="min-w-0">
                <h4 className="font-extrabold text-xs text-white truncate">{toast.title}</h4>
                {toast.message && (
                  <p className="text-[11px] text-emerald-200 truncate">{toast.message}</p>
                )}
              </div>
            </div>

            <button
              onClick={() => onDismiss(toast.id)}
              className="p-1.5 hover:bg-white/10 rounded-lg text-emerald-300 hover:text-white transition-colors shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-[#82C328]"
              aria-label="Cerrar notificación"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        );
      })}
    </div>
  );
};
