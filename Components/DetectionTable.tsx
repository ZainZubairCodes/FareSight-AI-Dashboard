import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "./ui/table";
import { AlertTriangle, CheckCircle, Clock } from "lucide-react";

interface Detection {
  id: string;
  time: string;
  location: string;
  camera: string;
  type: "violation" | "verified";
  description: string;
  amount: string;
}

const detections: Detection[] = [
  {
    id: "DET-1847",
    time: "14:32:15",
    location: "Union Station - Gate 4",
    camera: "CAM-02",
    type: "violation",
    description: "No NFC tap detected",
    amount: "$3.25",
  },
  {
    id: "DET-1846",
    time: "14:31:42",
    location: "King Station - Entrance A",
    camera: "CAM-05",
    type: "verified",
    description: "PRESTO tap confirmed",
    amount: "$3.25",
  },
  {
    id: "DET-1845",
    time: "14:30:58",
    location: "Union Station - Gate 2",
    camera: "CAM-02",
    type: "violation",
    description: "Gate bypass detected",
    amount: "$3.25",
  },
  {
    id: "DET-1844",
    time: "14:30:23",
    location: "Queen Station - Platform",
    camera: "CAM-08",
    type: "verified",
    description: "PRESTO tap confirmed",
    amount: "$3.25",
  },
  {
    id: "DET-1843",
    time: "14:29:47",
    location: "Dundas Station - Exit",
    camera: "CAM-12",
    type: "violation",
    description: "No tap-out detected",
    amount: "$3.25",
  },
  {
    id: "DET-1842",
    time: "14:29:15",
    location: "College Station - Gate 1",
    camera: "CAM-15",
    type: "verified",
    description: "PRESTO tap confirmed",
    amount: "$3.25",
  },
];

export function DetectionTable() {
  return (
    <Card className="bg-slate-900 border-slate-800">
      <CardHeader>
        <CardTitle className="text-white flex items-center gap-2">
          <Clock className="w-5 h-5" />
          Recent Detections
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow className="border-slate-800 hover:bg-slate-800/50">
                <TableHead className="text-slate-400">ID</TableHead>
                <TableHead className="text-slate-400">Time</TableHead>
                <TableHead className="text-slate-400">Location</TableHead>
                <TableHead className="text-slate-400">Camera</TableHead>
                <TableHead className="text-slate-400">Status</TableHead>
                <TableHead className="text-slate-400">Description</TableHead>
                <TableHead className="text-slate-400">Amount</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {detections.map((detection) => (
                <TableRow 
                  key={detection.id} 
                  className="border-slate-800 hover:bg-slate-800/50"
                >
                  <TableCell className="text-slate-300 font-mono text-sm">
                    {detection.id}
                  </TableCell>
                  <TableCell className="text-slate-300 text-sm">
                    {detection.time}
                  </TableCell>
                  <TableCell className="text-slate-300 text-sm">
                    {detection.location}
                  </TableCell>
                  <TableCell className="text-slate-400 font-mono text-xs">
                    {detection.camera}
                  </TableCell>
                  <TableCell>
                    {detection.type === "violation" ? (
                      <Badge variant="destructive" className="bg-red-950 text-red-400 border-red-800">
                        <AlertTriangle className="w-3 h-3 mr-1" />
                        Violation
                      </Badge>
                    ) : (
                      <Badge variant="secondary" className="bg-green-950 text-green-400 border-green-800">
                        <CheckCircle className="w-3 h-3 mr-1" />
                        Verified
                      </Badge>
                    )}
                  </TableCell>
                  <TableCell className="text-slate-300 text-sm">
                    {detection.description}
                  </TableCell>
                  <TableCell className="text-slate-300">
                    {detection.amount}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  );
}
