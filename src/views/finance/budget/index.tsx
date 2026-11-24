import { PlusOutlined } from '@ant-design/icons'
import { Button, Card, Col, Progress, Row, Table, Tag } from 'antd'
import type { ColumnsType } from 'antd/es/table'
import PageHeader from '../../../components/PageHeader'

interface BudgetRecord {
  id: number
  category: string
  budget: number
  used: number
}

const budgets: BudgetRecord[] = [
  { id: 1, category: '餐饮', budget: 1800, used: 1476 },
  { id: 2, category: '交通', budget: 600, used: 312 },
  { id: 3, category: '购物', budget: 2000, used: 960 },
  { id: 4, category: '娱乐', budget: 800, used: 420 },
]

const columns: ColumnsType<BudgetRecord> = [
  { title: '预算分类', dataIndex: 'category' },
  {
    title: '预算金额',
    dataIndex: 'budget',
    align: 'right',
    render: (value: number) => `¥${value.toFixed(2)}`,
  },
  {
    title: '已使用',
    dataIndex: 'used',
    align: 'right',
    render: (value: number) => `¥${value.toFixed(2)}`,
  },
  {
    title: '执行进度',
    width: 220,
    render: (_, record) => {
      const percent = Math.round((record.used / record.budget) * 100)
      return (
        <Progress
          percent={percent}
          size="small"
          status={percent >= 90 ? 'exception' : 'active'}
        />
      )
    },
  },
  {
    title: '状态',
    render: (_, record) => {
      const percent = (record.used / record.budget) * 100
      return percent >= 90 ? <Tag color="red">接近超限</Tag> : <Tag color="green">正常</Tag>
    },
  },
]

function BudgetPage() {
  const totalBudget = budgets.reduce((total, item) => total + item.budget, 0)
  const totalUsed = budgets.reduce((total, item) => total + item.used, 0)
  const percent = Math.round((totalUsed / totalBudget) * 100)

  return (
    <div className="page-container">
      <PageHeader
        title="预算"
        description="设置月度预算与分类预算，跟踪执行进度并接收预警。"
        extra={<Button icon={<PlusOutlined />} type="primary">新增预算</Button>}
      />
      <Row className="summary-row" gutter={[16, 16]}>
        <Col xs={24} md={8}>
          <Card>
            <div className="budget-total">
              <span>月度总预算</span>
              <strong>¥{totalBudget.toFixed(2)}</strong>
            </div>
          </Card>
        </Col>
        <Col xs={24} md={8}>
          <Card>
            <div className="budget-total">
              <span>已使用</span>
              <strong>¥{totalUsed.toFixed(2)}</strong>
            </div>
          </Card>
        </Col>
        <Col xs={24} md={8}>
          <Card>
            <div className="budget-total">
              <span>执行率</span>
              <Progress percent={percent} size="small" />
            </div>
          </Card>
        </Col>
      </Row>
      <Card title="分类预算">
        <Table columns={columns} dataSource={budgets} pagination={false} rowKey="id" />
      </Card>
    </div>
  )
}

export default BudgetPage
