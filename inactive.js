const images = [
    "Model_Logo.png",
    "Model_Aria.png",
    "Model_Noir.png"
  ];
  
  let index = 1;
  const slider = document.getElementById("slider");
  
  setInterval(() => {
    index = (index + 1) % images.length;
    slider.src = images[index];
  }, 3000);
  