
import React, { useState, useEffect } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Table,
  Row,
  Col,
  Button,
  Spinner,
} from "reactstrap";
import { Link } from "react-router-dom";
import axios from "axios";
import { baseUrl } from "variables/environment";

function QcResult() {
  const [items, setItems] = useState(null);
  const [loading, setLoading] = useState(false);

  const getItem = async () => {
    try {
      setLoading(true);
      const { data: response } = await axios.get(`${baseUrl}/api/item/getAll`);
      const filteredItems = response.data.filter(item => item.qcStatus);
      setItems(filteredItems);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getItem();
  }, [])
  return (
    <>
      <div className="content">
        <Row>
          <Col md="12">
            <Card>
              <CardHeader>
                <CardTitle tag="h4">Qc Result</CardTitle>
              </CardHeader>
              <CardBody>
                <Table responsive>
                  <thead className="text-primary">
                    <tr>
                      <th>Sno</th>
                      <th>Product Plan No</th>
                      <th>Cust Po No</th>
                      <th>Item No</th>
                      <th>Template</th>
                      <th>QC Status</th>
                      <th>Reject Comment</th>
                      <th>Report</th>
                    </tr>
                  </thead>
                  <tbody>
                    {items?.map((item, index) => (
                      <tr key={index}>
                        <td>{index}</td>
                        <td>{item.productPlanNo}</td>
                        <td>{item.custPoNo}</td>
                        <td>{item.itemNo}</td>
                        <td>{item.drawingNo}</td>
                        <td>{item.qcStatus}</td>
                        <td>{item.rejectComment}</td>
                        <td>
                          <Link to={`/admin/view-report/${item._id}`}>
                            <Button className="btn-round btn btn-info">View Report</Button>
                          </Link>
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
      </div>
    </>
  );
}

export default QcResult;
