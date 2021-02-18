SELECT 
    c.nome AS Cidade,
    e.nome AS Estado,
    regiao AS Região
FROM 
estados e INNER JOIN cidades c ON e.id = c.estado_id