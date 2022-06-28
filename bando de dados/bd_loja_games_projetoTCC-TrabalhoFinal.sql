create database banco_dados_loja_games;
use banco_dados_loja_games;

create table desenvolvedor(
idDesenvolvedor int auto_increment primary key,
NomeDesenvolvedor varchar(50) not null
);
select *from desenvolvedor;

create table jogo(
idJogo int auto_increment primary key,
NomeJogo varchar(50) not null,
DataDeLançamentoJogo date not null,
ClassificaçãoIndicativaJogo int not null,
Desenvolvedor_idDesenvolvedor int not null,
foreign key (Desenvolvedor_idDesenvolvedor) references  desenvolvedor(idDesenvolvedor)  #chave primaria da tabla desenvolvedor
);
select *from jogo;

create table Gênero(
idGênero int auto_increment primary key,
NomeGênero varchar(45) not null
);

create table Jogo_has_Gênero(
Jogo_idJogo int not null, #FK
Gênero_idGênero int not null, #FK
foreign key (Jogo_idJogo) references  jogo(idJogo), 
foreign key (Gênero_idGênero) references  Gênero(idGênero)
);

create table País(
idPaís int auto_increment primary key,
NomePaís varchar(45) not null
);

create table Cliente(
idCliente int auto_increment primary key,
NomeCliente varchar(50) not null,
DataDeNascimentoCliente date not null,
Email varchar(80) not null,
País_idPaís int not null, #FK
foreign key (País_idPaís) references  País(idPaís)
);
create table Cliente_has_Jogo(
Cliente_idCliente  int not null,#FK
Jogo_idJogo int not null,#FK
foreign key (Cliente_idCliente) references Cliente(idCliente),
foreign key (Jogo_idJogo) references jogo(idJogo)
);
create table CartãoDeCrédito(
idCartão int auto_increment primary key,
NomeCartão varchar(45) not null,
NúmeroCartão BIGINT(11) not null,
VencimentoCartão date not null,
NomeNoCartão varchar(45) not null,
CodigoCartão int not null,
Cliente_idCliente int not null, #FK
foreign key (Cliente_idCliente) references Cliente(idCliente)
);
create table HistoricoAssinatura(
idHistoricoAssinatura int auto_increment primary key,
Mês date not null,
Pagamento tinyint not null, 
CartãoUsado int not null, #FK
foreign key (CartãoUsado) references CartãoDeCrédito(idCartão)
);

select c.NomeCliente, j.NomeJogo, g.NomeGênero from cliente c 
left join Cliente_has_Jogo cj on c.idCliente = cj.Cliente_idCliente 
left join jogo j on j.idJogo = cj.Jogo_idJogo
left join Jogo_has_Gênero jg on  j.idJogo = jg.Jogo_idJogo
left join Gênero g on g.idGênero = jg.Gênero_idGênero where c.idCliente = 1;

CREATE VIEW JogosDoCliente AS select c.NomeCliente, j.NomeJogo, g.NomeGênero from cliente c 
left join Cliente_has_Jogo cj on c.idCliente = cj.Cliente_idCliente 
left join jogo j on j.idJogo = cj.Jogo_idJogo
left join Jogo_has_Gênero jg on  j.idJogo = jg.Jogo_idJogo
left join Gênero g on g.idGênero = jg.Gênero_idGênero where c.idCliente = 1;

select * from JogosDoCliente;

insert into desenvolvedor values
(null, 'FromSoftware'),(null, 'Sony'),(null, 'Bandai Namco'),(null, 'Rockstar Games'),(null, 'Konami'),(null, 'EA Sports'),(null, 'CD Projekt RED'),(null, 'Guerrilla Games');

select * from desenvolvedor;

insert into jogo values
(null, 'Elden ring', '2022/02/25', 16, 1),(null,'horizon forbidden west', '2022/02/18', 14, 8),(null, 'GTA 5', '2013/09/17', 18,4),(null, 'The Witcher 3', '2016/05/30', 16, 7);

select * from jogo;

insert into País values
(null, 'Brasil'),(null, 'Japão'),(null, 'Italia'),(null, 'Mexico'),(null, 'Argentiva'),(null, 'Canadá'),(null, 'Estados unidos');
select * from País;

insert into Cliente values
(null, 'João Dos Santos', '1997/02/25', 'João.santos@gmail.com',1),(null, "Bryan O'Connor", "1990/04/19", "bryan.O'connor@gmail.com", 7),(null,'Ana Clara da Silva', '2002/05/06', 'AnaClara.silva@gmail.com', 1);
select * from Cliente;

insert into CartãoDeCrédito values
(null, 'nuBank', 2143567859401323, '2028/03/21','João Dos Santos',0260,1),(null, "American Express", 9143367859301323, "2025/07/09","Bryan O'Connor",7997,2);
select * from CartãoDeCrédito;

insert into Gênero values
(null,'Ação'),(null,'Tiro'),(null,'Multiplayer'),(null,'Aventura'),(null, 'RPG');
select * from Gênero;

insert into Cliente_has_Jogo values
(1, 1),
(1, 3),
(1, 4),
(1, 2);
select * from Cliente_has_Jogo;

insert into Jogo_has_Gênero values
(1, 2),
(1, 4),
(1, 5),
(3, 1),
(3, 2),
(3, 3),
(4, 1),
(4, 3),
(4, 4),
(4,2);
select * from Jogo_has_Gênero;