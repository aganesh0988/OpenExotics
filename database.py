from starter_app.models import User, Dealership, Reservation
from starter_app import app, db
from dotenv import load_dotenv
from datetime import date
load_dotenv()


with app.app_context():
    db.drop_all()
    db.create_all()

    ian = User(name='Ian', username='Ian',
               email='ian@aa.io', password='password')
    javier = User(name='Javier', username='Javier',
                  email='javier@aa.io', password='password')
    dean = User(name='Dean', username='Dean',
                email='dean@aa.io', password='password')
    angela = User(name='Angela', username='Angela',
                  email='angela@aa.io', password='password')
    soonmi = User(name='Soon-Mi', username='Soon-Mi',
                  email='soonmi@aa.io', password='password')
    alissa = User(name='Alissa', username='Alissa',
                  email='alissa@aa.io', password='password')

    lambo_dal = Dealership(name='Lamborghini Dallas', address='601 S Central Expy', city='Richardson',
                           state='TX', bio='Carries new and pre-owned Lamborghinis.', img='lambo_dal.png')

    reservation1 = Reservation(
        user_id=1, dealership_id=1, start_time=date(2020, 12, 20))

    db.session.add(ian)
    db.session.add(javier)
    db.session.add(dean)
    db.session.add(angela)
    db.session.add(soonmi)
    db.session.add(alissa)
    db.session.add(lambo_dal)
    db.session.add(reservation1)

    db.session.commit()
