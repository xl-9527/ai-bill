import { Card, Col, List, Progress, Row, Statistic, Tag } from 'antd'
import PageHeader from '../../../components/PageHeader'

const categories = [
  { name: '餐饮', amount: 1476, percent: 34 },
  { name: '购物', amount: 960, percent: 22 },
  { name: '居住', amount: 820, percent: 19 },
  { name: '交通', amount: 312, percent: 7 },
]

function ConsumptionStatsPage() {
  return (
    <div className="page-container">
      <PageHeader
        title="消费统计"
        description="按时间、分类和账户分析消费趋势及支出结构。"
      />
      <Row className="summary-row" gutter={[16, 16]}>
        <Col xs={24} md={8}>
          <Card>
            <Statistic title="本月消费" value={4280} precision={2} prefix="¥" />
          </Card>
        </Col>
        <Col xs={24} md={8}>
          <Card>
            <Statistic title="日均消费" value={178.33} precision={2} prefix="¥" />
          </Card>
        </Col>
        <Col xs={24} md={8}>
          <Card>
            <Statistic title="消费笔数" value={86} suffix="笔" />
          </Card>
        </Col>
      </Row>
      <Row gutter={[16, 16]}>
        <Col xs={24} lg={14}>
          <Card title="分类消费占比">
            <List
              dataSource={categories}
              renderItem={(item) => (
                <List.Item>
                  <div className="category-progress">
                    <div className="category-progress-header">
                      <span>{item.name}</span>
                      <strong>¥{item.amount.toFixed(2)}</strong>
                    </div>
                    <Progress percent={item.percent} showInfo={false} />
                  </div>
                </List.Item>
              )}
            />
          </Card>
        </Col>
        <Col xs={24} lg={10}>
          <Card title="消费洞察">
            <div className="insight-list">
              <p><Tag color="orange">预算提醒</Tag>餐饮支出接近预算上限</p>
              <p><Tag color="blue">周期对比</Tag>本周消费较上周下降 12%</p>
              <p><Tag color="green">储蓄建议</Tag>本月结余率预计可达 64%</p>
            </div>
          </Card>
        </Col>
      </Row>
    </div>
  )
}

export default ConsumptionStatsPage
