import { PlusOutlined } from '@ant-design/icons'
import { Button, Card, Col, Row, Statistic, Table, Tag, Typography } from 'antd'
import type { ColumnsType } from 'antd/es/table'
import PageHeader from '../../../components/PageHeader'

interface TransactionRecord {
  id: number
  date: string
  category: string
  account: string
  type: '收入' | '支出'
  amount: number
  remark: string
}

const transactions: TransactionRecord[] = [
  {
    id: 1,
    date: '2026-11-24',
    category: '工资',
    account: '招商银行',
    type: '收入',
    amount: 12000,
    remark: '11 月工资',
  },
  {
    id: 2,
    date: '2026-11-23',
    category: '餐饮',
    account: '微信支付',
    type: '支出',
    amount: 86.5,
    remark: '晚餐',
  },
  {
    id: 3,
    date: '2026-11-22',
    category: '交通',
    account: '支付宝',
    type: '支出',
    amount: 24,
    remark: '地铁通勤',
  },
]

const columns: ColumnsType<TransactionRecord> = [
  { title: '日期', dataIndex: 'date' },
  { title: '分类', dataIndex: 'category' },
  { title: '账户', dataIndex: 'account' },
  {
    title: '类型',
    dataIndex: 'type',
    render: (type: TransactionRecord['type']) => (
      <Tag color={type === '收入' ? 'green' : 'red'}>{type}</Tag>
    ),
  },
  {
    title: '金额',
    dataIndex: 'amount',
    align: 'right',
    render: (amount: number, record) => (
      <Typography.Text type={record.type === '收入' ? 'success' : 'danger'}>
        {record.type === '收入' ? '+' : '-'}¥{amount.toFixed(2)}
      </Typography.Text>
    ),
  },
  { title: '备注', dataIndex: 'remark' },
]

function TransactionsPage() {
  return (
    <div className="page-container">
      <PageHeader
        title="收支"
        description="记录收入与支出流水，维护账户、分类和备注。"
        extra={<Button icon={<PlusOutlined />} type="primary">记一笔</Button>}
      />
      <Row className="summary-row" gutter={[16, 16]}>
        <Col xs={24} md={8}>
          <Card>
            <Statistic title="本月收入" value={12000} precision={2} prefix="¥" />
          </Card>
        </Col>
        <Col xs={24} md={8}>
          <Card>
            <Statistic title="本月支出" value={4280} precision={2} prefix="¥" />
          </Card>
        </Col>
        <Col xs={24} md={8}>
          <Card>
            <Statistic title="本月结余" value={7720} precision={2} prefix="¥" />
          </Card>
        </Col>
      </Row>
      <Card title="最近流水">
        <Table
          columns={columns}
          dataSource={transactions}
          pagination={false}
          rowKey="id"
        />
      </Card>
    </div>
  )
}

export default TransactionsPage
