import React from "react";
import Loader from "react-loader-spinner";
function Loading() {
  return (
    <div className="loading__container">
      <Loader type="Bars" height={35} width={35} />
    </div>
  );
}

export default Loading;
