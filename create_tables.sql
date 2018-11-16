CREATE TABLE users (
    id int AUTO_INCREMENT NOT NULL PRIMARY KEY,
    user_name varchar(255),
    pass varchar(255),
    role varchar(255)
);

CREATE TABLE pages (
    id int AUTO_INCREMENT NOT NULL PRIMARY KEY,
    title varchar(255),
    content text
);


CREATE TABLE sub_pages (
    id int AUTO_INCREMENT NOT NULL PRIMARY KEY,
    title varchar(255),
    content text,
    -- INDEX main_page_id (id),
    -- FOREIGN KEY (id) REFERENCES pages(id)
    main_page_id FOREIGN KEY REFERENCES pages(id)    
);

CREATE INDEX main_page_id_index
ON sub_pages (main_page_id);


CREATE TABLE css (
    id int AUTO_INCREMENT NOT NULL PRIMARY KEY,
    theme_name varchar(255),
    file_name varchar(255)
);
