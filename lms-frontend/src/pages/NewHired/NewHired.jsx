import {
  Button,
  createTheme,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  ThemeProvider,
  Typography,
} from "@mui/material";
import React from "react";
import { useState } from "react";
import "./NewHired.css";
const theme = createTheme({
  components: {
    MuiTypography: {
      styleOverrides: {
        root: {
          color: "#726969",
          marginLeft: "20px",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          margin: "0px 10px 0px 817px",
        },
      },
    },
  },
});

const tableTheme = createTheme({
  components: {
    MuiTable: {
      styleOverrides: {
        root: {
          width: "1160px",
          marginTop: "15px",
        },
      },
    },
    MuiTableHead: {
      styleOverrides: {
        root: {
          backgroundColor: "lightgray",
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        root: {
          border: "1px solid grey",
          lineHeight: "25px",
          fontSize: "12px",
          padding: "0px",
          
        },
      },
    },
  },
});

// function createData(number, selected) {
//   return {number, selected };
// }

// const rows = [
//   createData(1,false),
//   createData(2,false),
//   createData(3,false),
//   createData(4,false),
//   createData(5,false),
// ];

function NewHired(props) {
  const[value,setValue] = React.useState(null);
  const[name,setName] = React.useState('');
  const[selected,setSelected] = React.useState(false);
  const number = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,21
  ];


// const handleChange =(event)=>{
// setValue(event.target.value);
// }

const handleChange =(event,n)=>{
  // if(n.selected===true){
  setName(event.target.value);
  // }
  
}

  return (
    <div className="container">
      <div className="header">
        <ThemeProvider theme={theme}>
          <Typography variant="h5" gutterBottom>
            New Hired
          </Typography>
          <Button variant="contained" color="success">
            Submit
          </Button>
        </ThemeProvider>
        <Button variant="contained" color="warning">
          Cancel
        </Button>
      </div>
      <ThemeProvider theme={tableTheme}>
        <Table >
          <TableHead>
            <TableRow>
              <TableCell align="center" style={{ width: "25px" }} rowSpan={2} onSelect>
                Sr.
              </TableCell>
              <TableCell align="center" style={{ width: "66px" }} rowSpan={2}>
                FirstName
              </TableCell>
              <TableCell align="center" style={{ width: "66px" }} rowSpan={2}>
                LastName
              </TableCell>
              <TableCell align="center" style={{ width: "66px" }} rowSpan={2}>
                EmailId
              </TableCell>
              <TableCell align="center" style={{ width: "66px" }} rowSpan={2}>
                Mobile
              </TableCell>
              <TableCell align="center" style={{ width: "66px" }} rowSpan={2}>
                HiredCity
              </TableCell>
              <TableCell align="center" style={{ width: "66px" }} rowSpan={2}>
                HiredDate
              </TableCell>
              <TableCell align="center" style={{ width: "66px" }} rowSpan={2}>
                Degree
              </TableCell>
              <TableCell align="center" style={{ width: "66px" }} rowSpan={2}>
                Agg. Degree%
              </TableCell>
              <TableCell align="center" style={{ width: "76px" }} rowSpan={2}>
                Current Location Pin
              </TableCell>
              <TableCell align="center" style={{ width: "86px" }} rowSpan={2}>
                Permanent Location Pin
              </TableCell>
              <TableCell align="center" style={{ width: "66px" }} rowSpan={2}>
                Hired Lab
              </TableCell>
              <TableCell align="center" colSpan={3} rowSpan={1}>
                Remarks
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell align="center" style={{ width: "66px" }}>
                Attitude
              </TableCell>
              <TableCell align="center" style={{ width: "66px" }}>
                Communication
              </TableCell>
              <TableCell align="center" style={{ width: "66px" }}>
                Knowledge
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {number.map((n,index) => {
              
              return (
                <TableRow hover={true} key={index} >
                  <TableCell align="center" style={{ width: "25px" }}  >
                    {n.number}
                  </TableCell>
                  <TableCell
                    align="center"
                    style={{ width: "66px", padding: "10px" }}
                    key={index}
                    // onClick={()=>n.selected=true}
                  >            
                  {/* {selected? */}
                  <input value={name} style=
                  {{border:"0px"}}
                  
                  onChange={(event) => handleChange(event,n)}
                  
                    // setName(event.target.value)}}
                    // key={index}
           />
           {/* :''} */}
                    {value}</TableCell>
                  <TableCell
                    align="center"
                    style={{ width: "66px" }}
                  ></TableCell>
                  <TableCell
                    align="center"
                    style={{ width: "66px" }}
                  ></TableCell>
                  <TableCell
                    align="center"
                    style={{ width: "66px" }}
                  ></TableCell>
                  <TableCell
                    align="center"
                    style={{ width: "66px" }}
                  ></TableCell>
                  <TableCell
                    align="center"
                    style={{ width: "66px" }}
                  ></TableCell>
                  <TableCell
                    align="center"
                    style={{ width: "66px" }}
                  ></TableCell>
                  <TableCell
                    align="center"
                    style={{ width: "66px" }}
                  ></TableCell>
                  <TableCell
                    align="center"
                    style={{ width: "76px" }}
                  ></TableCell>
                  <TableCell
                    align="center"
                    style={{ width: "86px" }}
                  ></TableCell>
                  <TableCell
                    align="center"
                    style={{ width: "66px" }}
                  ></TableCell>
                  <TableCell
                    align="center"
                    style={{ width: "66px" }}
                  ></TableCell>
                  <TableCell
                    align="center"
                    style={{ width: "66px" }}
                  ></TableCell>
                  <TableCell
                    align="center"
                    style={{ width: "66px" }}
                  ></TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </ThemeProvider>
    </div>
  );
}

export default NewHired;
