/* // viewPort:
import React, { Component } from 'react'
import { Map, TileLayer, type Viewport } from 'react-leaflet'

const DEFAULT_VIEWPORT = {
center: [51.505, -0.09],
zoom: 13,
}

export default class ViewportExample extends Component<{}, { viewport: Viewport },> {
state = {
    viewport: DEFAULT_VIEWPORT,
}

onClickReset = () => {
    this.setState({ viewport: DEFAULT_VIEWPORT })
}

onViewportChanged = (viewport: Viewport) => {
    this.setState({ viewport })
}

render() {
    return (
    <Map 
        onClick={this.onClickReset}
        onViewportChanged={this.onViewportChanged}
        viewport={this.state.viewport}>
        <TileLayer
        attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
    </Map>
    )
}
} */

/*//Lines and point and polygone
 import React, { Component } from "react";
import {
    Circle,
    CircleMarker,
    Map,
    Polygon,
    Polyline,
    Popup,
    Rectangle,
    TileLayer,
  } from 'react-leaflet'






const center = [51.505, -0.09]

const polyline = [
  [51.505, -0.09],
  [51.51, -0.1],
  [51.51, -0.12],
]

const multiPolyline = [
  [
    [51.5, -0.1],
    [51.5, -0.12],
    [51.52, -0.12],
  ],
  [
    [51.5, -0.05],
    [51.5, -0.06],
    [51.52, -0.06],
  ],
]

const polygon = [
  [51.515, -0.09],
  [51.52, -0.1],
  [51.52, -0.12],
]

const multiPolygon = [
  [
    [51.51, -0.12],
    [51.51, -0.13],
    [51.53, -0.13],
  ],
  [
    [51.51, -0.05],
    [51.51, -0.07],
    [51.53, -0.07],
  ],
]

const rectangle = [
  [51.49, -0.08],
  [51.5, -0.06],
]

export default class ViewportExample extends Component {
  render() {
    return (
      <Map center={center} zoom={13}>
        <TileLayer
          attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Circle center={center} fillColor="blue" radius={200} />
        
        <Polyline color="lime" positions={polyline} />
        <Polyline color="lime" positions={multiPolyline} />
        <Polygon color="purple" positions={polygon} />
        <Polygon color="purple" positions={multiPolygon} />
        <Rectangle bounds={rectangle} color="black" />
        <CircleMarker center={[51.51, -0.12]} color="red" radius={200}>
          <Popup>Popup in CircleMarker</Popup>
        </CircleMarker>
      </Map>
    )
  }
} */

/* // layer group and feature group
import React, { Component } from 'react'
import {
  Circle,
  FeatureGroup,
  LayerGroup,
  Map,
  Popup,
  Rectangle,
  TileLayer,
} from 'react-leaflet'

const center = [51.505, -0.09]
const rectangle = [
  [51.49, -0.08],
  [51.5, -0.06],
]

export default class ViewportExample extends Component<{}> {
  render() {
    return (
      <Map center={center} zoom={13}>
        <TileLayer
          attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <LayerGroup>
          <Circle center={center} fillColor="blue" radius={200} />
          <Circle center={center} fillColor="red" radius={100} stroke={false} />
          <LayerGroup>
            <Circle
              center={[51.51, -0.08]}
              color="green"
              fillColor="green"
              radius={100}
            />
          </LayerGroup>
        </LayerGroup>
        <FeatureGroup color="purple">
          <Popup>Popup in FeatureGroup</Popup>
          <Circle center={[51.51, -0.06]} radius={200} />
          <Rectangle bounds={rectangle} />
        </FeatureGroup>
      </Map>
    )
  }
} */

/* // it contains tooltips
import React, { Component } from 'react'
import {
  Circle,
  CircleMarker,
  Map,
  Marker,
  Polygon,
  Popup,
  Rectangle,
  TileLayer,
  Tooltip,
} from 'react-leaflet'

const center = [51.505, -0.09]

const multiPolygon = [
  [
    [51.51, -0.12],
    [51.51, -0.13],
    [51.53, -0.13],
  ],
  [
    [51.51, -0.05],
    [51.51, -0.07],
    [51.53, -0.07],
  ],
]

const rectangle = [
  [51.49, -0.08],
  [51.5, -0.06],
]

export default class TooltipExample extends Component<{}, { clicked: number }> {
  state = {
    clicked: 0,
  }

  onClickCircle = () => {
    this.setState({ clicked: this.state.clicked + 1 })
  }

  render() {
    const clickedText =
      this.state.clicked === 0
        ? 'Click this Circle to change the Tooltip text'
        : `Circle click: ${this.state.clicked}`

    return (
      <Map center={center} zoom={13}>
        <TileLayer
          attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Circle
          center={center}
          fillColor="blue"
          onClick={this.onClickCircle}
          radius={200}>
          <Tooltip>{clickedText}</Tooltip>
        </Circle>
        <CircleMarker center={[51.51, -0.12]} color="red" radius={20}>
          <Tooltip>Tooltip for CircleMarker</Tooltip>
        </CircleMarker>
        <Marker position={[51.51, -0.09]}>
          <Popup>Popup for Marker</Popup>
          <Tooltip>Tooltip for Marker</Tooltip>
        </Marker>
        <Polygon color="purple" positions={multiPolygon}>
          <Tooltip sticky>sticky Tooltip for Polygon</Tooltip>
        </Polygon>
        <Rectangle bounds={rectangle} color="black">
          <Tooltip direction="bottom" offset={[0, 20]} opacity={1} permanent>
            permanent Tooltip for Rectangle
          </Tooltip>
        </Rectangle>
      </Map>
    )
  }
/* } */

/* // it contains zoom control position of actually where control is there
import React from 'react'
import { Map, TileLayer, ZoomControl } from 'react-leaflet'

const ZoomControlExample = () => (
  <Map center={[51.505, -0.09]} zoom={9} zoomControl={false}>
    <TileLayer
      attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    <ZoomControl position="bottomright" />
  </Map>
)

export default ZoomControlExample */

/*// it contains control layers
import React, { Component } from 'react'
import {
  Circle,
  FeatureGroup,
  LayerGroup,
  LayersControl,
  Map,
  Marker,
  Popup,
  Rectangle,
  TileLayer,
} from 'react-leaflet'
const { BaseLayer, Overlay } = LayersControl

const center = [51.505, -0.09]
const rectangle = [
  [51.49, -0.08],
  [51.5, -0.06],
]

export default class LayersControlExample extends Component<{}> {
  render() {
    return (
      <Map center={center} zoom={13}>
        <LayersControl position="topright">
          <BaseLayer checked name="OpenStreetMap.Mapnik">
            <TileLayer
              attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
          </BaseLayer>
          <BaseLayer name="OpenStreetMap.BlackAndWhite">
            <TileLayer
              attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              url="https://tiles.wmflabs.org/bw-mapnik/{z}/{x}/{y}.png"
            />
          </BaseLayer>
          <Overlay name="Marker with popup">
            <Marker position={center}>
              <Popup>
                A pretty CSS3 popup. <br /> Easily customizable.
              </Popup>
            </Marker>
          </Overlay>
          <Overlay checked name="Layer group with circles">
            <LayerGroup>
              <Circle center={center} fillColor="blue" radius={200} />
              <Circle
                center={center}
                fillColor="red"
                radius={100}
                stroke={false}
              />
              <LayerGroup>
                <Circle
                  center={[51.51, -0.08]}
                  color="green"
                  fillColor="green"
                  radius={100}
                />
              </LayerGroup>
            </LayerGroup>
          </Overlay>
          <Overlay name="Feature group">
            <FeatureGroup color="purple">
              <Popup>Popup in FeatureGroup</Popup>
              <Circle center={[51.51, -0.06]} radius={200} />
              <Rectangle bounds={rectangle} />
            </FeatureGroup>
          </Overlay>
        </LayersControl>
      </Map>
    )
  }
}
 */

/* // it contains pane layer
import React, { Component } from 'react'
import { Map, Pane, Rectangle, TileLayer } from 'react-leaflet'

const outer = [
  [50.505, -29.09],
  [52.505, 29.09],
]
const inner = [
  [49.505, -2.09],
  [53.505, 2.09],
]

export default class PaneExample extends Component<{}, { render: boolean }> {
  state = {
    render: true,
  }

  interval: IntervalID

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState({
        render: !this.state.render,
        
      })

    }, 5000)
  }

  componentWillUnmount() {
    clearInterval(this.interval)
  }

  render() {
    return (
      <Map bounds={outer}>
        <TileLayer
          attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {this.state.render ? (
          <Pane name="cyan-rectangle" style={{ zIndex: 500 }}>
            <Rectangle bounds={outer} color="green" />
          </Pane>   
        ) : null}
        {console.log(this.state.render,this.interval)}
        <Pane name="yellow-rectangle" style={{ zIndex: 499 }}>
          <Rectangle bounds={inner} color="yellow" />
          <Pane name="purple-rectangle" className="purplePane-purplePane">
            <Rectangle bounds={outer} color="purple" />
          </Pane>
        </Pane>
      </Map>
    )
  }
}
 */


/* // dragglbe marker

import React, { Component, createRef } from 'react'
import { Map, TileLayer, Marker, Popup } from 'react-leaflet'

type Position = { lat: number, lng: number }

type State = {
  center: Position,
  marker: Position,
  zoom: number,
  draggable: boolean,
}

export default class DraggableExample extends Component<{}, State> {
  state = {
    center: {
      lat: 51.505,
      lng: -0.09,
    },
    marker: {
      lat: 51.505,
      lng: -0.09,
    },
    zoom: 13,
    draggable: true,
  }
  // $FlowFixMe: ref
  refmarker = createRef()

  toggleDraggable = () => {
    this.setState({ draggable: !this.state.draggable })
  }

  updatePosition = () => {
    const marker = this.refmarker.current
    if (marker != null) {
      this.setState({
        marker: marker.leafletElement.getLatLng(),
      })
    }
  }

  render() {
    const position = [this.state.center.lat, this.state.center.lng]
    const markerPosition = [this.state.marker.lat, this.state.marker.lng]

    return (
      <Map center={position} zoom={this.state.zoom}>
        <TileLayer
          attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker
          draggable={this.state.draggable}
          onDragend={this.updatePosition}
          position={markerPosition}
          ref={this.refmarker}>
          <Popup minWidth={90}>
            <span onClick={this.toggleDraggable}>
              {this.state.draggable ? 'DRAG MARKER' : 'MARKER FIXED'}
            </span>
          </Popup>
        </Marker>
      </Map>
    )
  }
} */

/*// map with bounds
import React, { Component } from 'react'
import { Map, TileLayer, Rectangle } from 'react-leaflet'

const outer = [
  [50.505, -29.09],
  [52.505, 29.09],
]
const inner = [
  [49.505, -2.09],
  [53.505, 2.09],
]

type State = {
  bounds: Array<[number, number]>,
}

export default class BoundsExample extends Component<{}, State> {
  state = {
    bounds: outer,
  }

  onClickInner = () => {
    this.setState({ bounds: inner })
  }

  onClickOuter = () => {
    this.setState({ bounds: outer })
  }

  render() {
    return (
      <Map bounds={this.state.bounds}>
        <TileLayer
          attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Rectangle
          bounds={outer}
          color={this.state.bounds === outer ? 'red' : 'white'}
          onClick={this.onClickOuter}
        />
        <Rectangle
          bounds={inner}
          color={this.state.bounds === inner ? 'red' : 'white'}
          onClick={this.onClickInner}
        />
      </Map>
    )
  }
} */


/*  listf markers dynamic creation of markers
 import React, { Component, Fragment } from 'react'
import { Map, TileLayer, Marker, Popup } from 'react-leaflet'

type Position = [number, number]

type Props = {|
  content: string,
  position: Position,
|}

type MarkerData = {| ...Props, key: string |}

const MyPopupMarker = ({ content, position }: Props) => (
  <Marker position={position}>
    <Popup>{content}</Popup>
  </Marker>
)

const MyMarkersList = ({ markers }: { markers: Array<MarkerData> }) => {
  const items = markers.map(({ key, ...props }) => (
    <MyPopupMarker key={key} {...props} />
  ))
  return <  >{items}</Fragment>
}

type State = {
  markers: Array<MarkerData>,
}

export default class CustomComponent extends Component<{}, State> {
  state = {
    markers: [
      { key: 'marker1', position: [51.5, -0.1], content: 'My first popup' },
      { key: 'marker2', position: [51.51, -0.1], content: 'My second popup' },
      { key: 'marker3', position: [51.49, -0.05], content: 'My third popup' },
    ],
  }

  render() {
    return (
      <Map center={[51.505, -0.09]} zoom={13}>
        <TileLayer
          attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <MyMarkersList markers={this.state.markers} />
      </Map>
    )
  }
}
 */


/* //  it is containsanimate option
import React, { Component } from 'react'
import { Map, TileLayer } from 'react-leaflet'

type State = {
  animate: boolean,
  latlng: {
    lat: number,
    lng: number,
  },
}

export default class AnimateExample extends Component<{}, State> {
  state = {
    animate: false,
    latlng: {
      lat: 51.505,
      lng: -0.09,
    },
  }

  handleClick = (e: Object) => {
    this.setState({
      latlng: e.latlng,
    })
  }

  toggleAnimate = () => {
    this.setState({
      animate: !this.state.animate,
    })
  }

  render() {
    return (
      <div style={{ textAlign: 'center' }}>
        <label>
          <input
            checked={this.state.animate}
            onChange={this.toggleAnimate}
            type="checkbox"
          />
          Animate panning
        </label>
        <Map
          animate={this.state.animate}
          center={this.state.latlng}
          length={4}
          onClick={this.handleClick}
          zoom={13}>
          <TileLayer
            attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
        </Map>
      </div>
    )
  }
}
 */


/* //  it wms tile layer web map service
import React, { Component } from 'react'
import { Map, TileLayer, WMSTileLayer } from 'react-leaflet'

type State = {
  lat: number,
  lng: number,
  zoom: number,
  bluemarble: boolean,
}

export default class WMSTileLayerExample extends Component<{}, State> {
  state = {
    lat: 51.505,
    lng: -0.09,
    zoom: 5,
    bluemarble: false,
  }

  onClick = () => {
    this.setState({
      bluemarble: !this.state.bluemarble,
    })
  }

  render() {
    return (
      <Map
        center={[this.state.lat, this.state.lng]}
        zoom={this.state.zoom}
        onClick={this.onClick}>
        <TileLayer
          attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <WMSTileLayer
          layers={this.state.bluemarble ? 'nasa:bluemarble' : 'ne:ne'}
          url="https://demo.boundlessgeo.com/geoserver/ows"
        />
      </Map>
    )
  }
}

 */


/* // video overlay


import React, { Component } from 'react'
import { Map, TileLayer, VideoOverlay } from 'react-leaflet'

export default class VideoOverlayExample extends Component<
  {},
  { play: boolean },
> {
  state = {
    play: true,
  }

  onTogglePlay = () => {
    this.setState({ play: !this.state.play })
  }

  render() {
    return (
      <Map center={[25, -100]} onClick={this.onTogglePlay} zoom={4}>
        <TileLayer
          attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <VideoOverlay
          bounds={[
            [32, -130],
            [13, -100],
          ]}
          play={this.state.play}
          url="https://www.mapbox.com/bites/00188/patricia_nasa.webm"
        />
      </Map>
    )
  }
}
 */


// custom icon
import React, { Component } from 'react'
import { Map, TileLayer, Marker, Popup } from 'react-leaflet'
import L, { Circle, CircleMarker } from 'leaflet'

type State = {
  lat: number,
  lng: number,
  zoom: number,
}

export const pointerIcon = new L.Icon({
  iconUrl: './pointerIcon.svg',
  iconRetinaUrl: './pointerIcon.svg',
  iconAnchor: [5, 55],
  popupAnchor: [10, -44],
  iconSize: [25, 55],
  shadowUrl: './marker-shadow.png',
  shadowSize: [68, 95],
  shadowAnchor: [20, 92],
})

// export const suitcasePoint = new L.Icon({
//   iconUrl: './suitcaseIcon.svg',
//   iconRetinaUrl: './suitcaseIcon.svg',
//   iconAnchor: [20, 40],
//   popupAnchor: [0, -35],
//   iconSize: [40, 40],
//   shadowUrl: './marker-shadow.png',
//   shadowSize: [29, 40],
//   shadowAnchor: [7, 40],
// })

export default class CustomIcons extends Component<{}, State> {
  state = {
    lat: 51.505,
    lng: -0.09,
    zoom: 13,
  }

  render() {
    const position = [this.state.lat, this.state.lng]
    const position2 = [51.50503625326346, -0.10088324546813966]
    return (
      <Map center={position} zoom={this.state.zoom}>
        <TileLayer
          attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position} icon={pointerIcon}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
        <Circle center={[51.51, -0.06]} radius={200} />

        {/* <Circle center={position2} /> */}
        <Marker position={position2} icon={pointerIcon}>
          <Popup>
            A pret <br /> Easily customizable.
          </Popup>
        </Marker>
      </Map>
    )
  }
}






















