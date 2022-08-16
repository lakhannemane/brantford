import React, { Fragment } from "react";
import "../../Styles/adminProperty.css";

const PropertyPage = () => {
  return (
    <Fragment>
      <div className=" card pb-4 mx-2 mt-1 ">
        <div className="d-flex mx-3 ">
          <p className="me-auto new_listed_heading py-0 mt-4">New Listed</p>
          <button className="btn border mt-2">View All</button>
        </div>
        <hr />
        <div className="d-flex justify-content-between flex-wrap mx-3 ">
          <div
            className="card shadow"
            style={{ width: "300px", borderRadius: "10px" }}
          >
            <div
              className=""
              style={{
                display: "flex",
                alignItems: "center",
                flexDirection: "column",
                padding: "10px 0",
              }}
            >
              <img
                src="https://images.crowdspring.com/blog/wp-content/uploads/2017/08/23163415/pexels-binyamin-mellish-106399.jpg"
                alt=""
                width={270}
                style={{ height: "250px", borderRadius: "10px" }}
              />
              <div
                style={{
                  position: "relative",
                  right: "20px",
                  top: "10px",
                  padding: "0 0 10px 0",
                }}
              >
                <p className="New_listedProperty-Heading">Hello Lakhan</p>
                <span className="Description_new_listed_property">Lorem. Lorem, ipsum dolor.</span>
                <br />      <br />
                <span className="fw-bold my-2">$24.42</span>
              </div>
            </div>
          </div>
          <div
            className="card shadow"
            style={{ width: "300px", borderRadius: "10px" }}
          >
            <div
              className=""
              style={{
                display: "flex",
                alignItems: "center",
                flexDirection: "column",
                padding: "10px 0",
              }}
            >
              <img
                src="https://images.crowdspring.com/blog/wp-content/uploads/2017/08/23163415/pexels-binyamin-mellish-106399.jpg"
                alt=""
                width={270}
                style={{ height: "250px", borderRadius: "10px" }}
              />
              <div
                style={{
                  position: "relative",
                  right: "20px",
                  top: "10px",
                  padding: "0 0 10px 0",
                }}
              >
                <p className="New_listedProperty-Heading">Hello Lakhan</p>
                <span className="Description_new_listed_property">Lorem. Lorem, ipsum dolor.</span>
                <br />      <br />
                <span className="fw-bold my-2">$24.42</span>
              </div>
            </div>
          </div>
          <div
            className="card shadow"
            style={{ width: "300px", borderRadius: "10px" }}
          >
            <div
              className=""
              style={{
                display: "flex",
                alignItems: "center",
                flexDirection: "column",
                padding: "10px 0",
              }}
            >
              <img
                src="https://images.crowdspring.com/blog/wp-content/uploads/2017/08/23163415/pexels-binyamin-mellish-106399.jpg"
                alt=""
                width={270}
                style={{ height: "250px", borderRadius: "10px" }}
              />
              <div
                style={{
                  position: "relative",
                  right: "20px",
                  top: "10px",
                  padding: "0 0 10px 0",
                }}
              >
                <p className="New_listedProperty-Heading">Hello Lakhan</p>
                <span className="Description_new_listed_property">Lorem. Lorem, ipsum dolor.</span>
                <br />      <br />
                <span className="fw-bold my-2">$24.42</span>
              </div>
            </div>
          </div>
          <div
            className="card shadow"
            style={{ width: "300px", borderRadius: "10px" }}
          >
            <div
              className=""
              style={{
                display: "flex",
                alignItems: "center",
                flexDirection: "column",
                padding: "10px 0",
              }}
            >
              <img
                src="https://images.crowdspring.com/blog/wp-content/uploads/2017/08/23163415/pexels-binyamin-mellish-106399.jpg"
                alt=""
                width={270}
                style={{ height: "250px", borderRadius: "10px" }}
              />
              <div
                style={{
                  position: "relative",
                  right: "20px",
                  top: "10px",
                  padding: "0 0 10px 0",
                }}
              >
                <p className="New_listedProperty-Heading">Hello Lakhan</p>
                <span className="Description_new_listed_property">Lorem. Lorem, ipsum dolor.</span>
                <br />
                <br />
                <span className="fw-bold price_new">$24.42</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default PropertyPage;
