import * as React from 'react';
import { DataGrid } from '@material-ui/data-grid';
// import { useDemoData } from '@material-ui/x-grid-data-generator';
import {init_data} from '../../context/data';

const sortModel = [
  {
    field: 'Station',
    sort: 'asc',
  },
];

const data =  init_data
data.map(r=>r.id = data.indexOf(r)+1)
var init_keys = Object.keys(init_data[0]);

var coln = []
init_keys.forEach(col => coln.push({field: col}))

export default function OrderSortingGrid() {
    

//   const { data } = useDemoData({
//     dataSet: 'Commodity',
//     rowLength: 10,
//     maxColumns: 6,
//   });

  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        sortingOrder={['desc', 'asc']}
        sortModel={sortModel}
        columns={coln}
        rows = {data}
      />
    </div>
  );
}
