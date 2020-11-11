import React from "react";
import { Link } from "react-router-dom";

function PageTop({ page }) {
  return (
    <div className="PageTop">
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
