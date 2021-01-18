import React from 'react';
import { connect } from 'react-redux';

const SongDetail = ({ song }) => {
    if (!song) {
        return <div>Select a song</div>;
    }

    return  (
        <div>
            <h3>Details for:</h3>
            <p>
                Tilte: {song.title}
                <br />
                Duration: {song.duration}
            </p>
        </div>
    );
};


const mapStateToProps = (state) => {
    return { song: state.selectedSong }
};

export default connect(mapStateToProps)(SongDetail);

// Coding Exercise 12: Connecting Components to Redux

// const increment = () => ({ type: 'increment' });
// const decrement = () => ({ type: 'decrement' });

// const Counter = () => {
//     return (
//         <div>
//             <button className="increment">Increment</button>
//             <button className="decrement">Decrement</button>
//             Current Count: <span>0</span>
//         </div>
//     );
// };

// const WrappedCounter = ReactRedux.connect()(Counter);

// // Only change code *before* me!
// // -----------

// const store = Redux.createStore(Redux.combineReducers({
//     count: (count = 0, action) => {
//         if (action.type === 'increment') {
//             return count + 1;
//         } else if (action.type === 'decrement') {
//             return count - 1;
//         } else {
//             return count;
//         }
//     }
// }));



// Solution:

// const increment = () => ({ type: 'increment' });
// const decrement = () => ({ type: 'decrement' });

// const Counter = (props) => {
//     return (
//         <div>
//             <button onClick={props.increment} className="increment">Increment</button>
//             <button onClick={props.decrement} className="decrement">Decrement</button>
//             Current Count: <span>{props.count}</span>
//         </div>
//     );
// };

// *
// const mapStateToProps = (state) => {
//   return { count: state.count };  
// }

// const WrappedCounter = ReactRedux.connect(mapToStateProps,{
//  increment: increment,
//  decrement: decrement
// })(Counter);

// // Only change code *before* me!
// // -----------

// const store = Redux.createStore(Redux.combineReducers({
//     count: (count = 0, action) => {
//         if (action.type === 'increment') {
//             return count + 1;
//         } else if (action.type === 'decrement') {
//             return count - 1;
//         } else {
//             return count;
//         }
//     }
// }));