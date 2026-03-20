export async function getAccessToken(rootURL, username, password) {
    const postData = {
        username: username,
        password: password,
    };
    const endpoint = `${rootURL}/api/token/`;
    const response = await fetch(endpoint, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(postData),
    });
    const data = await response.json();
    return data.access_token;
}

//invoke function with data
//1. server address
//2. username
//3. password
const token = getAccessToken("https://photo-app-secured.herokuapp.com", "scraft1", "password");



console.log(token);