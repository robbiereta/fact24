'use server'
import Productos from "./productos";
export default async function Home() {
  // Render the main container
  return (
  <Productos/>
  );
}
