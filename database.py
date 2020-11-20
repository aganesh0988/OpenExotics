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
                           state='TX', bio='As architect of the largest dealership of its kind in the United States, Lamborghini Dallas is bullish on Lamborghini and its storied pedigree. Carries new and pre-owned Lamborghinis.', img='lambo_dal.png', user_id='1')
    bf_dal = Dealership(name='Boardwalk Ferrari', address='6300 International Pkwy', city='Plano',
                        state='TX', bio='With racing events, rallies, concorso and lifestyle events, Boardwalk provides its clients with Ferrari ownership experiences that are second to none. Ferrari dealership serving the Dallas/Fort Worth area', img='BF.png', user_id='2')
    rrmc_dal = Dealership(name='Rolls-Royce Motor Cars Dallas', address='5300 Lemmon Avenue', city='Dallas',
                          state='TX', bio='Rolls-Royce Motor Cars Dallas is dedicated to providing an exceptional customer experience.', img='RRMCD.png', user_id='3')
    am_dal = Dealership(name='Aston Martin Dallas', address='5333 Lemmon Ave', city='Dallas',
                        state='TX', bio='Getting your Aston Martin custom to your wants and desires is one of the best parts about owning an ultra luxury vehicle. We carry new and pre-owned models.', img='am_dal.png', user_id='1')
    mc_dal = Dealership(name='McLaren Dallas', address='5300 Lemmon Ave', city='Dallas',
                        state='TX', bio='A warm welcome to McLaren Dallas. Our aim is to deliver an ownership experience second to none with the commitment to excellence expected from a dynamic sports car that is a pleasure to own as well as to drive.', img='mc_dal.png', user_id='1')
    p_dal = Dealership(name='Pagani of Dallas', address='601 S Central Expy', city='Richardson',
                       state='TX', bio="We have a strong and committed sales staff with many years of experience satisfying our customers' needs. Carrying new and pre-owned models.", img='p_dal.png', user_id='1')
    porsche_dal = Dealership(name='Porsche Dallas', address='6107 Lemmon Ave', city='Dallas',
                             state='TX', bio='We are the number one pre-owned Porsche dealer in the country, your ownership experience is our number one priority. The largest inventory of new and pre-owned Porsches in North America including the 911, Cayman, Cayenne, Taycan, Panamera, and Macan.', img='porsche_dal.png', user_id='1')
    pomc_hou = Dealership(name='Post Oak Motor Cars', address='1530 W. Loop South', city='Houston',
                          state='TX', bio="A New Experience Awaits You at Post Oak Motor Cars, a Tilman Fertitta company and home to Houston's only authorized Bentley dealership, Texas' only Bugatti and Karma dealership and the Gulf Coast largest authorized Rolls-Royce dealership.", img='pomc_hou.png', user_id='1')
    mgbh_bh = Dealership(name='Marshall Goldman, Beverly Hills', address='8825 Wilshire Boulevard', city='Beverly Hills',
                          state='CA', bio="We are automotive enthusiasts, and take pride in our knowledge and market insight. When you are shopping for your next collectible, exotic or luxury vehicle, you should work with people who have the best understanding of these cars and markets.", img='mgbh.png', user_id='1')
    fsa_sa = Dealership(name='Ferrari of San Antonio', address='19302 19302 West Interstate 10', city='San Antonio',
                          state='TX', bio="We are the official Ferrari dealer of San Antonio. Come in and check out our extensive inventory.", img='fsa.png', user_id='1')

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
    db.session.add(mc_dal)
    db.session.add(p_dal)
    db.session.add(porsche_dal)
    db.session.add(pomc_hou)
    db.session.add(mgbh_bh)
    db.session.add(fsa_sa)
    db.session.add(reservation1)

    db.session.commit()
