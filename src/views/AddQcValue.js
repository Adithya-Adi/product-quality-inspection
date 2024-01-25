
import React from "react";
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  FormGroup,
  Form,
  Input,
  Row,
  Col,
} from "reactstrap";
import { useNavigate } from "react-router-dom";

function AddQcValue() {
  const navigate = useNavigate();
  return (
    <>
      <div className="content">
        <Row>
          <Col >
            <Card className="card-user">
              <CardHeader>
                <CardTitle tag="h5">Add QC Field</CardTitle>
              </CardHeader>
              <CardBody>
                <Form>

                  <Row>
                    <Col className="pr-1" md="6">
                      <FormGroup>
                        <label>Display label</label>
                        <Input
                          placeholder="Display label *"
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                    <Col className="pl-1" md="6">
                      <FormGroup>
                        <label>Uom</label>
                        <Input
                          placeholder="Uom *"
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col md="12">

                    </Col>
                  </Row>
                  <Row>
                    <Col className="pr-1" md="4">
                      <FormGroup>
                        <label>Expected Value</label>
                        <Input
                          placeholder="Expected Value *"
                          type="text"
                        />
                      </FormGroup>

                    </Col>
                    <Col className="px-1" md="4">
                      <FormGroup>
                        <label>Minimum Tolerance</label>
                        <Input
                          placeholder="Minimum Tolerance *"
                          type="text"
                        />
                      </FormGroup>

                    </Col>
                    <Col className="pl-1" md="4">
                      <FormGroup>
                        <label>Maximum Tolerance</label>
                        <Input
                          placeholder="Maximum Tolerance *"
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                  </Row>

                  <Row>
                    <div className="update ml-auto mr-auto">
                      <Button
                        className="btn-round"
                        color="success"
                        type="submit"
                      >
                        Add
                      </Button>
                      <Button
                        className="btn-round"
                        color="primary"
                        onClick={() => navigate(-1)}
                      >
                        Back
                      </Button>
                    </div>
                  </Row>
                </Form>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default AddQcValue;
