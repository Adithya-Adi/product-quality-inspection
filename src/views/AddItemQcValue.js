
import React, { useState, useEffect } from "react";
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

function AddItemQcValue() {
  const [message, setMessage] = useState(null);
  const [status, setStatus] = useState(null);
  const { id } = useParams();
  const { prodNo } = useParams();
  const { templateNo } = useParams();
  const [qcFields, setQcFields] = useState(null);
  const [formData, setFormData] = useState({
    assemblyNo: "",
    serialNo: "",
    bcdRef: "",
    bcdOrderNo: "",
    customerPhone: "",
    inspectedDate: "",
    orderDueDate: "",
    shellMaterial: "",
    tagNo: "",
    shippedDate: "",
    qcFields: [],
  });
  const [qcReading, setQcReading] = useState([]);

  const getQcField = async (templateNo) => {
    try {
      const { data: response } = await axios.get(`${baseUrl}/api/template/qcField/getAll/${templateNo}`);
      setQcFields(response.qcFields);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getQcField(templateNo);
  }, [templateNo])

  const navigate = useNavigate();

  const handleQcReadingChange = (index, value) => {
    const updateReading = qcReading;
    updateReading[index] = value;
    setQcReading(updateReading);
  }

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
    if (qcReading.length === 0) {
      setMessage("Please fill in all fields.");
      setStatus("danger");
      return;
    }

    try {
      await axios.patch(`${baseUrl}/api/item/update/${id}`,
        {
          ...formData,
          qcReading
        });
      setStatus("success");
      setMessage("QC Value Added");
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
                <CardTitle tag="h5">Add Item's QC Value</CardTitle>
              </CardHeader>
              <CardBody>
                <Form onSubmit={handleSubmit}>
                  <Row>
                    <Col className="pr-1" md="6">
                      <FormGroup>
                        <label>Product Plan No</label>
                        <Input
                          placeholder={prodNo}
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
                          value={formData.assemblyNo}
                          onChange={handleInputChange}
                          name="assemblyNo"
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
                          value={formData.serialNo}
                          onChange={handleInputChange}
                          name="serialNo"
                        />
                      </FormGroup>

                    </Col>
                    <Col className="px-1" md="4">
                      <FormGroup>
                        <label>BCD Ref</label>
                        <Input
                          placeholder="BCD Ref *"
                          type="text"
                          value={formData.bcdRef}
                          onChange={handleInputChange}
                          name="bcdRef"
                        />
                      </FormGroup>

                    </Col>
                    <Col className="pl-1" md="4">
                      <FormGroup>
                        <label>BCD Order No</label>
                        <Input
                          placeholder="BCD Order No *"
                          type="text"
                          value={formData.bcdOrderNo}
                          onChange={handleInputChange}
                          name="bcdOrderNo"
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
                          value={formData.customerPhone}
                          onChange={handleInputChange}
                          name="customerPhone"
                        />
                      </FormGroup>

                    </Col>
                    <Col className="px-1" md="4">
                      <FormGroup>
                        <label>Inspected Date</label>
                        <Input
                          placeholder="Inspected Date *"
                          type="date"
                          value={formData.inspectedDate}
                          onChange={handleInputChange}
                          name="inspectedDate"
                        />
                      </FormGroup>

                    </Col>
                    <Col className="pl-1" md="4">
                      <FormGroup>
                        <label>Tag No</label>
                        <Input
                          placeholder="Tag No *"
                          type="text"
                          value={formData.tagNo}
                          onChange={handleInputChange}
                          name="tagNo"
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
                          value={formData.shellMaterial}
                          onChange={handleInputChange}
                          name="shellMaterial"
                        />
                      </FormGroup>
                    </Col>
                    <Col className="px-1" md="4">
                      <FormGroup>
                        <label>Order Due Date</label>
                        <Input
                          placeholder="Order Due Date *"
                          type="date"
                          value={formData.orderDueDate}
                          onChange={handleInputChange}
                          name="orderDueDate"
                        />
                      </FormGroup>

                    </Col>
                    <Col className="pl-1" md="4">
                      <FormGroup>
                        <label>Shipped Date</label>
                        <Input
                          placeholder="Shipped Date *"
                          type="date"
                          value={formData.shippedDate}
                          onChange={handleInputChange}
                          name="shippedDate"
                        />
                      </FormGroup>
                    </Col>
                  </Row>


                  <hr />
                  <CardTitle tag="h5">Please Enter QC Reading:</CardTitle>
                  {qcFields?.map((field, index) => (
                    <FormGroup key={index}>
                      <label>{field.displayLabel}</label>
                      <Input
                        placeholder={`${field.displayLabel} *`}
                        type="number"
                        // value={qcReading[index] || ""}
                        onChange={(e) => handleQcReadingChange(index, e.target.value)}
                      />
                    </FormGroup>
                  ))}
                  <hr />

                  <Row>
                    <Col md="12">
                      <FormGroup>
                        <label>Inspector Comment</label>
                        <Input
                          type="textarea"
                          value={formData.inspectorComment}
                          onChange={handleInputChange}
                          name="inspectorComment"
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  {message &&
                    <Alert color={status}>
                      {message}
                    </Alert>
                  }
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
