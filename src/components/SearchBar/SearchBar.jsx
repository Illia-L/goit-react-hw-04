import toast from 'react-hot-toast';
import css from './SearchBar.module.css';

function SearchBar({ onSubmit }) {
  function handleSubmit(e) {
    e.preventDefault();

    const search = e.target.elements.search.value;

    if (search) return onSubmit(search);

    toast.error('Text required to search for images.');
  }

  return (
    <header className={css.header}>
      <form
        className={css.form}
        onSubmit={handleSubmit}
      >
        <input
          className={css.input}
          type='text'
          autoComplete='off'
          autoFocus
          placeholder='Search images and photos'
          name='search'
        />
        <button
          className={css.button}
          type='submit'
        >
          Search
        </button>
      </form>
    </header>
  );
}

export default SearchBar;
