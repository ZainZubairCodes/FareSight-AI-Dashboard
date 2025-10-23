import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { AlertTriangle, CheckCircle, Clock } from "lucide-react";

interface Feed {
  id: string;
  location: string;
  status: "clear" | "violation" | "reminder";
  lastUpdate: string;
}

const feeds: Feed[] = [
  { id: "CAM-01", location: "Station A - Platform 1", status: "clear", lastUpdate: "2s ago" },
  { id: "CAM-02", location: "Station B - Entrance", status: "violation", lastUpdate: "5s ago" },
  { id: "CAM-03", location: "Station C - Exit Gate", status: "reminder", lastUpdate: "1s ago" },
  { id: "CAM-04", location: "Station D - Platform 2", status: "clear", lastUpdate: "3s ago" },
];

export function LiveFeed() {
  return (
    <Card className="bg-slate-900 border-slate-800">
      <CardHeader>
        <CardTitle className="text-white flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
          Live CCTV Feeds
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 gap-4">
          {feeds.map((feed) => (
            <div key={feed.id} className="relative">
              {/* Simulated camera feed */}
              <div className="aspect-video bg-slate-950 rounded-lg border border-slate-700 overflow-hidden relative">
                {/* Grid overlay to simulate camera view */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-950/20 to-slate-950/80">
                  <div className="absolute top-0 left-0 right-0 h-px bg-green-500/20" />
                  <div className="absolute bottom-0 left-0 right-0 h-px bg-green-500/20" />
                  <div className="absolute top-0 bottom-0 left-0 w-px bg-green-500/20" />
                  <div className="absolute top-0 bottom-0 right-0 w-px bg-green-500/20" />
                  <div className="absolute top-1/2 left-0 right-0 h-px bg-green-500/20 transform -translate-y-1/2" />
                  <div className="absolute top-0 bottom-0 left-1/2 w-px bg-green-500/20 transform -translate-x-1/2" />
                  
                  {/* Camera info overlay */}
                  <div className="absolute top-2 left-2 right-2 flex justify-between items-start">
                    <div className="text-xs text-green-400 font-mono bg-black/50 px-2 py-1 rounded">
                      {feed.id}
                    </div>
                    <div className="text-xs text-green-400 font-mono bg-black/50 px-2 py-1 rounded">
                      {new Date().toLocaleTimeString()}
                    </div>
                  </div>

                  {/* Status indicator */}
                  <div className="absolute bottom-2 left-2 right-2">
                    {feed.status === "violation" ? (
                      <div className="flex items-center gap-2 bg-red-900/80 px-2 py-1 rounded text-xs animate-pulse">
                        <AlertTriangle className="w-3 h-3 text-red-400" />
                        <span className="text-red-200">VIOLATION DETECTED</span>
                      </div>
                    ) : feed.status === "reminder" ? (
                      <div className="flex items-center gap-2 bg-yellow-900/80 px-2 py-1 rounded text-xs animate-pulse">
                        <Clock className="w-3 h-3 text-yellow-400" />
                        <span className="text-yellow-200">REMINDER</span>
                      </div>
                    ) : (
                      <div className="flex items-center gap-2 bg-green-900/80 px-2 py-1 rounded text-xs">
                        <CheckCircle className="w-3 h-3 text-green-400" />
                        <span className="text-green-200">ALL CLEAR</span>
                      </div>
                    )}
                  </div>

                  {/* AI detection boxes (simulated) */}
                  {feed.status === "violation" && (
                    <div className="absolute top-1/3 left-1/4 w-16 h-20 border-2 border-red-500 rounded animate-pulse">
                      <div className="absolute -top-5 left-0 text-xs text-red-400 bg-black/70 px-1 rounded">
                        No tap detected
                      </div>
                    </div>
                  )}
                  {feed.status === "reminder" && (
                    <div className="absolute top-1/3 left-1/4 w-16 h-20 border-2 border-yellow-500 rounded animate-pulse">
                      <div className="absolute -top-5 left-0 text-xs text-yellow-400 bg-black/70 px-1 rounded">
                        Payment reminder
                      </div>
                    </div>
                  )}
                </div>
              </div>
              
              {/* Feed info */}
              <div className="mt-2 flex justify-between items-center">
                <span className="text-xs text-slate-400">{feed.location}</span>
                <Badge 
                  variant={feed.status === "violation" ? "destructive" : feed.status === "reminder" ? "secondary" : "secondary"} 
                  className={`text-xs ${feed.status === "reminder" ? "bg-yellow-900 text-yellow-200 border-yellow-700" : ""}`}
                >
                  {feed.lastUpdate}
                </Badge>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
