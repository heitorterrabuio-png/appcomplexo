import { useState } from "react"
import type { Evento } from "../types/Evento"
import EventoForm from "../components/EventoForm"

export default function Eventos() {

  const [eventos, setEventos] = useState<Evento[]>([])
  const [editando, setEditando] = useState<Evento | null>(null)

  const salvar = (evento: Evento) => {

    if (evento.id) {
      setEventos(eventos.map(e => e.id === evento.id ? evento : e))
      setEditando(null)
    } else {
      evento.id = Date.now()
      setEventos([...eventos, evento])
    }

  }

  const remover = (id: number) => {
    if (confirm("Deseja remover este evento do logbook?")) {
      setEventos(eventos.filter(e => e.id !== id))
    }
  }

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900">

      <main className="max-w-6xl mx-auto px-6 pb-20">

        {/* FORM */}
        <section className="mb-12 bg-white rounded-xl shadow-sm border border-slate-200 p-6">
          <h2 className="text-xl font-bold mb-4 text-slate-700 flex items-center gap-2">
            {editando ? "📝 Editar Evento" : "📜 Registrar Evento"}
          </h2>

          <EventoForm
            onSave={salvar}
            initial={editando || undefined}
          />

          {editando && (
            <button
              onClick={() => setEditando(null)}
              className="mt-2 text-sm text-slate-500 underline hover:text-slate-800"
            >
              Cancelar edição
            </button>
          )}
        </section>

        {/* GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

          {eventos.map(e => (
            <div
              key={e.id}
              className="bg-white border border-slate-200 rounded-2xl shadow-sm
              hover:shadow-md transition-all overflow-hidden group"
            >

              <div className="h-2 bg-indigo-500 group-hover:bg-indigo-600 transition-colors"></div>

              <div className="p-6">

                <h2 className="text-lg font-bold text-slate-800 mb-2">
                  {e.descricao}
                </h2>

                <p className="text-sm text-slate-500 mb-6">
                  📅 {e.data}
                </p>

                <div className="flex gap-3 border-t border-slate-100 pt-5">

                  <button
                    onClick={() => setEditando(e)}
                    className="flex-1 px-4 py-2 bg-slate-100 text-slate-700
                    rounded-lg font-bold text-sm hover:bg-yellow-100
                    hover:text-yellow-800 transition-colors"
                  >
                    Editar
                  </button>

                  <button
                    onClick={() => remover(e.id!)}
                    className="flex-1 px-4 py-2 bg-slate-100 text-slate-400
                    rounded-lg font-bold text-sm hover:bg-red-50
                    hover:text-red-600 transition-colors"
                  >
                    Remover
                  </button>

                </div>

              </div>

            </div>
          ))}

        </div>

        {eventos.length === 0 && (
          <div className="text-center py-20 border-2 border-dashed border-slate-200 rounded-3xl">
            <p className="text-slate-400">
              Nenhum evento registrado no logbook.
            </p>
          </div>
        )}

      </main>

    </div>
  )
}