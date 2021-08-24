import React, { useState, useEffect } from "react";
import {
  Map as MapContainer,
  TileLayer,
  CircleMarker,
  Popup,
  GeoJSON,
  LayersControl,
} from "react-leaflet";

import "./Map.scss";
import "react-leaflet-fullscreen/dist/styles.css";
import FullscreenControl from "react-leaflet-fullscreen";

const purpleOptions = { color: "#21A683", fillColor: "#5bbb76" };
const purpleOptionsCircle = { color: "#21A613", fillColor: "#5bbb76" };

export default function Map(props) {
  const [multyPoligon, setMultyPoligon] = useState([]);
  const [polygonActive, setPoligonActive] = useState(false);
  useEffect(() => {
    if (props.iso !== null) {
      fetch(
        `https://raw.githubusercontent.com/johan/world.geo.json/master/countries/${
          props.iso === "JAP" ? "JPN" : props.iso
        }.geo.json`
      )
        .then((data) => data.json())
        .then((data) => {
          setMultyPoligon(data);
          setPoligonActive(true);
        });
    }
  }, [props.iso]);
  return (
    <section className="map">
      {polygonActive && props.iso.length && props.long ? (
        <MapContainer center={[props.lat, props.long]} zoom={5} id="map_body">
          <LayersControl position="topright">
            <LayersControl.BaseLayer checked name="OpenStreetMap.Mapnik">
              <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            </LayersControl.BaseLayer>
            <LayersControl.BaseLayer name="OpenStreetMap.BlackAndWhite">
              <TileLayer url="https://tiles.wmflabs.org/bw-mapnik/{z}/{x}/{y}.png" />
            </LayersControl.BaseLayer>
            <LayersControl.BaseLayer name="OpenTopoMap">
              <TileLayer url="https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png" />
            </LayersControl.BaseLayer>
            <LayersControl.BaseLayer name="Stadia.AlidadeSmoothDark">
              <TileLayer url="https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png" />
            </LayersControl.BaseLayer>
            <LayersControl.BaseLayer name="Stadia.AlidadeSmooth">
              <TileLayer url="https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.png" />
            </LayersControl.BaseLayer>
          </LayersControl>
          <GeoJSON data={multyPoligon.features} style={purpleOptions}>
            <Popup>{props.countryLang}</Popup>
          </GeoJSON>
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          <CircleMarker
            center={[props.lat, props.long]}
            radius={8}
            style={purpleOptionsCircle}
          >
            <Popup>{props.capitalLang}</Popup>
          </CircleMarker>
          <FullscreenControl position="topleft" />
        </MapContainer>
      ) : (
        ""
      )}
    </section>
  );
}
