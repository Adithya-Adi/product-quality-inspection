
import React, { useEffect, useState } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Table,
  Row,
  Col,
  Button,
  Alert,
  Spinner,
} from "reactstrap";
import { Link } from "react-router-dom";
import axios from "axios";
import { baseUrl } from "variables/environment";
import { useParams } from "react-router-dom";

function QCField() {
  const [template, setTemplate] = useState(null);
  const [qcFields, setQcFields] = useState(null);
  const [message, setMessage] = useState(null);
  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(false);

  const { id } = useParams();

  const getQcField = async (id) => {
    try {
      setLoading(true);
      const { data: response } = await axios.get(`${baseUrl}/api/template/qcField/getAll/${id}`);
      setQcFields(response.qcFields);
      setTemplate(response.template);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getQcField(id);
  }, [id])

  const handleDelete = async (qcFieldId) => {
    const confirmDelete = window.confirm("Are you sure you want to delete?");

    if (!confirmDelete) {
      return;
    }
    try {
      await axios.delete(`${baseUrl}/api/template/qcField/delete/${id}/${qcFieldId}`);
      setStatus("success");
      setMessage("Qc Field Deleted");
      getQcField(id);
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
          <Col md="12">
            <Card>
              <CardHeader>
                <Row>
                  <Col md="8">
                    <CardTitle tag="h4">Template ({template?.templateName}) - QC Field</CardTitle>
                  </Col>
                  <Col className="text-right">
                    <Link to={`/admin/add-qc-value/${id}`}>
                      <Button className="btn-round btn btn-info">Add QC Field</Button>
                    </Link>
                  </Col>

                </Row>

              </CardHeader>
              {message &&
                <Alert color={status}>
                  {message}
                </Alert>
              }
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
                    {qcFields?.map((qcField) => (
                      <tr>
                        <td>{qcField.displayLabel}</td>
                        <td>{qcField.uom}</td>
                        <td>{qcField.expectedValue}</td>
                        <td>{qcField.minimumTolerance}</td>
                        <td>{qcField.maximumTolerance}</td>
                        <td>
                          {/* <Button className="btn-round btn btn-primary">Edit</Button>&nbsp; */}
                          <Button className="btn-round btn btn-danger" onClick={() => handleDelete(qcField._id)}>Delete</Button>&nbsp;
                        </td>
                      </tr>
                    ))
                    }
                    {qcFields?.length === 0 &&
                      <p>No Qc Field Found</p>
                    }
                    {loading &&
                      <Spinner
                        color="info"
                        type="grow"
                      >
                        Loading...
                      </Spinner>
                    }
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
