import os
import subprocess

def update_verification_tag():
    layout_path = os.path.join(os.path.dirname(__file__), "..", "app", "layout.tsx")
    layout_path = os.path.abspath(layout_path)
    
    with open(layout_path, "r", encoding="utf-8") as f:
        content = f.read()

    # The old verification code
    old_code = "Js7gwJRYH0m34mBULddsezxyWdwoqa08mX8ur19GSi4"
    new_code = "-WPEX6SAzfnaY0T7IUDdZMgyW-z3QNF2iYs2qgZZ0qo"

    if old_code in content:
        content = content.replace(old_code, new_code)
        with open(layout_path, "w", encoding="utf-8") as f:
            f.write(content)
        print("Etiqueta de verificación actualizada correctamente en layout.tsx.")
    elif new_code in content:
        print("La etiqueta ya estaba actualizada.")
    else:
        print("No se encontró la etiqueta anterior para reemplazar.")

def commit_and_push():
    repo_dir = os.path.abspath(os.path.join(os.path.dirname(__file__), ".."))
    
    subprocess.run(["git", "add", "app/layout.tsx", "directivas/google_analytics_SOP.md", "scripts/update_google_tags.py"], cwd=repo_dir, check=True)
    
    try:
        subprocess.run(["git", "commit", "-m", "chore: update google site verification tag"], cwd=repo_dir, check=True)
        print("Commit realizado con éxito.")
    except subprocess.CalledProcessError:
        print("No hay cambios para commitear.")

    print("Subiendo cambios a origin/master para disparar el deploy en Vercel...")
    subprocess.run(["git", "push"], cwd=repo_dir, check=True)
    print("Push completado.")

if __name__ == "__main__":
    update_verification_tag()
    commit_and_push()
