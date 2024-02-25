import { useNavigate } from "react-router-dom";
import type { NotFoundViewProps } from "./NotFoundView";

export function useNotFoundView(): NotFoundViewProps {
  const navigate = useNavigate();

  return {
    onBack: () => navigate("/"),
  };
}
