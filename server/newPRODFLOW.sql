# DROP DATABASE NEWPRODFLOW;
-- Destruction des tables
create database NEWPRODFLOW;
use NEWPRODFLOW;

DROP TABLE IF EXISTS Site ;
DROP TABLE IF EXISTS Address ;
DROP TABLE IF EXISTS ProductionLine ;
DROP TABLE IF EXISTS NumberOfEmployees ;

--  Structure de la table 'Site'

CREATE TABLE Site (
   Id_site int NOT NULL auto_increment,
   Name varchar(200) NOT NULL,
   Status varchar(200) NOT NULL,
   Employees int NOT NULL,
   PRIMARY KEY (Id_site)
);


--  Contenu de la table 'Site'

INSERT INTO Site (Name, Status, Employees) VALUES('SAMFONY Ile-de-France', 'Active', 560);
INSERT INTO Site (Name, Status, Employees) VALUES('SAMFONY North', 'Disabled', 710);
INSERT INTO Site (Name, Status, Employees) VALUES('SAMFONY East','Active', 360);
INSERT INTO Site (Name, Status, Employees) VALUES('SAMFONY West','Disabled', 260);

--  --------------------------------------------------------

--  Structure de la table 'Address'


CREATE TABLE Address (
Id_address int not null auto_increment,
Id_site int NOT NULL,
Address varchar(50),
City varchar(30),
ZipCode int NOT NULL,
PRIMARY KEY (Id_address),
CONSTRAINT fk_site_id1 FOREIGN KEY (Id_site) REFERENCES Site(Id_site)
);


--  Contenu de la table 'Address'


INSERT INTO Address (Address, Id_site, City, ZipCode) VALUES( '10 Avenue de la Republique',1, 'Aubervilliers',75005);
INSERT INTO Address (Address, Id_site, City, ZipCode) VALUES( '17 Grand''place',2, 'Roubaix',59512);
INSERT INTO Address (Address, Id_site, City, ZipCode) VALUES( '2 rue Pierre et Marie Curie',3 , 'Mulhouse',68200);
INSERT INTO Address (Address, Id_site, City, ZipCode) VALUES( '1 place d''Armes-Jacques-François-Blondel ',4 ,'Nantes',44036);

--  Structure de la table 'ProductionLine'


CREATE TABLE ProductionLine (
   ID_line int NOT NULL auto_increment,
   Rate int,
   Id_site int NOT NULL,
   PRIMARY KEY (ID_line),
   CONSTRAINT fk_site_id2 FOREIGN KEY (Id_site) REFERENCES Site(Id_site)
);


--  Contenu de la table 'ProductionLine'

INSERT INTO ProductionLine (Rate, Id_site) VALUES( '36',1);
INSERT INTO ProductionLine (Rate, Id_site) VALUES( '46',2);
INSERT INTO ProductionLine (Rate, Id_site) VALUES( '56',3);
INSERT INTO ProductionLine (Rate, Id_site) VALUES( '66',4);



COMMIT;


SELECT Name FROM Site;
SELECT Name FROM Site WHERE Id_site=2;
SELECT Name, Status, Employees, Address, City, ZipCode, ID_line, Rate FROM Site JOIN Address A ON Site.Id_site = A.Id_site JOIN ProductionLine ON Site.Id_site = ProductionLine.Id_site;