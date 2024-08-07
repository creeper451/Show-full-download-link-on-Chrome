function showDownloadLinks() {
  const downloadItems = document.querySelectorAll('downloads-item');
  downloadItems.forEach(item => {
    const shadowRoot = item.shadowRoot;
    const fileLink = shadowRoot.querySelector('a[href]');
    if (fileLink) {
      const link = document.createElement('p');
      link.textContent = fileLink.href;
      item.appendChild(link);
    }
  });
}

// Adding a slight delay to ensure elements are rendered
setTimeout(() => {
  showDownloadLinks();
}, 1000);
