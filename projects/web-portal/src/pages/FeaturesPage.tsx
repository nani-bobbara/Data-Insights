
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
            <Card className="bg-white shadow-md hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-lg font-semibold mb-2">Overview Dashboard</h3>
              <p className="text-gray-600">
                Get a comprehensive view of key metrics and recent activity with at-a-glance KPIs and interactive charts.
              </p>
            </Card>
            <Card className="bg-white shadow-md hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-lg font-semibold mb-2">Sales Analytics</h3>
              <p className="text-gray-600">
                Track revenue, product performance, regional analysis, and sales trends with dedicated visualization tools.
              </p>
            </Card>
            <Card className="bg-white shadow-md hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-lg font-semibold mb-2">Custom Dashboards</h3>
              <p className="text-gray-600">
                Create tailored analytical views with our drag-and-drop interface for custom visualizations and layouts.
              </p>
            </Card>
          </div>
        </div>
        <div className="bg-blue-50 rounded-lg flex items-center justify-center p-8">
          <div className="w-full h-full bg-blue-100 rounded-lg flex items-center justify-center">
            <svg className="w-32 h-32 text-blue-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path>
              <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path>
            </svg>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mb-16">
        <div className="bg-green-50 rounded-lg flex items-center justify-center p-8 order-2 md:order-1">
          <div className="w-full h-full bg-green-100 rounded-lg flex items-center justify-center">
            <svg className="w-32 h-32 text-green-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd"></path>
            </svg>
          </div>
        </div>
        <div className="order-1 md:order-2">
          <h2 className="text-2xl font-bold mb-6">Data Upload & Processing</h2>
          <div className="space-y-6">
            <Card className="bg-white shadow-md hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-lg font-semibold mb-2">Intuitive Upload Interface</h3>
              <p className="text-gray-600">
                Simple drag-and-drop file uploads with support for CSV, Excel, JSON, and other common formats.
              </p>
            </Card>
            <Card className="bg-white shadow-md hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-lg font-semibold mb-2">Automated Processing</h3>
              <p className="text-gray-600">
                Intelligent parsing, header detection, and basic data cleaning to prepare your data for analysis.
              </p>
            </Card>
            <Card className="bg-white shadow-md hover:shadow-lg transition-shadow duration-300">
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
            <Card className="bg-white shadow-md hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-lg font-semibold mb-2">Automated Insights</h3>
              <p className="text-gray-600">
                AI-generated observations about data trends, patterns, and anomalies to accelerate your analysis.
              </p>
            </Card>
            <Card className="bg-white shadow-md hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-lg font-semibold mb-2">Natural Language Queries</h3>
              <p className="text-gray-600">
                Ask questions about your data in plain language and get instant visualizations and answers.
              </p>
            </Card>
            <Card className="bg-white shadow-md hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-lg font-semibold mb-2">Predictive Analytics</h3>
              <p className="text-gray-600">
                Forecast future values, detect anomalies, and perform what-if analysis based on historical data.
              </p>
            </Card>
          </div>
        </div>
        <div className="bg-purple-50 rounded-lg flex items-center justify-center p-8">
          <div className="w-full h-full bg-purple-100 rounded-lg flex items-center justify-center">
            <svg className="w-32 h-32 text-purple-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path d="M10 3.5a1.5 1.5 0 013 0V4a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-.5a1.5 1.5 0 000 3h.5a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-.5a1.5 1.5 0 00-3 0v.5a1 1 0 01-1 1H6a1 1 0 01-1-1v-3a1 1 0 00-1-1h-.5a1.5 1.5 0 010-3H4a1 1 0 001-1V6a1 1 0 011-1h3a1 1 0 001-1v-.5z"></path>
            </svg>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-yellow-50 rounded-lg flex items-center justify-center p-8 order-2 md:order-1">
          <div className="w-full h-full bg-yellow-100 rounded-lg flex items-center justify-center">
            <svg className="w-32 h-32 text-yellow-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"></path>
            </svg>
          </div>
        </div>
        <div className="order-1 md:order-2">
          <h2 className="text-2xl font-bold mb-6">Collaboration & Sharing</h2>
          <div className="space-y-6">
            <Card className="bg-white shadow-md hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-lg font-semibold mb-2">Team Workspaces</h3>
              <p className="text-gray-600">
                Collaborate with team members in shared workspaces with role-based access controls.
              </p>
            </Card>
            <Card className="bg-white shadow-md hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-lg font-semibold mb-2">Export & Reporting</h3>
              <p className="text-gray-600">
                Generate and share reports in multiple formats, including PDF, Excel, and interactive web links.
              </p>
            </Card>
            <Card className="bg-white shadow-md hover:shadow-lg transition-shadow duration-300">
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
