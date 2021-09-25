import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ButtonTable extends Component {
  render() {
    const { id, deleteItem } = this.props;
    return (
      <div>
        <button className="btn" type="button">Editar</button>
        <button
          className="btn2"
          type="button"
          data-testid="delete-btn"
          onClick={ () => deleteItem(id) }
        >
          Excluir
        </button>
      </div>
    );
  }
}

ButtonTable.propTypes = {
  id: PropTypes.number,
  deleteItem: PropTypes.func,
}.isRequired;

export default ButtonTable;
