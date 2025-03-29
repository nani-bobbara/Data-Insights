
export interface AccessRequest {
  id: string;
  name: string;
  email: string;
  company: string;
  role: string;
  useCase: string;
  requestDate: string;
  status: 'pending' | 'approved' | 'rejected';
}

export interface AccessRequestFormData {
  firstName: string;
  lastName: string;
  email: string;
  company: string;
  role: string;
  useCase: string;
}
