update cart 
set amount = $1
where id = $2;

select name, price, img, userid, cart.id, cart.amount from products 
join cart on products.id = cart.productid
join users on users.id = cart.userid
where users.id = $3
order by cart.id asc