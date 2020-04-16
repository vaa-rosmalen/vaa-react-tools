import React, { useState, MutableRefObject } from 'react';
import { Table as AntdTable } from 'antd';
import './styles.scss';
import { TablePaginationConfig } from 'antd/lib/table';

export const defaultSorterFunction = sortBy => (a, b, _sortOrder?) => {
  if (a[sortBy] < b[sortBy]) return -1;
  if (a[sortBy] > b[sortBy]) return 1;
  return 0;
};

export const Table = ({
  ref,
  dataSource,
  columns,
  pagination = true,
  paginationConfig,
}: {
  ref?: MutableRefObject<any>;
  dataSource;
  columns;
  pagination?: boolean;
  paginationConfig?: TablePaginationConfig;
}) => {
  const [pageSize, setPageSize] = useState(5);
  const [page, setPage] = useState(1);
  return (
    <div ref={ref} className="vaa-table">
      <AntdTable
        style={{ borderRadius: '5px' }}
        dataSource={dataSource}
        columns={columns}
        size="middle"
        sortDirections={['ascend', 'descend']}
        scroll={{ x: 'max-content', scrollToFirstRowOnChange: true }}
        pagination={
          pagination
            ? paginationConfig
              ? paginationConfig
              : {
                  locale: { items_per_page: '' },
                  current: page,
                  showSizeChanger: true,
                  pageSize: pageSize,
                  pageSizeOptions: ['5', '10', '20', '30'],
                  size: 'small',
                  onShowSizeChange: (_current, size) => {
                    setPageSize(size);
                  },
                  onChange: page => {
                    setPage(page);
                  },
                  showTotal: (total, [start, end]) => (
                    <>
                      <span style={{ marginRight: 80 }}>
                        resultaten per pagina
                      </span>
                      <span>
                        {start}-{end} van de {total}
                      </span>
                    </>
                  ),
                  itemRender: (_page, _type, originalElement) => {
                    // if (type !== "page") {
                    return originalElement;
                    // }
                    // return null;
                  },
                  // showLessItems: true
                }
            : false
        }
      />
    </div>
  );
};
