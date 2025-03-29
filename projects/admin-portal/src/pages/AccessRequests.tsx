
import { useState, useEffect } from 'react';
import { Button, Card } from '@datainsight/ui-components';
import { fetchAccessRequests, approveAccessRequest, rejectAccessRequest } from '../services/AccessRequestService';
import { AccessRequest } from '../../../common/src/models/AccessRequest';
import SecureAccessLinkModal from '../components/SecureAccessLinkModal';

const AccessRequests = () => {
  const [requests, setRequests] = useState<AccessRequest[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const [selectedRequest, setSelectedRequest] = useState<AccessRequest | null>(null);
  const [isViewModalOpen, setIsViewModalOpen] = useState(false);
  const [isSecureLinkModalOpen, setIsSecureLinkModalOpen] = useState(false);
  const [statusFilter, setStatusFilter] = useState<string>('all');

  useEffect(() => {
    loadAccessRequests();
  }, []);

  const loadAccessRequests = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const data = await fetchAccessRequests();
      setRequests(data);
    } catch (err) {
      console.error('Error fetching access requests:', err);
      setError('Failed to load access requests. Please try again later.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleViewRequest = (request: AccessRequest) => {
    setSelectedRequest(request);
    setIsViewModalOpen(true);
  };

  const handleApproveRequest = async (id: string) => {
    try {
      const success = await approveAccessRequest(id);
      if (success) {
        setRequests(prevRequests => 
          prevRequests.map(request => 
            request.id === id ? { ...request, status: 'approved' } : request
          )
        );
        if (selectedRequest && selectedRequest.id === id) {
          setSelectedRequest({ ...selectedRequest, status: 'approved' });
          // Open the secure link modal after approval
          setIsSecureLinkModalOpen(true);
        }
      }
    } catch (err) {
      console.error('Error approving request:', err);
    }
  };

  const handleRejectRequest = async (id: string) => {
    try {
      const success = await rejectAccessRequest(id);
      if (success) {
        setRequests(prevRequests => 
          prevRequests.map(request => 
            request.id === id ? { ...request, status: 'rejected' } : request
          )
        );
        if (selectedRequest && selectedRequest.id === id) {
          setSelectedRequest({ ...selectedRequest, status: 'rejected' });
        }
      }
    } catch (err) {
      console.error('Error rejecting request:', err);
    }
  };

  const filteredRequests = requests.filter(request => {
    if (statusFilter === 'all') return true;
    return request.status === statusFilter;
  });

  const pendingCount = requests.filter(r => r.status === 'pending').length;
  const approvedCount = requests.filter(r => r.status === 'approved').length;
  const rejectedCount = requests.filter(r => r.status === 'rejected').length;

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="text-center">
          <div className="w-10 h-10 border-t-2 border-b-2 border-primary rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-500">Loading access requests...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-6 bg-red-50 border border-red-200 rounded-lg">
        <h3 className="text-lg font-medium text-red-800 mb-2">Error</h3>
        <p className="text-red-700">{error}</p>
        <Button onClick={loadAccessRequests} className="mt-4">
          Try Again
        </Button>
      </div>
    );
  }

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
                  Role
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
              {filteredRequests.length === 0 ? (
                <tr>
                  <td colSpan={6} className="px-6 py-12 text-center text-gray-500">
                    No access requests found
                  </td>
                </tr>
              ) : (
                filteredRequests.map((request) => (
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
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{request.role}</div>
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
                      {request.status === 'approved' && (
                        <Button 
                          className="ml-2" 
                          size="sm"
                          variant="outline"
                          onClick={() => {
                            setSelectedRequest(request);
                            setIsSecureLinkModalOpen(true);
                          }}
                        >
                          Generate Link
                        </Button>
                      )}
                    </td>
                  </tr>
                ))
              )}
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
                          <h4 className="text-sm font-medium text-gray-500">Request Date</h4>
                          <p>{selectedRequest.requestDate}</p>
                        </div>
                      </div>
                      
                      <div>
                        <h4 className="text-sm font-medium text-gray-500">Use Case</h4>
                        <p className="text-sm">{selectedRequest.useCase}</p>
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
                {selectedRequest.status === 'approved' && (
                  <Button 
                    className="ml-3"
                    onClick={() => {
                      setIsViewModalOpen(false);
                      setIsSecureLinkModalOpen(true);
                    }}
                  >
                    Generate Access Link
                  </Button>
                )}
                <Button variant="outline" onClick={() => setIsViewModalOpen(false)}>
                  Close
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Secure Link Modal */}
      {isSecureLinkModalOpen && selectedRequest && (
        <SecureAccessLinkModal 
          userId={selectedRequest.id}
          userEmail={selectedRequest.email}
          onClose={() => setIsSecureLinkModalOpen(false)}
        />
      )}
    </div>
  );
};

export default AccessRequests;
