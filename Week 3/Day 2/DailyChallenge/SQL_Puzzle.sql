--CREATE TABLE FirstTab (
--     id integer, 
--     name VARCHAR(10)
--)

--INSERT INTO FirstTab VALUES
--(5,'Pawan'),
--(6,'Sharlee'),
--(7,'Krish'),
--(NULL,'Avtaar')

--SELECT * FROM FirstTab

--CREATE TABLE SecondTab (
--    id integer 
--)

--INSERT INTO SecondTab VALUES
--(5),
--(NULL)


--SELECT * FROM SecondTab

--Question 1
--NULL in subquery causes undefined results, so the count is 0.
--SELECT COUNT(*) 
--    FROM FirstTab AS ft WHERE ft.id NOT IN ( SELECT id FROM SecondTab WHERE id IS NULL )
--Output: Count bigint = 0

--Question 2
--Excludes row with id = 5, so the count is 2 (id = 6, id = 7).
--SELECT COUNT(*) 
--    FROM FirstTab AS ft WHERE ft.id NOT IN ( SELECT id FROM SecondTab WHERE id = 5 )
--Output: Count bigint = 2

--Question 3
--NULL in subquery causes undefined results, so the count is 0.
--SELECT COUNT(*) 
--    FROM FirstTab AS ft WHERE ft.id NOT IN ( SELECT id FROM SecondTab )
--Output: Count bigint = 0

--Question 4
--Excludes row with id = 5, so the count is 2 (id = 6, id = 7).
--SELECT COUNT(*) 
--    FROM FirstTab AS ft WHERE ft.id NOT IN ( SELECT id FROM SecondTab WHERE id IS NOT NULL )
--Output: Count bigint = 2


