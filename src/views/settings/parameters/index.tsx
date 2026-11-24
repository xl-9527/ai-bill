import { Button, Card, Col, Form, InputNumber, Row, Select, Switch } from 'antd'
import PageHeader from '../../../components/PageHeader'

function ParametersPage() {
  return (
    <div className="page-container">
      <PageHeader
        title="参数设置"
        description="配置系统默认参数，包括货币、主题、语言和数据策略。"
      />
      <Row gutter={[16, 16]}>
        <Col xs={24} lg={14}>
          <Card title="通用参数">
            <Form
              initialValues={{
                currency: 'CNY',
                language: 'zh-CN',
                theme: 'light',
                reminderDays: 3,
              }}
              layout="vertical"
            >
              <Form.Item label="默认货币" name="currency">
                <Select
                  options={[
                    { label: '人民币（CNY）', value: 'CNY' },
                    { label: '美元（USD）', value: 'USD' },
                    { label: '港币（HKD）', value: 'HKD' },
                  ]}
                />
              </Form.Item>
              <Form.Item label="系统语言" name="language">
                <Select
                  options={[
                    { label: '简体中文', value: 'zh-CN' },
                    { label: 'English', value: 'en-US' },
                  ]}
                />
              </Form.Item>
              <Form.Item label="主题模式" name="theme">
                <Select
                  options={[
                    { label: '浅色模式', value: 'light' },
                    { label: '深色模式', value: 'dark' },
                    { label: '跟随系统', value: 'system' },
                  ]}
                />
              </Form.Item>
              <Form.Item label="任务提前提醒天数" name="reminderDays">
                <InputNumber min={0} max={30} style={{ width: '100%' }} />
              </Form.Item>
              <Button type="primary">保存参数</Button>
            </Form>
          </Card>
        </Col>
        <Col xs={24} lg={10}>
          <Card title="数据策略">
            <Form layout="vertical">
              <Form.Item label="自动同步" name="autoSync" valuePropName="checked">
                <Switch defaultChecked />
              </Form.Item>
              <Form.Item label="数据备份" name="backup" valuePropName="checked">
                <Switch defaultChecked />
              </Form.Item>
              <Form.Item label="操作日志" name="operationLog" valuePropName="checked">
                <Switch />
              </Form.Item>
            </Form>
          </Card>
        </Col>
      </Row>
    </div>
  )
}

export default ParametersPage
