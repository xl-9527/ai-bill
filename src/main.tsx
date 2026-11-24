import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ConfigProvider } from 'antd'
import zhCN from 'antd/locale/zh_CN'
import App from './App'
import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ConfigProvider
      locale={zhCN}
      theme={{
        token: {
          colorPrimary: '#0960bd',
          colorInfo: '#0960bd',
          colorLink: '#0960bd',
          colorTextBase: '#1f2329',
          colorBgLayout: '#f5f7fa',
          borderRadius: 6,
          controlHeight: 34,
          fontFamily:
            "Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'PingFang SC', 'Microsoft YaHei', sans-serif",
        },
        components: {
          Layout: {
            siderBg: '#f7f8fa',
            headerBg: '#ffffff',
            headerHeight: 48,
            headerPadding: '0 16px',
          },
          Menu: {
            itemBg: 'transparent',
            itemColor: '#4b5563',
            itemHoverBg: 'rgba(9, 96, 189, 0.08)',
            itemSelectedBg: 'rgba(9, 96, 189, 0.12)',
            itemSelectedColor: '#0960bd',
            subMenuItemBg: 'transparent',
            itemBorderRadius: 6,
            itemMarginInline: 8,
          },
        },
      }}
    >
      <App />
    </ConfigProvider>
  </StrictMode>,
)
