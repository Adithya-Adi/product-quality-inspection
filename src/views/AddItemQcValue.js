
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

function AddItemQcValue() {
  const navigate = useNavigate();
  return (
    <>
      <div className="content">
        <Row>
          <Col >
            <Card className="card-user">
              <CardHeader>
                <CardTitle tag="h5">Add Item's QC Value</CardTitle>
              </CardHeader>
              <CardBody>
                <Form>

                  <Row>
                    <Col className="pr-1" md="6">
                      <FormGroup>
                        <label>Product Plan No</label>
                        <Input
                          placeholder="122324"
                          type="text"
                          disabled
                        />
                      </FormGroup>
                    </Col>
                    <Col className="pl-1" md="6">
                      <FormGroup>
                        <label>Assembly No</label>
                        <Input
                          placeholder="Assembly No *"
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
                        <label>Serial No</label>
                        <Input
                          placeholder="Serial No *"
                          type="text"
                        />
                      </FormGroup>

                    </Col>
                    <Col className="px-1" md="4">
                      <FormGroup>
                        <label>BCD Ref</label>
                        <Input
                          placeholder="BCD Ref *"
                          type="text"
                        />
                      </FormGroup>

                    </Col>
                    <Col className="pl-1" md="4">
                      <FormGroup>
                        <label>BCD Order No</label>
                        <Input
                          placeholder="BCD Order No *"
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                  </Row>

                  <Row>
                    <Col className="pr-1" md="4">
                      <FormGroup>
                        <label>Customer Phone</label>
                        <Input
                          placeholder="Customer Phone *"
                          type="text"
                        />
                      </FormGroup>

                    </Col>
                    <Col className="px-1" md="4">
                      <FormGroup>
                        <label>Inspected Date</label>
                        <Input
                          placeholder="Inspected Date *"
                          type="date"
                        />
                      </FormGroup>

                    </Col>
                    <Col className="pl-1" md="4">
                      <FormGroup>
                        <label>Drawing No</label>
                        <Input
                          placeholder="Drawing No *"
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                  </Row>

                  <Row>
                    <Col className="pr-1" md="4">
                      <FormGroup>
                        <label>Item No</label>
                        <Input
                          placeholder="Item No *"
                          type="text"
                        />
                      </FormGroup>

                    </Col>
                    <Col className="px-1" md="4">
                      <FormGroup>
                        <label>Order Due Date</label>
                        <Input
                          placeholder="Order Due Date *"
                          type="date"
                        />
                      </FormGroup>

                    </Col>
                    <Col className="pl-1" md="4">
                      <FormGroup>
                        <label>Sales Order</label>
                        <Input
                          placeholder="Sales Order *"
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                  </Row>

                  <Row>
                    <Col className="pr-1" md="4">
                      <FormGroup>
                        <label>Shell Material</label>
                        <Input
                          placeholder="Shell Material *"
                          type="text"
                        />
                      </FormGroup>

                    </Col>
                    <Col className="px-1" md="4">
                      <FormGroup>
                        <label>Shipped Date</label>
                        <Input
                          placeholder="Shipped Date *"
                          type="date"
                        />
                      </FormGroup>

                    </Col>
                    <Col className="pl-1" md="4">
                      <FormGroup>
                        <label>Tag No</label>
                        <Input
                          placeholder="Tag No *"
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <hr />
                  <CardTitle tag="h5">Please Enter QC Reading:</CardTitle>
                  <FormGroup>
                    <label>Serial Number</label>
                    <Input
                      placeholder="Serial Number *"
                      type="number"
                    />
                  </FormGroup>

                  <FormGroup>
                    <label>Face Size</label>
                    <Input
                      placeholder="Face Size *"
                      type="number"
                    />
                  </FormGroup>
                  <hr />

                  <Row>
                    <Col md="12">
                      <FormGroup>
                        <label>Inspector Comment</label>
                        <Input
                          type="textarea"
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

export default AddItemQcValue;
