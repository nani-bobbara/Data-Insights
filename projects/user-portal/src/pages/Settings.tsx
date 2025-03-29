
import { useState } from 'react';
import { Button, Input, Card } from '@datainsight/ui-components';

const Settings = () => {
  const [activeTab, setActiveTab] = useState('profile');

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Settings</h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <div>
          <Card className="bg-white">
            <nav className="p-4">
              <ul className="space-y-1">
                <li>
                  <button
                    className={`w-full text-left px-4 py-2 rounded-md ${
                      activeTab === 'profile' ? 'bg-primary text-white' : 'hover:bg-gray-100'
                    }`}
                    onClick={() => setActiveTab('profile')}
                  >
                    Profile
                  </button>
                </li>
                <li>
                  <button
                    className={`w-full text-left px-4 py-2 rounded-md ${
                      activeTab === 'account' ? 'bg-primary text-white' : 'hover:bg-gray-100'
                    }`}
                    onClick={() => setActiveTab('account')}
                  >
                    Account
                  </button>
                </li>
                <li>
                  <button
                    className={`w-full text-left px-4 py-2 rounded-md ${
                      activeTab === 'notifications' ? 'bg-primary text-white' : 'hover:bg-gray-100'
                    }`}
                    onClick={() => setActiveTab('notifications')}
                  >
                    Notifications
                  </button>
                </li>
                <li>
                  <button
                    className={`w-full text-left px-4 py-2 rounded-md ${
                      activeTab === 'appearance' ? 'bg-primary text-white' : 'hover:bg-gray-100'
                    }`}
                    onClick={() => setActiveTab('appearance')}
                  >
                    Appearance
                  </button>
                </li>
                <li>
                  <button
                    className={`w-full text-left px-4 py-2 rounded-md ${
                      activeTab === 'integrations' ? 'bg-primary text-white' : 'hover:bg-gray-100'
                    }`}
                    onClick={() => setActiveTab('integrations')}
                  >
                    Integrations
                  </button>
                </li>
                <li>
                  <button
                    className={`w-full text-left px-4 py-2 rounded-md ${
                      activeTab === 'billing' ? 'bg-primary text-white' : 'hover:bg-gray-100'
                    }`}
                    onClick={() => setActiveTab('billing')}
                  >
                    Billing
                  </button>
                </li>
              </ul>
            </nav>
          </Card>
        </div>

        <div className="lg:col-span-3">
          {activeTab === 'profile' && (
            <Card className="bg-white">
              <div className="p-6">
                <h2 className="text-lg font-semibold mb-4">Profile Settings</h2>
                <div className="space-y-6">
                  <div className="flex items-center">
                    <div className="w-20 h-20 bg-gray-200 rounded-full mr-6"></div>
                    <div>
                      <h3 className="font-medium mb-2">Profile Photo</h3>
                      <div className="flex space-x-2">
                        <Button variant="outline" size="sm">
                          Upload
                        </Button>
                        <Button variant="outline" size="sm">
                          Remove
                        </Button>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Input
                      label="First Name"
                      defaultValue="John"
                    />
                    <Input
                      label="Last Name"
                      defaultValue="Doe"
                    />
                    <Input
                      label="Email"
                      type="email"
                      defaultValue="john.doe@example.com"
                    />
                    <Input
                      label="Phone"
                      type="tel"
                      defaultValue="(555) 123-4567"
                    />
                    <div className="md:col-span-2">
                      <label className="text-sm font-medium leading-none mb-2 block">
                        Bio
                      </label>
                      <textarea
                        className="flex w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        rows={4}
                        defaultValue="Data analyst with 5+ years of experience in business intelligence and data visualization."
                      ></textarea>
                    </div>
                  </div>

                  <div className="border-t border-gray-200 pt-6">
                    <h3 className="font-medium mb-4">Company Information</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <Input
                        label="Company Name"
                        defaultValue="Acme Inc."
                      />
                      <Input
                        label="Job Title"
                        defaultValue="Senior Data Analyst"
                      />
                      <Input
                        label="Department"
                        defaultValue="Business Intelligence"
                      />
                      <Input
                        label="Location"
                        defaultValue="New York, NY"
                      />
                    </div>
                  </div>

                  <div className="flex justify-end space-x-3">
                    <Button variant="outline">Cancel</Button>
                    <Button>Save Changes</Button>
                  </div>
                </div>
              </div>
            </Card>
          )}

          {activeTab === 'account' && (
            <Card className="bg-white">
              <div className="p-6">
                <h2 className="text-lg font-semibold mb-4">Account Settings</h2>
                <div className="space-y-6">
                  <div className="border-b border-gray-200 pb-6">
                    <h3 className="font-medium mb-4">Change Password</h3>
                    <div className="space-y-4">
                      <Input
                        label="Current Password"
                        type="password"
                      />
                      <Input
                        label="New Password"
                        type="password"
                      />
                      <Input
                        label="Confirm New Password"
                        type="password"
                      />
                      <div className="flex justify-end">
                        <Button>Update Password</Button>
                      </div>
                    </div>
                  </div>

                  <div className="border-b border-gray-200 pb-6">
                    <h3 className="font-medium mb-4">Two-Factor Authentication</h3>
                    <p className="text-sm text-gray-500 mb-4">
                      Add an extra layer of security to your account by enabling two-factor authentication.
                    </p>
                    <Button variant="outline">Enable 2FA</Button>
                  </div>

                  <div className="border-b border-gray-200 pb-6">
                    <h3 className="font-medium mb-4">Sessions</h3>
                    <p className="text-sm text-gray-500 mb-4">
                      These are the devices that are currently logged into your account.
                    </p>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center p-3 bg-gray-50 rounded-md">
                        <div>
                          <p className="text-sm font-medium">MacBook Pro - Chrome</p>
                          <p className="text-xs text-gray-500">New York, USA - Current Session</p>
                        </div>
                        <Button variant="outline" size="sm">This Device</Button>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-gray-50 rounded-md">
                        <div>
                          <p className="text-sm font-medium">iPhone 13 - Safari</p>
                          <p className="text-xs text-gray-500">New York, USA - Last active: 2 hours ago</p>
                        </div>
                        <Button variant="outline" size="sm">Log Out</Button>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="font-medium mb-4 text-red-500">Danger Zone</h3>
                    <div className="flex items-center justify-between p-4 border border-red-200 rounded-md bg-red-50">
                      <div>
                        <p className="text-sm font-medium">Delete Account</p>
                        <p className="text-xs text-gray-500">
                          Permanently delete your account and all of your data.
                        </p>
                      </div>
                      <Button variant="outline" className="text-red-500 border-red-500 hover:bg-red-50">
                        Delete Account
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          )}

          {activeTab === 'notifications' && (
            <Card className="bg-white">
              <div className="p-6">
                <h2 className="text-lg font-semibold mb-4">Notification Settings</h2>
                <div className="space-y-6">
                  <div className="border-b border-gray-200 pb-6">
                    <h3 className="font-medium mb-4">Email Notifications</h3>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm font-medium">Report Completion</p>
                          <p className="text-xs text-gray-500">Get notified when a report is ready</p>
                        </div>
                        <div className="relative inline-block w-10 mr-2 align-middle select-none">
                          <input type="checkbox" id="report-complete" defaultChecked className="sr-only" />
                          <label
                            htmlFor="report-complete"
                            className="block h-6 overflow-hidden bg-gray-300 rounded-full cursor-pointer"
                          >
                            <span className="block h-6 w-6 rounded-full bg-white transform translate-x-0 transition-transform duration-200 ease-in-out"></span>
                          </label>
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm font-medium">Data Upload Status</p>
                          <p className="text-xs text-gray-500">Get notified about file processing status</p>
                        </div>
                        <div className="relative inline-block w-10 mr-2 align-middle select-none">
                          <input type="checkbox" id="upload-status" defaultChecked className="sr-only" />
                          <label
                            htmlFor="upload-status"
                            className="block h-6 overflow-hidden bg-gray-300 rounded-full cursor-pointer"
                          >
                            <span className="block h-6 w-6 rounded-full bg-white transform translate-x-0 transition-transform duration-200 ease-in-out"></span>
                          </label>
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm font-medium">AI Insights</p>
                          <p className="text-xs text-gray-500">Get notified when AI finds important patterns</p>
                        </div>
                        <div className="relative inline-block w-10 mr-2 align-middle select-none">
                          <input type="checkbox" id="ai-insights" defaultChecked className="sr-only" />
                          <label
                            htmlFor="ai-insights"
                            className="block h-6 overflow-hidden bg-gray-300 rounded-full cursor-pointer"
                          >
                            <span className="block h-6 w-6 rounded-full bg-white transform translate-x-0 transition-transform duration-200 ease-in-out"></span>
                          </label>
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm font-medium">Team Activity</p>
                          <p className="text-xs text-gray-500">Get notified about team members' actions</p>
                        </div>
                        <div className="relative inline-block w-10 mr-2 align-middle select-none">
                          <input type="checkbox" id="team-activity" className="sr-only" />
                          <label
                            htmlFor="team-activity"
                            className="block h-6 overflow-hidden bg-gray-300 rounded-full cursor-pointer"
                          >
                            <span className="block h-6 w-6 rounded-full bg-white transform translate-x-0 transition-transform duration-200 ease-in-out"></span>
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="font-medium mb-4">Scheduled Reports</h3>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm font-medium">Weekly Summaries</p>
                          <p className="text-xs text-gray-500">Receive weekly performance summaries</p>
                        </div>
                        <div className="relative inline-block w-10 mr-2 align-middle select-none">
                          <input type="checkbox" id="weekly-summary" defaultChecked className="sr-only" />
                          <label
                            htmlFor="weekly-summary"
                            className="block h-6 overflow-hidden bg-gray-300 rounded-full cursor-pointer"
                          >
                            <span className="block h-6 w-6 rounded-full bg-white transform translate-x-0 transition-transform duration-200 ease-in-out"></span>
                          </label>
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm font-medium">Monthly Reports</p>
                          <p className="text-xs text-gray-500">Receive monthly performance reports</p>
                        </div>
                        <div className="relative inline-block w-10 mr-2 align-middle select-none">
                          <input type="checkbox" id="monthly-report" defaultChecked className="sr-only" />
                          <label
                            htmlFor="monthly-report"
                            className="block h-6 overflow-hidden bg-gray-300 rounded-full cursor-pointer"
                          >
                            <span className="block h-6 w-6 rounded-full bg-white transform translate-x-0 transition-transform duration-200 ease-in-out"></span>
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-end space-x-3">
                    <Button variant="outline">Reset to Default</Button>
                    <Button>Save Changes</Button>
                  </div>
                </div>
              </div>
            </Card>
          )}

          {activeTab === 'appearance' && (
            <Card className="bg-white">
              <div className="p-6">
                <h2 className="text-lg font-semibold mb-4">Appearance Settings</h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="font-medium mb-4">Theme</h3>
                    <div className="grid grid-cols-3 gap-4">
                      <div className="border border-primary rounded-md p-3 text-center cursor-pointer bg-primary/5">
                        <div className="h-12 bg-white border border-gray-200 rounded mb-2"></div>
                        <p className="text-sm font-medium">Light</p>
                      </div>
                      <div className="border border-gray-200 rounded-md p-3 text-center cursor-pointer hover:border-primary hover:bg-primary/5 transition-colors">
                        <div className="h-12 bg-gray-900 rounded mb-2"></div>
                        <p className="text-sm font-medium">Dark</p>
                      </div>
                      <div className="border border-gray-200 rounded-md p-3 text-center cursor-pointer hover:border-primary hover:bg-primary/5 transition-colors">
                        <div className="h-12 bg-gradient-to-r from-white to-gray-900 rounded mb-2"></div>
                        <p className="text-sm font-medium">System</p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="font-medium mb-4">Dashboard Layout</h3>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="border border-primary rounded-md p-3 text-center cursor-pointer bg-primary/5">
                        <div className="h-24 border border-gray-200 rounded mb-2 flex">
                          <div className="w-1/5 bg-gray-100"></div>
                          <div className="w-4/5 p-2">
                            <div className="h-4 bg-gray-100 rounded mb-2"></div>
                            <div className="h-12 bg-gray-100 rounded"></div>
                          </div>
                        </div>
                        <p className="text-sm font-medium">Sidebar</p>
                      </div>
                      <div className="border border-gray-200 rounded-md p-3 text-center cursor-pointer hover:border-primary hover:bg-primary/5 transition-colors">
                        <div className="h-24 border border-gray-200 rounded mb-2">
                          <div className="h-8 bg-gray-100"></div>
                          <div className="p-2">
                            <div className="h-12 bg-gray-100 rounded"></div>
                          </div>
                        </div>
                        <p className="text-sm font-medium">Top Navigation</p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="font-medium mb-4">Chart Colors</h3>
                    <div className="grid grid-cols-3 gap-4">
                      <div className="border border-primary rounded-md p-3 text-center cursor-pointer bg-primary/5">
                        <div className="h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded mb-2"></div>
                        <p className="text-sm font-medium">Blue/Purple</p>
                      </div>
                      <div className="border border-gray-200 rounded-md p-3 text-center cursor-pointer hover:border-primary hover:bg-primary/5 transition-colors">
                        <div className="h-12 bg-gradient-to-r from-green-500 to-teal-600 rounded mb-2"></div>
                        <p className="text-sm font-medium">Green/Teal</p>
                      </div>
                      <div className="border border-gray-200 rounded-md p-3 text-center cursor-pointer hover:border-primary hover:bg-primary/5 transition-colors">
                        <div className="h-12 bg-gradient-to-r from-orange-500 to-red-600 rounded mb-2"></div>
                        <p className="text-sm font-medium">Orange/Red</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-end space-x-3">
                    <Button variant="outline">Reset to Default</Button>
                    <Button>Save Changes</Button>
                  </div>
                </div>
              </div>
            </Card>
          )}

          {activeTab === 'integrations' && (
            <Card className="bg-white">
              <div className="p-6">
                <h2 className="text-lg font-semibold mb-4">Integrations</h2>
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="border border-gray-200 rounded-md p-4">
                      <div className="flex justify-between items-center mb-4">
                        <div className="flex items-center">
                          <div className="w-10 h-10 bg-blue-100 rounded-md flex items-center justify-center mr-3">
                            <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"></path>
                            </svg>
                          </div>
                          <div>
                            <p className="font-medium">Google Analytics</p>
                            <p className="text-xs text-gray-500">Connect your GA account</p>
                          </div>
                        </div>
                        <Button variant="outline" size="sm">Connect</Button>
                      </div>
                      <p className="text-sm text-gray-500">Import website traffic and user behavior data from Google Analytics.</p>
                    </div>
                    <div className="border border-gray-200 rounded-md p-4">
                      <div className="flex justify-between items-center mb-4">
                        <div className="flex items-center">
                          <div className="w-10 h-10 bg-blue-100 rounded-md flex items-center justify-center mr-3">
                            <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"></path>
                            </svg>
                          </div>
                          <div>
                            <p className="font-medium">Salesforce</p>
                            <p className="text-xs text-green-500">Connected</p>
                          </div>
                        </div>
                        <Button variant="outline" size="sm">Disconnect</Button>
                      </div>
                      <p className="text-sm text-gray-500">Import CRM data, leads, and customer information from Salesforce.</p>
                    </div>
                    <div className="border border-gray-200 rounded-md p-4">
                      <div className="flex justify-between items-center mb-4">
                        <div className="flex items-center">
                          <div className="w-10 h-10 bg-blue-100 rounded-md flex items-center justify-center mr-3">
                            <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                            </svg>
                          </div>
                          <div>
                            <p className="font-medium">Mailchimp</p>
                            <p className="text-xs text-gray-500">Connect your account</p>
                          </div>
                        </div>
                        <Button variant="outline" size="sm">Connect</Button>
                      </div>
                      <p className="text-sm text-gray-500">Import email campaign data and subscriber metrics from Mailchimp.</p>
                    </div>
                    <div className="border border-gray-200 rounded-md p-4">
                      <div className="flex justify-between items-center mb-4">
                        <div className="flex items-center">
                          <div className="w-10 h-10 bg-blue-100 rounded-md flex items-center justify-center mr-3">
                            <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"></path>
                            </svg>
                          </div>
                          <div>
                            <p className="font-medium">Shopify</p>
                            <p className="text-xs text-gray-500">Connect your store</p>
                          </div>
                        </div>
                        <Button variant="outline" size="sm">Connect</Button>
                      </div>
                      <p className="text-sm text-gray-500">Import product, sales, and customer data from your Shopify store.</p>
                    </div>
                  </div>

                  <div className="border-t border-gray-200 pt-6">
                    <h3 className="font-medium mb-4">API Access</h3>
                    <div className="bg-gray-50 p-4 rounded-md mb-4">
                      <div className="flex justify-between items-center mb-2">
                        <p className="font-medium">API Key</p>
                        <Button variant="outline" size="sm">Generate New Key</Button>
                      </div>
                      <div className="flex">
                        <Input
                          value="sk_live_51Jg6RiHK8qQ5FrPsN0XmUgQjs8Xs49MfNUe..."
                          className="font-mono text-sm"
                          readOnly
                        />
                        <Button variant="outline" className="ml-2">
                          Copy
                        </Button>
                      </div>
                      <p className="text-xs text-gray-500 mt-2">
                        This API key provides full access to your account. Keep it secure!
                      </p>
                    </div>
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="font-medium">API Documentation</p>
                        <p className="text-sm text-gray-500">
                          View our API documentation to learn how to integrate with our platform.
                        </p>
                      </div>
                      <Button variant="outline">View Docs</Button>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          )}

          {activeTab === 'billing' && (
            <Card className="bg-white">
              <div className="p-6">
                <h2 className="text-lg font-semibold mb-4">Billing Settings</h2>
                <div className="space-y-6">
                  <div className="bg-primary/5 border border-primary/20 rounded-md p-4">
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="font-medium">Professional Plan</p>
                        <p className="text-sm text-gray-500">$149/month, billed monthly</p>
                      </div>
                      <Button variant="outline" size="sm">Upgrade Plan</Button>
                    </div>
                    <div className="mt-4">
                      <p className="text-sm mb-2">Current Usage:</p>
                      <div className="space-y-2">
                        <div className="flex justify-between items-center">
                          <p className="text-xs">Storage: 2.5GB / 5GB</p>
                          <div className="w-32 h-2 bg-gray-200 rounded-full overflow-hidden">
                            <div className="bg-primary h-full" style={{ width: '50%' }}></div>
                          </div>
                        </div>
                        <div className="flex justify-between items-center">
                          <p className="text-xs">Users: 7 / 10</p>
                          <div className="w-32 h-2 bg-gray-200 rounded-full overflow-hidden">
                            <div className="bg-primary h-full" style={{ width: '70%' }}></div>
                          </div>
                        </div>
                        <div className="flex justify-between items-center">
                          <p className="text-xs">API Calls: 8,453 / 10,000</p>
                          <div className="w-32 h-2 bg-gray-200 rounded-full overflow-hidden">
                            <div className="bg-primary h-full" style={{ width: '85%' }}></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="font-medium mb-4">Payment Method</h3>
                    <div className="border border-gray-200 rounded-md p-4 mb-4">
                      <div className="flex justify-between items-center">
                        <div className="flex items-center">
                          <div className="w-10 h-6 bg-blue-100 rounded mr-3"></div>
                          <div>
                            <p className="font-medium">Visa ending in 4242</p>
                            <p className="text-xs text-gray-500">Expires 12/24</p>
                          </div>
                        </div>
                        <div className="flex space-x-2">
                          <Button variant="outline" size="sm">Edit</Button>
                          <Button variant="outline" size="sm">Remove</Button>
                        </div>
                      </div>
                    </div>
                    <Button variant="outline">Add Payment Method</Button>
                  </div>

                  <div>
                    <h3 className="font-medium mb-4">Billing History</h3>
                    <div className="overflow-x-auto">
                      <table className="min-w-full">
                        <thead className="bg-gray-50">
                          <tr>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                              Date
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                              Description
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                              Amount
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                              Status
                            </th>
                            <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                              Invoice
                            </th>
                          </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                          <tr>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              June 1, 2023
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm">
                              Professional Plan - Monthly
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm">
                              $149.00
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <span className="px-2 py-1 text-xs font-medium bg-green-100 text-green-800 rounded-full">
                                Paid
                              </span>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                              <Button variant="outline" size="sm">Download</Button>
                            </td>
                          </tr>
                          <tr>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              May 1, 2023
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm">
                              Professional Plan - Monthly
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm">
                              $149.00
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <span className="px-2 py-1 text-xs font-medium bg-green-100 text-green-800 rounded-full">
                                Paid
                              </span>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                              <Button variant="outline" size="sm">Download</Button>
                            </td>
                          </tr>
                          <tr>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              April 1, 2023
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm">
                              Professional Plan - Monthly
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm">
                              $149.00
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <span className="px-2 py-1 text-xs font-medium bg-green-100 text-green-800 rounded-full">
                                Paid
                              </span>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                              <Button variant="outline" size="sm">Download</Button>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
};

export default Settings;
