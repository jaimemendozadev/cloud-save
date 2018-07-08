export const prepAuthPayload = token => {
    const payload = {
        method: 'GET',
          headers: {
            'Authorization': `bearer ${token}`
        }
      };
    
      return payload;
}