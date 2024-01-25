
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
function AddTemplate() {
  const navigate = useNavigate();
  return (
    <>
      <div className="content">
        <Row>
          <Col >
            <Card className="card-user">
              <CardHeader>
                <CardTitle tag="h5">Add Template</CardTitle>
              </CardHeader>
              <CardBody>
                <Form>

                  <FormGroup>
                    <label>Template Name</label>
                    <Input
                      placeholder="Template Name"
                      type="text"
                    />
                  </FormGroup>

                  <Row>
                    <Col md="12">
                      <FormGroup>
                        <label>Description</label>
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

export default AddTemplate;
