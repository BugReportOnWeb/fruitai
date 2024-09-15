from flask import Flask
from flask_cors import CORS

def create_app():
    app = Flask(__name__)
    CORS(app)

    from .routes.faqs import faqs
    app.register_blueprint(faqs, url_prefix="/api/faqs")

    return app
