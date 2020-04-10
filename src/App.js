import React, {Component } from 'react'
import { Map, TileLayer} from 'react-leaflet'
import LocateControl from './LocateControl';// live location button
import Overlaycontrol from './overlay'

type State = {
  hasLocation: boolean,
  latlng: {
    lat1: number,
    lng: number,
  },
}


export default class Mapmy extends Component<{}, State> {
  state = {
    hasLocation: false,
    latlng: {
      lat:11.059821,
      lng:78.387451,
    },
  }

  handleLocationFound = (e: Object) => {
    this.setState({
      hasLocation: true,
      latlng: e.latlng,
    })
  }

  render() {
    

   
    return (
      <div>
        <label >Corona Tamil Nadu Dashboard</label>
        <Map
        center={this.state.latlng}
        length={4}
        // onlocationfound={this.handleLocationFound}
        zoom={7}>
        <TileLayer
          attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <LocateControl  startDirectly/>
        <Overlaycontrol />
            

      </Map>
      </div>
    )
  }
}