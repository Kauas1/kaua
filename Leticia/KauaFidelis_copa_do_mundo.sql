create database copa_do_mundo;

use copa_do_mundo;

create table usuario(
	id int primary key auto_increment not null,
	nome varchar(255) not null,
    email varchar(255) not null,
    telefone varchar(50) not null,
    cpf varchar(255) not null

);

alter table usuario add pais varchar(255) not null;

insert into usuario(nome, email, telefone, cpf, pais)
values('Ana Paula', 'anapaula@anapaula.com', '988473265', '01234567897', 'Brasil'), ('Jose Paulo', 'josepaulo@josepaulo.com', '990028922',  '01438033443', 'Israel'), ('Luiza Lorien', 'luiza@lorien.com', '998745612', '14725836984', 'Russia'), ('Ryan Lucas', 'ryanlucas@ryanlucas.com', '965477456', '01236547890', 'Brasil'), ('Kaua Fidelis', 'kauafidelis@kauafidelis.com', '988072627', '15317256437', 'Brasil');


create table uniformes(
	uniforme_id int primary key auto_increment not null,
    selecao_uniforme varchar(255) not null,
    votacao int,
    
    foreign key (votacao) references usuario(id) 
);

insert into uniformes(selecao_uniforme, votacao)
values('Brasil', 1), ('Brasil', 3), ('França', 4), ('Holanda', 3), ('Brasil', 5); 


create table login_admin(
	id int primary key auto_increment not null,
    nome varchar(255) not null,
    cpf varchar(255) not null,
    telefone varchar(255) not null,
    senha varchar(255) not null,
    email varchar(255) not null
);



insert into login_admin(nome, cpf, telefone, senha, email)
values('Carlos', '05647894124', '988475613', '123456', 'carlos@carlos.com'), ('Leticia', '01456782309', '974651239', '007569','leticia@leticia.com'), ('Igor', '02314756895', '947561234', '158575', 'igor@igor.com'), 
('Marcia', '01425879414', '956478123', '159746', 'marcia@marcia.com'), ('Joao', '02569847413', '977774568', '789423', 'joao@joao.com');

create table ingressos(
	id int primary key auto_increment not null,
    jogo_do_dia varchar(255) not null,
    horario datetime,
	responsavel_id int not null,
    
    foreign key (responsavel_id) references login_admin(id)
);

insert into ingressos(jogo_do_dia, horario, responsavel_id)
values('Brasil x França', '2024-07-05 11:15:00', 1), ('Italia x Portugal', '2024-07-05 11:15:00', 2), ('Argentina x Uruguai', '2024-07-07 12:00:00', 3), ('Israel x Marrocos', '2024-07-05 13:30:00', 4), ('Inglaterra x Colombia', '2024-07-09 12:00:00', 5);


 
 
create table competidores(
	id int primary key auto_increment not null,
    selecao varchar(255) not null,
    nome varchar(255) not null,
    numero_camisa varchar(255)
);

insert into competidores(selecao,nome,numero_camisa)
values('Brasil', 'Rosa', '8'), ('Brasil', 'Joselia', '2'), ('Brasil', 'Marta', '10'), ('França', 'Yame', '7'), ('França', 'Alisson', '10'), ('Portugal', 'Paola', '7'), ('Portugal', 'Clarentina', '2'),
('Itália', 'Marchella', '2'), ('Itália', 'Maria', '22'), ('Argentina', 'Liona', '10'), ('Argentina', 'Araúja', '6'), ('Uruguai', 'Cavani', '9'), ('Uruguai', 'Angel', '10');

  /*Times são os times*/
  
  create table times(
	id int primary key auto_increment not null,
    selecao_nome varchar(255) not null,
    grupo varchar(255) not null
  );
  
  
  
  insert into times(selecao_nome,grupo)
  values('Brasil', 'Grupo A'), ('Estados Unidos', 'Grupo A'), ('Belgica', 'Grupo A'), ('França', 'Grupo A'), ('Italia', 'Grupo B'), ('Portugal', 'Grupo B'), ('Espanha', 'Grupo B'), ('Canada', 'Grupo B'),
  ('Israel', 'Grupo C'), ('Marrocos', 'Grupo C'), ('Alemanha', 'Grupo C'), ('Russia', 'Grupo C'), ('Colombia', 'Grupo D'), ('Inglaterra', 'Grupo D'), ('Equador', 'Grupo D'), ('Croacia', 'Grupo D');
 



 /*E as competições são os jogos*/
 
 create table competicoes(
	id int primary key auto_increment  not null,
    partida varchar(255) not null,
    created_at timestamp,
    updated_at datetime,
    situacao varchar(255) not null
 );
 

insert into competicoes(partida, created_at, updated_at, situacao)
values('Brasil x França', '2024-07-05 11:15:00', '2024-07-05 11:30:00', 'Vai acontecer'), ('Italia x Portugal', '2024-07-05 11:45:00', '2024-07-05 12:00:00', 'Vai acontecer'), 
('Argentina x Uruguai', '2024-07-05 12:00:00', '2024-07-05 12:15:00', 'Vai acontecer'), ('Israel x Marrocos', '2024-07-05 13:30:00', '2024-07-05 13:45:00', 'Vai acontecer'), 
('Inglaterra x Colombia', '2024-07-05 14:00:00', '2024-07-05 13:45:00', 'Vai acontecer');

 

 
create table alimentacao(
	id int primary key auto_increment not null,
	nome varchar(255) not null,
    tipo varchar(255) not null,
    estoque varchar(255) not null
);

insert into alimentacao(nome, tipo, estoque)
values('Coxinha', 'Salgado', '5000'), ('Cachorro Quente', 'Salgado', '3000'), ('Coca Cola', 'Bebida', '15000'), ('Pepsi', 'Bebida', '15000'), ('Suco de Cajú', 'Bebida',5000);


create table classificacao_times(
	id int primary key auto_increment not null,
    grupo varchar(255) not null,
    classificacao varchar(255) not null,
    times varchar(255) not null
);


insert into classificacao_times(grupo,classificacao, times)
values('Grupo A', '1', 'Brasil'), ('Grupo A', '2', 'Estados Unidos'), ('Grupo A', '3', 'França'), ('Grupo A', '4', 'Belfica'), ('Grupo B', '1', 'Italia'), ('Grupo B', '2', 'Portugal'), ('Grupo B', '3', 'Espanha'), ('Grupo B', '4', 'Canada'), 
('Grupo C', '1', 'Israel'), ('Grupo C', '2', 'Marrocos'), ('Grupo C', '3', 'Alemanha'), ('Grupo C', '4', 'Russia'), ('Grupo D', '1', 'Colombia'), ('Grupo D', '2', 'Inglaterra'), ('Grupo D', '3', 'Equador'), ('Grupo D', '4', 'Croacia');    


 
 



