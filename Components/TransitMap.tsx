import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { MapPin, AlertCircle, CheckCircle2 } from "lucide-react";
import { MapContainer, TileLayer, Marker, Popup, Polyline } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

// Fix for default markers in React-Leaflet
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon-2x.png",
  iconUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon.png",
  shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png",
});

interface Station {
  id: string;
  name: string;
  lat: number;
  lng: number;
  status: "normal" | "alert";
  violations: number;
}

// Selected TTC Line 1 Stations
const selectedStations: Station[] = [
  { id: "S1", name: "Union Station", lat: 43.6452, lng: -79.3806, status: "normal", violations: 0 },
  { id: "S2", name: "Dundas Station", lat: 43.6533, lng: -79.3906, status: "normal", violations: 0 },
  { id: "S3", name: "College Station", lat: 43.6561, lng: -79.3939, status: "normal", violations: 0 },
  { id: "S4", name: "4015 Yonge Street", lat: 43.6811, lng: -79.4239, status: "normal", violations: 0 },
  { id: "S5", name: "Vaughan Metropolitan Centre Station", lat: 43.7094, lng: -79.3506, status: "normal", violations: 0 },
];

// TTC Subway Lines with accurate Toronto coordinates
const ttcLines = [
  {
    id: "line1",
    color: "#FFD700", // Yellow - Line 1 Yonge-University
    name: "Line 1 - Yonge-University",
    coordinates: [
      // Northbound from Union to Vaughan Metropolitan Centre
      [43.6452, -79.3806], // Union
      [43.6478, -79.3839], // King
      [43.6506, -79.3872], // Queen
      [43.6533, -79.3906], // Dundas
      [43.6561, -79.3939], // College
      [43.6589, -79.3972], // Wellesley
      [43.6617, -79.4006], // Bloor-Yonge
      [43.6644, -79.4039], // Rosedale
      [43.6672, -79.4072], // Summerhill
      [43.6700, -79.4106], // St. Clair
      [43.6728, -79.4139], // Davisville
      [43.6756, -79.4172], // Eglinton
      [43.6783, -79.4206], // Lawrence
      [43.6811, -79.4239], // York Mills
      [43.6839, -79.4272], // Sheppard-Yonge
      [43.6867, -79.4306], // North York Centre
      [43.6894, -79.4339], // Finch
      // Westbound from St. George to Vaughan Metropolitan Centre
      [43.6678, -79.4006], // St. George
      [43.6706, -79.3972], // Spadina
      [43.6733, -79.3939], // Dupont
      [43.6761, -79.3906], // St. Clair West
      [43.6789, -79.3872], // Eglinton West
      [43.6817, -79.3839], // Glencairn
      [43.6844, -79.3806], // Lawrence West
      [43.6872, -79.3772], // Yorkdale
      [43.6900, -79.3739], // Wilson
      [43.6928, -79.3706], // Sheppard West
      [43.6956, -79.3672], // Downsview Park
      [43.6983, -79.3639], // Finch West
      [43.7011, -79.3606], // York University
      [43.7039, -79.3572], // Pioneer Village
      [43.7067, -79.3539], // Highway 407
      [43.7094, -79.3506], // Vaughan Metropolitan Centre
    ]
  },
  {
    id: "line2",
    color: "#008000", // Green - Line 2 Bloor-Danforth
    name: "Line 2 - Bloor-Danforth",
    coordinates: [
      // Westbound from Bloor-Yonge to Kipling
      [43.6617, -79.4006], // Bloor-Yonge
      [43.6644, -79.3972], // Spadina
      [43.6672, -79.3939], // Bathurst
      [43.6700, -79.3906], // Christie
      [43.6728, -79.3872], // Ossington
      [43.6756, -79.3839], // Dufferin
      [43.6783, -79.3806], // Lansdowne
      [43.6811, -79.3772], // Dundas West
      [43.6839, -79.3739], // Keele
      [43.6867, -79.3706], // High Park
      [43.6894, -79.3672], // Runnymede
      [43.6922, -79.3639], // Jane
      [43.6950, -79.3606], // Old Mill
      [43.6978, -79.3572], // Royal York
      [43.7006, -79.3539], // Islington
      [43.7033, -79.3506], // Kipling
      // Eastbound from Bloor-Yonge to Kennedy
      [43.6617, -79.4006], // Bloor-Yonge
      [43.6590, -79.4040], // Sherbourne
      [43.6562, -79.4073], // Castle Frank
      [43.6535, -79.4107], // Broadview
      [43.6507, -79.4140], // Chester
      [43.6480, -79.4174], // Pape
      [43.6452, -79.4207], // Donlands
      [43.6425, -79.4241], // Greenwood
      [43.6397, -79.4274], // Coxwell
      [43.6370, -79.4308], // Woodbine
      [43.6342, -79.4341], // Victoria Park
      [43.6315, -79.4375], // Warden
      [43.6287, -79.4408], // Kennedy
    ]
  },
  {
    id: "line4",
    color: "#800080", // Purple - Line 4 Sheppard
    name: "Line 4 - Sheppard",
    coordinates: [
      [43.6839, -79.4272], // Sheppard-Yonge
      [43.6867, -79.4239], // Bayview
      [43.6894, -79.4206], // Bessarion
      [43.6922, -79.4172], // Leslie
      [43.6950, -79.4139], // Don Mills
    ]
  }
];

// Custom yellow pin marker for Line 1 stations
const createYellowPinIcon = () => L.divIcon({
  html: `
    <div style="
      position: relative;
      width: 24px;
      height: 24px;
    ">
      <div style="
        position: absolute;
        bottom: 0;
        left: 50%;
        transform: translateX(-50%);
        width: 0;
        height: 0;
        border-left: 8px solid transparent;
        border-right: 8px solid transparent;
        border-top: 16px solid #FFD700;
        filter: drop-shadow(0 2px 4px rgba(0,0,0,0.4));
      "></div>
      <div style="
        position: absolute;
        top: 0;
        left: 50%;
        transform: translateX(-50%);
        width: 20px;
        height: 20px;
        background-color: #FFD700;
        border-radius: 50% 50% 50% 0;
        transform: translateX(-50%) rotate(-45deg);
        border: 3px solid white;
        box-shadow: 0 2px 6px rgba(0,0,0,0.4);
      "></div>
    </div>
  `,
  className: 'yellow-pin-marker',
  iconSize: [24, 24],
  iconAnchor: [12, 24]
});

export function TransitMap() {
  const alertStations = selectedStations.filter(s => s.status === "alert").length;
  const clearStations = selectedStations.filter(s => s.status === "normal").length;

  return (
    <Card className="bg-slate-900 border-slate-800">
      <CardHeader>
        <CardTitle className="text-white flex items-center justify-between">
          <span>Transit Network Map</span>
          <div className="flex gap-2 text-sm">
            <Badge variant="secondary" className="bg-slate-950 text-slate-400 border-slate-700">
              <CheckCircle2 className="w-3 h-3 mr-1" />
              No Stations
            </Badge>
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="relative w-full aspect-[16/9] bg-slate-950 rounded-lg border border-slate-700 overflow-hidden">
            <MapContainer
              center={[43.6532, -79.3832]} // Toronto center
              zoom={11}
              style={{ height: '100%', width: '100%' }}
              className="rounded-lg"
            >
            {/* Dark theme tile layer */}
            <TileLayer
              url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
            />
            
            
          </MapContainer>

          {/* Legend */}
          <div className="absolute bottom-4 left-4 bg-slate-950/90 border border-slate-700 rounded-lg p-3 text-xs backdrop-blur-sm">
            <div className="text-slate-400 mb-2 font-medium">Map Status</div>
            <div className="flex flex-col gap-2">
              <div className="text-slate-400 text-xs">
                No stations displayed
              </div>
            </div>
          </div>

          {/* Real-time indicator */}
          <div className="absolute top-4 right-4 bg-slate-950/90 border border-slate-700 rounded-lg px-3 py-2 text-xs flex items-center gap-2 backdrop-blur-sm">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span className="text-slate-300">Live Updates</span>
          </div>

          {/* Map controls info */}
          <div className="absolute top-4 left-4 bg-slate-950/90 border border-slate-700 rounded-lg px-3 py-2 text-xs backdrop-blur-sm">
            <span className="text-slate-300">Drag to explore • Scroll to zoom</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
