import { Button, Card, Col, Form, Input, Row, Select, Switch } from 'antd'
import PageHeader from '../../../components/PageHeader'

function SettingsProfilePage() {
  return (
    <div className="page-container">
      <PageHeader
        title="个人信息"
        description="设置账号昵称、展示偏好、登录方式与安全选项。"
      />
      <Row gutter={[16, 16]}>
        <Col xs={24} lg={14}>
          <Card title="基础资料">
            <Form
              initialValues={{
                nickname: '个人用户',
                email: 'user@example.com',
                city: '深圳',
              }}
              layout="vertical"
            >
              <Form.Item label="昵称" name="nickname">
                <Input placeholder="请输入昵称" />
              </Form.Item>
              <Form.Item label="邮箱" name="email">
                <Input placeholder="请输入邮箱" />
              </Form.Item>
              <Form.Item label="所在城市" name="city">
                <Input placeholder="请输入城市" />
              </Form.Item>
              <Button type="primary">保存资料</Button>
            </Form>
          </Card>
        </Col>
        <Col xs={24} lg={10}>
          <Card title="偏好设置">
            <Form layout="vertical">
              <Form.Item label="默认首页" name="homePage">
                <Select
                  defaultValue="dashboard"
                  options={[
                    { label: '首页', value: 'dashboard' },
                    { label: '任务管理', value: 'tasks' },
                    { label: '收支', value: 'transactions' },
                  ]}
                />
              </Form.Item>
              <Form.Item label="登录提醒" name="loginAlert" valuePropName="checked">
                <Switch defaultChecked />
              </Form.Item>
              <Form.Item label="资料公开展示" name="publicProfile" valuePropName="checked">
                <Switch />
              </Form.Item>
            </Form>
          </Card>
        </Col>
      </Row>
    </div>
  )
}

export default SettingsProfilePage
