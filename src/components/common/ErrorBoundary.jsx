import { Component } from 'react';
import { Button } from '@/components/ui/Button';

/**
 * React error boundary.
 * Catches errors in children and renders a fallback UI.
 */
export class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    if (this.props.onError) {
      this.props.onError(error, errorInfo);
    }
  }

  handleReset = () => {
    this.setState({ hasError: false, error: null });
  };

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback(this.state.error, this.handleReset);
      }

      return (
        <div className="flex min-h-[50vh] flex-col items-center justify-center px-6 text-center">
          <h2 className="text-heading-2 font-bold text-foreground">
            Something went wrong
          </h2>
          <p className="mt-4 max-w-md text-muted">
            An unexpected error occurred. Please try again.
          </p>
          {this.state.error?.message && (
            <pre className="mt-4 max-w-md rounded-lg bg-surface p-4 text-start text-xs text-muted">
              {this.state.error.message}
            </pre>
          )}
          <Button onClick={this.handleReset} className="mt-8">
            Try again
          </Button>
        </div>
      );
    }

    return this.props.children;
  }
}
