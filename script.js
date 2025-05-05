VANTA.NET({
    el: "#vanta-bg",
    mouseControls: true,
    touchControls: true,
    gyroControls: false,
    minHeight: 200.00,
    minWidth: 200.00,
    scale: 1.00,
    scaleMobile: 1.00,
    color: 0x00ffff,
    backgroundColor: 0x111111
  });

  document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    alert("Thanks for your message! (Form submission not implemented)");
  });