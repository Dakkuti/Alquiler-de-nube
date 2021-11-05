-- Creación de la tabla
CREATE TABLE NUBE (
    ID NUMBER PRIMARY KEY,
    BRAND VARCHAR2(20),
    MODEL NUMBER,
    CATEGORY_ID NUMBER,
    NAME VARCHAR2(4000)
);

-- Creación de la tabla 'CLIENT'
CREATE TABLE CLIENT(
    ID NUMBER PRIMARY KEY,
    NAME VARCHAR(4000),
    EMAIL VARCHAR2(20),
    AGE NUMBER
)

-- Creación de la tabla 'MESSAGE'
CREATE TABLE MESSAGE(
    ID NUMBER PRIMARY KEY,
    MESSAGETEXT VARCHAR2(4000)
)

-- Creación de la tabla 'CATEGORY'
CREATE TABLE CATEGORY(
    ID NUMBER PRIMARY KEY,
    NAME VARCHAR(4000)
)

-- Api REST modulo: cloud

-- Get
SELECT * FROM CLOUD

-- Post
BEGIN 
    INSERT INTO CLOUD
    (ID, BRAND, MODEL, CATEGORY_ID, NAME)
    VALUES (:id, :brand, :model, :category_id, :name );
    :status_code:=201;
END;

-- Put
BEGIN
	UPDATE CLOUD
	SET ID = :id,
    BRAND = :brand,
	MODEL = :model,
	CATEGORY_ID = :category_id,
	NAME = :name
	WHERE ID = :id;
	:status_code := 201;
END;

-- Delete
BEGIN
    DELETE FROM CLOUD WHERE ID = :id;
    :status_code:=204;
END;

-- Get cloud/:id
SELECT * FROM CLOUD WHERE ID = :id

-- Api REST modulo: client

-- Get
SELECT * FROM CLIENT

-- Post
BEGIN
    INSERT INTO CLIENT
    (ID, NAME, EMAIL, AGE) 
    VALUES (:id, :name, :email, :age);
    :status_code:=201;
END;

-- Put
BEGIN
    UPDATE CLIENT SET NAME=:name, EMAIL=:email, AGE=:age WHERE ID=:id;
    :status_code:=201;
END;

-- Delete
BEGIN
    DELETE FROM CLIENT WHERE ID = :id;
    :status_code:=204;
END;

-- Get client/:id
SELECT * FROM CLIENT WHERE ID = :id

-- Api REST modulo: cloud

-- Get
SELECT * FROM MESSAGE

-- Post
BEGIN
    INSERT INTO MESSAGE(ID, MESSAGETEXT) VALUES(:id, :messagetext);
    :status_code:=201;
END;

-- Put
BEGIN
    UPDATE MESSAGE SET MESSAGETEXT=:messagetext WHERE ID=:id;
    :status_code:=201;
END;

-- Delete
BEGIN
    DELETE FROM MESSAGE WHERE ID=:id;
    :status_code:=204;
END;

-- Get message/:id
SELECT * FROM MESSAGE WHERE ID = :id