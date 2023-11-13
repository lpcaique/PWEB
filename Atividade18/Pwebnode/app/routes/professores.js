module.exports = function(app){
    app.get('/informacao/professores', function(req,res){
    const sql = require ('mssql/msnodesqlv8');
    const sqlConfig = {
    user: 'LOGON',
    password: 'SENHA',
    database: 'site_fatec', //Na FATEC, utilizar o database BD ou LP8
    server: 'NOME_DO_SERVIDOR',//Caso o nome tenha uma instância, colocar duas
   barras, ex: ‘DESKTOP\\SQLSERVER. Na FATEC, utilizar o ip: 192.168.1.6 no nome do servidor
    }
   
    async function getProfessores() {
        try {
            const pool = await sql.connect(sqlConfig);
           
            const results = await pool.request().query('SELECT * from PROFESSORES');
           
            res.send(results.recordsets);
           
            } catch (err) {
            console.log(err);
            }
            //res.render('informacao/professores');
            }
            getProfessores();
            });
           }