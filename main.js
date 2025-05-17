import obfuscatedImageUrls from './obfuscated-image-urls.js';

function decodeBase64(str) {
  try {
    return atob(str);
  } catch (e) {
    console.error("Failed to decode:", str);
    return "";
  }
}

function showRandomImage() {
  const img = document.getElementById('main-image');
  const randIndex = Math.floor(Math.random() * obfuscatedImageUrls.length);
  const realUrl = decodeBase64(obfuscatedImageUrls[randIndex]);
  img.src = realUrl;
}

// Click or tap to show next image
document.addEventListener("click", showRandomImage);
document.addEventListener("touchstart", showRandomImage);

// Swipe left/right (desktop arrow keys)
document.addEventListener("keydown", (e) => {
  if (["ArrowLeft", "ArrowRight"].includes(e.key)) {
    showRandomImage();
  }
});

// Load first image on page load
window.onload = showRandomImage;
