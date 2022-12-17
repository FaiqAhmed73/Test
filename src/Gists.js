import axios from "axios";
import React, { useState } from "react";
import { Container, Form, Row, Col, Button, Image } from "react-bootstrap";

function Gists() {
  const [Username, setUsername] = React.useState("");
  const [Data, setData] = React.useState("");
  const [ForkedUser, setForkedUser] = useState("");

  var url = "https://api.github.com/users/" + Username + "/gists";
  React.useEffect(() => {
    // const FetchData = async () => {
    //   await axios.get(url).then(function (res) {
    //     console.log(res);
    //   });
    // };
    // FetchData();
  }, []);

  const HandleChange = (e) => {
    setUsername(e.target.value);
    console.log(Username);
  };

  const submit = async (e) => {
    e.preventDefault();
    await axios
      .get(url, {
        auth: "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",
        username: Username,
      })
      .then(function (res) {
        setData(res.data);
        // console.log(fileObj[0]);
        // Object.keys(fileObj)
      });
  };

  const Forledbtn = async (id) => {
    // id.preventDefault();
    await axios
      .get("https://api.github.com/gists/" + id + "/forks", {
        gist_id: id,
      })
      .then((res) => {
        // console.log(res);
        setForkedUser(res.data);
      });
    console.log(ForkedUser);
  };
  return (
    <Container>
      <Row>
        <Col sm={6}>
          <Form onSubmit={submit}>
            <Row className="mt-3 mb-3">
              <Col sm={8}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Control
                    type="text"
                    placeholder="USERNAME"
                    onChange={HandleChange}
                  />
                </Form.Group>
              </Col>
              <Col sm={4}>
                <Button className="w-100" variant="primary" type="submit">
                  Search
                </Button>
              </Col>
            </Row>
          </Form>
          <Row>
            {Data
              ? Data.map((d, i) => {
                  return (
                    <Col lg={4} sm={12}>
                      <div className="Card">
                        <h6>
                          {Object.keys(d.files).map((d, i) => {
                            // console.log();
                            if (d.includes("txt")) {
                              return "File Type: Text";
                            } else if (d.includes("py")) {
                              return "File Type: Python";
                            } else if (d.includes("js")) {
                              return "File Type: JavaScript";
                            }
                          })}
                        </h6>

                        <button
                          className="btn btn-sm btn-primary"
                          onClick={() => Forledbtn(d.id)}
                        >
                          Fatch Forked Details
                        </button>
                      </div>
                    </Col>
                  );
                })
              : ""}
          </Row>
        </Col>
        <Col sm={6}>
          <Row className="justify-center text-center">
            <h1>Showing Person who Forked</h1>
            {ForkedUser
              ? ForkedUser.map((d, i) => {
                  if (d.owner.login) {
                    return (
                      <Col sm={6}>
                        <div className="Card">
                          <a href={""} />
                          <Image src={d.owner.avatar_url} width={"100%"} />
                          <h2>{d.owner.login}</h2>
                        </div>
                      </Col>
                    );
                  } else {
                    return "No User Forked It";
                  }
                })
              : "No One Forked"}
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default Gists;
