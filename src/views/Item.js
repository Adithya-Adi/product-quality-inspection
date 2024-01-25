
import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Table,
  Row,
  Col,
  Button,
  Dropdown, DropdownToggle, DropdownMenu, DropdownItem
} from "reactstrap";
import { Link } from "react-router-dom";
import { useState } from "react";

const dropdownValues = ['Option 1', 'Option 2', 'Option 3', 'Option 4'];

function Item() {
  const [dropdownOpen, setDropdownOpen] = useState(Array(5).fill(false));
  const toggleDropdown = (index) => {
    const newDropdownOpen = [...dropdownOpen];
    newDropdownOpen[index] = !newDropdownOpen[index];
    setDropdownOpen(newDropdownOpen);
  };

  return (
    <>
      <div className="content">
        <Row>
          <Col md="12">
            <Card>
              <CardHeader>
                <Row>
                  <Col md="8">
                    <CardTitle tag="h4">Item</CardTitle>
                  </Col>
                  <Col className="text-right">
                    <Link to={"/admin/add-item"}>
                      <Button className="btn-round btn btn-info">Add Item</Button>
                    </Link>
                  </Col>
                </Row>
              </CardHeader>
              <CardBody>
                <Table responsive>
                  <thead className="text-primary">
                    <tr>
                      <th>Sno</th>
                      <th>Product Plan No</th>
                      <th>Cust Po No</th>
                      <th>Sales Order no</th>
                      <th>Item No</th>
                      <th>Drawing No</th>
                      <th>Template</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[1, 2, 3, 4, 5].map((rowIndex) => (
                      <tr key={rowIndex}>
                        <td>1</td>
                        <td>112434</td>
                        <td>Bruce Wayne</td>
                        <td>135453</td>
                        <td>RES-40098</td>
                        <td>M-727</td>
                        <td>
                          <Dropdown isOpen={dropdownOpen[rowIndex - 1]} toggle={() => toggleDropdown(rowIndex - 1)}>
                            <DropdownToggle caret>
                              Select Template
                            </DropdownToggle>
                            <DropdownMenu>
                              {dropdownValues.map((value, index) => (
                                <DropdownItem key={index}>{value}</DropdownItem>
                              ))}
                            </DropdownMenu>
                          </Dropdown>
                        </td>

                        <td>
                          <Button className="btn-round btn btn-danger">Delete</Button>&nbsp;
                        </td>
                        <td>
                          <Link to={`/admin/add-item-qc-value/${rowIndex}`}>
                          <Button className="btn-round btn btn-success" >Add QC Value</Button>
                          </Link>
                        </td>
                      </tr>
                    ))}

                  </tbody>
                </Table>
              </CardBody>
            </Card>
          </Col>

        </Row>
      </div>
    </>
  );
}

export default Item;
