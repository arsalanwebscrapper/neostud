import { TrendingUp, Users, Eye, MessageCircle, ArrowUp, ArrowDown } from "lucide-react";
import { Card } from "../../components/ui/card";

export const Analytics = () => {
  const metrics = [
    {
      title: "Total Visitors",
      value: "24,543",
      change: "+12.5%",
      trending: "up",
      icon: Eye,
      color: "text-blue-500"
    },
    {
      title: "New Leads",
      value: "2,847",
      change: "+8.2%",
      trending: "up",
      icon: Users,
      color: "text-green-500"
    },
    {
      title: "Conversion Rate",
      value: "3.24%",
      change: "-0.8%",
      trending: "down",
      icon: TrendingUp,
      color: "text-purple-500"
    },
    {
      title: "Contact Forms",
      value: "186",
      change: "+15.3%",
      trending: "up",
      icon: MessageCircle,
      color: "text-orange-500"
    }
  ];

  const topPages = [
    { page: "/", views: 12543, percentage: 45 },
    { page: "/services", views: 8921, percentage: 32 },
    { page: "/portfolio", views: 4352, percentage: 16 },
    { page: "/contact", views: 1876, percentage: 7 }
  ];

  const topSources = [
    { source: "Google Search", visitors: 9543, percentage: 39 },
    { source: "Direct", visitors: 7321, percentage: 30 },
    { source: "Social Media", visitors: 4521, percentage: 18 },
    { source: "Referrals", visitors: 3158, percentage: 13 }
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold mb-2">Analytics Overview</h1>
        <p className="text-muted-foreground">Track your website performance and user engagement</p>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {metrics.map((metric, index) => (
          <Card key={index} className="glass-effect p-6 hover-lift">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground mb-1">{metric.title}</p>
                <p className="text-2xl font-bold mb-1">{metric.value}</p>
                <div className="flex items-center text-sm">
                  {metric.trending === "up" ? (
                    <ArrowUp className="w-4 h-4 text-green-500 mr-1" />
                  ) : (
                    <ArrowDown className="w-4 h-4 text-red-500 mr-1" />
                  )}
                  <span className={metric.trending === "up" ? "text-green-500" : "text-red-500"}>
                    {metric.change}
                  </span>
                  <span className="text-muted-foreground ml-1">vs last month</span>
                </div>
              </div>
              <div className={`w-12 h-12 rounded-lg bg-gradient-accent/10 flex items-center justify-center`}>
                <metric.icon className={`w-6 h-6 ${metric.color}`} />
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Traffic Chart */}
        <Card className="glass-effect p-6">
          <h3 className="text-lg font-semibold mb-4">Website Traffic</h3>
          <div className="h-64 bg-secondary/20 rounded-lg flex items-center justify-center">
            <div className="text-center">
              <TrendingUp className="w-12 h-12 text-muted-foreground mx-auto mb-2" />
              <p className="text-muted-foreground">Traffic chart visualization would be here</p>
            </div>
          </div>
        </Card>

        {/* Conversion Funnel */}
        <Card className="glass-effect p-6">
          <h3 className="text-lg font-semibold mb-4">Conversion Funnel</h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-3 bg-secondary/20 rounded-lg">
              <span className="text-sm">Visitors</span>
              <span className="font-semibold">24,543</span>
            </div>
            <div className="flex items-center justify-between p-3 bg-secondary/20 rounded-lg">
              <span className="text-sm">Page Views</span>
              <span className="font-semibold">18,432</span>
            </div>
            <div className="flex items-center justify-between p-3 bg-secondary/20 rounded-lg">
              <span className="text-sm">Contact Form Views</span>
              <span className="font-semibold">3,245</span>
            </div>
            <div className="flex items-center justify-between p-3 bg-accent/20 rounded-lg">
              <span className="text-sm">Form Submissions</span>
              <span className="font-semibold text-accent">186</span>
            </div>
          </div>
        </Card>
      </div>

      {/* Top Pages and Sources */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Top Pages */}
        <Card className="glass-effect p-6">
          <h3 className="text-lg font-semibold mb-4">Top Pages</h3>
          <div className="space-y-4">
            {topPages.map((page, index) => (
              <div key={index} className="flex items-center justify-between">
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-sm font-medium">{page.page}</span>
                    <span className="text-sm text-muted-foreground">{page.views.toLocaleString()}</span>
                  </div>
                  <div className="w-full bg-secondary rounded-full h-2">
                    <div 
                      className="bg-gradient-accent h-2 rounded-full transition-all duration-300"
                      style={{ width: `${page.percentage}%` }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Card>

        {/* Traffic Sources */}
        <Card className="glass-effect p-6">
          <h3 className="text-lg font-semibold mb-4">Traffic Sources</h3>
          <div className="space-y-4">
            {topSources.map((source, index) => (
              <div key={index} className="flex items-center justify-between">
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-sm font-medium">{source.source}</span>
                    <span className="text-sm text-muted-foreground">{source.visitors.toLocaleString()}</span>
                  </div>
                  <div className="w-full bg-secondary rounded-full h-2">
                    <div 
                      className="bg-gradient-accent h-2 rounded-full transition-all duration-300"
                      style={{ width: `${source.percentage}%` }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>

      {/* Recent Activity */}
      <Card className="glass-effect p-6">
        <h3 className="text-lg font-semibold mb-4">Recent Activity</h3>
        <div className="space-y-4">
          {[
            { action: "New contact form submission", time: "2 minutes ago", type: "form" },
            { action: "Portfolio page viewed 15 times", time: "5 minutes ago", type: "view" },
            { action: "Services page shared on social media", time: "1 hour ago", type: "share" },
            { action: "New visitor from Google Search", time: "2 hours ago", type: "visit" },
          ].map((activity, index) => (
            <div key={index} className="flex items-center space-x-3 p-3 rounded-lg hover:bg-secondary/20 transition-colors">
              <div className="w-2 h-2 bg-accent rounded-full" />
              <div className="flex-1">
                <p className="text-sm">{activity.action}</p>
                <p className="text-xs text-muted-foreground">{activity.time}</p>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
};