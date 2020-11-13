from flask import Blueprint, jsonify, request
from starter_app.models import Dealership, Reservation, User, db
from flask_login import current_user, login_required

bp = Blueprint("home", __name__)


@login_required
@bp.route('/')
def getDealerships():
    # response = Dealership.query.all()
    response = Dealership.query.order_by(Dealership.name).all()
    return {'dealerships': [dealership.to_dict() for dealership in response]}, 200


@bp.route('/dealership/reservation', methods=["POST"])
# @login_required
def reservation():
    user_id = request.json.get("user_id", None)
    dealership_id = request.json.get("dealership_id", None)
    print("PRINT!!!!!!!!!", dealership_id, user_id)
    #start_time = request.json.get("start_time", None)
    new_reservation = Reservation(
        user_id=user_id, dealership_id=dealership_id)
    db.session.add(new_reservation)
    db.session.commit()
    return {'reservation': new_reservation.to_dict()}, 200


@bp.route('/dealership/reservation/')
# @login_required
def reservation_get():
    response = Reservation.query.all()
    return {'reservations': [reservation.to_dict() for reservation in response]}, 200


@bp.route('/dealership/<int:id>', methods=["GET"])
def getDealerProfile(id):
    response = Dealership.query.get(id)
    return {'dealership': response.to_dict()}
