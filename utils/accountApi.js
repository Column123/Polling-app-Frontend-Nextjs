export const logInApi = async (email, password) => {
    const url = process.env.NEXT_PUBLIC_API_URL
    if (!url) {
        console.error("API URL is not defined. Check your environment variables.");
        throw new Error("API URL is not configured.");
    }
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

export const refreshToken = async () => {
    const url = process.env.NEXT_PUBLIC_API_URL;
    if (!url) {
        console.error("API URL is not defined. Check your environment variables.");
        throw new Error("API URL is not configured.");
    }

    try {
        const response = await fetch(`${url}/refresh`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            credentials: 'include',
        });
        if (!response.ok) {
            throw new Error(`Failed to refresh token. Status: ${response.status}`);
        }
        const data = await response.json();
        return data;

    } catch (error) {
        console.error('Error refreshing token:', error);
        throw error;
    }
};


export const createAccountApi = async (username, email, password) => {
    const url = process.env.NEXT_PUBLIC_API_URL;
    if (!url) {
        console.error("API URL is not defined. Check your environment variables.");
        throw new Error("API URL is not configured.");
    }
    try {
        const response = await fetch(`${url}/signup`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                username,
                email,
                password
            }),
        });
        return response;
    } catch (error) {
        console.error('Error creating account:', error);
        throw error;
    }

}

export const logoutApi = async () => {
    const url = process.env.NEXT_PUBLIC_API_URL;
    if (!url) {
        console.error("API URL is not defined. Check your environment variables.");
        throw new Error("API URL is not configured.");
    }
    try {
        const response = await fetch(`${url}/logout`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
            credentials: 'include',
        })
        return response;
    } catch {
        console.error('Error creating account:', error);
        throw error;
    }
}