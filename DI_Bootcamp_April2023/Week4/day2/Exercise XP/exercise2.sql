-- SELECT * FROM customer

-- SELECT CONCAT (first_name,' ', last_name) AS full_name FROM customer

-- SELECT DISTINCT create_date FROM customer

-- SELECT * FROM customer
-- ORDER BY first_name DESC

-- SELECT film_id, title, release_year, rental_rate FROM film
-- ORDER BY rental_rate ASC

-- SELECT address, phone FROM address
-- WHERE district = 'Texas'

-- SELECT description FROM film
-- WHERE film_id = 15 OR film_id=150

-- SELECT film_id, title, description, length, rental_rate FROM film
-- WHERE title = 'Avatar'

-- SELECT film_id, title, description, length, rental_rate FROM film
-- WHERE LOWER(title) LIKE 'av%'

-- SELECT title FROM film
-- ORDER BY rental_rate ASC LIMIT 10

-- SELECT title FROM film
-- ORDER BY rental_rate
-- OFFSET 10 
-- FETCH FIRST 10 ROWS ONLY

-- SELECT customer.first_name, customer.last_name, payment.amount, payment.payment_date 
-- FROM customer
-- INNER JOIN payment ON customer.customer_id = payment.customer_id
-- ORDER BY customer.customer_id

-- SELECT film.title, inventory.store_id
-- FROM film
-- LEFT JOIN inventory ON film.film_id = inventory.film_id
-- WHERE inventory.store_id IS NULL

-- SELECT city.city, country.country
-- FROM city
-- INNER JOIN country ON country.country_id = city.country_id

-- SELECT CONCAT (customer.first_name,' ', customer.last_name) AS full_name, payment.amount, payment.payment_date
-- FROM customer
-- INNER JOIN payment ON payment.customer_id = customer.customer_id
-- ORDER BY payment.staff_id


