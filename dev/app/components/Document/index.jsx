import React from 'react';
import { getImageIcon } from './utils.jsx';

const Document = ({ aws_url, original_file_name, file_type }) => (
  <div className='document-container'>
    <span className='doc-icon'>{getImageIcon(file_type)}</span><a href={aws_url} target='_blank'>{original_file_name}</a>
  </div>
)

export default Document;