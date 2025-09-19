<template>
    <div class="container mt-4" style="max-width: 500px;">
        <h1>Add Book</h1>
        <form @submit.prevent="addBook">
            <div class="mb-3">
                <label for="isbn" class="form-label">ISBN:</label>
                <input type="text" v-model="isbn" id="isbn" required class="form-control" />
            </div>
            <div class="mb-3">
                <label for="name" class="form-label">Name:</label>
                <input type="text" v-model="name" id="name" required class="form-control" />
            </div>
            <button type="submit" class="btn btn-primary w-100">Add Book</button>
        </form>
        <BookList />
    </div>
    </template>

<script>
import { ref } from 'vue';
import db from '../firebase/init.js';
import { collection, addDoc } from 'firebase/firestore';
import BookList from '../components/BookList.vue'

export default {
  setup() {
    const isbn = ref('');
    const name = ref('');

    const addBook = async () => {
      try {
        const isbnNumber = Number(isbn.value);
        if (isNaN(isbnNumber)) {
          alert('ISBN must be a valid number');
          return;
        }

        await addDoc(collection(db, 'books'), {
          isbn: isbnNumber,
          name: name.value
        });

        isbn.value = '';
        name.value = '';
        alert('Book added successfully!');
      } catch (error) {
        console.error('Error adding book: ', error);
      }
    };

    return {
      isbn,
      name,
      addBook
    };
  },
  components: {
    BookList
  }
};
</script>