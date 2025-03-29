
import { Routes, Route } from 'react-router-dom';
import AdminLayout from './layouts/AdminLayout';
import Dashboard from './pages/Dashboard';
import UserManagement from './pages/UserManagement';
import SystemConfiguration from './pages/SystemConfiguration';
import FeatureFlags from './pages/FeatureFlags';
import AccessRequests from './pages/AccessRequests';
import AuditLogs from './pages/AuditLogs';

function App() {
  return (
    <Routes>
      <Route path="/" element={<AdminLayout />}>
        <Route index element={<Dashboard />} />
        <Route path="users" element={<UserManagement />} />
        <Route path="system-config" element={<SystemConfiguration />} />
        <Route path="feature-flags" element={<FeatureFlags />} />
        <Route path="access-requests" element={<AccessRequests />} />
        <Route path="audit-logs" element={<AuditLogs />} />
      </Route>
    </Routes>
  );
}

export default App;
