import { Button } from "./ui/button";
import { StatCard } from "./StatCard";
import { LiveFeed } from "./LiveFeed";
import { TransitMap } from "./TransitMap";
import { ComplianceChart } from "./ComplianceChart";
import { DetectionTable } from "./DetectionTable";
import { Bell, Home, Settings, DollarSign, TrendingUp, AlertTriangle, Activity } from "lucide-react";
import { Badge } from "./ui/badge";

interface DashboardProps {
  onBackToHome: () => void;
}

export function Dashboard({ onBackToHome }: DashboardProps) {
  return (
    <div className="min-h-screen bg-slate-950">
      {/* Header */}
      <header className="border-b border-slate-800 bg-slate-900/50 backdrop-blur-sm sticky top-0 z-10">
        <div className="px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Button 
                variant="ghost" 
                size="icon" 
                className="text-slate-400 hover:text-white"
                onClick={onBackToHome}
              >
                <Home className="w-5 h-5" />
              </Button>
              <div>
                <h1 className="text-xl text-white">FareSight AI Dashboard</h1>
                <p className="text-sm text-slate-400">Real-time fare compliance monitoring</p>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <Badge variant="secondary" className="bg-green-950 text-green-400 border-green-800">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse mr-2" />
                System Active
              </Badge>
              
              <Button variant="ghost" size="icon" className="text-slate-400 hover:text-white relative">
                <Bell className="w-5 h-5" />
                <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full" />
              </Button>
              
              <Button variant="ghost" size="icon" className="text-slate-400 hover:text-white">
                <Settings className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="p-6">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          <StatCard
            title="Total Scans Today"
            value="2,426"
            change="+12.5% from yesterday"
            trend="up"
            icon={Activity}
            iconColor="text-blue-500"
          />
          <StatCard
            title="Compliance Rate"
            value="94.8%"
            change="+2.3% from last week"
            trend="up"
            icon={TrendingUp}
            iconColor="text-green-500"
          />
          <StatCard
            title="Violations Detected"
            value="127"
            change="-8.2% from yesterday"
            trend="down"
            icon={AlertTriangle}
            iconColor="text-red-500"
          />
          <StatCard
            title="Revenue Saved"
            value="$412.75"
            change="+15.8% this week"
            trend="up"
            icon={DollarSign}
            iconColor="text-purple-500"
          />
        </div>

        {/* Map and Live Feed Row */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
          <div className="lg:col-span-2">
            <TransitMap />
          </div>
          <div className="lg:col-span-1">
            <LiveFeed />
          </div>
        </div>

        {/* Chart */}
        <div className="mb-6">
          <ComplianceChart />
        </div>

        {/* Detection Table */}
        <DetectionTable />
      </main>
    </div>
  );
}
