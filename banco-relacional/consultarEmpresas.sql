SELECT e.nome, c.nome
FROM empresas e, empresas_cidades eu, cidades c
WHERE 
    e.id = eu.empresa_id
    AND c.id = eu.cidade_id
    AND sede