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
    demo = User(name='Demo', username='Demo',
                email='demo@demo.com', password='password')

    lambo_dal = Dealership(name='Lamborghini Dallas', address='601 S Central Expy', city='Richardson',
                           state='TX', bio='Carries new and pre-owned Lamborghinis.', img='lambo_dal.png', user_id='1')
    bf_dal = Dealership(name='Boardwalk Ferrari', address='6300 International Pkwy', city='Plano',
                        state='TX', bio='Ferrari dealership serving the Dallas/Fort Worth area', img='BF.png', user_id='2')
    rrmc_dal = Dealership(name='Rolls-Royce Motor Cars Dallas', address='5300 Lemmon Avenue', city='Dallas',
                          state='TX', bio='Rolls-Royce Motor Cars Dallas is dedicated to providing an exceptional customer experience.', img='RRMCD.png', user_id='3')
    am_dal = Dealership(name='Aston Martin Dallas', address='5333 Lemmon Ave', city='Dallas',
                        state='TX', bio='Getting your Aston Martin custom to your wants and desires is one of the best parts about owning an ultra luxury vehicle. We carry new and pre-owned models.', img='am_dal.png', user_id='1')

    reservation1 = Reservation(
        user_id=1, dealership_id=1, start_time=date(2020, 12, 20))

    db.session.add(ian)
    db.session.add(javier)
    db.session.add(dean)
    db.session.add(angela)
    db.session.add(soonmi)
    db.session.add(alissa)
    db.session.add(demo)
    db.session.add(lambo_dal)
    db.session.add(bf_dal)
    db.session.add(rrmc_dal)
    db.session.add(am_dal)
    db.session.add(reservation1)

    db.session.commit()
