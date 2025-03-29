
import { useState } from 'react';
import { Button, Card } from '@datainsight/ui-components';

const Visualizations = () => {
  const [selectedTemplate, setSelectedTemplate] = useState<string | null>(null);

  const templates = [
    {
      id: 'sales-dashboard',
      title: 'Sales Dashboard',
      description: 'Track revenue, sales trends, and product performance.',
      image: 'bg-gradient-to-br from-blue-500 to-purple-600',
    },
    {
      id: 'customer-insights',
      title: 'Customer Insights',
      description: 'Analyze customer behavior, segmentation, and demographics.',
      image: 'bg-gradient-to-br from-green-500 to-teal-600',
    },
    {
      id: 'marketing-analytics',
      title: 'Marketing Analytics',
      description: 'Measure campaign performance, ROI, and channel effectiveness.',
      image: 'bg-gradient-to-br from-orange-500 to-red-600',
    },
    {
      id: 'inventory-tracking',
      title: 'Inventory Tracking',
      description: 'Monitor stock levels, turnover rates, and forecasting.',
      image: 'bg-gradient-to-br from-indigo-500 to-purple-600',
    },
    {
      id: 'financial-overview',
      title: 'Financial Overview',
      description: 'Track profit margins, expenses, and financial KPIs.',
      image: 'bg-gradient-to-br from-cyan-500 to-blue-600',
    },
    {
      id: 'custom',
      title: 'Custom Dashboard',
      description: 'Create a dashboard from scratch with your preferred metrics.',
      image: 'bg-gradient-to-br from-gray-500 to-gray-600',
    },
  ];

  const selectTemplate = (id: string) => {
    setSelectedTemplate(id);
    // In a real app, this would navigate to the template editor or load the template
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Visualizations</h1>
        <Button>Create New Dashboard</Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {templates.map((template) => (
          <Card key={template.id} className="bg-white overflow-hidden hover:shadow-md transition-shadow">
            <div className={`${template.image} h-32`}></div>
            <div className="p-6">
              <h3 className="text-lg font-semibold mb-2">{template.title}</h3>
              <p className="text-gray-600 mb-4">{template.description}</p>
              <Button 
                variant={selectedTemplate === template.id ? 'default' : 'outline'} 
                onClick={() => selectTemplate(template.id)}
                className="w-full"
              >
                {selectedTemplate === template.id ? 'Selected' : 'Use Template'}
              </Button>
            </div>
          </Card>
        ))}
      </div>

      <div className="mt-8">
        <h2 className="text-xl font-semibold mb-4">Your Dashboards</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card className="bg-white overflow-hidden hover:shadow-md transition-shadow">
            <div className="bg-gradient-to-br from-blue-500 to-purple-600 h-32 relative">
              <div className="absolute top-2 right-2 bg-white text-xs font-medium px-2 py-1 rounded-full">
                Last edited 2 days ago
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-lg font-semibold mb-1">Q2 Sales Overview</h3>
              <p className="text-gray-500 text-sm mb-3">Created by you</p>
              <div className="flex space-x-2">
                <Button variant="outline" size="sm" className="flex-1">Edit</Button>
                <Button size="sm" className="flex-1">View</Button>
              </div>
            </div>
          </Card>

          <Card className="bg-white overflow-hidden hover:shadow-md transition-shadow">
            <div className="bg-gradient-to-br from-green-500 to-teal-600 h-32 relative">
              <div className="absolute top-2 right-2 bg-white text-xs font-medium px-2 py-1 rounded-full">
                Last edited 5 days ago
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-lg font-semibold mb-1">Customer Segmentation</h3>
              <p className="text-gray-500 text-sm mb-3">Created by you</p>
              <div className="flex space-x-2">
                <Button variant="outline" size="sm" className="flex-1">Edit</Button>
                <Button size="sm" className="flex-1">View</Button>
              </div>
            </div>
          </Card>

          <Card className="bg-white overflow-hidden hover:shadow-md transition-shadow border-2 border-dashed border-gray-300 flex items-center justify-center">
            <div className="text-center p-6">
              <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
                </svg>
              </div>
              <h3 className="text-lg font-medium mb-2">Create New Dashboard</h3>
              <p className="text-gray-500 text-sm mb-4">Start from scratch or use a template</p>
              <Button>Create Dashboard</Button>
            </div>
          </Card>
        </div>

        <div className="mt-8">
          <h2 className="text-xl font-semibold mb-4">Shared With You</h2>
          
          <Card className="bg-white">
            <div className="p-6">
              <div className="flex items-center mb-4">
                <div className="w-8 h-8 bg-gray-200 rounded-full mr-3"></div>
                <div>
                  <p className="text-sm font-medium">Marketing Performance</p>
                  <p className="text-xs text-gray-500">Shared by Sarah Johnson</p>
                </div>
                <Button variant="outline" size="sm" className="ml-auto">
                  View
                </Button>
              </div>
              
              <div className="flex items-center mb-4">
                <div className="w-8 h-8 bg-gray-200 rounded-full mr-3"></div>
                <div>
                  <p className="text-sm font-medium">Product Launch Metrics</p>
                  <p className="text-xs text-gray-500">Shared by Alex Chen</p>
                </div>
                <Button variant="outline" size="sm" className="ml-auto">
                  View
                </Button>
              </div>
              
              <div className="flex items-center">
                <div className="w-8 h-8 bg-gray-200 rounded-full mr-3"></div>
                <div>
                  <p className="text-sm font-medium">Annual Revenue Analysis</p>
                  <p className="text-xs text-gray-500">Shared by Jordan Smith</p>
                </div>
                <Button variant="outline" size="sm" className="ml-auto">
                  View
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Visualizations;
