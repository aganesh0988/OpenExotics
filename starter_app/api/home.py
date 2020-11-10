from flask import Blueprint, jsonify, request
from starter_app.models import Dealership, db
from flask_login import current_user, login_required

bp = Blueprint("home", __name__)


# @login_required
@bp.route('/')
def getDealerships():
    response = Dealership.query.all()
    return {'dealerships': [dealership.to_dict() for dealership in response]}
