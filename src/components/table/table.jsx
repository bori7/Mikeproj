import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Card from '@material-ui/core/Card';
import {init_data} from '../../context/data';

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});




// const columnhead = init_data.filter(monster =>
//     monster.name.toLowerCase().includes(searchField.toLowerCase())
//   );
var init_keys = Object.keys(init_data[0]);
var tot_init = init_keys.slice(1,init_keys.length)

var colsum = []
var tot = 0;
tot_init.forEach(y => {
  let c = y
  init_data.forEach((x )=> {tot+=x[c];})
  colsum.push(tot)
  tot=0
})



export default function CustomizedTables() {
  const classes = useStyles();

  return (
    <TableContainer component={Paper} style={{paddingLeft: '30px',paddingRight: '30px'}}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
          <StyledTableCell align="right">{'#'}</StyledTableCell>
          
          { init_keys.map(stat => (<StyledTableCell>{stat}</StyledTableCell>)
            )}
            {/* <StyledTableCell>Dessert (100g serving)</StyledTableCell>
            <StyledTableCell align="right">Calories</StyledTableCell>
            <StyledTableCell align="right">Fat&nbsp;(g)</StyledTableCell>
            <StyledTableCell align="right">Carbs&nbsp;(g)</StyledTableCell>
            <StyledTableCell align="right">Protein&nbsp;(g)</StyledTableCell> */}
          </TableRow>
        </TableHead>
        <TableBody>
        
        {/* {rows.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
                {row.name}
              </StyledTableCell>
              <StyledTableCell align="right">{row.calories}</StyledTableCell>
              <StyledTableCell align="right">{row.fat}</StyledTableCell>
              <StyledTableCell align="right">{row.carbs}</StyledTableCell>
              <StyledTableCell align="right">{row.protein}</StyledTableCell>
            </StyledTableRow>
          ))} */}
          {init_data.map((row) => (
            
            <StyledTableRow key={row.Station}>
            <Card>
            <StyledTableCell align="right">{init_data.indexOf(row)+1}</StyledTableCell>
            </Card>
            { Object.entries(row).map((stat) => (
              
              <StyledTableCell>{stat[1]}</StyledTableCell>)
            )}
              {/* <StyledTableCell component="th" scope="row">
                {row.Station}
              </StyledTableCell>
              <StyledTableCell align="right">{row.calories}</StyledTableCell>
              <StyledTableCell align="right">{row.fat}</StyledTableCell>
              <StyledTableCell align="right">{row.carbs}</StyledTableCell>
              <StyledTableCell align="right">{row.protein}</StyledTableCell> */}
            </StyledTableRow>
          ))}
          
          <StyledTableRow key={'Total'}>
          
          <StyledTableCell align="right">{'#'}</StyledTableCell>
          <StyledTableCell >{'Total'}</StyledTableCell>
           
          {/* {tot_init.forEach((stata) => {
            {/* var tot=0; */}
          {/* (init_data.map((x)=> (x.stata))) */}
          
          { colsum.map((stat) => (<StyledTableCell>{stat}</StyledTableCell>)
            )}
            
          {/* <StyledTableCell>{'tot'}</StyledTableCell> */}
        
            </StyledTableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}
