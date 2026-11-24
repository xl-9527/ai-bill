import { Button, Card, List, Switch, Tag } from 'antd'
import PageHeader from '../../../components/PageHeader'

const channels = [
  {
    title: '邮件通知',
    description: '用于接收账单汇总、预算预警和系统通知',
    status: '已绑定',
    enabled: true,
  },
  {
    title: '企业微信',
    description: '用于接收任务提醒和日程提醒',
    status: '未绑定',
    enabled: false,
  },
  {
    title: 'Webhook',
    description: '向自定义服务推送系统事件',
    status: '未绑定',
    enabled: false,
  },
]

function NotificationChannelsPage() {
  return (
    <div className="page-container">
      <PageHeader
        title="通知渠道绑定"
        description="绑定邮件、企业微信或 Webhook，用于接收任务与预算提醒。"
      />
      <Card>
        <List
          dataSource={channels}
          renderItem={(item) => (
            <List.Item
              actions={[
                <Switch key="switch" defaultChecked={item.enabled} />,
                <Button key="bind" type={item.enabled ? 'default' : 'primary'}>
                  {item.enabled ? '重新绑定' : '立即绑定'}
                </Button>,
              ]}
            >
              <List.Item.Meta
                title={
                  <span>
                    {item.title}{' '}
                    <Tag color={item.enabled ? 'green' : 'default'}>{item.status}</Tag>
                  </span>
                }
                description={item.description}
              />
            </List.Item>
          )}
        />
      </Card>
    </div>
  )
}

export default NotificationChannelsPage
