import os
from flask import Flask, render_template, request, session, Blueprint, jsonify
from flask_cors import CORS
from flask_wtf.csrf import CSRFProtect, generate_csrf
from flask_migrate import Migrate
from flask_login import LoginManager, current_user, login_user, logout_user, login_required


from starter_app.models import db, User, Dealership, Reservation
from starter_app.forms import LoginForm
from starter_app.api.user_routes import user_routes
# from starter_app.api.auth_routes import auth_routes
# from starter_app.api.home import dealerships
from starter_app.api import home

from starter_app.config import Config

app = Flask(__name__)

app.config.from_object(Config)
app.register_blueprint(user_routes, url_prefix='/api/users')
# app.register_blueprint(auth_routes, url_prefix='/api/auth')
# app.register_blueprint(dealerships, url_prefix='/api/dealerships')
app.register_blueprint(home.bp, url_prefix='/api/home')
db.init_app(app)
Migrate(app, db)

image_blueprint = Blueprint('images', __name__, static_url_path='/images', static_folder='static/images')
app.register_blueprint(image_blueprint)


login_manager = LoginManager(app)

# Application Security
CORS(app)
CSRFProtect(app)


@login_manager.user_loader
def load_user(user_id):
    return User.query.get(user_id)


@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def react_root(path):
    print("path", path)
    if path == 'favicon.ico':
        return app.send_static_file('favicon.ico')
    return app.send_static_file('index.html')


@app.route('/api/csrf/restore')
def restore_csrf():
    id = current_user.id if current_user.is_authenticated else None
    return {'csrf_token': generate_csrf(), "current_user_id": id}


@app.route('/login', methods=['GET', 'POST'])
def login():
    login_form = LoginForm()
    if login_form.validate():
        username = request.json.get('username', None)
        password = request.json.get('password', None)
        access_token, user = User.authenticate(username, password)
        # if access_token:
        #     return {"access_token": access_token}, 200
        if access_token:
            login_user(user)
            return {"current_user_id": current_user.id, "current_username": username}, 200
    else:
        return jsonify(success=False, errors=login_form.errors), 400
    return jsonify('ok')


@app.route('/logout', methods=['POST'])
@login_required
def logout():
    logout_user()
    return {'msg': 'You have been logged out'}, 200
