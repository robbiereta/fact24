'use server'

import connectDB from '../config/db'
import Order from '../models/Order'
import OrderLine from '../models/OrderLine'

function getNotes(folio: any) {
  async function getNote(folio: any) {
    await connectDB();
    const note = await Order.findOne({ pos_reference: folio }).select('uuid order_id');
    console.log(note);
    return note;
  }

  async function getAllNotes() {
    await connectDB();
    const notes = await OrderLine.find().populate('order_id');
    console.log(notes);
    return notes;
  }

  let note = getNote(folio);

  return (
    <div>
      {/* Your JSX content */}
    </div>
  );
}

export default getNotes