document.addEventListener("DOMContentLoaded", function () {
  const images = [
    "assets/lorenzo/IMG_6176.jpeg",
    "assets/lorenzo/IMG_6161.jpeg",
    "assets/lorenzo/IMG_6157.jpeg",
    "assets/lorenzo/IMG_6160.jpeg",
    "assets/lorenzo/IMG_6165.jpeg",
    "assets/lorenzo/IMG_6167.jpeg",
    "assets/lorenzo/IMG_6170.jpeg",
    "assets/lorenzo/IMG_6165.jpeg",
    "assets/lorenzo/IMG_6172.jpeg",
    "assets/lorenzo/IMG_6177.jpeg",
    "assets/lorenzo/IMG_6179.jpeg",
    "assets/lorenzo/IMG_7422.jpeg",
  ];
  let currentIndex = 0;
  const landingImg = document.getElementById("landing-img");

  images.forEach((src, index) => {
    const imgDiv = document.createElement("div");
    imgDiv.classList.add("slideshow-img");
    if (index === 0) imgDiv.classList.add("active");
    imgDiv.style.backgroundImage = `url(${src})`;
    landingImg.appendChild(imgDiv);
  });

  function showNextImage() {
    const currentImg = landingImg.querySelector(".slideshow-img.active");
    currentImg.classList.remove("active");
    currentIndex = (currentIndex + 1) % images.length;
    const nextImg = landingImg.querySelectorAll(".slideshow-img")[currentIndex];
    nextImg.classList.add("active");
  }

  function showPrevImage() {
    const currentImg = landingImg.querySelector(".slideshow-img.active");
    currentImg.classList.remove("active");
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    const prevImg = landingImg.querySelectorAll(".slideshow-img")[currentIndex];
    prevImg.classList.add("active");
  }

  setInterval(showNextImage, 5000);

  landingImg.addEventListener("click", (event) => {
    const rect = landingImg.getBoundingClientRect();
    const x = event.clientX - rect.left;
    if (x < rect.width / 2) {
      showPrevImage();
    } else {
      showNextImage();
    }
  });
});
