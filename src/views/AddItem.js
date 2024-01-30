
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

function AddItem() {
  const navigate = useNavigate();
  const [message, setMessage] = useState(null);
  const [status, setStatus] = useState(null);

  const [formData, setFormData] = useState({
    productPlanNo: "",
    custPoNo: "",
    salesOrderNo: "",
    itemNo: "",
    drawingNo: ""
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
      await axios.post(`${baseUrl}/api/item/add`, formData);
      setStatus("success");
      setMessage("Item Added");
      setTimeout(() => {
        setMessage(null);
      }, 2000);
    } catch (error) {
      console.log(error.response.data);
      setMessage(error.response.data.message);
      setStatus("danger");
    }
  }

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
                {message &&
                  <Alert color={status}>
                    {message}
                  </Alert>
                }
                <Form onSubmit={handleSubmit}>
                  <Row>
                    <Col className="pr-1" md="6">
                      <FormGroup>
                        <label>Product Plan No</label>
                        <Input
                          placeholder="Product Plan No *"
                          type="text"
                          value={formData.productPlanNo}
                          onChange={handleInputChange}
                          name="productPlanNo"
                        />
                      </FormGroup>
                    </Col>
                    <Col className="pl-1" md="6">
                      <FormGroup>
                        <label>Cust Po No</label>
                        <Input
                          placeholder="Cust Po No *"
                          type="text"
                          value={formData.custPoNo}
                          onChange={handleInputChange}
                          name="custPoNo"
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
                          value={formData.salesOrderNo}
                          onChange={handleInputChange}
                          name="salesOrderNo"
                        />
                      </FormGroup>

                    </Col>
                    <Col className="px-1" md="4">
                      <FormGroup>
                        <label>Item No</label>
                        <Input
                          placeholder="Item No *"
                          type="text"
                          value={formData.itemNo}
                          onChange={handleInputChange}
                          name="itemNo"
                        />
                      </FormGroup>

                    </Col>
                    <Col className="pl-1" md="4">
                      <FormGroup>
                        <label>Drawing No</label>
                        <Input
                          placeholder="Drawing No *"
                          type="text"
                          value={formData.drawingNo}
                          onChange={handleInputChange}
                          name="drawingNo"
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
