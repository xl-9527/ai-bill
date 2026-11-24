import { PlusOutlined } from '@ant-design/icons'
import { Button, Card, Col, Row, Statistic, Table, Tag, Typography } from 'antd'
import type { ColumnsType } from 'antd/es/table'
import PageHeader from '../../../components/PageHeader'

interface InvestmentRecord {
  id: number
  name: string
  type: string
  amount: number
  returnRate: number
}

const investments: InvestmentRecord[] = [
  { id: 1, name: '沪深300ETF', type: '基金', amount: 52000, returnRate: 6.8 },
  { id: 2, name: '国债逆回购', type: '债券', amount: 18000, returnRate: 2.1 },
  { id: 3, name: '纳斯达克100ETF', type: '基金', amount: 30000, returnRate: -1.4 },
]

const columns: ColumnsType<InvestmentRecord> = [
  { title: '投资标的', dataIndex: 'name' },
  { title: '类型', dataIndex: 'type', render: (type: string) => <Tag>{type}</Tag> },
  {
    title: '持仓金额',
    dataIndex: 'amount',
    align: 'right',
    render: (value: number) => `¥${value.toLocaleString()}`,
  },
  {
    title: '收益率',
    dataIndex: 'returnRate',
    align: 'right',
    render: (value: number) => (
      <Typography.Text style={{ color: value >= 0 ? '#cf1322' : '#389e0d' }}>
        {value >= 0 ? '+' : ''}{value.toFixed(2)}%
      </Typography.Text>
    ),
  },
]

function InvestmentsPage() {
  const totalAmount = investments.reduce((total, item) => total + item.amount, 0)

  return (
    <div className="page-container">
      <PageHeader
        title="投资"
        description="记录投资持仓、交易明细与资产组合表现。"
        extra={<Button icon={<PlusOutlined />} type="primary">添加持仓</Button>}
      />
      <Row className="summary-row" gutter={[16, 16]}>
        <Col xs={24} md={8}>
          <Card>
            <Statistic title="总资产" value={totalAmount} precision={2} prefix="¥" />
          </Card>
        </Col>
        <Col xs={24} md={8}>
          <Card>
            <Statistic
              title="今日收益"
              value={328.6}
              precision={2}
              prefix="¥"
              valueStyle={{ color: '#cf1322' }}
            />
          </Card>
        </Col>
        <Col xs={24} md={8}>
          <Card>
            <Statistic
              title="累计收益率"
              value={5.2}
              precision={2}
              suffix="%"
              valueStyle={{ color: '#cf1322' }}
            />
          </Card>
        </Col>
      </Row>
      <Card title="持仓列表">
        <Table
          columns={columns}
          dataSource={investments}
          pagination={false}
          rowKey="id"
        />
      </Card>
    </div>
  )
}

export default InvestmentsPage
