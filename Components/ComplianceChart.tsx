import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

const data = [
  { time: "00:00", compliance: 98, violations: 2 },
  { time: "02:00", compliance: 99, violations: 1 },
  { time: "04:00", compliance: 99, violations: 1 },
  { time: "06:00", compliance: 96, violations: 4 },
  { time: "08:00", compliance: 94, violations: 6 },
  { time: "10:00", compliance: 92, violations: 8 },
  { time: "12:00", compliance: 96, violations: 4 },
  { time: "14:00", compliance: 95, violations: 5 },
  { time: "16:00", compliance: 93, violations: 7 },
  { time: "18:00", compliance: 94, violations: 6 },
  { time: "20:00", compliance: 95, violations: 5 },
  { time: "22:00", compliance: 97, violations: 3 },
  { time: "23:59", compliance: 97, violations: 3 },
].map(item => ({
  ...item,
  violations: 100 - item.compliance
}));

export function ComplianceChart() {
  const maxViolations = Math.max(...data.map(d => d.violations));
  const maxCompliance = 100;

  return (
    <Card className="bg-slate-900 border-slate-800">
      <CardHeader>
        <CardTitle className="text-white">Fare Compliance - Today</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {/* Legend */}
          <div className="flex gap-6 justify-center text-sm">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-green-500" />
              <span className="text-slate-300">Compliance Rate %</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500" />
              <span className="text-slate-300">Violations %</span>
            </div>
          </div>

          {/* Chart */}
          <div className="relative h-64 flex items-end justify-between gap-2 px-4">
            {/* Y-axis labels */}
            <div className="absolute left-0 top-0 bottom-8 flex flex-col justify-between text-xs text-slate-500">
              <span>100</span>
              <span>75</span>
              <span>50</span>
              <span>25</span>
              <span>0</span>
            </div>

            {/* Grid lines */}
            <div className="absolute left-8 right-0 top-0 bottom-8 flex flex-col justify-between">
              {[0, 1, 2, 3, 4].map((i) => (
                <div key={i} className="w-full h-px bg-slate-800" />
              ))}
            </div>

            {/* Bars */}
            {data.map((item, index) => (
              <div key={index} className="flex-1 flex flex-col items-center relative z-10 h-full">
                <div className="relative w-full h-full flex items-end justify-center">
                  {/* Compliance bar (green) - grows from bottom */}
                  <div
                    className="w-1/3 bg-green-700 rounded-t transition-all duration-300 hover:opacity-80 hover:scale-105 shadow-md"
                    style={{
                      height: `${item.compliance}%`,
                      minHeight: '2px'
                    }}
                    title={`Compliance: ${item.compliance}%`}
                  />
                  {/* Violations bar (red) - grows from bottom */}
                  <div
                    className="w-1/3 bg-red-700 rounded-t transition-all duration-300 hover:opacity-80 hover:scale-105 shadow-md"
                    style={{
                      height: `${item.violations}%`,
                      minHeight: '2px'
                    }}
                    title={`Violations: ${item.violations}%`}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* X-axis labels */}
          <div className="flex justify-between px-4 text-xs text-slate-500">
            {data.map((item, index) => (
              <div key={index} className="flex-1 text-center">
                {item.time}
              </div>
            ))}
          </div>

          {/* Data summary */}
          <div className="grid grid-cols-3 gap-4 pt-4 border-t border-slate-800">
            <div className="text-center">
              <div className="text-2xl text-green-400">96.4%</div>
              <div className="text-xs text-slate-500">Avg Compliance</div>
            </div>
            <div className="text-center">
              <div className="text-2xl text-red-400">28</div>
              <div className="text-xs text-slate-500">Total Violations</div>
            </div>
            <div className="text-center">
              <div className="text-2xl text-blue-400">2,426</div>
              <div className="text-xs text-slate-500">Total Scans</div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
