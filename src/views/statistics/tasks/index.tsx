import { Card, Col, Progress, Row, Statistic, Table, Tag } from 'antd'
import type { ColumnsType } from 'antd/es/table'
import PageHeader from '../../../components/PageHeader'

interface TaskStatRecord {
  id: number
  week: string
  created: number
  completed: number
  overdue: number
}

const records: TaskStatRecord[] = [
  { id: 1, week: '第 47 周', created: 24, completed: 19, overdue: 1 },
  { id: 2, week: '第 46 周', created: 21, completed: 18, overdue: 0 },
  { id: 3, week: '第 45 周', created: 26, completed: 20, overdue: 2 },
]

const columns: ColumnsType<TaskStatRecord> = [
  { title: '周期', dataIndex: 'week' },
  { title: '新建任务', dataIndex: 'created', align: 'right' },
  { title: '完成任务', dataIndex: 'completed', align: 'right' },
  {
    title: '逾期任务',
    dataIndex: 'overdue',
    align: 'right',
    render: (value: number) => (
      <Tag color={value > 0 ? 'red' : 'green'}>{value}</Tag>
    ),
  },
  {
    title: '完成率',
    render: (_, record) => `${Math.round((record.completed / record.created) * 100)}%`,
  },
]

function TaskStatsPage() {
  return (
    <div className="page-container">
      <PageHeader
        title="任务统计"
        description="分析任务完成率、逾期情况与个人效率变化。"
      />
      <Row className="summary-row" gutter={[16, 16]}>
        <Col xs={24} md={8}>
          <Card>
            <Statistic title="本月任务" value={68} suffix="项" />
          </Card>
        </Col>
        <Col xs={24} md={8}>
          <Card>
            <Statistic title="已完成" value={54} suffix="项" />
          </Card>
        </Col>
        <Col xs={24} md={8}>
          <Card>
            <div className="completion-card">
              <span>完成率</span>
              <Progress percent={79} type="circle" size={86} />
            </div>
          </Card>
        </Col>
      </Row>
      <Card title="周期任务表现">
        <Table columns={columns} dataSource={records} pagination={false} rowKey="id" />
      </Card>
    </div>
  )
}

export default TaskStatsPage
