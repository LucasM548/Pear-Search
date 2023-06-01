const links = [
    "https://www.paypal.com/paypalme/LucasM54",
    "https://www.paypal.com/paypalme/biquidouLIV"
  ];
  
  function openRandomLink() {
    const randomLink = links[Math.floor(Math.random() * links.length)];
    window.open(randomLink, "_blank");
  }
