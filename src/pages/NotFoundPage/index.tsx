import React, {FC} from "react";
import {useRouteError} from "react-router-dom";

const NotFoundPage: FC = () => {
  const error: any = useRouteError();
  console.error(error);

  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, you are coming to nowhere.</p>
      <p>Please go back and choose another direction...GOOD LUCK</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
};

export default NotFoundPage;