import React from 'react';

class Geolocation extends React.Component {

	constructor(props){
		super(props)
		this.state = {
			lat: 0,
			long: 0,
		}
	}

	componentDidMount(){
		this.getLocation();
	}

	getLocation(){
		console.log("GetLocation");

    var onSuccess = function(position) {

	    	this.setState({
	    		lat: position.coords.latitude,
	    		long: position.coords.longitude,
	    	});

        console.log('Latitude: '          + position.coords.latitude          + '\n' +
              'Longitude: '         + position.coords.longitude         + '\n' +
              'Altitude: '          + position.coords.altitude          + '\n' +
              'Accuracy: '          + position.coords.accuracy          + '\n' +
              'Altitude Accuracy: ' + position.coords.altitudeAccuracy  + '\n' +
              'Heading: '           + position.coords.heading           + '\n' +
              'Speed: '             + position.coords.speed             + '\n' +
              'Timestamp: '         + position.timestamp                + '\n');
    }.bind(this);

    function onError(error) {
        console.log(`code: ${error.code}, message: ${error.message}`);
    }

    navigator.geolocation.getCurrentPosition(onSuccess, onError);
	}

	render() {

    return (<div>
      	<h1>Hello World from Geolocation!</h1>

	      <h3>Latitude: { this.state.lat }</h3>
	      <h3>Longitude: { this.state.long }</h3>
      </div>
    );
  }
    
}

export default Geolocation;