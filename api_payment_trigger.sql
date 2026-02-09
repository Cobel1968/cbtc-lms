INSERT INTO financial_ledger (user_id, total_due_cfa, discount_applied_cfa, amount_paid_cfa, payment_method, payment_status)
SELECT 
    user_id, 
    250000.00, 
    discount_applied_cfa, -- Keeps the existing AI discount
    60000, 
    'Orange', 
    'paid'
FROM financial_ledger 
WHERE user_id = 3 
LIMIT 1;
