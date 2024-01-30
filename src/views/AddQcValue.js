
import React, { useState } from "react";
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
  Alert,
} from "reactstrap";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { baseUrl } from "variables/environment";
import { useParams } from "react-router-dom";

function AddQcValue() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(null);
  const [status, setStatus] = useState(null);
  const [formData, setFormData] = useState({
    displayLabel: "",
    uom: "",
    expectedValue: 0,
    minimumTolerance: 0,
    maximumTolerance: 0
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    for (const key in formData) {
      if (formData.hasOwnProperty(key) && (formData[key] === "" || formData[key] === null)) {
        setMessage("Please fill in all fields.");
        setStatus("danger");
        return;
      }
    }
    try {
      setLoading(true);
      await axios.post(`${baseUrl}/api/template/qcField/add/${id}`, formData);
      setStatus("success");
      setMessage("QC Field Added");
      setTimeout(() => {
        setMessage(null);
      }, 2000);
    } catch (error) {
      console.log(error.response.data);
      setMessage(error.response.data.message);
      setStatus("danger");
    }finally {
      setLoading(false);
    }
  }

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
                {message &&
                  <Alert color={status}>
                    {message}
                  </Alert>
                }
                <Form onSubmit={handleSubmit}>
                  <Row>
                    <Col className="pr-1" md="6">
                      <FormGroup>
                        <label>Display label</label>
                        <Input
                          placeholder="Display label *"
                          type="text"
                          value={formData.displayLabel}
                          onChange={handleInputChange}
                          name="displayLabel"
                        />
                      </FormGroup>
                    </Col>
                    <Col className="pl-1" md="6">
                      <FormGroup>
                        <label>Uom</label>
                        <Input
                          placeholder="Uom *"
                          type="text"
                          value={formData.uom}
                          onChange={handleInputChange}
                          name="uom"
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
                          type="number"
                          value={formData.expectedValue}
                          onChange={handleInputChange}
                          name="expectedValue"
                        />
                      </FormGroup>

                    </Col>
                    <Col className="px-1" md="4">
                      <FormGroup>
                        <label>Minimum Tolerance</label>
                        <Input
                          placeholder="Minimum Tolerance *"
                          type="number"
                          value={formData.minimumTolerance}
                          onChange={handleInputChange}
                          name="minimumTolerance"
                        />
                      </FormGroup>

                    </Col>
                    <Col className="pl-1" md="4">
                      <FormGroup>
                        <label>Maximum Tolerance</label>
                        <Input
                          placeholder="Maximum Tolerance *"
                          type="number"
                          value={formData.maximumTolerance}
                          onChange={handleInputChange}
                          name="maximumTolerance"
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
                        {loading ? "Please Wait..."
                          : "Add"
                        }
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
