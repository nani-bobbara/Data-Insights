
import { useState } from 'react';
import { Button, Card, Input } from '@datainsight/ui-components';

interface FeatureFlag {
  id: string;
  name: string;
  key: string;
  description: string;
  enabled: boolean;
  audience: string;
  lastUpdated: string;
}

const FeatureFlags = () => {
  const [featureFlags, setFeatureFlags] = useState<FeatureFlag[]>([
    {
      id: '1',
      name: 'AI-Powered Insights',
      key: 'enable_ai_insights',
      description: 'Enables the AI-powered insights feature that automatically generates observations from user data.',
      enabled: true,
      audience: 'All Users',
      lastUpdated: '2023-06-15',
    },
    {
      id: '2',
      name: 'Advanced Visualizations',
      key: 'enable_advanced_viz',
      description: 'Enables advanced visualization options including network graphs and 3D charts.',
      enabled: true,
      audience: 'Enterprise Plan',
      lastUpdated: '2023-06-10',
    },
    {
      id: '3',
      name: 'Natural Language Queries',
      key: 'enable_nl_queries',
      description: 'Allows users to query their data using natural language instead of building filters manually.',
      enabled: false,
      audience: 'Beta Testers',
      lastUpdated: '2023-06-20',
    },
    {
      id: '4',
      name: 'Data Export API',
      key: 'enable_export_api',
      description: 'Enables the data export API endpoint for programmatic access to report data.',
      enabled: true,
      audience: 'Professional Plan and Above',
      lastUpdated: '2023-06-01',
    },
    {
      id: '5',
      name: 'Custom Report Templates',
      key: 'enable_custom_templates',
      description: 'Allows users to create and save custom report templates for reuse.',
      enabled: false,
      audience: 'Internal Testing',
      lastUpdated: '2023-05-28',
    },
  ]);

  const [selectedFlag, setSelectedFlag] = useState<FeatureFlag | null>(null);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [filterEnabled, setFilterEnabled] = useState<boolean | null>(null);

  const handleEditFlag = (flag: FeatureFlag) => {
    setSelectedFlag(flag);
    setIsEditModalOpen(true);
  };

  const handleToggleFlag = (id: string) => {
    setFeatureFlags(flags => 
      flags.map(flag => 
        flag.id === id ? { ...flag, enabled: !flag.enabled, lastUpdated: new Date().toISOString().split('T')[0] } : flag
      )
    );
  };

  const handleSaveFlag = () => {
    // In a real app, this would save to the backend
    setIsEditModalOpen(false);
  };

  const filteredFlags = featureFlags.filter(flag => {
    // Search filter
    const matchesSearch = 
      flag.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      flag.key.toLowerCase().includes(searchQuery.toLowerCase()) ||
      flag.description.toLowerCase().includes(searchQuery.toLowerCase());
    
    // Enabled status filter
    const matchesEnabled = filterEnabled === null || flag.enabled === filterEnabled;
    
    return matchesSearch && matchesEnabled;
  });

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Feature Flags</h1>
        <Button>Create New Flag</Button>
      </div>

      <Card className="bg-white">
        <div className="p-6 border-b border-gray-200">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div className="w-full md:w-1/2">
              <div className="relative">
                <Input 
                  placeholder="Search feature flags..." 
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                  </svg>
                </div>
              </div>
            </div>
            <div className="flex gap-4">
              <div>
                <select 
                  className="rounded-md border border-gray-300 py-1.5 px-3 text-sm focus:outline-none focus:border-primary"
                  value={filterEnabled === null ? '' : filterEnabled ? 'enabled' : 'disabled'}
                  onChange={(e) => {
                    if (e.target.value === '') setFilterEnabled(null);
                    else setFilterEnabled(e.target.value === 'enabled');
                  }}
                >
                  <option value="">All Flags</option>
                  <option value="enabled">Enabled</option>
                  <option value="disabled">Disabled</option>
                </select>
              </div>
              <Button variant="outline" size="sm">
                Export
              </Button>
            </div>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Name
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Key
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Audience
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Last Updated
                </th>
                <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredFlags.map((flag) => (
                <tr key={flag.id}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">{flag.name}</div>
                    <div className="text-xs text-gray-500 mt-1 line-clamp-1">{flag.description}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-500 font-mono">{flag.key}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <button 
                        onClick={() => handleToggleFlag(flag.id)}
                        className={`relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none ${
                          flag.enabled ? 'bg-green-500' : 'bg-gray-200'
                        }`}
                      >
                        <span 
                          className={`pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200 ${
                            flag.enabled ? 'translate-x-5' : 'translate-x-0'
                          }`}
                        />
                      </button>
                      <span className={`ml-2 text-xs font-medium ${flag.enabled ? 'text-green-700' : 'text-gray-500'}`}>
                        {flag.enabled ? 'Enabled' : 'Disabled'}
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 text-blue-800">
                      {flag.audience}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {flag.lastUpdated}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <Button variant="outline" size="sm" onClick={() => handleEditFlag(flag)}>
                      Edit
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="px-6 py-4 border-t border-gray-200">
          <div className="flex items-center justify-between">
            <div className="text-sm text-gray-500">
              Showing {filteredFlags.length} of {featureFlags.length} feature flags
            </div>
          </div>
        </div>
      </Card>

      <Card className="bg-white p-6">
        <h2 className="text-lg font-semibold mb-4">Feature Rollout Stages</h2>
        <div className="space-y-4">
          <div className="flex flex-col lg:flex-row justify-between gap-4">
            <div className="p-4 bg-gray-50 rounded-md lg:flex-1">
              <div className="flex justify-between items-center mb-2">
                <h3 className="font-medium">Internal Testing</h3>
                <span className="px-2 py-1 bg-gray-200 text-gray-800 rounded-full text-xs font-medium">Stage 1</span>
              </div>
              <p className="text-sm text-gray-500 mb-2">Release features to internal employees for initial feedback and bug detection.</p>
              <div className="flex justify-between items-center">
                <span className="text-xs text-gray-500">Flags in this stage: 1</span>
                <Button variant="outline" size="sm">View</Button>
              </div>
            </div>
            
            <div className="p-4 bg-gray-50 rounded-md lg:flex-1">
              <div className="flex justify-between items-center mb-2">
                <h3 className="font-medium">Beta Testers</h3>
                <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-medium">Stage 2</span>
              </div>
              <p className="text-sm text-gray-500 mb-2">Release features to a small group of external users who have opted into beta testing.</p>
              <div className="flex justify-between items-center">
                <span className="text-xs text-gray-500">Flags in this stage: 1</span>
                <Button variant="outline" size="sm">View</Button>
              </div>
            </div>
            
            <div className="p-4 bg-gray-50 rounded-md lg:flex-1">
              <div className="flex justify-between items-center mb-2">
                <h3 className="font-medium">Limited Availability</h3>
                <span className="px-2 py-1 bg-purple-100 text-purple-800 rounded-full text-xs font-medium">Stage 3</span>
              </div>
              <p className="text-sm text-gray-500 mb-2">Release features to specific customer segments or plans as part of a phased rollout.</p>
              <div className="flex justify-between items-center">
                <span className="text-xs text-gray-500">Flags in this stage: 2</span>
                <Button variant="outline" size="sm">View</Button>
              </div>
            </div>
            
            <div className="p-4 bg-gray-50 rounded-md lg:flex-1">
              <div className="flex justify-between items-center mb-2">
                <h3 className="font-medium">General Availability</h3>
                <span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs font-medium">Stage 4</span>
              </div>
              <p className="text-sm text-gray-500 mb-2">Release features to all users across the platform.</p>
              <div className="flex justify-between items-center">
                <span className="text-xs text-gray-500">Flags in this stage: 1</span>
                <Button variant="outline" size="sm">View</Button>
              </div>
            </div>
          </div>
        </div>
      </Card>

      {/* Edit Feature Flag Modal */}
      {isEditModalOpen && selectedFlag && (
        <div className="fixed inset-0 z-50 overflow-y-auto">
          <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div className="fixed inset-0 transition-opacity" aria-hidden="true">
              <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
            </div>

            <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
              <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div className="sm:flex sm:items-start">
                  <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left w-full">
                    <h3 className="text-lg leading-6 font-medium text-gray-900 mb-4">
                      Edit Feature Flag
                    </h3>
                    <div className="space-y-4">
                      <Input
                        label="Name"
                        defaultValue={selectedFlag.name}
                      />
                      <Input
                        label="Key"
                        defaultValue={selectedFlag.key}
                        className="font-mono"
                        readOnly
                      />
                      
                      <div>
                        <label className="text-sm font-medium leading-none mb-2 block">
                          Description
                        </label>
                        <textarea 
                          className="flex w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                          rows={3}
                          defaultValue={selectedFlag.description}
                        />
                      </div>
                      
                      <div>
                        <label className="text-sm font-medium leading-none mb-2 block">
                          Status
                        </label>
                        <div className="flex items-center space-x-2">
                          <div className="flex items-center space-x-2 mr-6">
                            <input 
                              type="radio" 
                              id="status-enabled" 
                              name="flag-status" 
                              className="h-4 w-4 text-primary" 
                              defaultChecked={selectedFlag.enabled} 
                            />
                            <label htmlFor="status-enabled" className="text-sm">Enabled</label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <input 
                              type="radio" 
                              id="status-disabled" 
                              name="flag-status" 
                              className="h-4 w-4 text-primary" 
                              defaultChecked={!selectedFlag.enabled} 
                            />
                            <label htmlFor="status-disabled" className="text-sm">Disabled</label>
                          </div>
                        </div>
                      </div>
                      
                      <div>
                        <label className="text-sm font-medium leading-none mb-2 block">
                          Audience
                        </label>
                        <select 
                          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                          defaultValue={selectedFlag.audience}
                        >
                          <option>All Users</option>
                          <option>Enterprise Plan</option>
                          <option>Professional Plan and Above</option>
                          <option>Beta Testers</option>
                          <option>Internal Testing</option>
                        </select>
                      </div>

                      <div className="bg-yellow-50 p-3 rounded-md">
                        <div className="flex">
                          <svg className="h-5 w-5 text-yellow-400 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                            <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                          </svg>
                          <div className="text-sm text-yellow-700">
                            <p>Changing a feature flag may immediately affect user experience. Please review carefully before saving.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                <Button className="ml-3" onClick={handleSaveFlag}>
                  Save Changes
                </Button>
                <Button variant="outline" onClick={() => setIsEditModalOpen(false)}>
                  Cancel
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FeatureFlags;
