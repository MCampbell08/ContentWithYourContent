
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
    content text,
    shown bit
);

CREATE TABLE IF NOT EXISTS sub_pages (
    id int AUTO_INCREMENT NOT NULL PRIMARY KEY,
    title varchar(255),
    content text,
    main_page_id int,
    shown bit,
    FOREIGN KEY (main_page_id) REFERENCES pages(id)
);

-- CREATE TABLE IF NOT EXISTS css (
--     id int AUTO_INCREMENT NOT NULL PRIMARY KEY,
--     theme_name varchar(255),
--     file_name varchar(255)
-- );

-- CREATE INDEX main_page_id_index
-- ON sub_pages (main_page_id);


-- INSERT INTO `pages` (`id`, `title`, `content`, `shown`) VALUES 
-- (1, 'index.html', '<p>Hello and welcome to the main page of our website, this is where we will show you what our business is about, and to update the pages whenever we see fit.</p>', 1),
-- (2, 'about.html', '<p>Hello and welcome to our about page, this is where you can learn about who we are, and what we do for this company. So what we do is make websites, and that is really is, professional, and clean websites for the everyday type of guy.</p>', 1),
-- (3, 'contact.html', '<p>This is our contact page, this is where you can contact our company and ask about different styles, help on the website,and how to change the styles of the webpages</p> <h2>Address: 123 fake lane, New New York, NNY</h2> <h2>Phone number: 555-555-1234</h2>', 1);

-- INSERT INTO `sub_pages` (`id`, `title`, `content`, `main_page_id`, `shown`) VALUES 
-- (1, 'email.html', '<h1>Josh Young Email:</h1> <h2>jyoung@student.neumont.edu</h2> <br /> <h1>Mason Lawrence Email:</h1> <h2>mlawrence@student.neumont.edu</h2> <br /> <h1>Mason Campbell Email:</h1> <h2>mcampbell@student.neumont.edu</h2>', 1, 3),
-- (2, 'history.html', '<p>Mason Campbell, Mason Lawrence, and Joshua Young, are Neumont Grads, that got together and decided to create a business about making websites that are able to be changed whenever an admin becomes active, and when that happens you might see some styles change, and some different aspects of the page being changed.</p>', 1, 2),
-- (3, 'locations.html', '<p>We are based out of Salt Lake City, UT, and we are just three Neumont Students who decided to create a business, and make a website to follow it up. We will also make changes when we see fit, when an admin logs in and they will change the pages if they have anything to fix or add.</p>', 1, 3),
-- (4, 'mission.html', '<p>To show everyone that it is easy to edit and choose different styles and change the aspects of a page on the fly, and also run the whole backend off of a raspberry pi.</p>', 1, 2);


-- INSERT INTO `css` (`id`, `theme_name`, `file_name`) VALUES 
-- (1, 'Theme_1', 'style1.css'),
-- (2, 'Theme_2', 'style2.css'),
-- (3, 'Theme_3', 'style3.css');

-- INSERT INTO `users` (`id`, `user_name`, `pass`, `role`) VALUES
-- (1, 'admin', 'admin', 'admin');
