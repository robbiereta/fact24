'use server'

import  postgres  from 'postgres'
const sql = postgres( 'postgres://'+process.env.dba_user+process.env.dba_password+process.env.dba_host+process.env.dba_port+process.env.dba_name) // will use psql environment variables
function getNote(folio:any) {
    

      async function getNote( folio:any) {
        let note = await sql`SELECT *
        FROM public.pos_order WHERE pos_reference = ${folio};
        `
        // notes = Result [{ name: "Walter", age: 80 }, { name: 'Murray', age: 68 }, ...]
        console.log(note);
        
        return note
        
      }
let note = getNote(folio)
    return (
        <div>
            
    </div>
    );
  
  }
  
  export default getNote