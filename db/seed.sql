DROP TABLE IF EXISTS user_votes;
DROP TABLE IF EXISTS house;
DROP TABLE IF EXISTS house_votes;
DROP TABLE IF EXISTS all_votes;
DROP TABLE IF EXISTS users;


create table users (
    id serial primary key,
    user_name varchar(20),
    password text,
    location varchar(2)
);

create table user_votes (
    id serial primary key,
    user_id int references users(id),
    item text,
    vote_yes boolean
);

create table house (
    id serial primary key,
    rep_name varchar(100),
    location varchar(10)
);