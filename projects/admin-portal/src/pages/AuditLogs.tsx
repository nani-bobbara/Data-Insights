
import { useState } from 'react';
import { Button, Card, Input } from '@datainsight/ui-components';

interface AuditLog {
  id: string;
  userName: string;
  userEmail: string;
  action: string;
  resource: string;
  timestamp: string;
  ipAddress: string;
  details: string;
}

const AuditLogs = () => {
  const [logs, setLogs] = useState<AuditLog[]>([
    {
      id: '1',
      userName: 'John Doe',
      userEmail: 'john.doe@example.com',
      action: 'LOGIN',
      resource: 'Auth',
      timestamp: '2023-06-23T15:32:10Z',
      ipAddress: '192.168.1.1',
      details: 'User logged in successfully',
    },
    {
      id: '2',
      userName: 'Admin User',
      userEmail: 'admin@datainsight.com',
      action: 'UPDATE',
      resource: 'Feature Flag',
      timestamp: '2023-06-23T14:28:45Z',
      ipAddress: '192.168.1.2',
      details: 'Updated feature flag "enable_ai_insights" to enabled',
    },
    {
      id: '3',
      userName: 'Sarah Johnson',
      userEmail: 'sarah.johnson@example.com',
      action: 'CREATE',
      resource: 'Dashboard',
      timestamp: '2023-06-23T12:15:33Z',
      ipAddress: '192.168.1.3',
      details: 'Created new dashboard "Sales Overview Q2"',
    },
    {
      id: '4',
      userName: 'Michael Chen',
      userEmail: 'michael.chen@example.com',
      action: 'UPLOAD',
      resource: 'Data File',
      timestamp: '2023-06-23T10:42:18Z',
      ipAddress: '192.168.1.4',
      details: 'Uploaded file "customer_data_june.csv"',
    },
    {
      id: '5',
      userName: 'Admin User',
      userEmail: 'admin@datainsight.com',
      action: 'APPROVE',
      resource: 'Access Request',
      timestamp: '2023-06-23T09:37:56Z',
      ipAddress: '192.168.1.2',
      details: 'Approved access request for user david.smith@example.com',
    },
    {
      id: '6',
      userName: 'Emily Wilson',
      userEmail: 'emily.wilson@example.com',
      action: 'EXPORT',
      resource: 'Report',
      timestamp: '2023-06-22T16:54:22Z',
      ipAddress: '192.168.1.5',
      details: 'Exported report "Customer Insights Q2" as PDF',
    },
    {
      id: '7',
      userName: 'Admin User',
      userEmail: 'admin@datainsight.com',
      action: 'UPDATE',
      resource: 'System Config',
      timestamp: '2023-06-22T14:12:05Z',
      ipAddress: '192.168.1.2',
      details: 'Updated system configuration "file_upload_limit_mb" to 50',
    },
    {
      id: '8',
      userName: 'David Smith',
      userEmail: 'david.smith@example.com',
      action: 'LOGIN',
      resource: 'Auth',
      timestamp: '2023-06-22T10:28:33Z',
      ipAddress: '192.168.1.6',
      details: 'User logged in successfully',
    },
    {
      id: '9',
      userName: 'John Doe',
      userEmail: 'john.doe@example.com',
      action: 'SHARE',
      resource: 'Dashboard',
      timestamp: '2023-06-22T09:45:12Z',
      ipAddress: '192.168.1.1',
      details: 'Shared dashboard "Marketing Performance" with sarah.johnson@example.com',
    },
    {
      id: '10',
      userName: 'Admin User',
      userEmail: 'admin@datainsight.com',
      action: 'REJECT',
      resource: 'Access Request',
      timestamp: '2023-06-22T08:17:29Z',
      ipAddress: '192.168.1.2',
      details: 'Rejected access request for user test@example.com',
    },
  ]);

  const [searchQuery, setSearchQuery] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [actionFilter, setActionFilter] = useState('All');
  const [resourceFilter, setResourceFilter] = useState('All');
  const [userFilter, setUserFilter] = useState('All');

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const uniqueActions = Array.from(new Set(logs.map(log => log.action)));
  const uniqueResources = Array.from(new Set(logs.map(log => log.resource)));
  const uniqueUsers = Array.from(new Set(logs.map(log => log.userName)));

  const filteredLogs = logs.filter(log => {
    // Search filter
    const matchesSearch = 
      log.details.toLowerCase().includes(searchQuery.toLowerCase()) ||
      log.userName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      log.userEmail.toLowerCase().includes(searchQuery.toLowerCase());
    
    // Date filter
    const logDate = new Date(log.timestamp);
    const matchesStartDate = !startDate || new Date(startDate) <= logDate;
    const matchesEndDate = !endDate || new Date(endDate) >= logDate;
    
    // Action filter
    const matchesAction = actionFilter === 'All' || log.action === actionFilter;
    
    // Resource filter
    const matchesResource = resourceFilter === 'All' || log.resource === resourceFilter;
    
    // User filter
    const matchesUser = userFilter === 'All' || log.userName === userFilter;
    
    return matchesSearch && matchesStartDate && matchesEndDate && matchesAction && matchesResource && matchesUser;
  });

  // Format timestamp to a more readable format
  const formatTimestamp = (timestamp: string): string => {
    const date = new Date(timestamp);
    return date.toLocaleString();
  };

  // Get the action badge color based on the action type
  const getActionBadgeColor = (action: string): string => {
    switch (action) {
      case 'LOGIN':
        return 'bg-green-100 text-green-800';
      case 'LOGOUT':
        return 'bg-gray-100 text-gray-800';
      case 'CREATE':
        return 'bg-blue-100 text-blue-800';
      case 'UPDATE':
        return 'bg-yellow-100 text-yellow-800';
      case 'DELETE':
        return 'bg-red-100 text-red-800';
      case 'UPLOAD':
        return 'bg-purple-100 text-purple-800';
      case 'EXPORT':
        return 'bg-indigo-100 text-indigo-800';
      case 'SHARE':
        return 'bg-teal-100 text-teal-800';
      case 'APPROVE':
        return 'bg-green-100 text-green-800';
      case 'REJECT':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Audit Logs</h1>
        <Button variant="outline" size="sm">
          Export Logs
        </Button>
      </div>

      <Card className="bg-white">
        <div className="p-6 border-b border-gray-200">
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="relative">
                <Input 
                  placeholder="Search logs..." 
                  value={searchQuery}
                  onChange={handleSearchChange}
                  className="pl-10"
                />
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                  </svg>
                </div>
              </div>
              <div className="flex space-x-4">
                <Input 
                  type="date" 
                  placeholder="Start Date" 
                  value={startDate}
                  onChange={(e) => setStartDate(e.target.value)}
                  className="flex-1"
                />
                <Input 
                  type="date" 
                  placeholder="End Date" 
                  value={endDate}
                  onChange={(e) => setEndDate(e.target.value)}
                  className="flex-1"
                />
              </div>
            </div>
            <div className="flex flex-wrap gap-4">
              <select 
                className="rounded-md border border-gray-300 py-1.5 px-3 text-sm focus:outline-none focus:border-primary"
                value={actionFilter}
                onChange={(e) => setActionFilter(e.target.value)}
              >
                <option value="All">All Actions</option>
                {uniqueActions.map(action => (
                  <option key={action} value={action}>{action}</option>
                ))}
              </select>
              <select 
                className="rounded-md border border-gray-300 py-1.5 px-3 text-sm focus:outline-none focus:border-primary"
                value={resourceFilter}
                onChange={(e) => setResourceFilter(e.target.value)}
              >
                <option value="All">All Resources</option>
                {uniqueResources.map(resource => (
                  <option key={resource} value={resource}>{resource}</option>
                ))}
              </select>
              <select 
                className="rounded-md border border-gray-300 py-1.5 px-3 text-sm focus:outline-none focus:border-primary"
                value={userFilter}
                onChange={(e) => setUserFilter(e.target.value)}
              >
                <option value="All">All Users</option>
                {uniqueUsers.map(user => (
                  <option key={user} value={user}>{user}</option>
                ))}
              </select>
              <Button variant="outline" size="sm" onClick={() => {
                setSearchQuery('');
                setStartDate('');
                setEndDate('');
                setActionFilter('All');
                setResourceFilter('All');
                setUserFilter('All');
              }}>
                Clear Filters
              </Button>
            </div>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Timestamp
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  User
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Action
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Resource
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Details
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  IP Address
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredLogs.map((log) => (
                <tr key={log.id}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {formatTimestamp(log.timestamp)}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">{log.userName}</div>
                    <div className="text-sm text-gray-500">{log.userEmail}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getActionBadgeColor(log.action)}`}>
                      {log.action}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {log.resource}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-500">
                    {log.details}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {log.ipAddress}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="px-6 py-4 border-t border-gray-200">
          <div className="flex items-center justify-between">
            <div className="text-sm text-gray-500">
              Showing {filteredLogs.length} of {logs.length} logs
            </div>
            <div className="flex space-x-2">
              <Button variant="outline" size="sm">Previous</Button>
              <Button variant="outline" size="sm">Next</Button>
            </div>
          </div>
        </div>
      </Card>

      <Card className="bg-white p-6">
        <h2 className="text-lg font-semibold mb-4">Log Retention Policy</h2>
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <div>
              <p className="font-medium">Audit Log Retention</p>
              <p className="text-sm text-gray-500">Logs are retained for 90 days by default</p>
            </div>
            <Button variant="outline">Configure</Button>
          </div>
          <div className="bg-yellow-50 p-4 rounded-md">
            <div className="flex">
              <svg className="h-5 w-5 text-yellow-400 mt-0.5 mr-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
              <div>
                <h3 className="text-sm font-medium text-yellow-800">Compliance Notice</h3>
                <p className="text-sm text-yellow-700 mt-1">
                  For regulatory compliance, consider exporting and archiving logs before the retention period expires. Enterprise plan customers can configure extended retention periods.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default AuditLogs;
