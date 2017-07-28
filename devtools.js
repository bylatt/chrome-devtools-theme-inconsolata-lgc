var x = new XMLHttpRequest();
x.open('GET', 'custom.css');
x.onload = function() {
  chrome.devtools.panels.applyStyleSheet(x.responseText);
};
x.send();
