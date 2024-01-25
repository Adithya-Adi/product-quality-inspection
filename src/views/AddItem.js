
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

function AddItem() {
  const navigate = useNavigate();
  return (
    <>
      <div className="content">
        <Row>
          <Col >
            <Card className="card-user">
              <CardHeader>
                <CardTitle tag="h5">Add Item</CardTitle>
              </CardHeader>
              <CardBody>
                <Form>

                  <Row>
                    <Col className="pr-1" md="6">
                      <FormGroup>
                        <label>Product Plan No</label>
                        <Input
                          placeholder="Product Plan No *"
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                    <Col className="pl-1" md="6">
                      <FormGroup>
                        <label>Cust Po No</label>
                        <Input
                          placeholder="Cust Po No *"
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
                        <label>Sales Order No</label>
                        <Input
                          placeholder="Sales Order No *"
                          type="text"
                        />
                      </FormGroup>

                    </Col>
                    <Col className="px-1" md="4">
                      <FormGroup>
                        <label>Item No</label>
                        <Input
                          placeholder="Item No *"
                          type="text"
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

export default AddItem;
