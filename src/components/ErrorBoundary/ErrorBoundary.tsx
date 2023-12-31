import { Component, ErrorInfo } from "react";

interface Props {
  fallback: React.ReactNode;
  children: React.ReactNode;
}

interface State {
  hasError: boolean;
}

export class ErrorBoundary extends Component<Props, State> {
  state = {
    hasError: false,
  };

  static getDerivedStateFromError(_error: Error) {
    return { hasError: true };
  }

  componentDidCatch(_error: Error, _errorInfo: ErrorInfo): void {
    // logger
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback; // <button onClick={() => this.setState({ hasError: false })}>Retry</button>
    }
    return this.props.children;
  }
}
