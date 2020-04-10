import L from 'leaflet';

export  const iconPerson = new L.Icon({
    iconUrl: require('./image/Personicon.svg'),
    iconAnchor: [5, 55],
    popupAnchor: [10, -44],
    iconSize: new L.Point(35, 51),
});

export  const nodal = new L.Icon({
    iconUrl: require('./image/warehouse.svg'),
    iconAnchor: [5, 55],
    popupAnchor: [10, -44],
    iconSize: new L.Point(25, 41),
});

export  const physiologist = new L.Icon({
    iconUrl: require('./image/physiologist.svg'),
    iconAnchor: [5, 55],
    popupAnchor: [10, -44],
    iconSize: new L.Point(25, 41),
});
export  const emergency = new L.Icon({
    iconUrl: require('./image/emergency.svg'),
    iconAnchor: [5, 55],
    popupAnchor: [10, -44],
    iconSize: new L.Point(25, 30),
});
export  const tnmscwarehouse = new L.Icon({
    iconUrl: require('./image/tnmscwarehouse.svg'),
    iconAnchor: [5, 55],
    popupAnchor: [10, -44],
    iconSize: new L.Point(25, 30),
});


