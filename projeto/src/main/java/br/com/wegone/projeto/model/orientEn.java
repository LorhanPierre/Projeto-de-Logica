package br.com.wegone.projeto.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name= "orienten")
public class orientEn {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)// ESSA ANOTACAO DIZ QUE O ID SE AUTO-INCREMENTA/PREENCHE
	@Column(name = "id")
	private Integer id;
	
	@Column(name = "titulo_orient", length = 100)//LENGTH TRAZ COM O TAMANHO DO VARCHAR DO BANCO, NULLABLE DIZ COM QUE NAO PODE TER VALOR VAZIO
	private String titulo_orient;
	
	@Column(name = "tipo", length = 100)
	private String tipo;
	
	@Column(name = "orient", columnDefinition = "TEXT")
	private String orient;
	
	public Integer getId() {
		return id;
	}
	public void setId(Integer id) {
		this.id = id;
	}
	public String getTitulo_orient() {
		return titulo_orient;
	}
	public void setTitulo_orient(String titulo_orient) {
		this.titulo_orient = titulo_orient;
	}
	public String getTipo() {
		return tipo;
	}
	public void setTipo(String tipo) {
		this.tipo = tipo;
	}
	public String getOrient() {
		return orient;
	}
	public void setOrient(String orient) {
		this.orient = orient;
	}
	

}
