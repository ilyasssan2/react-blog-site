import React from "react";
import { Link } from "react-router-dom";

function PageTop({ page }) {
  return (
    <div
      style={{
        backgroundImage:
          "linear-gradient(to right, rgba(0,0,0, 0.4), rgba(0,0,0, 0.7)) ,  url('assets/images/slide1.jpg')",
      }}
      className="PageTop "
    >
      <h2>{page}</h2>

      <div>
        <h5>
          <Link to="/">Home</Link> <span>-</span> {page}
        </h5>
      </div>
    </div>
  );
}

export default PageTop;
