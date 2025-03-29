
import { Card } from '@datainsight/ui-components';

const FeaturesPage = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center">Platform Features</h1>
        <p className="text-xl text-gray-600 mb-12 text-center">
          Discover the powerful features that make DataInsight the comprehensive analytics platform for your business.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mb-16">
        <div>
          <h2 className="text-2xl font-bold mb-6">Interactive Dashboards</h2>
          <div className="space-y-6">
            <Card className="bg-white">
              <h3 className="text-lg font-semibold mb-2">Overview Dashboard</h3>
              <p className="text-gray-600">
                Get a comprehensive view of key metrics and recent activity with at-a-glance KPIs and interactive charts.
              </p>
            </Card>
            <Card className="bg-white">
              <h3 className="text-lg font-semibold mb-2">Sales Analytics</h3>
              <p className="text-gray-600">
                Track revenue, product performance, regional analysis, and sales trends with dedicated visualization tools.
              </p>
            </Card>
            <Card className="bg-white">
              <h3 className="text-lg font-semibold mb-2">Custom Dashboards</h3>
              <p className="text-gray-600">
                Create tailored analytical views with our drag-and-drop interface for custom visualizations and layouts.
              </p>
            </Card>
          </div>
        </div>
        <div className="bg-gray-100 rounded-lg"></div>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mb-16">
        <div className="bg-gray-100 rounded-lg order-2 md:order-1"></div>
        <div className="order-1 md:order-2">
          <h2 className="text-2xl font-bold mb-6">Data Upload & Processing</h2>
          <div className="space-y-6">
            <Card className="bg-white">
              <h3 className="text-lg font-semibold mb-2">Intuitive Upload Interface</h3>
              <p className="text-gray-600">
                Simple drag-and-drop file uploads with support for CSV, Excel, JSON, and other common formats.
              </p>
            </Card>
            <Card className="bg-white">
              <h3 className="text-lg font-semibold mb-2">Automated Processing</h3>
              <p className="text-gray-600">
                Intelligent parsing, header detection, and basic data cleaning to prepare your data for analysis.
              </p>
            </Card>
            <Card className="bg-white">
              <h3 className="text-lg font-semibold mb-2">File Management</h3>
              <p className="text-gray-600">
                Central repository of all uploaded files with metadata, version control, and archive options.
              </p>
            </Card>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mb-16">
        <div>
          <h2 className="text-2xl font-bold mb-6">AI-Powered Analysis</h2>
          <div className="space-y-6">
            <Card className="bg-white">
              <h3 className="text-lg font-semibold mb-2">Automated Insights</h3>
              <p className="text-gray-600">
                AI-generated observations about data trends, patterns, and anomalies to accelerate your analysis.
              </p>
            </Card>
            <Card className="bg-white">
              <h3 className="text-lg font-semibold mb-2">Natural Language Queries</h3>
              <p className="text-gray-600">
                Ask questions about your data in plain language and get instant visualizations and answers.
              </p>
            </Card>
            <Card className="bg-white">
              <h3 className="text-lg font-semibold mb-2">Predictive Analytics</h3>
              <p className="text-gray-600">
                Forecast future values, detect anomalies, and perform what-if analysis based on historical data.
              </p>
            </Card>
          </div>
        </div>
        <div className="bg-gray-100 rounded-lg"></div>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-gray-100 rounded-lg order-2 md:order-1"></div>
        <div className="order-1 md:order-2">
          <h2 className="text-2xl font-bold mb-6">Collaboration & Sharing</h2>
          <div className="space-y-6">
            <Card className="bg-white">
              <h3 className="text-lg font-semibold mb-2">Team Workspaces</h3>
              <p className="text-gray-600">
                Collaborate with team members in shared workspaces with role-based access controls.
              </p>
            </Card>
            <Card className="bg-white">
              <h3 className="text-lg font-semibold mb-2">Export & Reporting</h3>
              <p className="text-gray-600">
                Generate and share reports in multiple formats, including PDF, Excel, and interactive web links.
              </p>
            </Card>
            <Card className="bg-white">
              <h3 className="text-lg font-semibold mb-2">Comment System</h3>
              <p className="text-gray-600">
                Discuss insights and findings with team members through threaded comments on specific data points.
              </p>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturesPage;
