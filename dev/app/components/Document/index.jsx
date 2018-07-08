import React from 'react';

const Document = ({ aws_url, original_file_name, file_type }) => (
  <div className='document-container'>
    <a href={aws_url} target='_blank'>{original_file_name}</a>
  </div>
)

export default Document;