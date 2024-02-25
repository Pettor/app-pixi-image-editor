import { useNavigate } from "react-router-dom";
import type { ErrorViewProps } from "./ErrorView";

export function useErrorView(): ErrorViewProps {
  const navigate = useNavigate();

  return {
    onBack: () => navigate("/"),
  };
}
