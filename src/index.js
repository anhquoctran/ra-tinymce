
import React from 'react';
import PropTypes from 'prop-types';
import TinyMCE from 'react-tinymce';

const TinyMCEInput = ({
  id,
  disabled,
  label,
  name,
  input = {},
  config
}) => {
  {value="", onChange=()=>{}} = input;

  return <TinyMCE
      id={id}
      content={value}
      config={{
      skin: false,
      theme: 'modern',
      ...config
    }}
      onChange={e => {
      onChange(e.target.getContent())
    }}
  />;
}

TinyMCEInput.propTypes = {
  addField: PropTypes.bool.isRequired,
  addLabel: PropTypes.bool.isRequired,
  input: PropTypes.object,
  label: PropTypes.string,
  options: PropTypes.object,
  source: PropTypes.string,
  config: PropTypes.object
}

TinyMCEInput.defaultProps = {
  addField: true,
  addLabel: true,
  options: {},
  record: {}
}

export default TinyMCEInput
