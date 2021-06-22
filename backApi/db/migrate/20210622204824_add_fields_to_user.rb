class AddFieldsToUser < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :role_id, :integer
    add_column :users, :name, :string
  end
end
