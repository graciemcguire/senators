# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

gracie = User.create({email: 'gracie@gracie.com', username: 'gracie', password: 'test'})

senators = Senator.create(
  [
    { name: 'kamala harris',
     state: 'california',
     party: 'democrat',
     naacp_rating: '10',
     pp_rating: '10',
     envi_rating: '10',
     nra_rating: '0',
     trump_rating: '0',
     user_rating: '0'
   }
  ]
)
