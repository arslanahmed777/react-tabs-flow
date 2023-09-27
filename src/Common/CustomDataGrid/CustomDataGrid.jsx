import React, { useCallback, useState } from 'react'
import { AgGridReact } from "ag-grid-react";





const CustomDataGrid = ({ columns, rows, detailRowHeight, customRowRenderer, pagination, perPage, totalRows, ...props }, ref) => {

  const [gridApi, setGridApi] = useState();
  // Pagination handle
  // let paginationProps = {
  //   pagination: true,
  //   paginationPageSize: props.pageSize || 10,
  //   cacheBlockSize: 3
  // };







  const sizeToFit = useCallback(({ api }) => {
    ref.current.api.sizeColumnsToFit({
      defaultMinWidth: 100,
    });
    
    const dataSource = {
      getRows: params => {
        const page = params.endRow / perPage;
setTimeout(()=>{
  params.successCallback(rows, rows.length);
},2000)
       

      }
    }

    if (pagination) {
      api.setDatasource(dataSource);
    }

    setGridApi(api)
  }, [rows]);
  
  return (

    <>
      <div className="ag-theme-material border-[1px] border-b-0 mt-3" style={{ maxHeight: 'calc(88vh - 50px)', overflow: "auto", width: "100%", }}   >
        <AgGridReact

          
          //  totalPages
          // perPage
          // rowsPerPage
          onPaginationChanged={(...r)=>console.log(r)}
          rowModelType={pagination && "infinite"}
          paginationPageSize={perPage}
          cacheBlockSize={perPage}
          pagination={true}
        
          domLayout='autoHeight'
          animateRows="true"

          // isFullWidthRow={true}
          // fullWidthCellRenderer={fullWidthCellRender}
          isFullWidthRow={customRowRenderer ? () => true : () => false}
          getRowHeight={detailRowHeight}
          fullWidthCellRenderer={customRowRenderer}
          headerHeight={40}

         
          // resetrow
          ref={ref}
          onGridReady={sizeToFit}
          columnDefs={columns}
          // rowData={rows}
        
          {...props}
        ></AgGridReact>
      </div>
    </>

  )
}

export default React.forwardRef(CustomDataGrid)