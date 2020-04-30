import React, { Component } from "react";
import ListItem from "./objects/ListItem";

export default class SongList extends Component {
  render() {
    // Render table if songList exists
    if (this.props.songList.length > 0) {
      return (
        <div className='table-responsive'>
          <table className='table table-hover table-striped'>
            <tbody>
              <tr>
                <th>Cover</th>
                <th>Song Name</th>
                <th>Artist</th>
                <th>Album</th>
                <th>Add to Queue</th>
              </tr>
              {this.props.songList.map((songInfo, i) => {
                return <ListItem key={i} songInfo={songInfo} isAdded={false} />;
              })}
            </tbody>
          </table>
        </div>
      );
    } else {
      return (
        <div className='text-center'>
          <p className='small'>No songs to display.</p>
        </div>
      );
    }
  }
}
