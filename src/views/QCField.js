
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
} from "reactstrap";
import { Link } from "react-router-dom";

function QCField() {
  return (
    <>
      <div className="content">
        <Row>
          <Col md="12">
            <Card>
              <CardHeader>
                <Row>
                  <Col md="8">
                    <CardTitle tag="h4">Template (DiceWork) - QC Field</CardTitle>
                  </Col>
                  <Col className="text-right">
                    <Link to="/admin/add-qc-value/123">
                      <Button className="btn-round btn btn-info">Add QC Field</Button>
                    </Link>
                  </Col>

                </Row>

              </CardHeader>
              <CardBody>
                <Table responsive>
                  <thead className="text-primary">
                    <tr>
                      <th>Display label</th>
                      <th>Uom</th>
                      <th>Expected Value</th>
                      <th>Minimum tolerance</th>
                      <th>Maximum tolerance</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Serial Number</td>
                      <td>sss</td>
                      <td>2</td>
                      <td>1</td>
                      <td>5</td>
                      <td>
                        <Button className="btn-round btn btn-primary">Edit</Button>&nbsp;
                        <Button className="btn-round btn btn-danger">Delete</Button>&nbsp;
                      </td>
                    </tr>
                    <tr>
                      <td>Face Size</td>
                      <td>sss</td>
                      <td>2</td>
                      <td>1</td>
                      <td>5</td>
                      <td>
                        <Button className="btn-round btn btn-primary">Edit</Button>&nbsp;
                        <Button className="btn-round btn btn-danger">Delete</Button>&nbsp;
                      </td>
                    </tr>
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

export default QCField;
