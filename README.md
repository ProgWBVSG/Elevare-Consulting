# Elevare Consulting — Workspace del Agente Autónomo

## Estructura del Proyecto

```
.
├── .tmp/                    # Espacio temporal (se puede borrar)
├── directivas/              # SOPs en Markdown — la Fuente de la Verdad
│   └── directiva_ejemplo.md # Plantilla base para nuevas directivas
├── scripts/                 # Scripts de Python deterministas
├── requirements.txt         # Dependencias Python
├── .env                     # Credenciales y tokens (nunca al git)
└── .gitignore
```

## Cómo trabajar con el Agente

1. **Nueva tarea** → El agente crea primero la directiva en `directivas/`
2. **Ejecución** → El agente genera el script en `scripts/` basado en la directiva
3. **Error** → El agente repara el script Y actualiza la directiva (Protocolo de Auto-Corrección)
4. **Resultados intermedios** → Se guardan en `.tmp/`
5. **Entregables finales** → Google Sheets, Supabase, o archivos locales

## Primeros Pasos

```bash
# Instalar dependencias
pip install -r requirements.txt

# Configurar credenciales
# Editar .env con los valores reales
```
