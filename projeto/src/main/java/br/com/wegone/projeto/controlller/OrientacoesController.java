package br.com.wegone.projeto.controlller;

import java.util.*;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.wegone.projeto.DAO.IOrientacoes;
import br.com.wegone.projeto.DAO.IOrientacoesDe;
import br.com.wegone.projeto.DAO.IOrientacoesEn;
import br.com.wegone.projeto.DAO.IOrientacoesEs;
import br.com.wegone.projeto.DAO.IOrientacoesFr;
import br.com.wegone.projeto.model.orientDe;
import br.com.wegone.projeto.model.orientPt;
import br.com.wegone.projeto.model.orientEn;
import br.com.wegone.projeto.model.orientEs;
import br.com.wegone.projeto.model.orientFr;

@RestController
@CrossOrigin("*")
public class OrientacoesController{

	@Autowired //injeta os metodos do crudrepository/ metodos de banco de dados
	private IOrientacoes dao;
	private	IOrientacoesDe daoDe;
	private	IOrientacoesEn daoEn;
	private	IOrientacoesEs daoEs;
	private	IOrientacoesFr daoFr;
	
//Portugues=====================================================================================================	
	
	@GetMapping("/orientPt")
	public List<orientPt> listaOrientacoes () {
		return (List<orientPt>) dao.findAll();
	}
	@PostMapping("/orientPt")
	public orientPt cadastroOrientPt (@RequestBody orientPt orientpt) {
		orientPt newOrientPt = dao.save(orientpt);
		return newOrientPt;
	}
	@PutMapping("/orientPt")
	public orientPt editaOrientPt (@RequestBody orientPt orientpt) {
		orientPt updateOrientPt = dao.save(orientpt);
		return updateOrientPt;
	}
	@DeleteMapping("/orientPt/{id}")
	public Optional<orientPt> deleteOrientPt(@PathVariable Integer id) {
		Optional<orientPt> orientpt = dao.findById(id);
		dao.deleteById(id);
		return orientpt;
	}
	
	
//Alemao=============================================================================================================
	
	@GetMapping("/orientDe")
	public List<orientDe> listaOrientacoesDe () {
		return (List<orientDe>) daoDe.findAll();
	}
	@PostMapping("/orientDe")
	public orientDe cadastroOrientDe (@RequestBody orientDe orientde) {
		orientDe newOrientDe = daoDe.save(orientde);
		return newOrientDe;
	}
	@PutMapping("/orientDe")
	public orientDe editaOrientDe (@RequestBody orientDe orientde) {
		orientDe updateOrientDe = daoDe.save(orientde);
		return updateOrientDe;
	}
	@DeleteMapping("/orientDe/{id}")
	public Optional<orientDe> deleteOrientDe(@PathVariable Integer id) {
		Optional<orientDe> orientDe = daoDe.findById(id);
		daoDe.deleteById(id);
		return orientDe;
	}
	
	
//INGLES=================================================================================================================
	
	@GetMapping("/orientEn")
	public List<orientEn> listaOrientacoesEn () {
		return (List<orientEn>) daoEn.findAll();
	}
	@PostMapping("/orientEn")
	public orientEn cadastroOrientEn (@RequestBody orientEn orienten) {
		orientEn newOrientEn = daoEn.save(orienten);
		return newOrientEn;
	}
	@PutMapping("/orientEn")
	public orientEn editaOrientEn (@RequestBody orientEn orienten) {
		orientEn updateOrientEn = daoEn.save(orienten);
		return updateOrientEn;
	}
	@DeleteMapping("/orientEn/{id}")
	public Optional<orientEn> deleteOrientEn(@PathVariable Integer id) {
		Optional<orientEn> orientEn = daoEn.findById(id);
		daoEn.deleteById(id);
		return orientEn;
	}
	
	
//ESPANHOL===============================================================================================================
	
	@GetMapping("/orientEs")
	public List<orientEs> listaOrientacoesEs () {
		return (List<orientEs>) daoEs.findAll();
	}
	@PostMapping("/orientEs")
	public orientEs cadastroOrientEs (@RequestBody orientEs orientes) {
		orientEs newOrientEs = daoEs.save(orientes);
		return newOrientEs;
	}
	@PutMapping("/orientEs")
	public orientEs editaOrientEs (@RequestBody orientEs orientes) {
		orientEs updateOrientEs = daoEs.save(orientes);
		return updateOrientEs;
	}
	@DeleteMapping("/orientEs/{id}")
	public Optional<orientEs> deleteOrientEs(@PathVariable Integer id) {
		Optional<orientEs> orientEs = daoEs.findById(id);
		daoEs.deleteById(id);
		return orientEs;
	}
	
	
//FRANCES===================================================================================================================
	
	@GetMapping("/orientFr")
	public List<orientFr> listaOrientacoesFr () {
		return (List<orientFr>) daoFr.findAll();
	}
	@PostMapping("/orientFr")
	public orientFr cadastroOrientFr (@RequestBody orientFr orientfr) {
		orientFr newOrientFr = daoFr.save(orientfr);
		return newOrientFr;
	}
	@PutMapping("/orientFr")
	public orientFr editaOrientFr (@RequestBody orientFr orientfr) {
		orientFr updateOrientFr = daoFr.save(orientfr);
		return updateOrientFr;
	}
	@DeleteMapping("/orientFr/{id}")
	public Optional<orientFr> deleteOrientFr(@PathVariable Integer id) {
		Optional<orientFr> orientFr = daoFr.findById(id);
		daoFr.deleteById(id);
		return orientFr;
	}
	
}
