
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
        console.log(data);
        return data;

    } catch (error) {
        console.error('Error refreshing token:', error);
        throw error;
    }
};
