
import React from "react";

// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Table,
  Row,
  Col,
} from "reactstrap";
import { useNavigate } from "react-router-dom";

function ViewReport() {
  const navigate = useNavigate();
  return (
    <>
      <div className="content">
        <Row>
          <Col className="ml-auto mr-auto">
            <Card className="card-upgrade">
              <CardHeader className="text-center">
                <CardTitle tag="h4">QC Report of DiceWork</CardTitle>
              </CardHeader>
              <CardBody>
                <Table responsive>
                  <thead>
                    <tr>
                      <th />
                      <th className="text-center"></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Production Plan No</td>
                      <td className="text-center">12342</td>
                    </tr>
                    <tr>
                      <td>Assembly</td>
                      <td className="text-center">12342</td>
                    </tr>
                    <tr>
                      <td>Serial No</td>
                      <td className="text-center">34234</td>
                    </tr>
                    <tr>
                      <td>Customer Po No</td>
                      <td className="text-center">Bruce wayne</td>
                    </tr>
                    <tr>
                      <td>Sales Order No</td>
                      <td className="text-center">asd</td>
                    </tr>

                    <tr>
                      <td>Item No</td>
                      <td className="text-center">asd</td>
                    </tr>

                    <tr>
                      <td>Draw No</td>
                      <td className="text-center">S-234-2</td>
                    </tr>

                    <tr>
                      <td>Inspected Date</td>
                      <td className="text-center">Bla Bla</td>
                    </tr>

                    <tr>
                      <td>Qc Status</td>
                      <td className="text-center">Bla Bla</td>
                    </tr>

                    <tr>
                      <td>Serial No</td>
                      <td className="text-center">Bla Bla</td>
                    </tr>

                    <tr>
                      <td>BCD Ref</td>
                      <td className="text-center">Bla Bla</td>
                    </tr>

                    <tr>
                      <td>BCD Order No</td>
                      <td className="text-center">Bla Bla</td>
                    </tr>

                    <tr>
                      <td>Cust Phone No</td>
                      <td className="text-center">Bla Bla</td>
                    </tr>

                    <tr>
                      <td>Order Due Date</td>
                      <td className="text-center">Bla Bla</td>
                    </tr>

                    <tr>
                      <td>Sales Order</td>
                      <td className="text-center">Bla Bla</td>
                    </tr>

                    <tr>
                      <td>Shell Material</td>
                      <td className="text-center">Bla Bla</td>
                    </tr>

                    <tr>
                      <td>Shipped Date</td>
                      <td className="text-center">Bla Bla</td>
                    </tr>

                    <tr>
                      <td>Tag No</td>
                      <td className="text-center">Bla Bla</td>
                    </tr>

                    <tr>
                      {/* <td className="text-center" />
                      
                      <td className="text-center">
                       
                      </td> */}
                    </tr>
                  </tbody>
                </Table>
                <CardTitle tag="h4">QC Reading value:</CardTitle>

                <Table responsive>
                  <thead>
                    <tr>
                      <th />
                      <th className="text-center">Actual Value</th>
                      <th className="text-center">Minimum Value</th>
                      <th className="text-center">Maximum Value</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Serial Number</td>
                      <td className="text-center">1</td>
                      <td className="text-center">1</td>
                      <td className="text-center">3</td>
                    </tr>

                    <tr>
                      <td>Face Size</td>
                      <td className="text-center">2</td>
                      <td className="text-center">1</td>
                      <td className="text-center">5</td>
                    </tr>


                  </tbody>
                </Table>
                <Button
                  className="btn-round"
                  color="primary"
                  onClick={() => navigate(-1)}
                >
                  Back
                </Button>
                <Button
                  className="btn-round"
                  color="success"
                >
                  Download Report
                </Button>
              </CardBody>
            </Card>
          </Col>
        </Row>


      </div>
    </>
  );
}

export default ViewReport;
