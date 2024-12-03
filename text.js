async function loadAboutText() {
    const response = await fetch('src/about.txt');
    const text = await response.text();
    document.getElementById('about-text').innerHTML = text.replace(/\n/g, '<br>');
  }
  window.onload = loadAboutText;