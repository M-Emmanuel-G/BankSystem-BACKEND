create Table Users_Bank(
    id_user varchar(255) PRIMARY KEY NOT NULL,
    name_client varchar(255) NOT NULL,
    cpf VARCHAR(255) NOT NULL,
    phone VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL
);

drop Table Users_Bank;

create table Account_Bank(
    id_account varchar(255) not null,
    cod_account VARCHAR(255) PRIMARY KEY NOT NULL,
    balance FLOAT not null DEFAULT 0,
    fk_user VARCHAR(255) not null,
    fk_type_account VARCHAR(255) NOT NULL
);

drop table Account_Bank;

create table Account_Type_Bank(
    id_type_account VARCHAR(255) PRIMARY KEY NOT NULL,
    type_account VARCHAR(255) not NULL
);

drop table Account_Type_Bank;

create table Benefits_Type_Bank(
    id_benefits VARCHAR(255) PRIMARY KEY NOT NULL,
    benefit VARCHAR(255) not null
);

create table Payments_Bank(
    id_payment VARCHAR(255) PRIMARY KEY NOT NULL,
    cod_bars VARCHAR(255) not null,
    description VARCHAR(255) not null,
    value_payment FLOAT not null

);

create table Billets_Bank(
    id_billet varchar(255) not null,
    cod_bars_billet VARCHAR(255) primary key not null,
    description_billets VARCHAR(255) not null,
    value_billet float not null
);

drop table Billets_Bank;