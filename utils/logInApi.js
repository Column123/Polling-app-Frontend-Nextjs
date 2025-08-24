export const logInApi = async (email, password) => {
    const url  = process.env.NEXT_PUBLIC_API_URL
    console.log(url);
    try {
        const response = await fetch(`${url}/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ 
                email, 
                password 
            }),
            credentials: 'include',
        });
        return response;      
    } catch (error) {
        console.error('Error logging in:', error);
        throw error;
    }   
};