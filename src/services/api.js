import axios from "axios";

export const fetchGallery = async (query,page=1, perPage=30) => {

    const response = await axios.get("https://api.unsplash.com/photos/?client_id=OJqkKZqRaSwvkUxHVowvOUbe-rO1ddkBFLjhkwnhoDQ",{
        params:{
            query,
            hitsPerPage:perPage,
            page,
        }
    });
    return response.data;
}
