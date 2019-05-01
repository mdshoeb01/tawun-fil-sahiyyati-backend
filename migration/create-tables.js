const pool = require('../config/pool');

async function createTables() {
  try {
    await pool.execute('create table clinic (id int(255) primary key auto_increment, name varchar(20) not null, address varchar(255) not null, createdAt timestamp not null default current_timestamp, updatedAt  timestamp not null default current_timestamp on update current_timestamp, deleted boolean default false)');

    await pool.execute('create table dailyUpdate (id int(255) primary key auto_increment, date date not null, clinicId int(255) not null, totalPatients int(255) not null, amountCollected int(255) not null, createdAt timestamp not null default current_timestamp, updatedAt timestamp not null default current_timestamp on update current_timestamp, deleted boolean default false, foreign key (clinicId) references clinic (id))')

    await pool.execute('create table amount (id int(255) primary key auto_increment, date date not null, description varchar(255) not null, amount int(255) not null, type enum("credit", "debit") not null, available int(255) not null, createdAt timestamp not null default current_timestamp, updatedAt  timestamp not null default current_timestamp on update current_timestamp, deleted boolean default false)');
    
  } catch (err) {
    throw err;
  } finally {
    pool.end();
  }
}
createTables();
