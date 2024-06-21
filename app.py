from flask import Flask, jsonify, render_template
import requests
from bs4 import BeautifulSoup
import pandas as pd

app = Flask(__name__)

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/api/datos_biodiversidad', methods=['GET'])
def datos_biodiversidad_api():
    datos = obtener_datos_biodiversidad()
    datos_procesados = procesar_datos(datos)
    return jsonify(datos_procesados.to_dict(orient='records'))

def obtener_datos_biodiversidad():
    url = 'URL_DE_LA_FUENTE_DE_DATOS'  # Reemplaza con la URL real
    response = requests.get(url)
    if response.status_code == 200:
        soup = BeautifulSoup(response.content, 'html.parser')
        datos = []
        for item in soup.find_all('TAG_ESPECIFICO'):
            dato = item.text.strip()
            datos.append(dato)
        return datos
    else:
        return []

def procesar_datos(datos):
    df = pd.DataFrame(datos, columns=['Dato'])
    df['Dato_Limpio'] = df['Dato'].apply(lambda x: x.lower())
    return df

if __name__ == '__main__':
    app.run(debug=True)
