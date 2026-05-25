export default function AnalyticsPage() {
  return (
    <div className="space-y-6 max-w-7xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold text-[#1A1A2E]">Analíticas Web</h1>
          <p className="text-[#6b7280] text-sm mt-1">
            Métricas de tráfico obtenidas desde Google Analytics 4 (Looker Studio)
          </p>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden min-h-[700px] flex flex-col">
        {/*
          NOTA PARA MARIA:
          Acá deberás reemplazar el src del iframe con el link público de tu reporte de Looker Studio.
          Para hacerlo:
          1. En Looker Studio, ve a Archivo -> Insertar informe.
          2. Habilita la inserción.
          3. Copia la URL de inserción y pégala abajo en el "src".
        */}
        <div className="p-4 bg-gray-50 border-b border-gray-100 text-sm text-gray-600 flex justify-between items-center">
          <span>Vista general del sitio web</span>
          <a href="https://analytics.google.com" target="_blank" rel="noreferrer" className="text-[#2C5F9F] font-semibold hover:underline">
            Ir a Google Analytics →
          </a>
        </div>
        
        {/* Iframe Placeholder. Si aún no hay reporte, mostramos un mensaje. */}
        <iframe
          src="https://lookerstudio.google.com/embed/reporting/00000000-0000-0000-0000-000000000000/page/1M" // <- Reemplazar esto
          frameBorder="0"
          style={{ width: '100%', height: '100%', flex: 1, minHeight: '650px' }}
          allowFullScreen
          sandbox="allow-storage-access-by-user-activation allow-scripts allow-same-origin allow-popups allow-popups-to-escape-sandbox"
        ></iframe>

        {/* Cobertura en caso de no tener iframe real aún (puedes borrar este div luego) */}
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-gray-50 bg-opacity-95 z-10 p-8 text-center" style={{ top: '80px' }}>
          <svg className="w-16 h-16 text-gray-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path></svg>
          <h3 className="text-xl font-bold text-gray-800 mb-2">Conectá tu reporte de Analíticas</h3>
          <p className="text-gray-500 max-w-md mb-6">
            Para ver tus métricas aquí, debés crear un reporte en Looker Studio conectado a tu cuenta de Google Analytics 4, y pegar el link de inserción en el código fuente de esta página.
          </p>
          <a href="https://lookerstudio.google.com/" target="_blank" rel="noreferrer" className="bg-[#2C5F9F] text-white px-6 py-2 rounded-lg font-semibold hover:bg-[#1e4a80] transition-colors">
            Crear reporte en Looker Studio
          </a>
        </div>
      </div>
    </div>
  )
}
