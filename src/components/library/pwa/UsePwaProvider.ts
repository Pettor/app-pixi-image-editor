import { useRegisterSW } from "virtual:pwa-register/react";
import { PWA_VERSION_INTERVAL } from "./PwaProviderConstants";

export function usePwaProvider(): {
  offlineReady: boolean;
  needRefresh: boolean;
  handleRefresh: () => Promise<void>;
  handleOfflineClose: () => void;
} {
  function checkPwaUpdate(registration: ServiceWorkerRegistration): void {
    setInterval(() => {
      // Check for PWA updates
      registration.update();
    }, PWA_VERSION_INTERVAL);
  }

  const {
    offlineReady: [offlineReady, setOfflineReady],
    needRefresh: [needRefresh],
    updateServiceWorker,
  } = useRegisterSW({
    onRegistered(registration) {
      if (!registration) {
        return;
      }
      checkPwaUpdate(registration);
    },
    onRegisterError(error) {
      console.log(`SW registration failed: ${error}`);
    },
  });

  async function handleRefresh(): Promise<void> {
    await updateServiceWorker(true);
    window.location.reload();
  }

  function handleOfflineClose(): void {
    setOfflineReady(false);
  }

  return {
    offlineReady,
    needRefresh,
    handleRefresh,
    handleOfflineClose,
  };
}
