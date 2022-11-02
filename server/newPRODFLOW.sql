DROP DATABASE IF EXISTS NEWPRODFLOW;
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
   PRIMARY KEY (Id_site)
);


--  Contenu de la table 'Site'

INSERT INTO Site (Name, status) VALUES('SAMFONY Aubervilliers','Active');
INSERT INTO Site (Name, status) VALUES('SAMFONY Roubaix','Disabled');
INSERT INTO Site (Name, status) VALUES('SAMFONY Mulhouse','Active');
INSERT INTO Site (Name, status) VALUES('SAMFONY Metz', 'Disabled');

--  --------------------------------------------------------

--  Structure de la table 'Address'


CREATE TABLE Address (
Id_address int not null auto_increment,
Id_site int,
Address varchar(50),
City varchar(30),
PRIMARY KEY (Id_address),
FOREIGN KEY (Id_Site) REFERENCES Site(Id_site)
);


--  Contenu de la table 'Address'


INSERT INTO Address (Address, Id_site, City) VALUES( '10 Avenue de la Republique',1, 'Aubervilliers');
INSERT INTO Address (Address, Id_site, City) VALUES( '17 Grand''place',2,  'Roubaix');
INSERT INTO Address (Address, Id_site, City) VALUES( '2 rue Pierre et Marie Curie',3 , 'Mulhouse');
INSERT INTO Address (Address, Id_site, City) VALUES( '1 place d''Armes-Jacques-François-Blondel ',4 ,'Metz');

--  Structure de la table 'ProductionLine'


CREATE TABLE ProductionLine (
   ID_line int NOT NULL auto_increment,
   Rate int,
   Id_site int,
   PRIMARY KEY (ID_line),
   CONSTRAINT fk_site_id2 FOREIGN KEY (Id_Site) REFERENCES Site(Id_site)
);


--  Contenu de la table 'ProductionLine'


INSERT INTO ProductionLine (Rate, Id_site) VALUES('36',1);
INSERT INTO ProductionLine (Rate, Id_site) VALUES('46',2);
INSERT INTO ProductionLine (Rate, Id_site) VALUES('56',3);
INSERT INTO ProductionLine (Rate, Id_site) VALUES('66',4);

--  Structure de la table 'NumberOfEmployees'


CREATE TABLE NumberOfEmployees (
   Id_site int NOT NULL,
   Employees int NOT NULL,
   PRIMARY KEY (Id_site),
   CONSTRAINT fk_site_id3 FOREIGN KEY (Id_Site) REFERENCES Site(Id_site)
);

--  Contenu de la table 'NumberOfEmployees'


INSERT INTO NumberOfEmployees (Id_site, Employees) VALUES (1 ,560);
INSERT INTO NumberOfEmployees (Id_site, Employees)  VALUES (2 ,710);
INSERT INTO NumberOfEmployees (Id_site, Employees)  VALUES (3 ,360);
INSERT INTO NumberOfEmployees (Id_site, Employees)  VALUES (4 ,260);
