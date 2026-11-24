import { useEffect, useState } from 'react'
import {
  AppstoreOutlined,
  BellOutlined,
  BulbOutlined,
  CloseOutlined,
  FullscreenOutlined,
  HomeOutlined,
  LockOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  RocketOutlined,
  SearchOutlined,
  SettingOutlined,
} from '@ant-design/icons'
import {
  Avatar,
  Badge,
  Breadcrumb,
  Button,
  Input,
  Layout,
  Menu,
  Space,
  Tooltip,
} from 'antd'
import { Outlet, useLocation, useNavigate } from 'react-router-dom'
import RouteProgress from '../components/RouteProgress'
import {
  findNavigationPath,
  findParentMenuKeys,
  menuItems,
} from '../router/navigation'

const { Content, Footer, Header, Sider } = Layout

interface TabItem {
  key: string
  title: string
  closable: boolean
}

const homeTab: TabItem = {
  key: '/',
  title: '首页',
  closable: false,
}

const railItems = [
  { key: '/', label: '首页', icon: <HomeOutlined /> },
  { key: '/tasks', label: '任务', icon: <AppstoreOutlined /> },
  { key: '/finance/transactions', label: '财务', icon: <AppstoreOutlined /> },
  { key: '/statistics/consumption', label: '统计', icon: <AppstoreOutlined /> },
  { key: '/settings/parameters', label: '设置', icon: <SettingOutlined /> },
]

function AdminLayout() {
  const [collapsed, setCollapsed] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()
  const navigationPath = findNavigationPath(location.pathname)
  const breadcrumbItems = navigationPath.map((title) => ({ title }))
  const currentTitle = navigationPath[navigationPath.length - 1] ?? '首页'
  const [openKeys, setOpenKeys] = useState<string[]>(() =>
    findParentMenuKeys(location.pathname),
  )
  const [tabs, setTabs] = useState<TabItem[]>(() => {
    if (location.pathname === '/') {
      return [homeTab]
    }

    return [
      homeTab,
      {
        key: location.pathname,
        title: currentTitle,
        closable: true,
      },
    ]
  })

  useEffect(() => {
    const activeParentKeys = findParentMenuKeys(location.pathname)

    setOpenKeys((previousKeys) => {
      const missingKeys = activeParentKeys.filter(
        (key) => !previousKeys.includes(key),
      )

      return missingKeys.length > 0
        ? [...previousKeys, ...missingKeys]
        : previousKeys
    })
  }, [location.pathname])

  useEffect(() => {
    setTabs((previousTabs) => {
      if (previousTabs.some((tab) => tab.key === location.pathname)) {
        return previousTabs
      }

      if (location.pathname === '/') {
        return previousTabs.some((tab) => tab.key === '/')
          ? previousTabs
          : [homeTab, ...previousTabs]
      }

      return [
        ...previousTabs,
        {
          key: location.pathname,
          title: currentTitle,
          closable: true,
        },
      ]
    })
  }, [currentTitle, location.pathname])

  const closeTab = (key: string) => {
    const closingIndex = tabs.findIndex((tab) => tab.key === key)
    const nextTabs = tabs.filter((tab) => tab.key !== key)
    setTabs(nextTabs)

    if (key === location.pathname) {
      const nextTab = nextTabs[closingIndex - 1] ?? nextTabs[0] ?? homeTab
      navigate(nextTab.key)
    }
  }

  const isRailActive = (key: string) => {
    if (key === '/') {
      return location.pathname === '/'
    }

    return location.pathname.startsWith(key.split('/').slice(0, 2).join('/'))
  }

  return (
    <Layout className="admin-layout">
      <RouteProgress />
      <aside className="admin-icon-rail" aria-label="快捷工具栏">
        {railItems.map((item) => (
          <Tooltip key={item.key} placement="right" title={item.label}>
            <button
              className={`rail-button${isRailActive(item.key) ? ' active' : ''}`}
              type="button"
              onClick={() => navigate(item.key)}
            >
              {item.icon}
            </button>
          </Tooltip>
        ))}
      </aside>

      <Sider
        className="admin-sider"
        breakpoint="lg"
        collapsed={collapsed}
        collapsedWidth={0}
        collapsible
        onBreakpoint={setCollapsed}
        trigger={null}
        width={210}
      >
        <button className="admin-logo" type="button" onClick={() => navigate('/')}>
          <span className="admin-logo-icon">
            <RocketOutlined />
          </span>
          <span className="admin-logo-text">个人生活 ERP</span>
        </button>
        <Menu
          className="admin-menu"
          items={menuItems}
          mode="inline"
          onClick={({ key }) => navigate(key)}
          onOpenChange={(keys) => setOpenKeys(keys.map(String))}
          openKeys={collapsed ? [] : openKeys}
          selectedKeys={[location.pathname]}
          theme="light"
        />
      </Sider>

      <Layout className="admin-main">
        <Header className="admin-header">
          <Space className="header-left" size={12}>
            <Button
              aria-label={collapsed ? '展开菜单' : '折叠菜单'}
              icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
              onClick={() => setCollapsed(!collapsed)}
              type="text"
            />
            <Breadcrumb items={breadcrumbItems} />
          </Space>

          <Input
            allowClear
            className="admin-search"
            placeholder="搜索  ⌘ K"
            prefix={<SearchOutlined />}
          />

          <Space className="header-actions" size={4}>
            <Tooltip title="偏好设置">
              <Button icon={<SettingOutlined />} type="text" />
            </Tooltip>
            <Tooltip title="主题模式">
              <Button icon={<BulbOutlined />} type="text" />
            </Tooltip>
            <Tooltip title="锁定屏幕">
              <Button icon={<LockOutlined />} type="text" />
            </Tooltip>
            <Tooltip title="全屏">
              <Button icon={<FullscreenOutlined />} type="text" />
            </Tooltip>
            <Badge count={3} size="small">
              <Button aria-label="通知" icon={<BellOutlined />} type="text" />
            </Badge>
            <Avatar className="admin-avatar" size={32}>
              我
            </Avatar>
          </Space>
        </Header>

        <div className="admin-tabs" role="tablist">
          {tabs.map((tab) => (
            <div
              aria-selected={location.pathname === tab.key}
              className={`admin-tab${location.pathname === tab.key ? ' active' : ''}`}
              key={tab.key}
              role="tab"
              tabIndex={0}
              onClick={() => navigate(tab.key)}
              onKeyDown={(event) => {
                if (event.key === 'Enter') {
                  navigate(tab.key)
                }
              }}
            >
              {tab.key === '/' && <HomeOutlined />}
              <span>{tab.title}</span>
              {tab.closable && (
                <CloseOutlined
                  className="admin-tab-close"
                  onClick={(event) => {
                    event.stopPropagation()
                    closeTab(tab.key)
                  }}
                />
              )}
            </div>
          ))}
        </div>

        <Content className="admin-content">
          <div className="route-transition" key={location.pathname}>
            <Outlet />
          </div>
        </Content>

        <Footer className="admin-footer">
          Personal Life ERP · React + TypeScript
        </Footer>
      </Layout>
    </Layout>
  )
}

export default AdminLayout
