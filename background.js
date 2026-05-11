chrome.action.onClicked.addListener((tab) => {
  // Las extensiones no pueden ejecutar scripts en las páginas de configuración de Chrome
  // Si intentas pulsarlo en una pestaña "chrome://", lo evitamos para que no dé error.
  if (tab.url && tab.url.startsWith("chrome://")) {
    console.warn("Este método no funciona en las páginas internas de configuración de Chrome.");
    return;
  }

  // Inyectamos la orden en la página web actual
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    func: () => {
      // Comprobamos si la web ya está en pantalla completa
      if (!document.fullscreenElement) {
        // Si no lo está, la expandimos
        document.documentElement.requestFullscreen().catch((err) => {
          console.error("No se pudo poner en pantalla completa:", err);
        });
      } else {
        // Si ya lo está, salimos de la pantalla completa
        document.exitFullscreen();
      }
    }
  });
});