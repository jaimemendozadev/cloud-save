export const prepAuthPayload = token => {
    const payload = {
        method: 'GET',
          headers: {
            'Authorization': `bearer ${token}`
        }
      };
    
      return payload;
}


export const prepReduxActionPayload = user => {
  const { first_name, last_name, email, profile_picture, drive } = user;

  return {
    first_name, 
    last_name, 
    email, 
    profile_picture, 
    drive
  }
}