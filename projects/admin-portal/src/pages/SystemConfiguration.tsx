
import { useState } from 'react';
import { Button, Card, Input } from '@datainsight/ui-components';

interface ConfigItem {
  id: string;
  name: string;
  key: string;
  value: string;
  type: 'string' | 'number' | 'boolean';
  description: string;
  lastUpdated: string;
}

const SystemConfiguration = () => {
  const [configs, setConfigs] = useState<ConfigItem[]>([
    {
      id: '1',
      name: 'API Rate Limit',
      key: 'api_rate_limit',
      value: '1000',
      type: 'number',
      description: 'Maximum number of API requests per hour per user',
      lastUpdated: '2023-06-15',
    },
    {
      id: '2',
      name: 'File Upload Limit',
      key: 'file_upload_limit_mb',
      value: '50',
      type: 'number',
      description: 'Maximum file size for uploads in MB',
      lastUpdated: '2023-06-10',
    },
    {
      id: '3',
      name: 'Enable AI Features',
      key: 'enable_ai_features',
      value: 'true',
      type: 'boolean',
      description: 'Enable AI-powered analytics features',
      lastUpdated: '2023-06-20',
    },
    {
      id: '4',
      name: 'Email Notifications',
      key: 'email_notifications',
      value: 'true',
      type: 'boolean',
      description: 'Enable email notifications for users',
      lastUpdated: '2023-06-01',
    },
    {
      id: '5',
      name: 'Database Connection String',
      key: 'db_connection_string',
      value: 'postgres://user:pass@localhost:5432/datainsight',
      type: 'string',
      description: 'Database connection string (sensitive)',
      lastUpdated: '2023-05-28',
    },
  ]);

  const [selectedConfig, setSelectedConfig] = useState<ConfigItem | null>(null);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  const handleEditConfig = (config: ConfigItem) => {
    setSelectedConfig(config);
    setIsEditModalOpen(true);
  };

  const handleSaveConfig = () => {
    // In a real app, this would save to the backend
    setIsEditModalOpen(false);
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">System Configuration</h1>
        <Button>Add New Configuration</Button>
      </div>

      <Card className="bg-white p-6">
        <div className="mb-6">
          <h2 className="text-lg font-semibold mb-2">Environment</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 bg-gray-50 rounded-md">
              <div className="flex items-center">
                <div className="rounded-full p-2 bg-green-100 mr-3">
                  <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-medium">Production</p>
                  <p className="text-xs text-gray-500">v2.3.4</p>
                </div>
              </div>
            </div>
            <div className="p-4 bg-gray-50 rounded-md">
              <div className="flex items-center">
                <div className="rounded-full p-2 bg-blue-100 mr-3">
                  <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-medium">Staging</p>
                  <p className="text-xs text-gray-500">v2.3.5-beta</p>
                </div>
              </div>
            </div>
            <div className="p-4 bg-gray-50 rounded-md">
              <div className="flex items-center">
                <div className="rounded-full p-2 bg-purple-100 mr-3">
                  <svg className="w-5 h-5 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 9l4-4 4 4m0 6l-4 4-4-4"></path>
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-medium">Development</p>
                  <p className="text-xs text-gray-500">v2.4.0-dev</p>
                </div>
              </div>
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
                  Value
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Type
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
              {configs.map((config) => (
                <tr key={config.id}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">{config.name}</div>
                    <div className="text-xs text-gray-500">{config.description}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-500 font-mono">{config.key}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-500 font-mono">
                      {config.type === 'string' && config.key.includes('password') || config.key.includes('secret') || config.key.includes('key') ? 
                        '••••••••••••' : 
                        config.value
                      }
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                      config.type === 'string' ? 'bg-blue-100 text-blue-800' : 
                      config.type === 'boolean' ? 'bg-green-100 text-green-800' : 
                      'bg-purple-100 text-purple-800'
                    }`}>
                      {config.type}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {config.lastUpdated}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <Button variant="outline" size="sm" onClick={() => handleEditConfig(config)}>
                      Edit
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>

      <Card className="bg-white p-6">
        <h2 className="text-lg font-semibold mb-4">Backup & Restore</h2>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium">Database Backup</p>
              <p className="text-sm text-gray-500">Last backup: Today at 03:00 AM</p>
            </div>
            <Button variant="outline">Create Backup</Button>
          </div>
          
          <div className="border-t border-gray-200 pt-4">
            <p className="font-medium">Backup Schedule</p>
            <div className="flex items-center mt-2">
              <div className="flex items-center space-x-2 mr-6">
                <input type="radio" id="daily" name="backup-schedule" className="h-4 w-4 text-primary" checked />
                <label htmlFor="daily" className="text-sm">Daily</label>
              </div>
              <div className="flex items-center space-x-2 mr-6">
                <input type="radio" id="weekly" name="backup-schedule" className="h-4 w-4 text-primary" />
                <label htmlFor="weekly" className="text-sm">Weekly</label>
              </div>
              <div className="flex items-center space-x-2">
                <input type="radio" id="monthly" name="backup-schedule" className="h-4 w-4 text-primary" />
                <label htmlFor="monthly" className="text-sm">Monthly</label>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-200 pt-4">
            <p className="font-medium">Restore from Backup</p>
            <div className="flex items-center mt-2">
              <select className="flex h-10 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 mr-2">
                <option value="backup-2023-06-23">backup-2023-06-23.sql</option>
                <option value="backup-2023-06-22">backup-2023-06-22.sql</option>
                <option value="backup-2023-06-21">backup-2023-06-21.sql</option>
              </select>
              <Button variant="outline">Restore</Button>
            </div>
          </div>
        </div>
      </Card>

      {/* Edit Configuration Modal */}
      {isEditModalOpen && selectedConfig && (
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
                      Edit Configuration
                    </h3>
                    <div className="space-y-4">
                      <Input
                        label="Name"
                        defaultValue={selectedConfig.name}
                        readOnly
                      />
                      <Input
                        label="Key"
                        defaultValue={selectedConfig.key}
                        readOnly
                        className="font-mono"
                      />
                      
                      {selectedConfig.type === 'boolean' ? (
                        <div>
                          <label className="text-sm font-medium leading-none mb-2 block">
                            Value
                          </label>
                          <div className="flex items-center space-x-2">
                            <div className="flex items-center space-x-2 mr-6">
                              <input 
                                type="radio" 
                                id="value-true" 
                                name="config-value" 
                                className="h-4 w-4 text-primary" 
                                defaultChecked={selectedConfig.value === 'true'} 
                              />
                              <label htmlFor="value-true" className="text-sm">True</label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <input 
                                type="radio" 
                                id="value-false" 
                                name="config-value" 
                                className="h-4 w-4 text-primary" 
                                defaultChecked={selectedConfig.value === 'false'} 
                              />
                              <label htmlFor="value-false" className="text-sm">False</label>
                            </div>
                          </div>
                        </div>
                      ) : (
                        <Input
                          label="Value"
                          defaultValue={selectedConfig.value}
                          type={selectedConfig.type === 'number' ? 'number' : 'text'}
                          className={selectedConfig.type === 'string' ? 'font-mono' : ''}
                        />
                      )}
                      
                      <div>
                        <label className="text-sm font-medium leading-none mb-2 block">
                          Description
                        </label>
                        <textarea 
                          className="flex w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                          rows={3}
                          defaultValue={selectedConfig.description}
                        />
                      </div>

                      <div className="bg-yellow-50 p-3 rounded-md">
                        <div className="flex">
                          <svg className="h-5 w-5 text-yellow-400 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                            <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                          </svg>
                          <div className="text-sm text-yellow-700">
                            <p>Changing system configuration can impact all users. Please review carefully before saving.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                <Button className="ml-3" onClick={handleSaveConfig}>
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

export default SystemConfiguration;
