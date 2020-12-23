import logo from './logo.svg';
import { connect } from 'react-redux'
import './App.css';
import{removeRow, addRow,createCard, updateCard} from './action';
import { useDispatch, useSelector } from 'react-redux';
import store from './store/store';
import { render } from '@testing-library/react';
import { Component } from 'react';

class App extends Component {
  state = {
    rows: [],
    cards:[],
    displayRowPopup: false,
    displayCardPopup:false,
    showEditBun:false
  };

  async componentDidMount() {
    console.log("componentDidMount");
    this.setState({ rows: store.getState().rowReducer, cards:store.getState().cardReducer})
    console.log(store.getState());
  };
  handleSubmit(event) {

  }
  render() {

    //const rows =useSelector(state => state.rowReducer)

    store.subscribe(() => { this.setState({ rows: store.getState().rowReducer }) });
    //const dispatch = useDispatch();
    const rows = [];
    //console.log(rows);
    for (let index = 0; index < this.state.rows.length; index++) {
      const element = this.state.rows[index];
      console.log(element);
      rows.push(<div key={index} id="details"><div>name: {element.name}  </div>
        <div> value: {element.value}</div><button onClick={() => this.props.removeRow(index)}>×</button></div>)

    }
    console.log(this.state.rows);

    const cards = [];
    //console.log(rows);
    for (let index = 0; index < this.state.cards.length; index++) {
      const element = this.state.cards[index];
      console.log(element);
      cards.push(<div key={index} id="details" onKeyPress={(event)=>{
        console.log(event.target.parentElement);
        let name = event.target.parentElement.parentElement.getElementsByTagName('span')[0].value;
        let value = event.target.parentElement.parentElement.getElementsByTagName('span')[1].value;
        let id = event.target.parentElement.parentElement.getElementsByTagName('span')[2].value;
        let result = { name: name, value: value, id:id };
        console.log(result);
      }}><div>name: <span contentEditable="true" >{element.name}</span></div>
        <div> value: <span contentEditable="true" >{element.value}</span></div> 
        <div>id:<span contentEditable="true" >{element.id}</span></div>
       </div>)

    }


    return (
      <div className="App">
        {rows}
        {this.state.displayRowPopup ? (
          <div>
            <div><label>name</label>
              <input placeholder='enter name' />
            </div>
            <div>
              <label>value</label>
              <input placeholder='value name' />
            </div>
            <button onClick={(event) => {
              let name = event.target.parentElement.getElementsByTagName('input')[0].value;
              let value = event.target.parentElement.getElementsByTagName('input')[1].value;
              let result = { name: name, value: value };
              this.setState({ displayRowPopup: !this.state.displayRowPopup })
              console.log(result);
              this.props.addRow(result);
            }}>submit</button>
          </div>) : null}

        

        <button onClick={() => this.setState({ displayRowPopup: !this.state.displayRowPopup })}> Add Row</button>

        {cards}
        {this.state.displayCardPopup ? (
          <div>
            <div><label>name</label>
              <input placeholder='enter name' />
            </div>
            <div>
              <label>value</label>
              <input placeholder='value name' />
            </div>
            <div>
              <label>id</label>
              <input placeholder='id name' />
            </div>
            <button onClick={(event) => {
              let name = event.target.parentElement.getElementsByTagName('input')[0].value;
              let value = event.target.parentElement.getElementsByTagName('input')[1].value;
              let id = event.target.parentElement.getElementsByTagName('input')[2].value;
              let result = { name: name, value: value, id:id };
              this.setState({ displayCardPopup: !this.state.displayCardPopup })
              console.log(result);
              this.props.createCard(result);
            }}>submit</button>
          </div>) : null}
        <button onClick={() => this.setState({ displayCardPopup: !this.state.displayCardPopup })}> create card</button>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  rowReducer: state.rowReducer,
  cardReducer:state.cardReducer
});
const mapDispatchToProps = dispatch => {
  return {
    addRow: data => dispatch(addRow(data)),
    removeRow: value => dispatch(removeRow(value)),
    createCard: data => dispatch(createCard(data)),
    updateCard: value => dispatch(removeRow(value))
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
