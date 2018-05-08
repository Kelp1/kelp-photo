    drop database if exists kelp;

    create database kelp;

    /connect kelp;

    create table users
    (userId int primary key,
    userName varchar(100),
    userFollowers int,
    userReviews int);

    create table photos
    (photoId int primary key,
    userId int references users(userId),
    id int,
    photoUrl varchar(200),
    photoDate timestamp);