import React from "react";

export class ErrorBoundary extends React.Component<
  { children: React.ReactNode },
  { hasError: boolean }
> {
  constructor(props: { children: React.ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error("ErrorBoundary caught an error", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="flex flex-col items-center justify-center h-screen text-center px-4 bg-gray-100 text-gray-800">
          <h1 className="text-3xl font-bold mb-4">
            Oops! Something went wrong.
          </h1>
          <p className="mb-4">
            We're sorry for the inconvenience. Please try refreshing the page or
            come back later.
          </p>
          <button
            onClick={() => window.location.reload()}
            className="px-4 py-2 bg-emerald-700 text-white rounded hover:bg-emerald-900 transition cursor-pointer"
          >
            Refresh Page
          </button>
        </div>
      );
    }
    return this.props.children;
  }
}
