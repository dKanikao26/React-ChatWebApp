export const baseUrl = "https://localhost/6000/api";

export const postRequest = async (url, body) => {

        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body,
        });

        const data = await response.json();

        // Check for response status 200-209
        if (!response.ok) {
            let message;

            // Optional chaining to check for the message object
            if (data?.message) {
                message = data.message;
            } else {
                message = data;
            }

            return { error: true, message };
        }

        return data;

 
    
};
