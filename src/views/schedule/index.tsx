import { PlusOutlined } from '@ant-design/icons'
import { Button, Calendar, Card, Col, List, Row, Tag } from 'antd'
import PageHeader from '../../components/PageHeader'

const schedules = [
  {
    title: '体检',
    time: '周六 10:00',
    type: '健康',
  },
  {
    title: '月度财务复盘',
    time: '周日 20:00',
    type: '财务',
  },
  {
    title: '读书一小时',
    time: '每天 21:30',
    type: '成长',
  },
]

function SchedulePage() {
  return (
    <div className="page-container">
      <PageHeader
        title="日程安排"
        description="通过日历视图管理日程、提醒与周期性计划。"
        extra={<Button icon={<PlusOutlined />} type="primary">新建日程</Button>}
      />
      <Row gutter={[16, 16]}>
        <Col xs={24} xl={10}>
          <Card title="日历">
            <Calendar fullscreen={false} />
          </Card>
        </Col>
        <Col xs={24} xl={14}>
          <Card title="即将到来的日程">
            <List
              dataSource={schedules}
              renderItem={(item) => (
                <List.Item actions={[<Button key="edit" type="link">编辑</Button>]}>
                  <List.Item.Meta title={item.title} description={item.time} />
                  <Tag color="blue">{item.type}</Tag>
                </List.Item>
              )}
            />
          </Card>
        </Col>
      </Row>
    </div>
  )
}

export default SchedulePage
