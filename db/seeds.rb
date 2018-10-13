require 'pry'

Event.delete_all
AdminUser.delete_all
Neighborhood.delete_all

AdminUser.create!(email: 'admin@example.com', password: 'password', password_confirmation: 'password') 

magic_lab = Event.create(name:'Magic Lab', address: '344 West 14th Street', start_date: '2018-09-28', end_date: '2018-10-28', price: '$36')

mad_hatter = Event.create(name: "Mad Hatter's G&T Party", address: '73 Morgan Avenue', start_date: '2018-05-25', end_date: '2018-10-07', price: '$45')

sippin_santa = Event.create(name: "Sippin’ Santa at Boilermaker", address: '5 Broadway', start_date: '2018-11-23', end_date: '2018-12-31', price: 'Free')
rooms29 = Event.create(name: '29rooms', address:'588 Baltic Street', start_date: '2018-09-06', end_date: '2018-09-16', price: "$40"  )

magic_lab.description = "The world's First Magic-themed Art Exhibition is coming to NYC"
mad_hatter.description = "Alice In Wonderland”-themed pop-up will invite visitors aboard a stationary double-decker bus for a two-hour cocktail-mixing experience featuring characters from the classic Lewis Carroll children’s book and British tea-time snacks."
sippin_santa.description = "Hawaiian Christmas pop-up by Boilermaker and sister to Miracle on 9th Street, with varied and very holiday-themed drink offerings"
rooms29.description = '29Rooms blurs the lines between an art exhibition, a fun house, and a choose your own adventure novel.'

sippin_santa.avatar.attach(io: File.open('/Users/Vane/Desktop/NYC-PopUps/santa.jpg'), filename: "santa.jpg")
# binding.pry
# sippin_santa.imageUrl = url_for(sippin_santa.avatar)


manhattan = Neighborhood.create(name: 'Manhattan')
brooklyn = Neighborhood.create(name: 'Brooklyn')
queens = Neighborhood.create(name: 'Queens')
bronx = Neighborhood.create(name:'Bronx')

mad_hatter.neighborhood = brooklyn
magic_lab.neighborhood = manhattan
sippin_santa.neighborhood = manhattan
rooms29.neighborhood= brooklyn

 
mad_hatter.save
magic_lab.save
sippin_santa.save
rooms29.save
