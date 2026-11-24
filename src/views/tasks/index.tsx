import { PlusOutlined } from '@ant-design/icons'
import { Button, Card, Progress, Table, Tag } from 'antd'
import type { ColumnsType } from 'antd/es/table'
import PageHeader from '../../components/PageHeader'

interface TaskRecord {
  id: number
  title: string
  priority: '高' | '中' | '低'
  status: '待开始' | '进行中' | '已完成'
  dueDate: string
  progress: number
}

const tasks: TaskRecord[] = [
  {
    id: 1,
    title: '整理年度账单',
    priority: '高',
    status: '进行中',
    dueDate: '2026-11-25',
    progress: 68,
  },
  {
    id: 2,
    title: '制定下月预算',
    priority: '中',
    status: '待开始',
    dueDate: '2026-11-28',
    progress: 0,
  },
  {
    id: 3,
    title: '完成体检预约',
    priority: '高',
    status: '已完成',
    dueDate: '2026-11-22',
    progress: 100,
  },
]

const priorityColor = {
  高: 'red',
  中: 'orange',
  低: 'blue',
} as const

const statusColor = {
  待开始: 'default',
  进行中: 'processing',
  已完成: 'success',
} as const

const columns: ColumnsType<TaskRecord> = [
  {
    title: '任务名称',
    dataIndex: 'title',
  },
  {
    title: '优先级',
    dataIndex: 'priority',
    render: (priority: TaskRecord['priority']) => (
      <Tag color={priorityColor[priority]}>{priority}</Tag>
    ),
  },
  {
    title: '状态',
    dataIndex: 'status',
    render: (status: TaskRecord['status']) => (
      <Tag color={statusColor[status]}>{status}</Tag>
    ),
  },
  {
    title: '截止日期',
    dataIndex: 'dueDate',
  },
  {
    title: '进度',
    dataIndex: 'progress',
    width: 180,
    render: (progress: number) => <Progress percent={progress} size="small" />,
  },
  {
    title: '操作',
    width: 140,
    render: () => (
      <Button size="small" type="link">
        查看详情
      </Button>
    ),
  },
]

function TasksPage() {
  return (
    <div className="page-container">
      <PageHeader
        title="任务管理"
        description="创建、跟踪和归档个人任务，支持优先级与状态流转。"
        extra={<Button icon={<PlusOutlined />} type="primary">新建任务</Button>}
      />
      <Card>
        <Table columns={columns} dataSource={tasks} pagination={false} rowKey="id" />
      </Card>
    </div>
  )
}

export default TasksPage
