import os
import subprocess

# Carpeta donde están los videos
carpeta = r"C:\Users\Choose Agencia\Documents\knarf2003angelo\jaques-club\public\media\videos_webm"
salida = r"C:\Users\Choose Agencia\Documents\knarf2003angelo\jaques-club\public\media\videos_convertidos"
bitrate = "300k"  # Puedes ajustarlo según lo que necesites

# Crear carpeta de salida si no existe
os.makedirs(salida, exist_ok=True)

# Extensiones de video que queremos procesar
extensiones = (".mp4", ".mkv", ".webm", ".avi", ".mov", ".flv")

# Recorremos todos los archivos
for archivo in os.listdir(carpeta):
    if archivo.lower().endswith(extensiones):
        entrada = os.path.join(carpeta, archivo)
        
        # Cambiar extensión a .webm para el archivo de salida
        nombre_sin_ext, _ = os.path.splitext(archivo)
        salida_archivo = os.path.join(salida, f"{nombre_sin_ext}.webm")

        comando = [
            "ffmpeg",
            "-i", entrada,
            "-r", "25",                   # Fuerza 25 fps
            "-b:v", bitrate,             # Baja el bitrate (más bajo = menos peso)
            "-c:v", "libvpx-vp9",        # Códec VP9 (eficiente)
            "-c:a", "libopus",           # Códec de audio moderno y liviano
            "-y",                        # Sobrescribe sin preguntar
            salida_archivo
        ]

        print(f"🎬 Procesando: {archivo} -> {os.path.basename(salida_archivo)}")
        subprocess.run(comando)

print("✅ Conversión finalizada.")
