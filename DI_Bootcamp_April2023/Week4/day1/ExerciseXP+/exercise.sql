-- CREATE TABLE students (
--     student_id SERIAL PRIMARY KEY,
--     last_name VARCHAR(100) NOT NULL,
--     first_name VARCHAR(100) NOT NULL,
--     date_birth DATE NOT NULL
-- )

-- INSERT INTO students (last_name, first_name, date_birth)
-- VALUES
--     ('Benichou', 'Marc', '1998-11-02'),
-- 	('Cohen', 'Yoan', '2010-12-03'),
-- 	('Benichou', 'Lea', '1987-07-27'),
-- 	('Dux','Amelia','1996-04-07'),
-- 	('Grez', 'David','2003-06-14'),
-- 	('Simpson', 'Omer','1980-10-03'),
-- 	('Adjedj', 'Meryl', '1988-11-24')

-- SELECT * FROM students

-- SELECT * FROM students WHERE last_name = 'Benichou' AND first_name = 'Marc'

-- SELECT * FROM students WHERE last_name = 'Benichou' OR first_name = 'Marc'

-- SELECT * FROM students WHERE first_name LIKE '%a%'

-- SELECT * FROM students WHERE first_name LIKE '%a'

-- SELECT * FROM students WHERE SUBSTRING(first_name, LENGTH(first_name) - 1, 1) = 'a'

-- SELECT *  FROM students WHERE student_id IN (1,3)

-- SELECT * FROM students WHERE date_birth >= '2000-01-01'

-- SELECT * FROM students ORDER BY last_name LIMIT 4

-- SELECT * FROM students ORDER BY date_birth DESC LIMIT 1

-- SELECT * FROM students OFFSET 2




