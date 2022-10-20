import PropTypes from 'prop-types';
import { useState } from 'react';
import Notiflix from 'notiflix';
import {
  Searchbar,
  SearchForm,
  SearchFormBtn,
  SearchFormInput,
} from '../SearchBar/SearchBar.styled';
import { AiOutlineSearch } from 'react-icons/ai';


export const SearchBar = ({onSubmit}) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleChange = e => {
    setSearchQuery(e.target.value.toLowerCase());
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (searchQuery.trim() === '') {
      Notiflix.Report.warning('Enter word to find images');
      return;
    }
    onSubmit(searchQuery.toLocaleLowerCase().trim());
    setSearchQuery('');
  };

    return (
      <Searchbar>
        <SearchForm
          onSubmit={handleSubmit}
        > 
          <SearchFormBtn type="submit">
            <AiOutlineSearch style={{ width: 25, height: 25 }} />
          </SearchFormBtn>

          <SearchFormInput
            onChange={handleChange}
            type="text"
            autocomplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={searchQuery}
          />
        </SearchForm>
      </Searchbar>
    );
  }


  SearchBar.propTypes = {
    onSubmit: PropTypes.func.isRequired,
};
  

// export class SearchBar extends Component {
//   state = {
//     searchQuery: '',
//   };

//   handleChange = e => {
//     this.setState({ searchQuery: e.target.value.toLowerCase() });
//     // console.log(e.target.value);
//   };

//     handleSubmit = (e) => {
//         e.preventDefault();
//         if (this.state.searchQuery.trim() === '') {
//             Notiflix.Report.warning('Enter word to find images');
//             return
//         }
//         this.props.onSubmit(this.state.searchQuery.toLocaleLowerCase().trim());
//         this.setState({ searchQuery: '' });
//   };

//   render() {
//     return (
//       <Searchbar>
//         <SearchForm onSubmit={this.handleSubmit}>
//           <SearchFormBtn type="submit">
//             <AiOutlineSearch style={{ width: 25, height: 25 }} />
//           </SearchFormBtn>

//           <SearchFormInput
//             onChange={this.handleChange}
//             type="text"
//             autocomplete="off"
//             autoFocus
//             placeholder="Search images and photos"
//             value={this.state.searchQuery}
//           />
//         </SearchForm>
//       </Searchbar>
//     );
//   }
// }


