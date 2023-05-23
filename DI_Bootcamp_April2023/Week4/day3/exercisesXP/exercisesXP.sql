-- Get a list of all film languages.

-- SELECT name FROM language

-- Get a list of all films joined with their languages – select the following details : film title, description, and language name. Try your query with different joins:
-- Get all films, even if they don’t have languages.


-- SELECT film.title, film.description, language.name
-- FROM film
-- LEFT JOIN language ON film.language_id = language.language_id

-- Get all languages, even if there are no films in those languages.

-- SELECT film.title, film.description, language.name
-- FROM film
-- RIGHT JOIN language ON film.language_id = language.language_id

-- Create a new table called new_film with the following columns : id, name. Add some new films to the table.

-- CREATE TABLE new_film(
--   new_film_id SERIAL PRIMARY KEY,
--   name VARCHAR(300))

-- INSERT INTO new_film (name)
-- VALUES
--    ('Avatar'),
--    ('The Lion King'),
--    ('Inception'),
--    ('Titanic'),
--    ('Matrix'),
--    ('Lord of the Rings')


-- Create a new table called customer_review, which will contain film reviews that customers will make.
-- Think about the DELETE constraint: if a film is deleted, its review should be automatically deleted

-- CREATE TABLE customer_review (
--     review_id SERIAL PRIMARY KEY NOT NULL,
-- 	film_id integer REFERENCES new_film (new_film_id) ON DELETE CASCADE,
-- 	language_id INTEGER REFERENCES language (language_id),
-- 	title VARCHAR(100),
-- 	score SMALLINT CONSTRAINT check_score_range CHECK (score >= 1 AND score <= 10),
-- 	review_text TEXT,
-- 	last_update DATE
-- )

-- INSERT INTO customer_review (film_id, language_id, title, score, review_text, last_update)
-- VALUES
--     ((SELECT new_film_id FROM new_film WHERE name = 'Avatar'),(SELECT language_id FROM language WHERE name = 'English' ), 'Good', 7, 'The film was ok but too long', '2023-05-23'),
-- 	((SELECT new_film_id FROM new_film WHERE name = 'Matrix'),(SELECT language_id FROM language WHERE name = 'French' ), 'Weird', 7, 'I didnt like this movie', '2023-05-23')
	
	

-- DELETE from new_film
-- WHERE name = 'Matrix'

-- SELECT * FROM customer_review



-- EXERCISE 2

-- SELECT * FROM language

-- UPDATE language
-- SET name = 'Hebrew'
-- WHERE language_id = 6


-- UPDATE language
-- SET name = 'Spanish'
-- WHERE language_id = 4

-- Which foreign keys (references) are defined for the customer table? How does this affect the way in which we INSERT into the customer table?
-- -> store id from the table store, address_id from address. To insert into we need to use subquieries

-- We created a new table called customer_review. Drop this table. Is this an easy step, or does it need extra checking?

-- DROP TABLE customer_review
-- easy step


-- Find out how many rentals are still outstanding (ie. have not been returned to the store yet).
-- SELECT COUNT (*)
-- FROM rental
-- WHERE return_date IS NULL

-- Find the 30 most expensive movies which are outstanding (ie. have not been returned to the store yet)
-- SELECT film.title, payment.amount
-- FROM rental
-- JOIN inventory ON rental.inventory_id = inventory.inventory_id
-- JOIN film ON inventory.film_id = film.film_id
-- JOIN payment ON rental.rental_id = payment.rental_id
-- ORDER BY amount DESC LIMIT 30

-- The 1st film : The film is about a sumo wrestler, and one of the actors is Penelope Monroe.

-- SELECT film.title
-- FROM film
-- JOIN film_actor ON film.film_id = film_actor.film_id
-- JOIN actor ON film_actor.actor_id = actor.actor_id
-- WHERE film.description ILIKE '%sumo wrestler%' 
-- AND actor.first_name = 'Penelope' 
-- AND actor.last_name = 'Monroe'


-- The 2nd film : A short documentary (less than 1 hour long), rated “R”
-- SELECT film.title
-- FROM film
-- WHERE film.length < 60
-- AND rating = 'R'

-- The 3rd film : A film that his friend Matthew Mahan rented. 
-- He paid over $4.00 for the rental, and he returned it between the 28th of July and the 1st of August, 2005.

-- SELECT film.title
-- FROM film
-- JOIN inventory ON film.film_id = inventory.film_id
-- JOIN rental ON inventory.inventory_id = rental.inventory_id
-- JOIN customer ON rental.customer_id = customer.customer_id
-- WHERE customer.first_name = 'Matthew'
-- AND customer.last_name = 'Mahan'
-- AND rental.return_date BETWEEN '2005-07-28' AND '2005-08-01'

-- The 4th film : His friend Matthew Mahan watched this film, as well. 
-- It had the word “boat” in the title or description, and it looked like it was a very expensive DVD to replace.

-- SELECT film.title
-- FROM film
-- JOIN inventory ON film.film_id = inventory.film_id
-- JOIN rental ON inventory.inventory_id = rental.inventory_id
-- JOIN customer ON rental.customer_id = customer.customer_id
-- WHERE film.title ILIKE '%boat%' OR film.description ILIKE '%boat%'
-- AND customer.first_name = 'Matthew'
-- AND customer.last_name = 'Mahan'
-- ORDER BY film.replacement_cost DESC


























































