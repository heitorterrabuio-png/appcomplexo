import { useState, useEffect } from "react"
import type { Evento } from "../types/Evento"

type Props = {
  onSave: (evento: Evento) => void
  initial?: Evento
}

export default function EventoForm({ onSave, initial }: Props) {

  const [descricao, setDescricao] = useState(initial?.descricao || "")
  const [data, setData] = useState(initial?.data || "")

  useEffect(() => {
    if (initial) {
      setDescricao(initial.descricao || "")
      setData(initial.data || "")
    }
  }, [initial])

  const submit = (e: React.FormEvent) => {
    e.preventDefault()

    onSave({
      id: initial?.id,
      descricao,
      data
    })

    if (!initial) {
      setDescricao("")
      setData("")
    }
  }

  return (
    <form onSubmit={submit} className="space-y-6">

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

        <div className="flex flex-col gap-1">
          <label className="text-xs font-bold text-slate-500 uppercase ml-1">
            Descrição do Evento
          </label>

          <input
            className="w-full px-4 py-2.5 rounded-lg border border-slate-200 bg-slate-50
            focus:bg-white focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500
            outline-none transition-all placeholder:text-slate-400"
            placeholder="Ex: Tempestade no Atlântico"
            value={descricao}
            onChange={e => setDescricao(e.target.value)}
            required
          />
        </div>

        <div className="flex flex-col gap-1">
          <label className="text-xs font-bold text-slate-500 uppercase ml-1">
            Data do Evento
          </label>

          <input
            type="date"
            className="w-full px-4 py-2.5 rounded-lg border border-slate-200 bg-slate-50
            focus:bg-white focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500
            outline-none transition-all"
            value={data}
            onChange={e => setData(e.target.value)}
            required
          />
        </div>

      </div>

      <div className="flex justify-end">
        <button
          className="group relative inline-flex items-center justify-center px-8 py-3
          font-bold text-white transition-all duration-200 bg-indigo-600
          rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2
          focus:ring-indigo-600 hover:bg-indigo-700 shadow-md active:scale-95"
        >
          {initial ? "💾 Atualizar Evento" : "📜 Registrar Evento"}
        </button>
      </div>

    </form>
  )
}