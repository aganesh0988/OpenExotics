from dotenv import load_dotenv
load_dotenv()

from starter_app import app, db
from starter_app.models import User

with app.app_context():
  db.drop_all()
  db.create_all()

  ian = User(firstname = 'Ian', lastname = 'Doe', username = 'Ian', email = 'ian@aa.io', password='password')
  javier = User(firstname = 'Javier', lastname = 'Doe', username = 'Javier', email = 'javier@aa.io', password='password')
  dean = User(firstname = 'Dean', lastname = 'Doe', username = 'Dean', email = 'dean@aa.io', password='password')
  angela = User(firstname = 'Angela', lastname = 'Doe', username = 'Angela', email = 'angela@aa.io', password='password')
  soonmi = User(firstname = 'Soon-Mi', lastname = 'Doe', username = 'Soon-Mi', email = 'soonmi@aa.io', password='password')
  alissa = User(firstname = 'Alissa', lastname = 'Doe', username = 'Alissa', email = 'alissa@aa.io', password='password')

  db.session.add(ian)
  db.session.add(javier)
  db.session.add(dean)
  db.session.add(angela)
  db.session.add(soonmi)
  db.session.add(alissa)

  db.session.commit()
