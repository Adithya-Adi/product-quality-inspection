
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

function Templates() {
  const [templates, setTemplates] = useState(null);
  const [message, setMessage] = useState(null);
  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(false);
  const getTemplate = async () => {
    try {
      setLoading(true);
      const { data: response } = await axios.get(`${baseUrl}/api/template/getAll`);
      setTemplates(response.data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }
  useEffect(() => {
    getTemplate();
  }, [])

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm("Are you sure you want to delete?");

    if (!confirmDelete) {
      return;
    }
    try {
      await axios.delete(`${baseUrl}/api/template/delete/${id}`);
      setStatus("success");
      setMessage("Template Deleted");
      getTemplate();
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
                    <CardTitle tag="h4">Template</CardTitle>
                  </Col>

                  <Col className="text-right">
                    <Link to={"/admin/add-template"}>
                      <Button className="btn-round btn btn-info">Add template</Button>
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
                      <th>Template Name</th>
                      <th>Description</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {templates?.map(template => (
                      <tr>
                        <td>{template.templateName}</td>
                        <td>{template.description}</td>
                        <td>
                          {/* <Button className="btn-round btn btn-primary">Edit</Button>&nbsp; */}
                          <Button className="btn-round btn btn-danger" onClick={() => handleDelete(template._id)}>Delete</Button>&nbsp;
                          <Link to={`/admin/view-qc-field/${template._id}`}>
                            <Button className="btn-round btn btn-success">View QC Values</Button>
                          </Link>
                        </td>
                      </tr>
                    ))}
                    {templates?.length === 0 &&
                      <p>No Templates Found</p>
                    }
                  </tbody>
                  {loading &&
                    <Spinner
                      color="info"
                      type="grow"
                    >
                      Loading...
                    </Spinner>
                  }
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
