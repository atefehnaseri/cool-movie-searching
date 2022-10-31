import React, {FC} from "react"
import {Spinner} from "reactstrap"

const LoadingIndicator: FC = () => {
  return (
    <Spinner color="info">Loading...</Spinner>
  )
};

export default LoadingIndicator