//  localhost://5000/users/register
// {"username": "cathy123", "password": "xyz123"}
export async function fetchData(route='', data={}, methodType) {
    //sending over our data to specified route in server
    const response = await fetch(`http://localhost:5000${route}`, {
        method: methodType,
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    } );

    //dealing with our response from server 
    if(response.ok){
        return await response.json();
    } else {
        throw await response.json();
    } 
}