--CREATE TABLE actors (
--actor_id SERIAL PRIMARY KEY,
--first_name VARCHAR(50) NOT NULL,
--last_name VARCHAR(50) NOT NULL, 
--age DATE NOT NULL,
--number_oscars SMALLINT NOT NULL );

--INSERT INTO actors (first_name, last_name, age, number_oscars)
--VALUES('George','Clooney','06/05/1961', 2),
--('Natalie','Portman','09/06/1981', 3),
--('Anne','Hathaway','12/11/1982', 2),
--('Matt', 'Damon', '10/08/1970', 5);

--SELECT COUNT(*) FROM actors;
--INSERT INTO actors (first_name, last_name, age, number_oscars)
--VALUES ('', '',NULL ,NULL );

-- Below is the response to the 2 instructions 
--ERROR:  La ligne en échec contient (5, , , null, null).une valeur NULL viole la contrainte NOT NULL de la colonne « age » dans la relation « actors » 
--ERREUR:  une valeur NULL viole la contrainte NOT NULL de la colonne « age » dans la relation « actors »
--SQL state: 23502
--Detail: La ligne en échec contient (5, , , null, null).