import { Card } from "react-bootstrap";

const Technology = () => {
  return (
    <div className="col-sm-12 col-md-8 col-lg-7 ">
      <Card.Body>
        <Card.Title className="text_technology_heading">
          Technology
        </Card.Title>
        <Card.Text>
          <span className="fw-bold">React js</span> is a declarative,
          efficient, and flexible JavaScript library for building
          reusable UI components.used for building interactive user
          interfaces and web applications quickly and efficiently with
          significantly less code.
          <Card.Text>
            <span className="fw-bold">Next js</span> uses Node.js (a
            JavaScript runtime) under the hood, which makes it possible
            to execute JavaScript server-side—i.e. server-side rendering
            (SSR).
            <Card.Text>
              <span className="fw-bold"> React Native</span> is an
              open-source JavaScript framework, designed for building
              apps on multiple platforms like iOS, Android, and also web
              applications.
              <Card.Text>
                <span className="fw-bold"> React Redux</span> It allows
                React components to read data from a Redux Store, and
                dispatch Actions to the Store to update data
                <Card.Text>
                  <span className="fw-bold">CSS:</span>it is used for
                  describing the presentation of a document written in a
                  markup language
                </Card.Text>
              </Card.Text>
            </Card.Text>
          </Card.Text>
        </Card.Text>
        <Card.Title className="text-bold">
          Node Js, Express js, MongoDB, Bootstrap, Git, GitHub,
          Material-UI
        </Card.Title>
      </Card.Body>
  </div>
  )
}

export default Technology