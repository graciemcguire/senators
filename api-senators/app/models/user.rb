class User < ApplicationRecord
  has_secure_password
  has_many :ratings
  has_many :senators, through: :ratings
end
