
🔹 1. Basic–Intermediate SQL Queries (Very Common)
Q1. Get employees with salary greater than the average salary.
SELECT * FROM employees WHERE salary > (SELECT AVG(salary) FROM employees);
Q2. Find duplicate records based on email.
SELECT email, COUNT(*) FROM users GROUP BY email HAVING COUNT(*) > 1;
Q3. Get the 2nd highest salary (all methods).
Method 1: Using LIMIT
SELECT DISTINCT salary FROM employees ORDER BY salary DESC LIMIT 1 OFFSET 1;
Method 2: Using MAX & subquery
SELECT MAX(salary) FROM employees WHERE salary < (SELECT MAX(salary) FROM employees);
Method 3: Using Dense_Rank
SELECT salary FROM ( SELECT salary, DENSE_RANK() OVER (ORDER BY salary DESC) r FROM employees ) t WHERE r = 2;
Q4. Find users who never placed an order.
SELECT u.* FROM users u LEFT JOIN orders o ON u.id = o.user_id WHERE o.user_id IS NULL;
Q5. Get top 3 most selling products.
SELECT product_id, COUNT(*) AS total_sales FROM orders GROUP BY product_id ORDER BY total_sales DESC LIMIT 3;
🔹 2. JOIN + GROUP BY Coding Questions
Q6. Get department-wise highest salary.
SELECT department_id, MAX(salary) AS max_salary FROM employees GROUP BY department_id;
Q7. Find employees who joined in the last 30 days.
SELECT * FROM employees WHERE join_date >= CURRENT_DATE - INTERVAL 30 DAY;
Q8. Show total sales amount per customer.
SELECT c.name, SUM(o.amount) AS total_spend FROM customers c JOIN orders o ON c.id = o.customer_id GROUP BY c.name;
🔹 3. Window Function Questions (Very Important for 4 YOE)
Q9. Rank employees by salary within each department.
SELECT employee_id, department_id, salary, RANK() OVER (PARTITION BY department_id ORDER BY salary DESC) AS salary_rank FROM employees;
Q10. Running total of sales by date.
SELECT sale_date, amount, SUM(amount) OVER (ORDER BY sale_date) AS running_total FROM sales;
Q11. Find employees whose salary is above department average.
SELECT * FROM ( SELECT employee_id, salary, department_id, AVG(salary) OVER (PARTITION BY department_id) AS dept_avg FROM employees ) t WHERE salary > dept_avg;
🔹 4. Real Backend Developer SQL Case-Study Questions
Q12. Get users who placed more than 3 orders in last month.
SELECT user_id, COUNT(*) AS total_orders FROM orders WHERE order_date >= DATE_SUB(CURDATE(), INTERVAL 1 MONTH) GROUP BY user_id HAVING COUNT(*) > 3;
Q13. Get product that generated maximum revenue.
SELECT product_id, SUM(quantity * price) AS revenue FROM order_items GROUP BY product_id ORDER BY revenue DESC LIMIT 1;
Q14. Show the last order of each customer.
SELECT * FROM ( SELECT customer_id, order_id, order_date, ROW_NUMBER() OVER (PARTITION BY customer_id ORDER BY order_date DESC) as r FROM orders ) t WHERE r = 1;
Q15. Delete duplicate rows but keep the latest record.
DELETE t1 FROM users t1 JOIN users t2 ON t1.email = t2.email AND t1.id < t2.id;
🔹 5. Advanced SQL Questions (Asked for 4–5 YOE)
Q16. Pivot: show monthly sales as columns.
SELECT product_id, SUM(CASE WHEN MONTH(order_date)=1 THEN amount END) AS Jan, SUM(CASE WHEN MONTH(order_date)=2 THEN amount END) AS Feb, ... FROM orders GROUP BY product_id;
Q17. Show customers inactive for last 90 days.
SELECT * FROM customers WHERE id NOT IN ( SELECT DISTINCT customer_id FROM orders WHERE order_date >= CURDATE() - INTERVAL 90 DAY );
Q18. Find gaps in sequence of order IDs (missing IDs).
SELECT t1.id + 1 AS missing_id FROM orders t1 LEFT JOIN orders t2 ON t2.id = t1.id + 1 WHERE t2.id IS NULL;
🔥 Want me to create a full SQL mock interview for 4 years experience?
I can include:
✔ 20 coding questions✔ join + window + complex queries✔ schema-based questions✔ expected answers✔ explanations
Just say "yes, mock interview".
