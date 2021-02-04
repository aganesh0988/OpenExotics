from flask import Blueprint, jsonify, request
from starter_app.models import Dealership, Reservation, User, db
from flask_login import current_user, login_required
from starter_app.forms import ResForm

bp = Blueprint("home", __name__)


# @login_required
@bp.route('/')
def getDealerships():
    response = Dealership.query.order_by(Dealership.name).all()
    return {'dealerships': [dealership.to_dict() for dealership in response]}, 200


@bp.route('/dealership/reservation', methods=["POST"])
# @login_required
def reservation():
    res_form = ResForm()
    if res_form.validate():
        data = request.get_json()
        new_res = Reservation(user_id=data["user_id"],
                            dealership_id=data["dealership_id"],
                            start_time=data["start_time"])
        db.session.add(new_res)
        db.session.commit()
        return {'reservation': new_res.to_dict()}, 200
    else:
        return jsonify(success=False, errors=res_form.errors), 400


@bp.route('/dealership/reservation/')
# @login_required
def reservation_get():
    response = Reservation.query.order_by(Reservation.id.desc()).limit(1)
    return {'reservations': [reservation.to_dict() for reservation in response]}, 200


@bp.route('/dealership/reservations/profile/<int:userID>')
def get_reservations_profile(userID):
    response = Reservation.query.filter_by(user_id=userID).all()
    print("HEEELLLLLOOOOOOOOO", response)
    return {'reservations': [reservation.to_dict() for reservation in response]}


@bp.route('/dealership/reservation/<int:resId>', methods=["DELETE"])
def cancel_reservation(resId):
    # response = Reservation.query.get(id)
    reservation = Reservation.query.filter_by(id=resId).first()
    db.session.delete(reservation)
    db.session.commit()
    return {}, 200



@bp.route('/dealership/<int:id>', methods=["GET"])
def getDealerProfile(id):
    response = Dealership.query.get(id)
    return {'dealership': response.to_dict()}


@bp.route('/search/<search_string>', methods = ["GET"])
def search_route(search_string):
    response = Dealership.query.filter(
        Dealership.name.ilike(f'%{search_string}%')).limit(15)
    return jsonify({'dealerships': [dealership.to_dict() for dealership in response]})
