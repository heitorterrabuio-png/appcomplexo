package sql

import (
	"database/sql"
	"log"

	_ "github.com/mattn/go-sqlite3"
)

var DB *sql.DB

func Connet() {
	var err error
	DB, err = sql.Open("sqlite3", "database.db")
	if err != nil {
		log.Fatal("Erro ao abrir o banco", err)
	}
	if err = DB.Ping(); err != nil {
		log.Fatal("Erro ao conectar ao banco: ", err)
	}
	log.Print("⚓ Conexão com o SQLite estabelecida!")
}
