import React, { Component } from 'react';
import {Link} from 'gatsby'

class Card extends Component {
  constructor() {
    super();
    
    this.state = {
      showMenu: false,
    };
    
    this.showMenu = this.showMenu.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
  }
  
  showMenu(event) {
    event.preventDefault();
    
    this.setState({ showMenu: true }, () => {
      document.addEventListener('click', this.closeMenu);
    });
  }
  
  closeMenu(event) {
    
    if (!this.dropdownMenu.contains(event.target)) {
      
      this.setState({ showMenu: false }, () => {
        document.removeEventListener('click', this.closeMenu);
      });  
      
    }
  }

  render() {
    return (
      <div>
        <button onClick={this.showMenu}>
          Show menu
        </button>
        
        {
          this.state.showMenu
            ? (
              <div
                className="menu"
                ref={(element) => {
                  this.dropdownMenu = element;
                }}
              >
                <button> Menu item 1 </button>
                <button> Menu item 2 </button>
                <button> Menu item 3 </button>
              </div>
            )
            : (
              null
            )
        }
      </div>
    );
  }
}

const Menu = ({tags}) => {
  return(<div className="menu-bar">
  <ul>
    <li tab-index="0">
      <i class="fa fa-bars menu-icon "></i>
      
      <ul>
      <li>
      <Link to='/#blog-grid' >Blog Posts</Link>
      </li>
        {tags.map(tag => {
          return (
            <li>
              <Link to={tag}>{tag}</Link>
            </li>
          )
        })}
      </ul>
    </li>
  </ul>
</div>
)
}

export default Menu