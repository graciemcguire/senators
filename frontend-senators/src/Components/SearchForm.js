import React from 'react';

function SearchForm({ value, changeHandler }) {
  return (
    <form>
      <input
        className="form"
        type="text"
        value={value}
        onChange={e => changeHandler(e.target.value)}
        placeholder={'Search all senators...'}
      />
    </form>
  );
}

export default SearchForm;

// export default class SearchForm extends Component {
//   render() {
//     return (
//       <form>
//         <input
//           className="form"
//           type="text"
//           value={this.props.value}
//           onChange={this.props.changeHandler}
//           placeholder={'Search all senators...'}
//         />
//       </form>
//     );
//   }
// }
