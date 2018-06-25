select price from products 
join cart on products.id = cart.productid
join users on users.id = cart.userid
where users.id = $1