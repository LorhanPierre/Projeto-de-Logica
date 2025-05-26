package br.com.wegone.projeto.controlller;

import java.util.*;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.wegone.projeto.DAO.IOrientacoes;
import br.com.wegone.projeto.model.orientPt;

@RestController
@RequestMapping("/orient")
public class OrientacoesController{

	@Autowired //injeta os metodos do crudrepository/ metodos de banco de dados
	private IOrientacoes dao;
	
	@GetMapping
	public List<orientPt> listaOrientacoes () {
		return (List<orientPt>) dao.findAll();
	}
	
	@PostMapping
	public orientPt cadastroOrientPt (@RequestBody orientPt orientpt) {
		orientPt newOrientPt = dao.save(orientpt);
		return newOrientPt;
	}
	
	@PutMapping 
	public orientPt editaOrientPt (@RequestBody orientPt orientpt) {
		orientPt updateOrientPt = dao.save(orientpt);
		return updateOrientPt;
	}
	
	@DeleteMapping("/{id}")
	public Optional<orientPt> deleteOrientPt(@PathVariable Integer id) {
		Optional<orientPt> orientpt = dao.findById(id);
		dao.deleteById(id);
		return orientpt;
	}
	
	
}
