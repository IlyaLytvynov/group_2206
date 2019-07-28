function TraficLighter() {
  const lights = document.querySelectorAll('.traffic-lighter__light');

  function toggleOffAll() {
    for (const light of lights) {
      light.classList.remove('active');
    }
  }

  function toggle() {
    toggleOffAll();
    console.log(this);
    this.classList.add('active');
  }

  for (const light of lights) {
    light.onclick = toggle;
  }
}

export { TraficLighter };
