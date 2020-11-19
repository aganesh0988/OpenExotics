from flask_wtf import FlaskForm
from wtforms.fields import (
    PasswordField, StringField, DateTimeField
)
from wtforms.validators import DataRequired, Length
from wtforms.fields.html5 import EmailField


class SignUpForm(FlaskForm):
    username = StringField("Username", [DataRequired()])
    email = EmailField("Email", [DataRequired()])
    password = PasswordField("Password", [DataRequired()])
    name = StringField("Name", [DataRequired()])


class ResForm(FlaskForm):
    user_id = StringField("User")
    dealership_id = StringField("Dealership", [DataRequired()])
    start_time = StringField("Start time", [DataRequired()])


class LoginForm(FlaskForm):
    username = StringField("Username", [DataRequired()])
    password = PasswordField("Password", [DataRequired()])
