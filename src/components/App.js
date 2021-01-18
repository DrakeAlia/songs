import React from 'react';
import SongList from './SongList';
import SongDetail from './SongDetail';

const App = () => {
	return (
		<div className="ui container grid">
			<div className="ui row">
				<div className="column eight wide">
					<SongList />
				</div>
				<div className="column eight wide">
					<SongDetail />
				</div>
			</div>
		</div>
	);
};

export default App;

// Coding Exercise 11: Extracting More Data From Redux

// import React from 'react';
// import { connect } from './react-redux';

// class _SongList extends React.Component {
//     renderList() {
//         return this.props.songs.map(song => {
//             return (
//                 <div className="item" key={song.title}>
//                     <div className="right floated content">
//                         <div className="ui button primary">Select</div>
//                     </div>
//                     <div className="content">{song.title}</div>
//                 </div>
//             );
//         });
//     }

//     render() {
//         return <div className="ui divided list">{this.renderList()}</div>;
//     }
// }

// const mapStateToProps = state => {
//     return { songs: state.songs };
// };

// export const SongList = connect(mapStateToProps)(_SongList);

// Solution:
// The only changed code is in the mapStateToProps function
// and in the renderList method.

// The mapStateToProps function was updated to communicate the favoriteTitle piece of state into the component

// Because the mapStateToProps function is now returning an object with a favoriteTitle property, 
// the React component now has access to a prop of this.props.favoriteTitle
// The mapping function inside of renderList compares the title of the current song it is iterating over to this.props.favoriteTitle

// import React from 'react';
// import { connect } from './react-redux';

// class _SongList extends React.Component {
//     renderList() {
//         return this.props.songs.map(song => {
//             return (
//                 <div className="item" key={song.title}>
//                     <div className="right floated content">
//                         <div className="ui button primary">Select</div>
//                     </div>
//                      <div className="content">
//                          {song.title}
//                            <div>
//                                <b>{song.title === this.props.favoriteTitle && 'Favorite!'}</b>
//                            </div>
//                         </div>
//                 </div>
//             );
//         });
//     }

//     render() {
//         return <div className="ui divided list">{this.renderList()}</div>;
//     }
// }

// const mapStateToProps = state => {
//     return { songs: state.songs, favoriteTitle: state.favoriteTitle };
// };

// export const SongList = connect(mapStateToProps)(_SongList);

