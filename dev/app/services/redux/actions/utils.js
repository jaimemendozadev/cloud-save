export const prepAuthPayload = token => {
    const payload = {
        method: 'GET',
          headers: {
            'Authorization': `bearer ${token}`
        }
      };
    
      return payload;
}


export const reverseSortedDocs = documents => {
  let floor = 0;
  let ceiling = documents.length - 1;

  while (floor < ceiling) {
    let temp = documents[floor];
    documents[floor] = documents[ceiling];
    documents[ceiling] = temp;
    floor += 1;
    ceiling -= 1;
  }

  return documents;
}