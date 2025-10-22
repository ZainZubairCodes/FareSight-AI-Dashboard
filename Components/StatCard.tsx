import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { LucideIcon } from "lucide-react";

interface StatCardProps {
  title: string;
  value: string;
  change: string;
  trend: "up" | "down";
  icon: LucideIcon;
  iconColor: string;
}

export function StatCard({ title, value, change, trend, icon: Icon, iconColor }: StatCardProps) {
  return (
    <Card className="bg-slate-900 border-slate-800">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-sm text-slate-400">{title}</CardTitle>
        <Icon className={`w-4 h-4 ${iconColor}`} />
      </CardHeader>
      <CardContent>
        <div className="text-3xl text-white mb-1">{value}</div>
        <p className={`text-sm flex items-center gap-1 ${
          trend === "up" ? "text-green-500" : "text-red-500"
        }`}>
          <span>{trend === "up" ? "↑" : "↓"}</span>
          <span>{change}</span>
        </p>
      </CardContent>
    </Card>
  );
}
