import React, {Component} from 'react';
import { connect } from 'react-redux';

class SongList extends Component {
    render( ) {
        return (
            <div>
                Song Lists
            </div>
        )
    }
}

export default connect () (SongList);