
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

function QcResult() {
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
                <CardTitle tag="h4">Qc Result</CardTitle>
              </CardHeader>
              <CardBody>
                <Table responsive>
                  <thead className="text-primary">
                    <tr>
                      <th>Sno</th>
                      <th>Product Plan No</th>
                      <th>Cust Po No</th>
                      <th>Item No</th>
                      <th>Template</th>
                      <th>QC Status</th>
                      <th>Reject Comment</th>
                      <th>Report</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[1, 2, 3, 4, 5].map((rowIndex) => (
                      <tr key={rowIndex}>
                        <td>1</td>
                        <td>112434</td>
                        <td>Bruce Wayne</td>
                        <td>RES-40098</td>
                        <td>DiceWork</td>
                        <td>Rejected</td>
                        <td>Rejected reason</td>
                        <td>
                          <Link to={`/admin/view-report/${rowIndex}`}>
                            <Button className="btn-round btn btn-info">View Report</Button>
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

export default QcResult;
