import { BarChart3, Users, MessageSquare, Briefcase, Settings, Plus } from "lucide-react";
import { Card } from "../../components/ui/card";
import { Button } from "../../components/ui/button";

export const Dashboard = () => {
  const stats = [
    {
      title: "Total Projects",
      value: "24",
      change: "+12%",
      icon: Briefcase,
      color: "text-blue-500"
    },
    {
      title: "Active Clients",
      value: "18",
      change: "+5%",
      icon: Users,
      color: "text-green-500"
    },
    {
      title: "Messages",
      value: "42",
      change: "+8%",
      icon: MessageSquare,
      color: "text-purple-500"
    },
    {
      title: "Conversion Rate",
      value: "3.2%",
      change: "+0.8%",
      icon: BarChart3,
      color: "text-orange-500"
    }
  ];

  const recentActivities = [
    { action: "New project added", time: "2 hours ago", user: "John Doe" },
    { action: "Client message received", time: "4 hours ago", user: "Jane Smith" },
    { action: "Portfolio updated", time: "1 day ago", user: "Mike Johnson" },
    { action: "Service published", time: "2 days ago", user: "Sarah Wilson" },
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
        <div>
          <h1 className="text-3xl font-bold mb-2">Dashboard Overview</h1>
          <p className="text-muted-foreground">Welcome back! Here's what's happening with your agency.</p>
        </div>
        <Button className="bg-gradient-accent hover:shadow-glow mt-4 sm:mt-0">
          <Plus className="w-4 h-4 mr-2" />
          New Project
        </Button>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <Card key={index} className="glass-effect p-6 hover-lift">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground mb-1">{stat.title}</p>
                <p className="text-2xl font-bold">{stat.value}</p>
                <p className={`text-sm ${stat.color}`}>{stat.change} from last month</p>
              </div>
              <div className={`w-12 h-12 rounded-lg bg-gradient-accent/10 flex items-center justify-center`}>
                <stat.icon className={`w-6 h-6 ${stat.color}`} />
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* Charts and Recent Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Chart Placeholder */}
        <Card className="glass-effect p-6">
          <h3 className="text-lg font-semibold mb-4">Performance Overview</h3>
          <div className="h-64 bg-secondary/20 rounded-lg flex items-center justify-center">
            <div className="text-center">
              <BarChart3 className="w-12 h-12 text-muted-foreground mx-auto mb-2" />
              <p className="text-muted-foreground">Chart will be rendered here</p>
            </div>
          </div>
        </Card>

        {/* Recent Activity */}
        <Card className="glass-effect p-6">
          <h3 className="text-lg font-semibold mb-4">Recent Activity</h3>
          <div className="space-y-4">
            {recentActivities.map((activity, index) => (
              <div key={index} className="flex items-center space-x-3 p-3 rounded-lg hover:bg-secondary/20 transition-colors">
                <div className="w-2 h-2 bg-accent rounded-full" />
                <div className="flex-1">
                  <p className="text-sm">{activity.action}</p>
                  <p className="text-xs text-muted-foreground">{activity.time} • {activity.user}</p>
                </div>
              </div>
            ))}
          </div>
          <Button variant="outline" className="w-full mt-4">View All Activity</Button>
        </Card>
      </div>

      {/* Quick Actions */}
      <Card className="glass-effect p-6">
        <h3 className="text-lg font-semibold mb-4">Quick Actions</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { label: "Add Project", icon: Briefcase, href: "/admin/portfolio" },
            { label: "Manage Services", icon: Settings, href: "/admin/services" },
            { label: "View Messages", icon: MessageSquare, href: "/admin/messages" },
            { label: "Analytics", icon: BarChart3, href: "/admin/analytics" }
          ].map((action, index) => (
            <Button
              key={index}
              variant="outline"
              className="h-16 flex-col space-y-2 hover:border-accent hover:text-accent"
            >
              <action.icon className="w-5 h-5" />
              <span className="text-sm">{action.label}</span>
            </Button>
          ))}
        </div>
      </Card>
    </div>
  );
};