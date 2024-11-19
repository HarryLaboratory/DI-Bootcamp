--SELECT language_id, name
--FROM language;

--SELECT f.title AS film_title, 
--       f.description AS film_description, 
--       l.name AS language_name
--FROM film f
--JOIN language l ON f.language_id = l.language_id;

--SELECT f.title AS film_title,
--       f.description AS film_description,
--       l.name AS language_name
--FROM language l
--LEFT JOIN film f ON l.language_id = f.language_id;

--CREATE TABLE new_film (
--    id SERIAL PRIMARY KEY,
--    name VARCHAR(255) NOT NULL
--);

--INSERT INTO new_film (name) VALUES
--('The Matrix'),
--('Inception'),
--('The Dark Knight'),
--('The Shawshank Redemption');

--SELECT * FROM new_film;

--CREATE TABLE customer_review (
--    review_id SERIAL PRIMARY KEY,                  
--    film_id INT NOT NULL,                         
--    language_id INT NOT NULL,                      
--    title VARCHAR(255) NOT NULL,                  
--    score INT CHECK (score BETWEEN 1 AND 10),     
--    review_text TEXT,                              
--    last_update TIMESTAMP DEFAULT CURRENT_TIMESTAMP, 
    
--    CONSTRAINT fk_film_id FOREIGN KEY (film_id) 
--       REFERENCES new_film (id) ON DELETE CASCADE,  
--	CONSTRAINT fk_language_id FOREIGN KEY (language_id) 
--       REFERENCES language (language_id)          
--);

--SELECT * FROM customer_review;

--INSERT INTO customer_review (film_id, language_id, title, score, review_text)
--VALUES 
--(1, 1, 'Amazing Sci-Fi Thriller', 9, 'A mind-bending movie with fantastic action sequences and a great plot. Must-watch for sci-fi lovers!');

--INSERT INTO customer_review (film_id, language_id, title, score, review_text)
--VALUES 
--(2, 2, 'Incroyable drame', 8, 'Un film très émouvant avec de superbes performances. À voir pour les amateurs de drame.');

--DELETE FROM new_film WHERE id = 1;
--When a film is deleted from the new_film table, the ON DELETE CASCADE constraint automatically removes all associated reviews from the customer_review table.

--SELECT * FROM customer_review;



