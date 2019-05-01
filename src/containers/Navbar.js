import React, { PureComponent } from 'react';
import  Link  from '../components/Link';

class Navbar extends PureComponent {
  
  render() {
    return (
      <div>
        <Link>
          Left
        </Link>
        <Link>
          Right
        </Link>
      </div>
    );
  }
}

export default Navbar;