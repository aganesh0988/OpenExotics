from flask import Blueprint, jsonify, request
from starter_app.models import User, db
from flask_login import current_user, login_required, login_user
from starter_app.forms import SignUpForm

user_routes = Blueprint('users', __name__)


@user_routes.route('/')
@login_required
def index():
    response = User.query.all()
    return {"users": [user.to_dict() for user in response]}


@user_routes.route('/<currentUserId>', methods=["GET"])
@login_required
def user(currentUserId):
    response = User.query.get(currentUserId)
    return {"user": response.to_dict()}


@user_routes.route('/signup', methods=["POST"])
def new_user():
    sign_up_form = SignUpForm()
    if sign_up_form.validate():
        print("hitting here!!!!!!!!!")
        data = request.get_json()
        new_user = User(username=data["username"],
                        name=data["name"],
                        email=data["email"],
                        password=data["password"])
        db.session.add(new_user)
        db.session.commit()
        login_user(new_user)
    else:
        return jsonify(success=False, errors=sign_up_form.errors), 400
    return jsonify('ok')
