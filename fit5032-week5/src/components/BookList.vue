<template>
  <div>
    <h2 class="h5 mt-4">Filtered Books (isbn &gt; 1000, ordered by isbn, limit 5)</h2>
    <table class="table table-striped mt-3">
      <thead>
        <tr>
          <th style="width: 140px">ISBN</th>
          <th>Name</th>
          <th style="width: 120px" class="text-end">Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="book in books" :key="book.id">
          <td>{{ book.isbn }}</td>
          <td>{{ book.name }}</td>
          <td class="text-end">
            <button class="btn btn-sm btn-outline-danger" @click="removeBook(book)">Delete</button>
          </td>
        </tr>
        <tr v-if="!books.length">
          <td colspan="3" class="text-center text-muted">No books found</td>
        </tr>
      </tbody>
    </table>

    <h2 class="h5 mt-5">All Books (no filters)</h2>
    <table class="table table-striped mt-3">
      <thead>
        <tr>
          <th style="width: 140px">ISBN</th>
          <th>Name</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="book in booksAll" :key="book.id">
          <td>{{ book.isbn }}</td>
          <td>{{ book.name }}</td>
        </tr>
        <tr v-if="!booksAll.length">
          <td colspan="2" class="text-center text-muted">No books found</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue'
import db from '../firebase/init.js'
import { collection, getDocs, doc, deleteDoc, query, where, orderBy, limit } from 'firebase/firestore'

export default {
  setup() {
    const books = ref([])
    const booksAll = ref([])

    const fetchBooks = async () => {
      const q = query(collection(db, 'books'), where('isbn', '>', 1000), orderBy('isbn'), limit(5))
      const snap = await getDocs(q)
      books.value = snap.docs.map(d => ({ id: d.id, ...d.data() }))
    }

    const fetchBooksAll = async () => {
      const snap = await getDocs(collection(db, 'books'))
      booksAll.value = snap.docs.map(d => ({ id: d.id, ...d.data() }))
    }

    const removeBook = async (book) => {
      if (!confirm(`Delete "${book.name}"?`)) return
      await deleteDoc(doc(db, 'books', book.id))
      await fetchBooks()
      await fetchBooksAll()
    }

    onMounted(() => {
      fetchBooks()
      fetchBooksAll()
    })

    return { books, booksAll, removeBook }
  }
}
</script>