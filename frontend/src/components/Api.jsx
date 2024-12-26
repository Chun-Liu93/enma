import React, { useEffect, useState } from 'react';

const FetchCategories = () => {
    const [categories, setCategories] = useState(null); // Store categories data
    const [error, setError] = useState(null); // Store errors (if any)

    useEffect(() => {
        const fetchData = async () => {
            try {
                // Step 1: Get the access token from Spotify
                const clientId = process.env.REACT_APP_SPOTIFY_CLIENT_ID; // Your Spotify Client ID
                const clientSecret = process.env.REACT_APP_SPOTIFY_CLIENT_SECRET; // Your Spotify Client Secret

                // Log the clientId and clientSecret (make sure they are correct)
                console.log('clientId:', clientId);
                console.log('clientSecret:', clientSecret);

                const authResponse = await fetch("https://accounts.spotify.com/api/token", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/x-www-form-urlencoded",
                        "Authorization": `Basic ${btoa(`${clientId}:${clientSecret}`)}`, // Base64 encoding client_id:client_secret
                    },
                    body: new URLSearchParams({
                        grant_type: "client_credentials", // The grant type for the client credentials flow
                    }),
                });

                if (!authResponse.ok) {
                    const errorData = await authResponse.json();
                    console.error('Error getting access token:', errorData); // Log the error response
                    setError('Failed to get access token');
                    return;
                }

                const authData = await authResponse.json(); // Get the response JSON
                const accessToken = authData.access_token; // Extract the access token

                console.log('Access Token:', accessToken); // Log the access token for debugging

                // Step 2: Use the access token to fetch categories
                const response = await fetch("https://api.spotify.com/v1/browse/categories", {
                    headers: {
                        Authorization: `Bearer ${accessToken}`, // Use the OAuth token here
                    },
                });

                if (!response.ok) {
                    const errorData = await response.json();
                    console.error('Error fetching categories:', errorData); // Log the error response
                    setError('Failed to fetch categories');
                    return;
                }

                const data = await response.json(); // Parse the data from the response
                setCategories(data.categories.items); // Update the state with the categories data
            } catch (error) {
                console.error("Error fetching categories:", error);
                setError('An error occurred');
            }
        };

        fetchData();
    }, []); // Empty array to run the fetch only once when the component mounts

    return (
        <div>
            <h1>Categories</h1>
            {categories ? (
                <ul>
                    {categories.map((category) => (
                        <li key={category.id}>
                            <h2>{category.name}</h2>
                            {category.icons && category.icons.length > 0 && (
                                <img
                                    src={category.icons[0].url}
                                    alt={category.name}
                                    style={{ width: '100px', height: '100px', objectFit: 'cover' }}
                                />
                            )}
                        </li>
                    ))}
                </ul>
            ) : (
                <p>Loading...</p> // Show loading while fetching
            )}
        </div>
    );
};

export default FetchCategories;