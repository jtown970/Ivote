insert into users (user_name, password, location)
values ( $1, $2, $3 );

select user_name, location from users
where user_name = $1