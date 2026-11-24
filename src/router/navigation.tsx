import type { ReactNode } from 'react'
import {
  AppstoreOutlined,
  BarChartOutlined,
  BellOutlined,
  BookOutlined,
  CalendarOutlined,
  CheckSquareOutlined,
  DollarOutlined,
  FundOutlined,
  HomeOutlined,
  SettingOutlined,
  UserOutlined,
  WalletOutlined,
} from '@ant-design/icons'
import type { MenuProps } from 'antd'

export interface NavigationNode {
  key: string
  label: string
  icon?: ReactNode
  children?: NavigationNode[]
}

export const navigationTree: NavigationNode[] = [
  {
    key: '/',
    label: '首页',
    icon: <HomeOutlined />,
  },
  {
    key: '/tasks',
    label: '任务管理',
    icon: <CheckSquareOutlined />,
  },
  {
    key: '/schedule',
    label: '日程安排',
    icon: <CalendarOutlined />,
  },
  {
    key: '/finance',
    label: '财务管理',
    icon: <WalletOutlined />,
    children: [
      {
        key: '/finance/transactions',
        label: '收支',
        icon: <DollarOutlined />,
      },
      {
        key: '/finance/budget',
        label: '预算',
        icon: <WalletOutlined />,
      },
      {
        key: '/finance/investments',
        label: '投资',
        icon: <FundOutlined />,
      },
    ],
  },
  {
    key: '/statistics',
    label: '统计分析',
    icon: <BarChartOutlined />,
    children: [
      {
        key: '/statistics/consumption',
        label: '消费统计',
        icon: <BarChartOutlined />,
      },
      {
        key: '/statistics/tasks',
        label: '任务统计',
        icon: <CheckSquareOutlined />,
      },
    ],
  },
  {
    key: '/common',
    label: '通用',
    icon: <AppstoreOutlined />,
    children: [
      {
        key: '/common/dictionary',
        label: '字典管理',
        icon: <BookOutlined />,
      },
    ],
  },
  {
    key: '/settings',
    label: '系统设置',
    icon: <SettingOutlined />,
    children: [
      {
        key: '/settings/profile',
        label: '个人信息',
        icon: <UserOutlined />,
      },
      {
        key: '/settings/notifications',
        label: '通知渠道绑定',
        icon: <BellOutlined />,
      },
      {
        key: '/settings/parameters',
        label: '参数设置',
        icon: <SettingOutlined />,
      },
    ],
  },
]

const toMenuItem = (node: NavigationNode): NonNullable<MenuProps['items']>[number] => ({
  key: node.key,
  icon: node.icon,
  label: node.label,
  children: node.children?.map(toMenuItem),
})

export const menuItems: MenuProps['items'] = navigationTree.map(toMenuItem)

export const parentMenuKeys = navigationTree
  .filter((node) => node.children?.length)
  .map((node) => node.key)

export function findParentMenuKeys(pathname: string): string[] {
  const walk = (
    nodes: NavigationNode[],
    parents: string[] = [],
  ): string[] | undefined => {
    for (const node of nodes) {
      if (node.key === pathname) {
        return parents
      }

      const childPath =
        node.children && walk(node.children, [...parents, node.key])

      if (childPath) {
        return childPath
      }
    }

    return undefined
  }

  return walk(navigationTree) ?? []
}

export function findNavigationPath(pathname: string): string[] {
  const walk = (
    nodes: NavigationNode[],
    parents: string[] = [],
  ): string[] | undefined => {
    for (const node of nodes) {
      const currentPath = [...parents, node.label]

      if (node.key === pathname) {
        return currentPath
      }

      const childPath = node.children && walk(node.children, currentPath)

      if (childPath) {
        return childPath
      }
    }

    return undefined
  }

  return walk(navigationTree) ?? ['页面不存在']
}
