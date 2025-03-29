
import { AccessRequest } from '../../../common/src/models/AccessRequest';

// In a real application, this would fetch data from an API
export const fetchAccessRequests = async (): Promise<AccessRequest[]> => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 500));
  
  // Return mock data
  return [
    {
      id: '1',
      name: 'John Doe',
      email: 'john.doe@example.com',
      company: 'Tech Solutions Inc.',
      role: 'Data Analyst',
      useCase: 'We need advanced data visualization tools to analyze our customer feedback data.',
      requestDate: '2023-06-23',
      status: 'pending',
    },
    {
      id: '2',
      name: 'Sarah Johnson',
      email: 'sarah.johnson@example.com',
      company: 'Marketing Experts LLC',
      role: 'Marketing Specialist',
      useCase: 'Looking for tools to better understand our marketing campaign performance across channels.',
      requestDate: '2023-06-22',
      status: 'pending',
    },
    {
      id: '3',
      name: 'Michael Chen',
      email: 'michael.chen@example.com',
      company: 'Global Enterprises',
      role: 'Business Executive',
      useCase: 'Need executive dashboards to monitor company KPIs and make data-driven decisions.',
      requestDate: '2023-06-21',
      status: 'approved',
    },
    {
      id: '4',
      name: 'Emily Wilson',
      email: 'emily.wilson@example.com',
      company: 'Data Insights Co.',
      role: 'Data Scientist',
      useCase: 'Looking for advanced analytics capabilities to build predictive models for our clients.',
      requestDate: '2023-06-20',
      status: 'rejected',
    },
    {
      id: '5',
      name: 'David Smith',
      email: 'david.smith@example.com',
      company: 'Smith & Associates',
      role: 'Business Executive',
      useCase: 'Need a platform to consolidate our data sources and provide insights to our team.',
      requestDate: '2023-06-19',
      status: 'approved',
    },
  ];
};

export const approveAccessRequest = async (id: string): Promise<boolean> => {
  // In a real app, this would send a request to your API
  console.log(`Approving access request ${id}`);
  
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 500));
  
  // Return success
  return true;
};

export const rejectAccessRequest = async (id: string): Promise<boolean> => {
  // In a real app, this would send a request to your API
  console.log(`Rejecting access request ${id}`);
  
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 500));
  
  // Return success
  return true;
};

export const generateSecureAccessLink = async (userId: string): Promise<string> => {
  // In a real app, this would generate a secure token on the server
  console.log(`Generating secure access link for user ${userId}`);
  
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 500));
  
  // Return a mock secure link
  return `https://user-portal.datainsight.app/access?token=${Math.random().toString(36).substring(2, 15)}`;
};
