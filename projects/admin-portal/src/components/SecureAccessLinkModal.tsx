
import { useState } from 'react';
import { Button } from '@datainsight/ui-components';
import { generateSecureAccessLink } from '../services/AccessRequestService';

interface SecureAccessLinkModalProps {
  userId: string;
  userEmail: string;
  onClose: () => void;
}

const SecureAccessLinkModal = ({ userId, userEmail, onClose }: SecureAccessLinkModalProps) => {
  const [accessLink, setAccessLink] = useState<string | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);
  const [isCopied, setIsCopied] = useState(false);

  const handleGenerateLink = async () => {
    setIsGenerating(true);
    try {
      const link = await generateSecureAccessLink(userId);
      setAccessLink(link);
    } catch (error) {
      console.error('Error generating secure access link:', error);
    } finally {
      setIsGenerating(false);
    }
  };

  const handleCopyLink = () => {
    if (accessLink) {
      navigator.clipboard.writeText(accessLink);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    }
  };

  const handleSendEmail = () => {
    // In a real app, this would send an email with the secure link
    console.log(`Sending access link to ${userEmail}: ${accessLink}`);
    onClose();
  };

  return (
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
                  Generate Secure Access Link
                </h3>
                <p className="text-sm text-gray-500 mb-4">
                  Generate a secure one-time access link for the user to access the DataInsight platform. This link will expire after 7 days.
                </p>
                
                {accessLink ? (
                  <div className="mt-4">
                    <p className="text-sm font-medium text-gray-700 mb-2">Secure Access Link:</p>
                    <div className="flex items-center">
                      <input 
                        type="text" 
                        readOnly 
                        value={accessLink}
                        className="flex-grow h-10 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      />
                      <Button 
                        variant="outline" 
                        className="ml-2"
                        onClick={handleCopyLink}
                      >
                        {isCopied ? 'Copied!' : 'Copy'}
                      </Button>
                    </div>
                    
                    <div className="mt-4">
                      <Button 
                        className="w-full"
                        onClick={handleSendEmail}
                      >
                        Send Link to User
                      </Button>
                    </div>
                  </div>
                ) : (
                  <div className="mt-4">
                    <Button 
                      className="w-full"
                      onClick={handleGenerateLink}
                      disabled={isGenerating}
                    >
                      {isGenerating ? 'Generating...' : 'Generate Secure Link'}
                    </Button>
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
            <Button variant="outline" onClick={onClose}>
              Close
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecureAccessLinkModal;
