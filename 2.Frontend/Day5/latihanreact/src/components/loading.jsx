import React from 'react';
import { Spinner } from 'reactstrap';

const loading = (props) => {
  return (
    <div>
        <center>
        <Spinner className="tengahSpinner" color="primary" />
         {/* <Spinner color="secondary" />
         <Spinner color="success" />
         <Spinner color="danger" />
         <Spinner color="warning" />
         <Spinner color="info" />
         <Spinner color="light" />
         <Spinner color="dark" /> */}
        </center>
    </div>
  );
}

export default loading;
