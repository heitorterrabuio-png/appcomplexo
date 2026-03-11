// package main
package models

import (
	"database/sql"
	"errors"
	"strings"
	"time"
)

var Expedicoes []Expedicao
var proximoID = 1
var Erro string = ""

type Expedicao struct {
	ID          int       `json:"id"`
	Nome        string    `json:"nome"`
	Navio       string    `json:"navio"`
	Capitao     string    `json:"capitao"`
	Data_inicio time.Time `json:"data_inicio"`
	Status      string    `json:"status"`
}

func CriarEx(nome, navio, capitao string) Expedicao {
	nova := Expedicao{
		ID:          proximoID,
		Nome:        nome,
		Navio:       navio,
		Capitao:     capitao,
		Data_inicio: time.Now(),
		Status:      "Preparando Motores",
	}
	Expedicoes = append(Expedicoes, nova)
	proximoID++
	return nova
}

func (e *Expedicao) Valida() error {
	if strings.TrimSpace(e.Nome) == "" {
		return errors.New("nome da expedição obrigatório")
		Erro = "Erro no Nome"
	}

	if strings.TrimSpace(e.Navio) == "" {
		return errors.New("nome do navio obrigatório")
		Erro = "Erro no Navio"
	}

	if strings.TrimSpace(e.Capitao) == "" {
		return errors.New("capitão obrigatório")
		Erro = "Erro no Capitao"
	}

	return nil
}

func (e *Expedicao) SalvarNoBanco(db *sql.DB) error {
	query := `INSERT INTO expedicoes (nome, navio, capitao, data_inicio, status) VALUES (?, ?, ?, ?, ?)`

	_, err := db.Exec(query, e.Nome, e.Navio, e.Capitao, e.Data_inicio, e.Status)
	return err
}

// func main() {
// 	fmt.Println("--- 🌊 Sistema de Gestão de Viagens Marítimas ---")

// 	// Criando a primeira jornada!
// 	viagem := CriarEx("Em Busca do Kraken", "Pérola Negra", "Jack Sparrow")

// 	fmt.Printf("Expedição '%s' iniciada com o navio '%s' sob o comando de %s!\n",
// 		viagem.Nome, viagem.Navio, viagem.Capitao)
// 	fmt.Println("Status atual:", viagem.Status)
// }
