import { useState } from 'react';
// import { Component } from 'react';
import { toast } from 'react-toastify';
import { SearchbarHeader, Form, Button, Input } from './Searchbar.module';

const Searchbar = ({ onSubmit }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleQueryChange = ({ target: { value } }) => {
    setSearchQuery(value.toLowerCase());
  };

  const handleSubmit = e => {
    e.preventDefault();
    const trimSearchQuery = searchQuery.trim();
    if (trimSearchQuery === '') {
      toast.info('Please, enter search word!');
      return;
    }

    onSubmit(trimSearchQuery);
    setSearchQuery('');
  };

  return (
    <SearchbarHeader className="searchbar">
      <Form className="form" onSubmit={handleSubmit}>
        <Input
          className="input"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search photos"
          name="searchQuery"
          value={searchQuery}
          onChange={handleQueryChange}
        />
        <Button type="submit" className="button">
          <span className="button-label">Search</span>
        </Button>
      </Form>
    </SearchbarHeader>
  );
};

export default Searchbar;
// export default class Searchbar extends Component {
//   state = {
//     searchQuery: ``,
//   };

//   handleQueryChange = ({ currentTarget: { value } }) => {
//     this.setState({ searchQuery: value.toLowerCase() });
//   };

//   handleSubmit = e => {
//     const searchQuery = this.state.searchQuery.trim();
//     e.preventDefault();
//     if (searchQuery.trim() === '') {
//       toast.info('Please, enter search word!');
//       return;
//     }

//     this.props.onSubmit(searchQuery);
//     this.setState({ searchQuery: '' });
//   };

//   render() {
//     const { searchQuery } = this.state;

//     return (
//       <SearchbarHeader className="searchbar">
//         <Form className="form" onSubmit={this.handleSubmit}>
//           <Input
//             className="input"
//             type="text"
//             autocomplete="off"
//             autoFocus
//             placeholder="Search photos"
//             name="searchQuery"
//             value={searchQuery}
//             onChange={this.handleQueryChange}
//           />
//           <Button type="submit" className="button">
//             <span className="button-label">Search</span>
//           </Button>
//         </Form>
//       </SearchbarHeader>
//     );
//   }
// }
