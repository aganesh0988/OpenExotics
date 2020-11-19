# from flask import Blueprint, request, jsonify
# from starter_app.models import User
# from starter_app.forms import LoginForm

# auth_routes = Blueprint('auth', __name__)


# @app.route('/login', methods=['GET', 'POST'])
# def login():
#     if not request.is_json:
#         return jsonify({"msg": "Missing JSON in request"}), 400

#     username = request.json.get('username', None)
#     password = request.json.get('password', None)

#     if not username or not password:
#         return {"errors": ["Missing required parameters"]}, 400

#     authenticated, user = User.authenticate(username, password)

#     if authenticated:
#         login_user(user)
#         return {"current_user_id": current_user.id, "current_username": username}, 200

#     return {"errors": ["Invalid username or password"]}, 401
