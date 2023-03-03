import mongoose from 'mongoose'

const ListSchema = new mongoose.Schema({
  title: {type: String, require: true, unique: true},
  type: {type: String},
  genre: { type: String},
  content: { tyoe: Array }

}, {
  timestamps: true
})

const ListModel = mongoose.model('List', ListSchema)
export default ListModel