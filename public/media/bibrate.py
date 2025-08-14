import os
import subprocess

# Carpeta donde están los videos
carpeta = "videos_webm"
salida = "videos_convertidos"
bitrate = "300k"  # Puedes bajarlo a 600k, 500k según tu necesidad

# Crear carpeta de salida si no existe
os.makedirs(salida, exist_ok=True)

# Recorremos todos los archivos
for archivo in os.listdir(carpeta):
    if archivo.lower().endswith(".webm"):
        entrada = os.path.join(carpeta, archivo)
        salida_archivo = os.path.join(salida, archivo)

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

        print(f"Procesando: {archivo}")
        subprocess.run(comando)

print("✅ Conversión finalizada.")
