from flask import Flask

app = Flask(__name__)

@app.route("/")
def bienvenida():
    return  """
        <a href="/cambiar-clave">Cambio de Contraseña</a>
        <a href="/registrar-cuenta">Registro</a>
        <a href="/volver">Volver</a>
"""

@app.route("/cambiar-clave")
def cambio_de_contraseñA():
    return  "<h2>1</h2>"


@app.route("/registrar-cuenta")
def registro():
    return "<h2>2</h2>"

@app.route("/volver")
def regresar():
    return "<h2>3</h2>"
