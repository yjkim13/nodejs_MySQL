--
-- Table structure for table 'author'
--


CREATE TABLE author(
    id int(11) NOT NULL AUTO_INCREMENT,
    name VARCHAR(20) NOT NULL,
    profile VARCHAR(200) DEFAULT NULL,
    PRIMARY KEY(id)
);

--
-- Dumping data for table 'author'
--

INSERT INTO author VALUES (1,'kim','developer');
INSERT INTO author VALUES (2,'jin','database administrator');
INSERT INTO author VALUES (3,'young','data scientist,developer');

--
-- Table structure for table 'topic' 
--

CREATE TABLE topic (
    id INT(11) NOT NULL AUTO_INCREMENT,
    title VARCHAR(30) NOT NULL,
    description TEXT,
    created DATETIME NOT null,
    author_id INT(11) DEFAULT NULL,
    PRIMARY KEY(id)
);

--
-- Dumping data for table 'topic'
--

INSERT INTO topic VALUES (1,'MySQL','MySQL is...',NOW(),1);
INSERT INTO topic VALUES (2,'Oracle','Oracle is...',NOW(),1);
INSERT INTO topic VALUES (3,'SQL Server','SQL Server is...',NOW(),2);
INSERT INTO topic VALUES (4,'PostgreSQL','PostgreSQL is...',NOW(),3);
INSERT INTO topic VALUES (5,'MongoDB','MongoDB is...',NOW(),1);