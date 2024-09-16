package com.dragons.dicedungeons.dao;

import java.util.*;

import org.springframework.beans.factory.annotation.Autowired;

public class DaoPersonaggi {
	@Autowired
	private Database db;

	public boolean create(String nomeUtente, String nome, String classe, String razza, int livello, int hp, int iniziativa, int armorClass, int forza, int destrezza, int costituzione, int intelligenza, int saggezza, int carisma, String allineamento, String background, String equipaggiamento, String carattere, String ideali) {
        String query = "insert into personaggi (idUtenti, nome, classe, razza, livello, hp, iniziativa, armorClass, forza, destrezza, costituzione, intelligenza, saggezza, carisma, allineamento, background, equipaggiamento, carattere, ideali) values(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
		Map<String,String> idUtente = cercaUtentePerUsername(nomeUtente);
        return db.update(query, idUtente, nome, classe, razza, livello, hp, iniziativa, armorClass, forza, destrezza, costituzione, intelligenza, saggezza, carisma, allineamento, background, equipaggiamento, carattere, ideali);
    }

	public List<Map<String, String>> readProva() {
		return db.rows("select * from personaggi");
	}

	public Map<String, String> cercaUtente(String username, String password) {
		String query = "select * from utenti where username = ? and password = ?";
		Map<String, String> u = db.row(query, username, password);
		return u == null ? null : u;
	}

	public Map<String, String> cercaUtentePerUsername(String username) {
		// Lancio la query sul db per verificare che username e password forniti
		// dall'utente siano
		// corretti. Se lo sono il db restituisce una mappa PIENA
		String query = "select * from utenti where username = ?";
		Map<String, String> u = db.row(query, username);
		// Se la mappa restituita dal DB è vuota significa che sarà null in quanto
		// l'utente non è presente nella tabella.
		// In caso contrario ritorna l'intera riga dell'utente al quale corrispondono
		// username e
		// password passati come parametri.
		return u == null ? null : u;
	}
}