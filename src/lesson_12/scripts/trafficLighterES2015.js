class TrafficLighterES6 {
  constructor( targetElement, id ) {
    this.targetElement = targetElement;
    this.colors = [ 'red', 'yellow', 'green' ];
    this.lights = [];
    this.lighter = 'asdas';
    this.id = id;
    this.render();
    this.renderLights();
  }
  render() {
    this.lighter = document.createElement( 'div' );
    this.lighter.classList.add( 'traffic-lighter' );
    this.lighter.id = 'lighter1';
    this.targetElement.appendChild( this.lighter );
  }
  renderLights() {
    console.log( '>>>>>', this.lights );
    for ( let color of this.colors ) {
      const light = document.createElement( 'button' );
      light.classList.add( 'traffic-lighter__light', `traffic-lighter__light_${ color }` );
      light.onclick = () => {
        console.log( '====', this );
        this.toggleOffAll();
        light.classList.add( 'active' );
      };
      this.lights.push( light );
      this.lighter.appendChild( light );
    }
  }
  toggleOffAll() {
    console.log( this.id );
    for ( const light of this.lights ) {
      light.classList.remove( 'active' );
    }
  }
  disable() {
    this.toggleOffAll();
  }
}


export { TrafficLighterES6 };
