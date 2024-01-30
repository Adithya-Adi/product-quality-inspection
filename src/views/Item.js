
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
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Spinner,
} from "reactstrap";
import { Link } from "react-router-dom";
import axios from "axios";
import { baseUrl } from "variables/environment";

function Item() {
  const [items, setItems] = useState(null);
  const [templates, setTemplates] = useState(null);
  const [openDropdownIndex, setOpenDropdownIndex] = useState(null);
  const [message, setMessage] = useState(null);
  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(false);

  const toggleDropdown = (index) => {
    setOpenDropdownIndex(openDropdownIndex === index ? null : index);
  }

  const getTemplate = async () => {
    try {
      const { data: response } = await axios.get(`${baseUrl}/api/template/getAll`);
      const filteredTemplates = response.data.filter(template => template.qcField.length !== 0);
      setTemplates(filteredTemplates);
    } catch (error) {
      console.error(error);
    }
  }

  const getItem = async () => {
    try {
      setLoading(true);
      const { data: response } = await axios.get(`${baseUrl}/api/item/getAll`);
      setItems(response.data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }
  useEffect(() => {
    getItem();
    getTemplate();
  }, [])


  const handleTemplateChange = async (index, template) => {
    const updatedItems = [...items];
    updatedItems[index].template = template;
    const itemId = updatedItems[index]._id;
    setItems(updatedItems);
    try {
      await axios.patch(`${baseUrl}/api/item/assignTemplate/${itemId}/${template._id}`);
      setStatus("success");
      setMessage("Template Assigned");
      setTimeout(() => {
        setMessage(null);
      }, 2000);
    } catch (error) {
      console.log(error.response.data);
      setMessage(error.response.data.message);
      setStatus("danger");
    }
  }

  const handleDelete = async (itemId) => {
    const confirmDelete = window.confirm("Are you sure you want to delete?");
    if (!confirmDelete) {
      return;
    }
    try {
      await axios.delete(`${baseUrl}/api/item/delete/${itemId}`);
      setStatus("success");
      setMessage("Item Deleted");
      getItem();
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
                    <CardTitle tag="h4">Item</CardTitle>
                  </Col>
                  <Col className="text-right">
                    <Link to={"/admin/add-item"}>
                      <Button className="btn-round btn btn-info">Add Item</Button>
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
                      <th>Sno</th>
                      <th>Product Plan No</th>
                      <th>Cust Po No</th>
                      <th>Sales Order no</th>
                      <th>Item No</th>
                      <th>Drawing No</th>
                      <th>Template</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {items?.map((item, index) => (
                      <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{item.productPlanNo}</td>
                        <td>{item.custPoNo}</td>
                        <td>{item.salesOrderNo}</td>
                        <td>{item.itemNo}</td>
                        <td>{item.drawingNo}</td>
                        <td>
                          <Dropdown isOpen={openDropdownIndex === index} toggle={() => toggleDropdown(index)}>
                            <DropdownToggle caret>
                              {item?.template ? item.template.templateName : 'Select Template'}
                            </DropdownToggle>
                            <DropdownMenu>
                              {templates.map((template, templateIndex) => (
                                <DropdownItem
                                  key={templateIndex}
                                  onClick={() => {
                                    handleTemplateChange(index, template);
                                    toggleDropdown(index);
                                  }}
                                >
                                  {template.templateName}
                                </DropdownItem>
                              ))}
                            </DropdownMenu>
                          </Dropdown>
                        </td>

                        <td>
                          <Button className="btn-round btn btn-danger" onClick={() => handleDelete(item._id)}>Delete</Button>&nbsp;
                        </td>
                        <td>
                          {item?.template &&
                            <Link to={`/admin/add-item-qc-value/${item._id}/${item.productPlanNo}/${item.template._id}`}>
                              <Button className="btn-round btn btn-success" >Add QC Value</Button>
                            </Link>
                          }
                        </td>
                      </tr>
                    ))}

                    {items?.length === 0 &&
                      <p>No Item Found</p>
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
      </div >
    </>
  );
}

export default Item;
