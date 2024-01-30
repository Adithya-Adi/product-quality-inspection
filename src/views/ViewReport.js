
import React, { useEffect, useState } from "react";

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
  Spinner,
} from "reactstrap";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { baseUrl } from "variables/environment";
import { useParams } from "react-router-dom";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

function ViewReport() {
  const navigate = useNavigate();
  const [item, setItem] = useState(null);
  const [qcFields, setQcFields] = useState(null);
  const { id } = useParams();
  const [loading, setLoading] = useState(false);

  const getItem = async (id) => {
    try {
      setLoading(true);
      const { data: response } = await axios.get(`${baseUrl}/api/item/getById/${id}`);
      setItem(response.data);
      setQcFields(response.data.template.qcField);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getItem(id);
  }, [id])

  const handleDownloadPDF = () => {
    const element = document.querySelector(".card-upgrade");

    html2canvas(element, {
      allowTaint: false,
      removeContainer: true,
      backgroundColor: "#ffffff",
      scale: window.devicePixelRatio,
      useCORS: false,
      windowWidth: "1400px",
    }).then((canvas) => {
      const contentDataURL = canvas.toDataURL("image/png");
      const imgWidth = 210;
      const pageHeight = 295;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      let heightLeft = imgHeight;
      let pdf = new jsPDF("p", "mm", "a4");
      let position = 5;

      pdf.addImage(contentDataURL, "PNG", 0, position, imgWidth, imgHeight);
      heightLeft -= pageHeight;

      while (heightLeft >= 0) {
        position = heightLeft - imgHeight;
        pdf.addPage();
        pdf.addImage(contentDataURL, "PNG", 0, position, imgWidth, imgHeight);
        heightLeft -= pageHeight;
      }
      pdf.save(`report.pdf`);
    });
  };

  return (
    <>
      <div className="content">
        <Row>
          {loading ?
            <Spinner
              color="info"
              type="grow"
            >
              Loading...
            </Spinner>
            :
            <Col className="ml-auto mr-auto">
              <Card className="card-upgrade">
                <CardHeader className="text-center">
                  <CardTitle tag="h4">QC Report</CardTitle>
                </CardHeader>
                <CardBody>
                  <Table className="table" responsive>
                    <thead>
                      <tr>
                        <th />
                        <th className="text-center"></th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Production Plan No</td>
                        <td className="text-center">{item?.productPlanNo}</td>
                      </tr>
                      <tr>
                        <td>Assembly</td>
                        <td className="text-center">{item?.productPlanNo}</td>
                      </tr>
                      <tr>
                        <td>Customer Po No</td>
                        <td className="text-center">{item?.custPoNo}</td>
                      </tr>
                      <tr>
                        <td>Sales Order No</td>
                        <td className="text-center">{item?.salesOrderNo}</td>
                      </tr>

                      <tr>
                        <td>Item No</td>
                        <td className="text-center">{item?.itemNo}</td>
                      </tr>

                      <tr>
                        <td>Draw No</td>
                        <td className="text-center">{item?.drawingNo}</td>
                      </tr>

                      <tr>
                        <td>Inspected Date</td>
                        <td className="text-center">{item?.inspectedDate}</td>
                      </tr>

                      <tr>
                        <td>Qc Status</td>
                        <td className="text-center" style={{ color: item?.qcStatus === 'Rejected' ? 'red' : 'green' }}>
                          {item?.qcStatus}
                        </td>
                      </tr>

                      <tr>
                        <td>Serial No</td>
                        <td className="text-center">{item?.serialNo}</td>
                      </tr>

                      <tr>
                        <td>BCD Ref</td>
                        <td className="text-center">{item?.bcdRef}</td>
                      </tr>

                      <tr>
                        <td>BCD Order No</td>
                        <td className="text-center">{item?.bcdOrderNo}</td>
                      </tr>

                      <tr>
                        <td>Cust Phone No</td>
                        <td className="text-center">{item?.customerPhone}</td>
                      </tr>

                      <tr>
                        <td>Order Due Date</td>
                        <td className="text-center">{item?.orderDueDate}</td>
                      </tr>

                      <tr>
                        <td>Sales Order</td>
                        <td className="text-center">{item?.salesOrderNo}</td>
                      </tr>

                      <tr>
                        <td>Shell Material</td>
                        <td className="text-center">{item?.shellMaterial}</td>
                      </tr>

                      <tr>
                        <td>Shipped Date</td>
                        <td className="text-center">{item?.shippedDate}</td>
                      </tr>

                      <tr>
                        <td>Tag No</td>
                        <td className="text-center">{item?.tagNo}</td>
                      </tr>

                      <tr>
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
                      {qcFields?.map((qcField, index) => (
                        <tr>
                          <td>{qcField.displayLabel}</td>
                          <td className="text-center">{item.qcReading[index]}</td>
                          <td className="text-center">{qcField.minimumTolerance}</td>
                          <td className="text-center">{qcField.maximumTolerance}</td>
                        </tr>
                      ))}

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
                    onClick={handleDownloadPDF}
                  >
                    Download Report
                  </Button>
                </CardBody>
              </Card>
            </Col>
          }
        </Row>


      </div>
    </>
  );
}

export default ViewReport;
