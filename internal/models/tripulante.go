package models

var nextID = 1
var Tripulantes []Trupulante

type Trupulante struct {
	ID          int    `json:"id"`
	Nome        string `json:"nome"`
	Cargo       string `json:"cargo"`
	expedicaoID int    `json:"ExId"`
}
