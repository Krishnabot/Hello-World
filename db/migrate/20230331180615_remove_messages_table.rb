class RemoveMessagesTable < ActiveRecord::Migration[7.0]
  def change
     drop_table :messages
  end
end
