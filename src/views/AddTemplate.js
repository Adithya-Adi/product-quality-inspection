
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

function AddTemplate() {
  const navigate = useNavigate();
  const [message, setMessage] = useState(null);
  const [status, setStatus] = useState(null);
  const [formData, setFormData] = useState({
    templateName: "",
    description: "",
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
    if (!formData.templateName || !formData.description) {
      setMessage("Please fill in all fields.");
      setStatus("danger");
      return;
    }
    try {
      await axios.post(`${baseUrl}/api/template/add`, formData);
      setStatus("success");
      setMessage("Template Added");
      setTimeout(() => {
        setMessage(null);
      }, 2000);
    } catch (error) {
      console.log(error.response.data);
      setMessage(error.response.data.message);
      setStatus("danger");
    }
  };

  return (
    <>
      <div className="content">
        <Row>
          <Col>
            <Card className="card-user">
              <CardHeader>
                <CardTitle tag="h5">Add Template</CardTitle>
              </CardHeader>
              <CardBody>
                {message &&
                  <Alert color={status}>
                    {message}
                  </Alert>
                }
                <Form onSubmit={handleSubmit}>
                  <FormGroup>
                    <label>Template Name</label>
                    <Input
                      name="templateName"
                      placeholder="Template Name"
                      type="text"
                      value={formData.templateName}
                      onChange={handleInputChange}
                    />
                  </FormGroup>

                  <Row>
                    <Col md="12">
                      <FormGroup>
                        <label>Description</label>
                        <Input
                          name="description"
                          type="textarea"
                          value={formData.description}
                          onChange={handleInputChange}
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <div className="update ml-auto mr-auto">
                      <Button className="btn-round" color="success" type="submit">
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