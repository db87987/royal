class Order < ActiveRecord::Base
  attr_accessible :comment
  has_many :line_items,  dependent: :destroy
  belongs_to :user
  

  def add_line_items_from_cart(cart)
    cart.line_items.each do |item|
      item.cart_id = nil
      line_items << item
    end
  end
end
