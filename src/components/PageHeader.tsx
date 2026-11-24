import type { ReactNode } from 'react'
import { Tag, Typography } from 'antd'

const { Paragraph, Title } = Typography

interface PageHeaderProps {
  title: string
  description: string
  extra?: ReactNode
}

function PageHeader({ title, description, extra }: PageHeaderProps) {
  return (
    <div className="page-heading">
      <div>
        <Title level={2}>{title}</Title>
        <Paragraph type="secondary">{description}</Paragraph>
      </div>
      {extra ?? <Tag color="blue">功能开发中</Tag>}
    </div>
  )
}

export default PageHeader
