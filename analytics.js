/* Keep local previews out of production analytics; load GA after page assets. */
(() => {
  if (!['odontologiavargasvaldez.com', 'www.odontologiavargasvaldez.com'].includes(location.hostname)) return;
  window.dataLayer = window.dataLayer || [];
  function gtag() { window.dataLayer.push(arguments); }
  gtag('js', new Date());
  gtag('config', 'G-RDZCFR4JHZ');
  document.addEventListener('click', (event) => {
    const link = event.target.closest?.('a[href*="wa.me"],a[href*="api.whatsapp.com"]');
    if (link) gtag('event', 'clic_whatsapp', { page_path: location.pathname });
  }, true);
  function loadAnalytics() {
    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://www.googletagmanager.com/gtag/js?id=G-RDZCFR4JHZ';
    document.head.append(script);
  }
  if (document.readyState === 'complete') loadAnalytics();
  else window.addEventListener('load', loadAnalytics, { once: true });
})();
