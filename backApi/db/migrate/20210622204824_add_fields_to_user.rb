class AddFieldsToUser < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :role_id, :integer
    add_column :users, :name, :string
    add_column :users, :balance, :float
  end
end
