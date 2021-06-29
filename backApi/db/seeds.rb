# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
already_seeded = Role.count.positive?

unless already_seeded
  # Criação das roles
  adm_role = Role.create!(name: 'Administrador')
  use_role = Role.create!(name: 'Usuário')

  User.create(
    name: 'admin',
    role: adm_role,
    email: 'admin@admin',
    password: '12345678'
  )
  User.create(
    name: 'usuário',
    role: use_role,
    email: 'usuario@usuario',
    password: '12345678'
  )

  Genre.create(
    name: 'Ação',
    description: 'Explore lugares repletos de tiro, porrada e bomba'
  )
end