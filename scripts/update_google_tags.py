import os
import subprocess

def update_verification_tag():
    layout_path = os.path.join(os.path.dirname(__file__), "..", "app", "layout.tsx")
    layout_path = os.path.abspath(layout_path)
    
    with open(layout_path, "r", encoding="utf-8") as f:
        content = f.read()

    new_code = "-WPEX6SAzfnaY0T7IUDdZMgyW-z3QNF2iYs2qgZZ0qo"
    head_tag = "<head>"
    meta_tag = f'        <meta name="google-site-verification" content="{new_code}" />\n'

    # Inyectar el tag en el head explícitamente (solución al fallo del scraper de Google)
    if "google-site-verification" not in content and head_tag in content:
        content = content.replace(head_tag, f"{head_tag}\n{meta_tag}")
        with open(layout_path, "w", encoding="utf-8") as f:
            f.write(content)
        print("Etiqueta de verificación inyectada manualmente en <head>.")
    elif meta_tag in content:
        print("La etiqueta ya está inyectada en <head>.")
    else:
        # En caso de que haya otra versión de la etiqueta, intentar sobrescribirla si es necesario.
        # Por simplicidad del fix, si ya estaba "google-site-verification" pero distinta, la asumimos o reemplazamos.
        pass

def commit_and_push():
    repo_dir = os.path.abspath(os.path.join(os.path.dirname(__file__), ".."))
    
    subprocess.run(["git", "add", "app/layout.tsx", "directivas/google_analytics_SOP.md", "scripts/update_google_tags.py"], cwd=repo_dir, check=True)
    
    try:
        subprocess.run(["git", "commit", "-m", "fix: inject google site verification manually in head to bypass scraper issue"], cwd=repo_dir, check=True)
        print("Commit realizado con éxito.")
    except subprocess.CalledProcessError:
        print("No hay cambios para commitear.")

    print("Subiendo cambios a origin/master para disparar el deploy en Vercel...")
    subprocess.run(["git", "push"], cwd=repo_dir, check=True)
    print("Push completado.")

if __name__ == "__main__":
    update_verification_tag()
    commit_and_push()
