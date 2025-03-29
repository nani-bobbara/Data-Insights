
import { useState } from 'react';
import { Button, Card } from '@datainsight/ui-components';

interface AccessRequest {
  id: string;
  name: string;
  email: string;
  company: string;
  role: string;
  plan: string;
  requestDate: string;
  status: 'pending' | 'approved' | 'rejected';
}

const AccessRequests = () => {
  const [requests, setRequests] = useState<AccessRequest[]>([
    {
      id: '1',
      name: 'John Doe',
      email: 'john.doe@example.com',
      company: 'Tech Solutions Inc.',
      role: 'Data Analyst',
      plan: 'Professional',
      requestDate: '2023-06-23',
      status: 'pending',
    },
    {
      id: '2',
      name: 'Sarah Johnson',
      email: 'sarah.johnson@example.com',
      company: 'Marketing Experts LLC',
      role: 'Marketing Specialist',
      plan: 'Professional',
      requestDate: '2023-06-22',
      status: 'pending',
    },
    {
      id: '3',
      name: 'Michael Chen',
      email: 'michael.chen@example.com',
      company: 'Global Enterprises',
      role: 'Business Executive',
      plan: 'Enterprise',
      requestDate: '2023-06-21',
      status: 'approved',
    },
    {
      id: '4',
      name: 'Emily Wilson',
      email: 'emily.wilson@example.com',
      company: 'Data Insights Co.',
      role: 'Data Scientist',
      plan: 'Professional',
      requestDate: '2023-06-20',
      status: 'rejected',
    },
    {
      id: '5',
      name: 'David Smith',
      email: 'david.smith@example.com',
      company: 'Smith & Associates',
      role: 'Business Executive',
      plan: 'Enterprise',
      requestDate: '2023-06-19',
      status: 'approved',
    },
  ]);

  const [selectedRequest, setSelectedRequest] = useState<AccessRequest | null>(null);
  const [isViewModalOpen, setIsViewModalOpen] = useState(false);
  const [statusFilter, setStatusFilter] = useState<string>('all');

  const handleViewRequest = (request: AccessRequest) => {
    setSelectedRequest(request);
    setIsViewModalOpen(true);
  };

  const handleApproveRequest = (id: string) => {
    setRequests(prevRequests => 
      prevRequests.map(request => 
        request.id === id ? { ...request, status: 'approved' } : request
      )
    );
    if (selectedRequest && selectedRequest.id === id) {
      setSelectedRequest({ ...selectedRequest, status: 'approved' });
    }
  };

  const handleRejectRequest = (id: string) => {
    setRequests(prevRequests => 
      prevRequests.map(request => 
        request.id === id ? { ...request, status: 'rejected' } : request
      )
    );
    if (selectedRequest && selectedRequest.id === id) {
      setSelectedRequest({ ...selectedRequest, status: 'rejected' });
    }
  };

  const filteredRequests = requests.filter(request => {
    if (statusFilter === 'all') return true;
    return request.status === statusFilter;
  });

  const pendingCount = requests.filter(r => r.status === 'pending').length;
  const approvedCount = requests.filter(r => r.status === 'approved').length;
  const rejectedCount = requests.filter(r => r.status === 'rejected').length;

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Access Requests</h1>
        <Button variant="outline" size="sm">
          Export
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card 
          className={`bg-white cursor-pointer ${statusFilter === 'all' ? 'border-2 border-primary' : ''}`}
          onClick={() => setStatusFilter('all')}
        >
          <div className="p-4 flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">All Requests</p>
              <p className="text-2xl font-semibold mt-1">{requests.length}</p>
            </div>
            <div className="rounded-full p-3 bg-gray-100">
              <svg className="w-6 h-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"></path>
              </svg>
            </div>
          </div>
        </Card>
        
        <Card 
          className={`bg-white cursor-pointer ${statusFilter === 'pending' ? 'border-2 border-primary' : ''}`}
          onClick={() => setStatusFilter('pending')}
        >
          <div className="p-4 flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">Pending</p>
              <p className="text-2xl font-semibold mt-1">{pendingCount}</p>
            </div>
            <div className="rounded-full p-3 bg-yellow-100">
              <svg className="w-6 h-6 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
            </div>
          </div>
        </Card>
        
        <Card 
          className={`bg-white cursor-pointer ${statusFilter === 'approved' ? 'border-2 border-primary' : ''}`}
          onClick={() => setStatusFilter('approved')}
        >
          <div className="p-4 flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">Approved</p>
              <p className="text-2xl font-semibold mt-1">{approvedCount}</p>
            </div>
            <div className="rounded-full p-3 bg-green-100">
              <svg className="w-6 h-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
            </div>
          </div>
        </Card>
      </div>

      <Card className="bg-white">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Name
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Company
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Plan
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Request Date
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredRequests.map((request) => (
                <tr key={request.id}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="h-10 w-10 flex-shrink-0">
                        <div className="h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center">
                          <span className="text-gray-600">{request.name.charAt(0)}</span>
                        </div>
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900">{request.name}</div>
                        <div className="text-sm text-gray-500">{request.email}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{request.company}</div>
                    <div className="text-sm text-gray-500">{request.role}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                      request.plan === 'Enterprise' ? 'bg-purple-100 text-purple-800' : 'bg-blue-100 text-blue-800'
                    }`}>
                      {request.plan}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {request.requestDate}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                      request.status === 'pending' ? 'bg-yellow-100 text-yellow-800' : 
                      request.status === 'approved' ? 'bg-green-100 text-green-800' : 
                      'bg-red-100 text-red-800'
                    }`}>
                      {request.status.charAt(0).toUpperCase() + request.status.slice(1)}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <Button variant="outline" size="sm" onClick={() => handleViewRequest(request)}>
                      View
                    </Button>
                    {request.status === 'pending' && (
                      <>
                        <Button 
                          className="ml-2" 
                          size="sm"
                          onClick={() => handleApproveRequest(request.id)}
                        >
                          Approve
                        </Button>
                        <Button 
                          variant="outline" 
                          size="sm"
                          className="ml-2 text-red-500 border-red-300 hover:bg-red-50"
                          onClick={() => handleRejectRequest(request.id)}
                        >
                          Reject
                        </Button>
                      </>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="px-6 py-4 border-t border-gray-200">
          <div className="flex items-center justify-between">
            <div className="text-sm text-gray-500">
              Showing {filteredRequests.length} of {requests.length} access requests
            </div>
          </div>
        </div>
      </Card>

      {/* View Request Modal */}
      {isViewModalOpen && selectedRequest && (
        <div className="fixed inset-0 z-50 overflow-y-auto">
          <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div className="fixed inset-0 transition-opacity" aria-hidden="true">
              <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
            </div>

            <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
              <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div className="sm:flex sm:items-start">
                  <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left w-full">
                    <h3 className="text-lg leading-6 font-medium text-gray-900 mb-4 flex items-center justify-between">
                      Access Request Details
                      <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                        selectedRequest.status === 'pending' ? 'bg-yellow-100 text-yellow-800' : 
                        selectedRequest.status === 'approved' ? 'bg-green-100 text-green-800' : 
                        'bg-red-100 text-red-800'
                      }`}>
                        {selectedRequest.status.charAt(0).toUpperCase() + selectedRequest.status.slice(1)}
                      </span>
                    </h3>
                    <div className="space-y-4">
                      <div className="border-b border-gray-200 pb-4">
                        <div className="flex items-center">
                          <div className="h-16 w-16 rounded-full bg-gray-200 flex items-center justify-center">
                            <span className="text-gray-600 text-xl">{selectedRequest.name.charAt(0)}</span>
                          </div>
                          <div className="ml-4">
                            <p className="text-lg font-medium">{selectedRequest.name}</p>
                            <p className="text-gray-500">{selectedRequest.email}</p>
                          </div>
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <h4 className="text-sm font-medium text-gray-500">Company</h4>
                          <p>{selectedRequest.company}</p>
                        </div>
                        <div>
                          <h4 className="text-sm font-medium text-gray-500">Role</h4>
                          <p>{selectedRequest.role}</p>
                        </div>
                        <div>
                          <h4 className="text-sm font-medium text-gray-500">Requested Plan</h4>
                          <p>{selectedRequest.plan}</p>
                        </div>
                        <div>
                          <h4 className="text-sm font-medium text-gray-500">Request Date</h4>
                          <p>{selectedRequest.requestDate}</p>
                        </div>
                      </div>
                      
                      <div>
                        <h4 className="text-sm font-medium text-gray-500">Use Case</h4>
                        <p className="text-sm">We need a comprehensive data analytics platform to help us understand customer behavior and optimize our marketing campaigns. Looking forward to using your AI insights feature.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                {selectedRequest.status === 'pending' && (
                  <>
                    <Button 
                      className="ml-3"
                      onClick={() => handleApproveRequest(selectedRequest.id)}
                    >
                      Approve
                    </Button>
                    <Button 
                      variant="outline"
                      className="ml-3 text-red-500 border-red-300 hover:bg-red-50"
                      onClick={() => handleRejectRequest(selectedRequest.id)}
                    >
                      Reject
                    </Button>
                  </>
                )}
                <Button variant="outline" onClick={() => setIsViewModalOpen(false)}>
                  Close
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AccessRequests;
