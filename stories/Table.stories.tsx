import React from 'react';
import { Table } from '../src/components/table';
import { Card } from 'antd';

export default {
  title: 'Welcome',
};

// By passing optional props to this story, you can control the props of the component when
// you consume the story in a test.
export const CardTable = () => {
  const dataSource = [{ title: 'a', description: 'b' }];
  const columns = [
    { title: 'Title', dataIndex: 'title', key: 'title' },
    { title: 'Description', dataIndex: 'description', key: 'description' },
  ];

  return (
    <Card
      bordered={false}
      bodyStyle={{ padding: 0, borderRadius: '5px' }}
      style={{
        boxShadow: '7px 7px 20px 1px rgba(0, 0, 0, 0.16)',
        borderRadius: '5px',
      }}
    >
      <Table dataSource={dataSource} columns={columns} />
    </Card>
  );
};
