package models

import (
	"time"
)

type Eventos struct {
	ID          int       `json:"id"`
	Descricao   string    `json:"descricao"`
	tipo        string    `json:"tipo"`
	data        time.Time `json:"data"`
	expedicaoID int       `json:"ExId"`
}
