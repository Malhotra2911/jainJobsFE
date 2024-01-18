import React from 'react';
import "../../../../css/Employer/Tables.css"
import styled from "styled-components";
import { Button } from '@mui/material';

export default class Table extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      message: "",
      items: []
    }
  }

  updateMessage(event) {
    this.setState({
      message: event.target.value
    });
  }

  handleClick() {
    var items = this.state.items;

    items.push(this.state.message);

    this.setState({
      items: items,
      message: ""
    });
  }

  handleItemChanged(i, event) {
    var items = this.state.items;
    items[i] = event.target.value;

    this.setState({
      items: items
    });
  }

  handleItemDeleted(i) {
    var items = this.state.items;

    items.splice(i, 1);

    this.setState({
      items: items
    });
  }

  renderRows() {
    var context = this;

    return this.state.items.map(function (o, i) {
      return (
        <tr key={"item-" + i} style={{background:" rgba(140, 221, 220, 0.5)",border:"5px solid black"}}>
          <td>
            <input 
              type="text"
              className='input_table'
              value={o}
              onChange={context.handleItemChanged.bind(context, i)}
            />
          </td>
          <td>
            <input
              type="text"
              className='input_table'
              value={o}
              onChange={context.handleItemChanged.bind(context, i)}
            />
          </td>
          <td>
            <input
              type="text"
              className='input_table'
              value={o}
              onChange={context.handleItemChanged.bind(context, i)}
            />
          </td>
          <td>
            <input
              type="text"
              className='input_table'
              value={o}
              onChange={context.handleItemChanged.bind(context, i)}
            />
          </td>
          <td>
            <input
              type="text"
              className='input_table'
              value={o}
              onChange={context.handleItemChanged.bind(context, i)}
            />
          </td>
        </tr>
      );
    });
  }

  render() {
    return (
      <div>
        <table style={{boxShadow:"0px 4px 20px rgba(0, 0, 0, 0.25)"}}>
          <thead >
            <tr >
              <TableHead>
                College&nbsp;Name
              </TableHead>
              <TableHead>
                Passing&nbsp;Year
              </TableHead>
              <TableHead>
                Passed&nbsp;Grade
              </TableHead>
              <TableHead>
                Subject
              </TableHead>
              <TableHead>
                Degree&nbsp;Images
              </TableHead>
            </tr>
          </thead>
          <tbody className='table_body'>
            {this.renderRows()}
          </tbody>
        </table>
        <hr />
        <Button
        sx={{
          backgroundColor: "rgba(247, 112, 29, 0.39)",
          width: "30%",
          color: "#000000",
          mt:2,
          mb:2,
          textTransform: "none",
          fontStyle: "none",
          "&:hover": {
            backgroundColor: "#F7701D"
          }
        }}
          onClick={this.handleClick.bind(this)}
        >
          Add New Row
        </Button>
      </div>
    );
  }
}



const TableHead = styled.th`
  min-width:120px;
  background-color: #FFFFFF;
  height:5vh;
  font-family:"Poppins",sans-serif;
`;