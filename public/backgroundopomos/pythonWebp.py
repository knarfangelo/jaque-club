import os
from PIL import Image

def convertir_a_webp(carpeta_entrada, carpeta_salida):
    # Crear carpeta de salida si no existe
    if not os.path.exists(carpeta_salida):
        os.makedirs(carpeta_salida)

    # Extensiones soportadas
    extensiones = ('.jpg', '.jpeg', '.png', '.bmp', '.tiff', '.gif')

    for archivo in os.listdir(carpeta_entrada):
        if archivo.lower().endswith(extensiones):
            ruta_entrada = os.path.join(carpeta_entrada, archivo)
            nombre_sin_ext = os.path.splitext(archivo)[0]
            ruta_salida = os.path.join(carpeta_salida, f"{nombre_sin_ext}.webp")

            try:
                with Image.open(ruta_entrada) as img:
                    # Guarda en formato WebP manteniendo tamaño original
                    img.save(ruta_salida, "WEBP", quality=100)  
                print(f"✅ Convertido: {archivo} → {ruta_salida}")
            except Exception as e:
                print(f"❌ Error con {archivo}: {e}")

if __name__ == "__main__":
    carpeta_entrada = r"C:\Users\Choose Agencia\Documents\knarf2003angelo\jaques-club\public\backgroundopomos\imagenes"   # 📂 Carpeta donde están tus imágenes
    carpeta_salida = r"C:\Users\Choose Agencia\Documents\knarf2003angelo\jaques-club\public\backgroundopomos\convertidas" # 📂 Carpeta donde se guardarán las WebP
    convertir_a_webp(carpeta_entrada, carpeta_salida)
