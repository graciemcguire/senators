class User < ApplicationRecord
  has_many :ratings
  has_many :senators, through: :ratings
  has_secure_password
end
