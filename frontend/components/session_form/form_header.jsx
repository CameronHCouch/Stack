import React from 'react';
import { Link } from 'react-router-dom';

const FormHeader = () => (
  <header className="form-header">
    <Link to="/">
      <img className="logo-img" src="https://s3.us-east-2.amazonaws.com/couchstack/logo_text_recolor.png" />
    </Link>
  </header>
);

export default FormHeader;