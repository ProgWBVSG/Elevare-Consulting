CREATE TABLE IF NOT EXISTS public.testimonials (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  name text NOT NULL,
  role text,
  company text,
  text text NOT NULL,
  highlight text,
  type text,
  image_url text,
  video_url text,
  rating integer DEFAULT 5,
  is_active boolean DEFAULT true,
  created_at timestamp with time zone DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Habilitar RLS
ALTER TABLE public.testimonials ENABLE ROW LEVEL SECURITY;

-- Politicas de seguridad
-- Permitir leer a cualquiera (son testimonios públicos)
CREATE POLICY "Testimonios son públicos para lectura" ON public.testimonials FOR SELECT USING (true);
-- Permitir todo a usuarios autenticados (los admins)
CREATE POLICY "Admins pueden hacer todo en testimonios" ON public.testimonials FOR ALL USING (auth.role() = 'authenticated');

-- Insert initial data
INSERT INTO public.testimonials (name, role, company, text, highlight, type) VALUES
('Maria Eugenia Cano', 'Consultoría de Liderazgo', 'LinkedIn Review', 'Muchas gracias ELEVARE Consulting, cada charla compartida fue inolvidable. Tus consejos ya sea en palabras, videos, todo fue un aprendizaje continuo y fructífero. Excelente profesional. Fue un semestre con muchas sorpresas y celebro poder haber contado con tu presencia, gracias.', 'Aprendizaje continuo y fructífero', 'executive'),
('Camila V.', 'CEO', 'Startup de Tecnología, Montevideo', 'La mentoría con Elevare me cambió la perspectiva completa. No solo mejoré mi gestión, transformé cómo lidero mi equipo y cómo estructuramos el crecimiento.', 'Expansión a 3 países en 18 meses', 'executive');
