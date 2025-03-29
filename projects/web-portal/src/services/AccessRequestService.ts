
interface AccessRequestData {
  firstName: string;
  lastName: string;
  email: string;
  company: string;
  role: string;
  useCase: string;
}

export const submitAccessRequest = async (data: AccessRequestData): Promise<{ success: boolean; message: string }> => {
  try {
    // In a real implementation, this would be an API call to your backend
    // For now, let's simulate a successful submission
    
    console.log('Access request submitted:', data);
    
    // Simulate API call delay
    await new Promise((resolve) => setTimeout(resolve, 1000));
    
    // Return success response
    return {
      success: true,
      message: 'Your access request has been submitted successfully. We will review it and get back to you soon.'
    };
  } catch (error) {
    console.error('Failed to submit access request:', error);
    return {
      success: false,
      message: 'Failed to submit your request. Please try again later.'
    };
  }
}
