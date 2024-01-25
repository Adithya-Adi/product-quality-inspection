
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

function Templates() {
  return (
    <>
      <div className="content">
        <Row>
          <Col md="12">
            <Card>
              <CardHeader>
                <Row>
                  <Col md="8">
                    <CardTitle tag="h4">Template</CardTitle>
                  </Col>
                  <Col className="text-right">
                    <Link to={"/admin/add-template"}>
                      <Button className="btn-round btn btn-info">Add template</Button>
                    </Link>
                  </Col>

                </Row>

              </CardHeader>
              <CardBody>
                <Table responsive>
                  <thead className="text-primary">
                    <tr>
                      <th>Template Name</th>
                      <th>Description</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>DiceWrok</td>
                      <td>Simple Die for Rework</td>
                      <td>
                        <Button className="btn-round btn btn-primary">Edit</Button>&nbsp;
                        <Button className="btn-round btn btn-danger">Delete</Button>&nbsp;
                        <Link to={"/admin/view-qc-field/123"}>
                          <Button className="btn-round btn btn-success">View QC Values</Button>
                        </Link>
                      </td>
                    </tr>
                    <tr>
                      <td>Anvil Rework</td>
                      <td>Simple Anvil for Rework</td>
                      <td>
                        <Button className="btn-round btn btn-primary">Edit</Button>&nbsp;
                        <Button className="btn-round btn btn-danger">Delete</Button>&nbsp;
                        <Link to={"/admin/view-qc-field/123"}>
                          <Button className="btn-round btn btn-success">View QC Values</Button>
                        </Link>
                      </td>
                    </tr>
                    <tr>
                      <td>Die CLone</td>
                      <td>Copy format same as WordDoc</td>
                      <td>
                        <Button className="btn-round btn btn-primary">Edit</Button>&nbsp;
                        <Button className="btn-round btn btn-danger">Delete</Button>&nbsp;
                        <Link to={"/admin/view-qc-field/123"}>
                          <Button className="btn-round btn btn-success">View QC Values</Button>
                        </Link>
                      </td>
                    </tr>
                    <tr>
                      <td>ANC2</td>
                      <td>ANC2 Pending</td>
                      <td>
                        <Button className="btn-round btn btn-primary">Edit</Button>&nbsp;
                        <Button className="btn-round btn btn-danger">Delete</Button>&nbsp;
                        <Link to={"/admin/view-qc-field/123"}>
                          <Button className="btn-round btn btn-success">View QC Values</Button>
                        </Link>
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

export default Templates;
