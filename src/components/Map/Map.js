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

export default function Map() {
  const [multyPoligon, setMultyPoligon] = useState([]);
  const [polygonActive, setPoligonActive] = useState(false);
  useEffect(() => {
    fetch(
      `https://raw.githubusercontent.com/johan/world.geo.json/master/countries/NLD.geo.json`
    )
      .then((data) => data.json())
      .then((data) => data)
      .then((data) => {
        setMultyPoligon(data);
        setPoligonActive(true);
      });
  }, []);
  return (
    <section className="map">
      {polygonActive ? (
        <MapContainer center={[52.22, 4.53]} zoom={7} id="map_body">
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
          <GeoJSON data={multyPoligon.features} style={purpleOptions} />
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          <CircleMarker center={[52.22, 4.53]} radius={10}>
            <Popup>Сapital</Popup>
          </CircleMarker>
          <FullscreenControl position="topleft" />
        </MapContainer>
      ) : (
        ""
      )}
    </section>
  );
}
