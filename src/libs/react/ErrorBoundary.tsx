import type { ErrorInfo, ReactNode } from "react";
import { Component } from "react";

interface Props {
  fallback: ReactNode;
  children?: ReactNode;
}

interface State {
  hasError: boolean;
}

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
  };

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  public static getDerivedStateFromError(_: Error): State {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    console.error("Uncaught error:", error, errorInfo);
  }

  public render(): ReactNode {
    const { children, fallback } = this.props;

    if (this.state.hasError) {
      return fallback;
    }

    return children;
  }
}

export default ErrorBoundary;
