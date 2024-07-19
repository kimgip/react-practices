package com.poscodx.kanbanboard.Repository;

import java.util.List;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.poscodx.kanbanboard.vo.CardVo;
import com.poscodx.kanbanboard.vo.TaskVo;

@Repository
public class KanbanboardRepository {
	@Autowired
	SqlSession sqlSession;
	
	public List<CardVo> _findCards(){
		return sqlSession.selectList("card.findAll");
	}
	
	public List<TaskVo> _findTasks(Long no){
		return sqlSession.selectList("task.findAll", no);
	}
	
	public List<CardVo> findAll(){
		List<CardVo> cards = _findCards();
		for (int i = 0; i < cards.size(); i++) {
			CardVo card = cards.get(i);
			card.setTasks(_findTasks(card.getNo()));
		}
		return cards;
	}
	
	public void insert(TaskVo vo) {
		sqlSession.insert("task.insert", vo);
	}
	
	
}
