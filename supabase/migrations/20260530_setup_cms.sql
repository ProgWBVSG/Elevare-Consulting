-- 1. Actualizar la tabla site_content para soportar tipos (texto o imagen) y categorías (grupos)
ALTER TABLE public.site_content ADD COLUMN IF NOT EXISTS type text DEFAULT 'text';
ALTER TABLE public.site_content ADD COLUMN IF NOT EXISTS group_key text DEFAULT 'global';
ALTER TABLE public.site_content ADD COLUMN IF NOT EXISTS label text;

-- 2. Crear el Bucket para almacenar imágenes de forma pública
INSERT INTO storage.buckets (id, name, public) 
VALUES ('public-images', 'public-images', true) 
ON CONFLICT (id) DO NOTHING;

-- 3. Configurar Políticas de Seguridad (RLS) para el Bucket
-- A. Cualquier persona puede ver las imágenes (Público)
CREATE POLICY "Imágenes públicas para leer" 
ON storage.objects FOR SELECT 
USING (bucket_id = 'public-images');

-- B. Solo administradores autenticados pueden subir imágenes
CREATE POLICY "Admins pueden subir imágenes" 
ON storage.objects FOR INSERT 
WITH CHECK (bucket_id = 'public-images' AND auth.role() = 'authenticated');

-- C. Solo administradores autenticados pueden borrar/actualizar imágenes
CREATE POLICY "Admins pueden borrar/actualizar imágenes" 
ON storage.objects FOR UPDATE 
USING (bucket_id = 'public-images' AND auth.role() = 'authenticated');

CREATE POLICY "Admins pueden eliminar imágenes" 
ON storage.objects FOR DELETE 
USING (bucket_id = 'public-images' AND auth.role() = 'authenticated');
