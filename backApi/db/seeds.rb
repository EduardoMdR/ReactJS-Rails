# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

u = User.find_by(id: 1)
u.image.attach(io: File.open('./public/aaa.png'), filename: 'user.png')

already_seeded = Role.count.positive?

unless already_seeded
  # Criação das roles
  adm_role = Role.create!(name: 'Administrador')
  use_role = Role.create!(name: 'Usuário')

  User.create(
    name: 'admin', 
    role_id: adm_role.id,
    email: 'admin@admin', 
    password: '12345678'
  )
  User.create(
    name: 'usuário',
    role_id: use_role.id,
    email: 'usuario@usuario',
    password: '12345678'
  )

  genre = [
    'Ação', 'Aventura', 'Anime', 'Mundo Aberto', 
    'Roguelike', 'Corrida', 'Esporte', 'Misterio', 
    'Investigação', 'Sobrevivencia', 'Simulação', 
    'RPG', 'Ficção Científica', 'Estratégia', 'Terro',
    'Espacial', 'Muiltijogador', 'Cooperativo'
  ]
  genre.each do |genero|
    Genre.create(
      name: genero
    )
  end
end