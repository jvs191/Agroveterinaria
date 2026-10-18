import React, { ErrorInfo, ReactNode } from 'react';
import { AlertTriangle, RefreshCw, Home } from 'lucide-react';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
  errorInfo: ErrorInfo | null;
}

export class ErrorBoundary extends React.Component<Props, State> {
  public state: State = {
    hasError: false,
    error: null,
    errorInfo: null,
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error, errorInfo: null };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error caught by Campo Verde ErrorBoundary:', error, errorInfo);
    this.setState({ errorInfo });
  }

  private handleReset = () => {
    this.setState({ hasError: false, error: null, errorInfo: null });
  };

  private handleGoHome = () => {
    this.setState({ hasError: false, error: null, errorInfo: null });
    if (typeof window !== 'undefined') {
      window.location.href = '/';
    }
  };

  public render() {
    if (this.state.hasError) {
      const isPt =
        typeof window !== 'undefined' &&
        localStorage.getItem('campo_verde_lang') === 'pt';

      return (
        <div className="min-h-screen bg-[#F7F6F1] flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-emerald-900/10 shadow-xl max-w-md w-full text-center space-y-5 animate-fade-in">
            {/* Logo Badge */}
            <div className="w-16 h-16 bg-amber-50 rounded-2xl border border-amber-200 text-amber-600 flex items-center justify-center mx-auto shadow-2xs">
              <AlertTriangle className="w-8 h-8" />
            </div>

            <div className="space-y-2">
              <span className="text-[10px] font-extrabold uppercase text-[#2F6B45] tracking-wider bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
                Campo Verde Digital
              </span>
              <h2 className="text-xl font-black text-[#1D2922]">
                {isPt ? 'Algo não saiu como esperado.' : 'Algo no salió como esperábamos.'}
              </h2>
              <p className="text-xs text-gray-600 leading-relaxed">
                {isPt
                  ? 'Ocorreu um erro inesperado na aplicação. Você pode tentar novamente ou retornar ao início.'
                  : 'Ocurrió un error inesperado en la aplicación. Podés intentar nuevamente o volver al inicio.'}
              </p>
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row items-center gap-2 pt-2">
              <button
                onClick={this.handleReset}
                className="w-full bg-[#173F2A] hover:bg-[#2F6B45] text-white font-bold py-3 px-4 rounded-xl text-xs flex items-center justify-center gap-2 transition-colors cursor-pointer focus-visible:outline-2 focus-visible:outline-[#82C328]"
              >
                <RefreshCw className="w-4 h-4" />
                <span>{isPt ? 'Tentar novamente' : 'Intentar nuevamente'}</span>
              </button>

              <button
                onClick={this.handleGoHome}
                className="w-full bg-white hover:bg-gray-50 text-[#173F2A] font-bold py-3 px-4 rounded-xl text-xs border border-emerald-900/15 flex items-center justify-center gap-2 transition-colors cursor-pointer focus-visible:outline-2 focus-visible:outline-[#82C328]"
              >
                <Home className="w-4 h-4" />
                <span>{isPt ? 'Voltar ao início' : 'Volver al inicio'}</span>
              </button>
            </div>

            {/* Dev details if error exists */}
            {process.env.NODE_ENV !== 'production' && this.state.error && (
              <details className="text-left bg-gray-50 p-3 rounded-xl border text-[10px] font-mono text-red-800 overflow-x-auto max-h-32">
                <summary className="cursor-pointer font-bold text-gray-700">
                  Detalles del error (Dev)
                </summary>
                <p className="mt-1 font-semibold">{this.state.error.toString()}</p>
                {this.state.errorInfo?.componentStack && (
                  <pre className="mt-1 text-[9px] text-gray-600">
                    {this.state.errorInfo.componentStack}
                  </pre>
                )}
              </details>
            )}
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
