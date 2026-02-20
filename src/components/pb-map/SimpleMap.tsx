import { useState, useEffect } from "react";
import { MapContainer, Marker, Popup, GeoJSON } from "react-leaflet";
import MICROS_PB from "../../data/micro.json";
import CORES_REGIOES from "../../data/colors.json";
import CERS from "../../data/cers.json";
import MapCaptions from "./MapCaptions";

const SimpleMap = () => {
  const position = [-7.2, -36.73];
  const zoomLevel = 7.5;
  const [geoData, setGeoData] = useState(null);

  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/tbrugz/geodata-br/master/geojson/geojs-25-mun.json",
    )
      .then((response) => response.json())
      .then((data) => setGeoData(data))
      .catch((err) => console.error("Erro ao carregar mapa:", err));
  }, []);

  const aplicarEstilo = (feature) => {
    const nomeCidade =
      feature.properties.name ||
      feature.properties.NM_MUN ||
      "Cidade Desconhecida";
    for (const regiao of MICROS_PB) {
      if (regiao.municipios.includes(nomeCidade)) {
        const corSelecionada = CORES_REGIOES[regiao.id - 1]?.hex || "#808080";
        return {
          fillColor: corSelecionada,
          weight: 1,
          opacity: 1,
          color: "white",
          fillOpacity: 1,
        };
      }
    }
  };

  const onEachCity = (feature, layer) => {
    const nameCity =
      feature.properties.name ||
      feature.properties.NM_MUN ||
      "Cidade Desconhecida";
    layer.bindTooltip(nameCity, { sticky: true });

    const CersCity = CERS.filter((cer) => cer.cidade === nameCity);
    let popupContent = "";

    if (CersCity.length > 0) {
      const listaCersHtml = CersCity.map(
        (cer) => `
        <div style="margin-bottom: 8px; padding: 6px; border: 1px solid #ddd; border-radius: 4px;">
          <strong style="font-size: 13px;">${cer.nome}</strong><br/>
          <div style="font-size: 11px; color: #666;">${cer.cidade}</div>
          <div style="font-size: 11px; color: #555; font-style: italic;">${cer.especialidades}</div>
          <div style="margin-top: 8px; font-size: 11px; text-align: right; color: #007bff;" onclick="document.getElementById('${cer.id}').scrollIntoView({ behavior: 'smooth' })">
            Ver detalhes &rarr;
          </div>
        </div>
      `,
      ).join("");

      popupContent = `<div style="font-size: 12px; max-height: 200px; overflow-y: auto;">${listaCersHtml}</div>`;
    } else {
      popupContent = `<div style="font-size: 12px;"><strong>${nameCity}</strong><br/><em>Sem CER listado</em></div>`;
    }

    layer.bindPopup(popupContent);
  };

  return (
    <div
      style={{
        height: "100%",
        width: "100%",
        borderRadius: "8px",
        overflow: "hidden",
        background: "hsl(var(--background))",
      }}
    >
      <MapContainer
        center={position}
        zoom={zoomLevel}
        minZoom={7}
        maxZoom={10}
        style={{ height: "100%", width: "100%", background: "transparent" }}
        zoomControl={true}
        scrollWheelZoom={true}
        dragging={true}
      >
        {geoData && (
          <GeoJSON
            data={geoData}
            style={aplicarEstilo}
            onEachFeature={onEachCity}
          />
        )}

        {CERS.map((cer) => (
          <Marker
            key={cer.id}
            position={[cer.localizacao.latitude, cer.localizacao.longitude]}
          >
            <Popup>
              <div style={{ textAlign: "center" }}>
                <strong>{cer.nome}</strong>
                <br />
                <span style={{ fontSize: "12px" }}>{cer.cidade}</span>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default SimpleMap;
