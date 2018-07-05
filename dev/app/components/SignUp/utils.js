const entityMap = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;',
    '/': '&#x2F;',
    '`': '&#x60;',
    '=': '&#x3D;'
  };

export const prepPayload = (data) => {
    const payload = {
        method: 'POST', 
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data), // body data type must match 'Content-Type' header
    }

    return payload;
}



export const escapeHtml = string => {
  return String(string).replace(/[&<>"'`=\/]/g, (s) => entityMap[s]);
}