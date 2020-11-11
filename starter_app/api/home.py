from flask import Blueprint, jsonify, request
from starter_app.models import Dealership, Reservation, User, db
from flask_login import current_user, login_required

bp = Blueprint("home", __name__)


@login_required
@bp.route('/')
def getDealerships():
    response = Dealership.query.all()
    return {'dealerships': [dealership.to_dict() for dealership in response]}, 200


@bp.route('/dealership/reservation', methods=["GET", "POST"])
# @login_required
def reservation(user_id):
    user_id = request.json.get("user_id", None)
    dealership_id = request.json.get("dealership_id", None)
    start_time = request.json.get("start_time", None)
    new_reservation = Reservation(
        user_id=user_id, dealership_id=dealership_id, start_time=start_time)
    db.session.add(new_reservation)
    db.session.commit()
    return {'reservation': new_reservation.to_dict()}, 200