import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AdminLayout from './layouts/AdminLayout'
import DictionaryPage from './views/common/dictionary'
import DashboardPage from './views/dashboard'
import BudgetPage from './views/finance/budget'
import InvestmentsPage from './views/finance/investments'
import TransactionsPage from './views/finance/transactions'
import NotFoundPage from './views/not-found'
import SchedulePage from './views/schedule'
import NotificationChannelsPage from './views/settings/notifications'
import ParametersPage from './views/settings/parameters'
import SettingsProfilePage from './views/settings/profile'
import ConsumptionStatsPage from './views/statistics/consumption'
import TaskStatsPage from './views/statistics/tasks'
import TasksPage from './views/tasks'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AdminLayout />}>
          <Route index element={<DashboardPage />} />
          <Route path="tasks" element={<TasksPage />} />
          <Route path="schedule" element={<SchedulePage />} />
          <Route path="finance/transactions" element={<TransactionsPage />} />
          <Route path="finance/budget" element={<BudgetPage />} />
          <Route path="finance/investments" element={<InvestmentsPage />} />
          <Route path="statistics/consumption" element={<ConsumptionStatsPage />} />
          <Route path="statistics/tasks" element={<TaskStatsPage />} />
          <Route path="common/dictionary" element={<DictionaryPage />} />
          <Route path="settings/profile" element={<SettingsProfilePage />} />
          <Route path="settings/notifications" element={<NotificationChannelsPage />} />
          <Route path="settings/parameters" element={<ParametersPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
