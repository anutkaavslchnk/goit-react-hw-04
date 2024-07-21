import axios from "axios";

export const fetchGallery = async (query,page=1, perPage=30) => {
    const response = await axios.get("https://api.unsplash.com/search/photos?client_id=OJqkKZqRaSwvkUxHVowvOUbe-rO1ddkBFLjhkwnhoDQ",{
        params:{
        query: query,
        page,
        per_page:perPage,
        }
    });
    return response.data;
}