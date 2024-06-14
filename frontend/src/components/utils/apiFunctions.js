import axios from "axios";

export const api = axios.create({
    baseURL : "http://localhost:8080"
})


// Function to add room 
export async function addRoom(picture, roomType, roomPrice){
    const formData = new FormData()
    formData.append("picture", picture)
    formData.append("roomType",roomType)
    formData.append("roomPrice",roomPrice)

    const response = await api.post("/rooms",formData)
    
    if(response.status === 201)
        return true
    else
        return false
}

// Function to get all room types
export async function getAllRoomTypes(){
    try{
        const response = await api.get("/rooms/room-types")
        return response.data
    }
    catch(error){
        throw new Error("Error : Fetching room types")
    }
}