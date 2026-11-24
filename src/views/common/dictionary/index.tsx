import { PlusOutlined, SearchOutlined } from '@ant-design/icons'
import { Button, Card, Input, Space, Switch, Table, Tag } from 'antd'
import type { ColumnsType } from 'antd/es/table'
import PageHeader from '../../../components/PageHeader'

interface DictionaryRecord {
  id: number
  type: string
  label: string
  value: string
  sort: number
  enabled: boolean
}

const dictionaries: DictionaryRecord[] = [
  { id: 1, type: '收支分类', label: '餐饮', value: 'dining', sort: 1, enabled: true },
  { id: 2, type: '收支分类', label: '交通', value: 'transport', sort: 2, enabled: true },
  { id: 3, type: '任务状态', label: '进行中', value: 'doing', sort: 2, enabled: true },
  { id: 4, type: '通知渠道', label: '企业微信', value: 'wecom', sort: 1, enabled: false },
]

const columns: ColumnsType<DictionaryRecord> = [
  { title: '字典类型', dataIndex: 'type' },
  { title: '字典标签', dataIndex: 'label' },
  { title: '字典键值', dataIndex: 'value', render: (value: string) => <Tag>{value}</Tag> },
  { title: '排序', dataIndex: 'sort', width: 90, align: 'center' },
  {
    title: '状态',
    dataIndex: 'enabled',
    render: (enabled: boolean) => <Switch checked={enabled} size="small" />,
  },
  {
    title: '操作',
    width: 140,
    render: () => (
      <Space>
        <Button size="small" type="link">编辑</Button>
        <Button danger size="small" type="link">删除</Button>
      </Space>
    ),
  },
]

function DictionaryPage() {
  return (
    <div className="page-container">
      <PageHeader
        title="字典管理"
        description="维护系统中使用的分类、标签、状态等基础字典数据。"
        extra={<Button icon={<PlusOutlined />} type="primary">新增字典</Button>}
      />
      <Card>
        <div className="table-toolbar">
          <Input
            allowClear
            placeholder="搜索字典类型或标签"
            prefix={<SearchOutlined />}
            style={{ width: 280 }}
          />
        </div>
        <Table
          columns={columns}
          dataSource={dictionaries}
          pagination={false}
          rowKey="id"
        />
      </Card>
    </div>
  )
}

export default DictionaryPage
