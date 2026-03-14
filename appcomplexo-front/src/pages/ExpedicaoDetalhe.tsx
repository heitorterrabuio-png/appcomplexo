import { useParams } from "react-router-dom"

export default function ExpedicaoDetalhe() {

  const { id } = useParams()

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900">

      <main className="max-w-6xl mx-auto px-6 pb-20">

        {/* HEADER */}
        <section className="mb-8 bg-white rounded-xl shadow-sm border border-slate-200 p-6">

          <h1 className="text-2xl font-bold text-slate-800 mb-2 flex items-center gap-2">
            ⚓ Expedição #{id}
          </h1>

          <p className="text-slate-500">
            Centro de controle da expedição.
          </p>

        </section>


        {/* GRID */}
        <div className="grid md:grid-cols-2 gap-6">

          {/* EVENTOS */}
          <div className="bg-white border border-slate-200 rounded-2xl shadow-sm overflow-hidden">

            <div className="h-2 bg-indigo-500"></div>

            <div className="p-6">

              <h2 className="text-lg font-bold text-slate-800 mb-4">
                📜 Eventos da Expedição
              </h2>

              <p className="text-slate-500 text-sm">
                Aqui aparecerão os eventos registrados.
              </p>

            </div>

          </div>


          {/* TRIPULAÇÃO */}
          <div className="bg-white border border-slate-200 rounded-2xl shadow-sm overflow-hidden">

            <div className="h-2 bg-indigo-500"></div>

            <div className="p-6">

              <h2 className="text-lg font-bold text-slate-800 mb-4">
                👨‍✈️ Tripulação
              </h2>

              <p className="text-slate-500 text-sm">
                Aqui aparecerão os tripulantes da expedição.
              </p>

            </div>

          </div>

        </div>

      </main>

    </div>
  )
}