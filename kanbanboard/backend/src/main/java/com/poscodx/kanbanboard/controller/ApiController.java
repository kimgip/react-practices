package com.poscodx.kanbanboard.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.poscodx.kanbanboard.Repository.KanbanboardRepository;
import com.poscodx.kanbanboard.dto.JsonResult;
import com.poscodx.kanbanboard.vo.TaskVo;

import lombok.extern.slf4j.Slf4j;

@Slf4j
@RestController
public class ApiController {
	@Autowired
	private KanbanboardRepository kanbanboardRepository;
	
	@GetMapping("/api")
	public ResponseEntity<JsonResult> read(){
		log.info("Request[GET /api]");
		return ResponseEntity
				.status(HttpStatus.OK)
				.body(JsonResult.success(kanbanboardRepository.findAll()));
	}
	
	@PostMapping("/api")
	public ResponseEntity<JsonResult> create(@RequestBody TaskVo vo){
		log.info("Request[POST /api]");
		kanbanboardRepository.insert(vo);
		return ResponseEntity
				.status(HttpStatus.OK)
				.body(JsonResult.success(vo));
	}

}
