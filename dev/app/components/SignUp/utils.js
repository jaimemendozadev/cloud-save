export const prepPayload = (data) => {
    const payload = {
        method: 'POST', 
        headers: {
            'Content-Type': 'application/json; charset=utf-8',
        },
        body: JSON.stringify(data), // body data type must match 'Content-Type' header
    }

    return payload;
}