require 'pry'

# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
AdminUser.create!(email: 'admin@example.com', password: 'password', password_confirmation: 'password') 

magic_lab = Event.create(name:'Magic Lab', location: '344 West 14th Street', start_date: '2018-09-28', end_date: '2018-10-28', price: '$36')

mad_hatter = Event.create(name: "Mad Hatter's G&T Party", location: '73 Morgan Avenue', start_date: '2018-05-25', end_date: '2018-10-07', price: '$45')

manhattan = Neighborhood.create(name: 'Manhattan')
brooklyn = Neighborhood.create(name: 'Brooklyn')
queens = Neighborhood.create(name: 'Queens')
bronx = Neighborhood.create(name:'Bronx')

mad_hatter.neighborhood = brooklyn
magic_lab.neighborhood = manhattan

mad_hatter.save
magic_lab.save
# binding.pry

