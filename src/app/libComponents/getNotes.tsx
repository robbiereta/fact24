'use server'

import  postgres  from 'postgres'
const sql = postgres( 'postgres://'+process.env.dba_user+process.env.dba_password+process.env.dba_host+process.env.dba_port+process.env.dba_name) // will use psql environment variables
 async function getNotes() {
    

     

      
        let notes = await sql`SELECT *
        FROM public.pos_order_line;
        `
        // notes = Result [{ name: "Walter", age: 80 }, { name: 'Murray', age: 68 }, ...]
        console.log(notes);
        
        return notes

  
  }
  
  export default getNotes