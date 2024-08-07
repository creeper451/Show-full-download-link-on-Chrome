document.addEventListener('DOMContentLoaded', function() {
  chrome.downloads.search({}, function(items) {
    const linksDiv = document.getElementById('links');
    items.forEach(item => {
      const linkElement = document.createElement('a');
      linkElement.href = item.finalUrl || item.url;
      linkElement.textContent = item.filename;
      linkElement.title = item.finalUrl || item.url; // Show full URL on hover
      linksDiv.appendChild(linkElement);
      linksDiv.appendChild(document.createElement('br'));
    });
  });
});
