from flask_sqlalchemy import SQLAlchemy
from flask_login import UserMixin
from werkzeug.security import generate_password_hash, check_password_hash

db = SQLAlchemy()


class User(db.Model, UserMixin):
    __tablename__ = 'users'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(75), nullable=False)
    username = db.Column(db.String(40), nullable=False, unique=True)
    email = db.Column(db.String(255), nullable=False, unique=True)
    hashed_password = db.Column(db.String(255), nullable=False)
    reservations = db.relationship('Reservation', backref='user', lazy=True)
    dealerships = db.relationship('Dealership')

    def to_dict(self):
        return {
            "id": self.id,
            "name": self.name,
            "username": self.username,
            "email": self.email,
            "hashed_password": self.hashed_password
        }

    @property
    def password(self):
        return self.hashed_password

    @password.setter
    def password(self, password):
        self.hashed_password = generate_password_hash(password)

    def check_password(self, password):
        return check_password_hash(self.password, password)

    @classmethod
    def authenticate(cls, username, password):
        user = cls.query.filter(User.username == username).scalar()
        return check_password_hash(user.password, password), user


# class Vehicle(db.Model):
#     __tablename__ = 'vehicles'

#     id = db.Column(db.Integer, primary_key=True)
#     make = db.Column(db.String(50), nullable=False)
#     model = db.Column(db.String(50), nullable=False)
#     description = db.Column(db.String(255))
#     starting_price = db.Column(db.Integer, nullable=False)
#     img = db.Column(db.String(100), nullable=False)


class Dealership(db.Model):
    __tablename__ = 'dealerships'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(150), nullable=False)
    address = db.Column(db.String(200), nullable=False)
    city = db.Column(db.String(50), nullable=False)
    state = db.Column(db.String(50), nullable=False)
    bio = db.Column(db.String(255))
    img = db.Column(db.String(100), nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'))
    reservations = db.relationship(
        'Reservation', backref='dealership', lazy=True)
    users = db.relationship('User')
    # vehicles = db.relationship('Vehicle', backref='dealership', lazy=True)

    def to_dict(self):
        return{
            "id": self.id,
            "name": self.name,
            "address": self.address,
            "city": self.city,
            "state": self.state,
            "bio": self.bio,
            "img": self.img
        }


class Reservation(db.Model):
    __tablename__ = 'reservations'

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    dealership_id = db.Column(db.Integer, db.ForeignKey(
        'dealerships.id'), nullable=False)
    start_time = db.Column(db.DateTime(timezone=True), nullable=False)

    def to_dict(self):
        return {
            "id": self.id,
            "user_id": self.user_id,
            "dealership_id": self.dealership_id,
            "start_time": self.start_time,
            "dealership_name": self.dealership.name,
            "dealership_address": self.dealership.address,
            "dealership_city": self.dealership.city,
            "dealership_state": self.dealership.state,
            "dealership_bio": self.dealership.bio,
            "dealership_img": self.dealership.img
        }
