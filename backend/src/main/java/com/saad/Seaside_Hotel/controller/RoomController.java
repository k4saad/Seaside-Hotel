package com.saad.Seaside_Hotel.controller;

import com.saad.Seaside_Hotel.model.Room;
import com.saad.Seaside_Hotel.response.RoomResponse;
import com.saad.Seaside_Hotel.service.IRoomService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.math.BigDecimal;
import java.sql.SQLException;

@RequiredArgsConstructor
@RestController
@RequestMapping("/rooms")
public class RoomController {
    private final IRoomService roomService;


    @PostMapping
    public ResponseEntity<RoomResponse> addNewRoom(
            @RequestParam("picture") MultipartFile picture,
            @RequestParam("roomType") String roomType,
            @RequestParam("roomPrice") BigDecimal roomPrice
    ) throws SQLException, IOException {
        Room savedRoom = roomService.addNewRoom(picture,roomType,roomPrice);
        RoomResponse roomResponse = new RoomResponse(savedRoom.getId(), savedRoom.getRoomType(), savedRoom.getRoomPrice());

        return ResponseEntity.ok(roomResponse);

    }


}