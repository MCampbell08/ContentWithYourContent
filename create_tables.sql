
SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";

CREATE TABLE IF NOT EXISTS users (
    id int AUTO_INCREMENT NOT NULL PRIMARY KEY,
    user_name varchar(255),
    pass varchar(255),
    role varchar(255)
);

CREATE TABLE IF NOT EXISTS pages (
    id int AUTO_INCREMENT NOT NULL PRIMARY KEY,
    title varchar(255),
    content text
);

CREATE TABLE IF NOT EXISTS sub_pages (
    id int AUTO_INCREMENT NOT NULL PRIMARY KEY,
    title varchar(255),
    content text,
    main_page_id int,
    FOREIGN KEY (main_page_id) REFERENCES pages(id)
);

CREATE TABLE IF NOT EXISTS css (
    id int AUTO_INCREMENT NOT NULL PRIMARY KEY,
    theme_name varchar(255),
    file_name varchar(255)
);

CREATE INDEX main_page_id_index
ON sub_pages (main_page_id);
