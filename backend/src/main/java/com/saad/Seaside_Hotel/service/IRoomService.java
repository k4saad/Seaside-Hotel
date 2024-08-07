package com.saad.Seaside_Hotel.service;

import com.saad.Seaside_Hotel.model.Room;
import com.saad.Seaside_Hotel.response.RoomWOBResponse;
import com.saad.Seaside_Hotel.response.RoomTableResponse;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.math.BigDecimal;
import java.sql.SQLException;
import java.util.List;

public interface IRoomService {
    Room addNewRoom(MultipartFile picture, String roomType, BigDecimal roomPrice) throws SQLException, IOException;

    List<String> getAllRoomTypes();

    List<Room> getAllRooms();

    void deleteRoomById(Long id);

    List<RoomTableResponse> getAllRoomsForTable();

    Room editRoom(Long id, String roomType, BigDecimal roomPrice, byte[] pictureBytes);

    RoomWOBResponse getRoomEditResponseById(Long id);

    List<RoomWOBResponse> getThreeRoomsForHomePage();

    List<RoomWOBResponse> getAllRoomsForClient();
}
