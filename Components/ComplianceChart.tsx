import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

const data = [
  { time: "00:00", compliance: 50, reminders: 30, violations: 20 },
  { time: "02:00", compliance: 55, reminders: 25, violations: 20 },
  { time: "04:00", compliance: 60, reminders: 20, violations: 20 },
  { time: "06:00", compliance: 45, reminders: 35, violations: 20 },
  { time: "08:00", compliance: 40, reminders: 40, violations: 20 },
  { time: "10:00", compliance: 35, reminders: 45, violations: 20 },
  { time: "12:00", compliance: 50, reminders: 30, violations: 20 },
  { time: "14:00", compliance: 45, reminders: 35, violations: 20 },
  { time: "16:00", compliance: 40, reminders: 40, violations: 20 },
  { time: "18:00", compliance: 45, reminders: 35, violations: 20 },
  { time: "20:00", compliance: 50, reminders: 30, violations: 20 },
  { time: "22:00", compliance: 55, reminders: 25, violations: 20 },
  { time: "23:59", compliance: 60, reminders: 20, violations: 20 },
];

export function ComplianceChart() {

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
              <div className="w-3 h-3 rounded-full bg-yellow-500" />
              <span className="text-slate-300">Reminders %</span>
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
                <div className="relative w-full h-full flex items-end justify-center gap-1">
                  {/* Three separate vertical bars side by side */}
                  {/* Compliance bar (green) */}
                  <div
                    className="w-1/4 bg-green-600 rounded-t transition-all duration-300 hover:opacity-80 hover:scale-105 shadow-md"
                    style={{
                      height: `${item.compliance}%`,
                      minHeight: '4px'
                    }}
                    title={`Compliance: ${item.compliance}%`}
                  />
                  {/* Reminders bar (yellow) */}
                  <div
                    className="w-1/4 bg-yellow-500 rounded-t transition-all duration-300 hover:opacity-80 hover:scale-105 shadow-md"
                    style={{
                      height: `${item.reminders}%`,
                      minHeight: '4px'
                    }}
                    title={`Reminders: ${item.reminders}%`}
                  />
                  {/* Violations bar (red) */}
                  <div
                    className="w-1/4 bg-red-600 rounded-t transition-all duration-300 hover:opacity-80 hover:scale-105 shadow-md"
                    style={{
                      height: `${item.violations}%`,
                      minHeight: '4px'
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
          <div className="grid grid-cols-4 gap-4 pt-4 border-t border-slate-800">
            <div className="text-center">
              <div className="text-2xl text-green-400">48.5%</div>
              <div className="text-xs text-slate-500">Avg Compliance</div>
            </div>
            <div className="text-center">
              <div className="text-2xl text-yellow-400">31.2%</div>
              <div className="text-xs text-slate-500">Avg Reminders</div>
            </div>
            <div className="text-center">
              <div className="text-2xl text-red-400">20.3%</div>
              <div className="text-xs text-slate-500">Avg Violations</div>
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
