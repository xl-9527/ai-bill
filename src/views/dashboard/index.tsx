import {
  CalendarOutlined,
  CheckCircleOutlined,
  DollarOutlined,
  RiseOutlined,
} from '@ant-design/icons'
import {
  Card,
  Col,
  List,
  Progress,
  Row,
  Space,
  Statistic,
  Tag,
  Typography,
} from 'antd'
import { Link } from 'react-router-dom'
import PageHeader from '../../components/PageHeader'

const { Paragraph, Title } = Typography

const quickLinks = [
  {
    title: '记录收支',
    description: '快速登记收入、支出与账户流水',
    path: '/finance/transactions',
  },
  {
    title: '创建任务',
    description: '管理待办事项、优先级与完成状态',
    path: '/tasks',
  },
  {
    title: '安排日程',
    description: '维护日历事件、提醒与重复计划',
    path: '/schedule',
  },
]

function DashboardPage() {
  return (
    <div className="page-container">
      <PageHeader
        title="首页"
        description="汇总个人任务、财务和日程状态，快速进入常用功能。"
        extra={<Tag color="green">今日已同步</Tag>}
      />

      <Row gutter={[16, 16]}>
        <Col xs={24} sm={12} xl={6}>
          <Card>
            <Statistic
              prefix={<CheckCircleOutlined />}
              title="今日任务"
              value={8}
              suffix="项"
            />
          </Card>
        </Col>
        <Col xs={24} sm={12} xl={6}>
          <Card>
            <Statistic
              prefix={<DollarOutlined />}
              precision={2}
              title="本月支出"
              value={4280}
              suffix="元"
            />
          </Card>
        </Col>
        <Col xs={24} sm={12} xl={6}>
          <Card>
            <Statistic
              prefix={<CalendarOutlined />}
              title="本周日程"
              value={12}
              suffix="个"
            />
          </Card>
        </Col>
        <Col xs={24} sm={12} xl={6}>
          <Card>
            <Statistic
              prefix={<RiseOutlined />}
              precision={2}
              suffix="%"
              title="投资收益"
              value={5.2}
              valueStyle={{ color: '#cf1322' }}
            />
          </Card>
        </Col>
      </Row>

      <Row className="dashboard-section" gutter={[16, 16]}>
        <Col xs={24} lg={10}>
          <Card title="任务完成率">
            <div className="progress-panel">
              <Progress
                percent={76}
                size={168}
                strokeColor="#0960bd"
                type="dashboard"
              />
              <div>
                <Title level={4}>保持当前节奏</Title>
                <Paragraph type="secondary">
                  本周已完成 19 项任务，预计还可提前完成 3 项。
                </Paragraph>
              </div>
            </div>
          </Card>
        </Col>
        <Col xs={24} lg={14}>
          <Card title="快捷入口">
            <List
              dataSource={quickLinks}
              renderItem={(item) => (
                <List.Item
                  actions={[<Link key="open" to={item.path}>进入</Link>]}
                >
                  <List.Item.Meta
                    title={item.title}
                    description={item.description}
                  />
                </List.Item>
              )}
            />
          </Card>
        </Col>
      </Row>

      <Row gutter={[16, 16]}>
        <Col span={24}>
          <Card title="近期提醒">
            <Space direction="vertical" size={12}>
              <div>
                <Tag color="orange">预算提醒</Tag>
                餐饮支出已达到月度预算的 82%
              </div>
              <div>
                <Tag color="blue">任务提醒</Tag>
                「整理年度账单」将于明天到期
              </div>
              <div>
                <Tag color="purple">日程提醒</Tag>
                周六 10:00 体检，请提前 30 分钟到达
              </div>
            </Space>
          </Card>
        </Col>
      </Row>
    </div>
  )
}

export default DashboardPage
